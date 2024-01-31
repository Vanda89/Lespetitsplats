class App {
  constructor () {
    this.recipeFactory = new RecipeFactory()
    this.$recipesContainer = document.querySelector('.recipes-container')

    this.$recipesCards = []
    this.mainInput = ''
    this.recipesList = []
    this.filteredRecipesList = []

    this.optionsList = []
    this.updatedOptionsList = this.optionsList.flat()
    this.filteredOptionsList = this.optionsList
    this.selectedOptionsList = []

    this.$mainCrossIcon = document.querySelector('#main-cross-icon')
  }

  async displayRecipes () {
    this.recipesList = recipes.map(
      (recipe) =>
        this.recipeFactory.createRecipe(recipe)
    )

    this.recipesList.forEach((recipe) => {
      const recipeModel = new RecipeTemplate(recipe)
      const recipesCardDOM = recipeModel.createRecipeCardDOM()
      recipeModel.assignRecipeValues(recipesCardDOM)
      recipeModel.assignRecipesClasses(recipesCardDOM)
      this.$recipesContainer.appendChild(recipesCardDOM.$card)
    })

    this.$recipesCards = document.querySelectorAll('.recipes-card')
  }

  async displayDropdown () {
    // Append the dropdowns and add classes to them
    const $ingredientsDropdown = dropdown.appendDropdown()
    $ingredientsDropdown.classList.add('ingredients-dropdown')
    const $appliancesDropdown = dropdown.appendDropdown()
    $appliancesDropdown.classList.add('appliances-dropdown')
    const $utensilsDropdown = dropdown.appendDropdown()
    $utensilsDropdown.classList.add('utensils-dropdown')

    // Add event listeners to open and close the dropdowns, and set the text content of the dropdown elements
    await dropdown.initializationDropdown($ingredientsDropdown, $appliancesDropdown, $utensilsDropdown)

    // Display the options corresponding to each dropdown
    await this.displayOptionsDropdown($ingredientsDropdown, 'ingredientsList')
    await this.displayOptionsDropdown($appliancesDropdown, 'appliance')
    await this.displayOptionsDropdown($utensilsDropdown, 'utensils')
  }

  async displayOptionsDropdown ($dropdown, optionProperty) {
    // Get the recipesList, maps over it to get the optionProperty from each recipe,
    // flat the resulting array,
    // and then remove any occurrence of a space followed by one or more digits in parentheses from each option
    let options = this.recipesList
      .map(recipe => recipe[optionProperty])
      .flat()
      .map(option => option.replace(/ \(\d+\)/, ''))

    // Convert options to lowercase
    options = options.map(option => option.toLowerCase())

    // Remove the duplicates
    options = [...new Set(options)]

    options.forEach(option => {
      dropdown.appendOption(option, $dropdown)
    })

    this.optionsList.push(options)
  }

  /**
   * Filter the recipes based on the user's search and the selected options
   *
   * @param {RegExp} regex
   */
  filterRecipesBySearch (regex) {
    this.filteredRecipesList = this.recipesList.filter((recipe) => {
      const matchesSearch = this.mainInput.length < 3 || regex.test(recipe._name) || regex.test(recipe._description) || recipe._ingredients.some(ingredient => regex.test(ingredient.ingredient))

      const matchesFilters = this.selectedOptionsList.every((selectedOption) =>
        recipe.ingredientsList.includes(selectedOption) ||
          recipe.appliance.includes(selectedOption) ||
          recipe.utensils.includes(selectedOption)
      )

      return matchesSearch && matchesFilters
    })
  }

  handleMainSearchInput (optionProperty, $dropdown) {
    this.$mainSearchInput = document.querySelector('#main-search-input')
    this.$mainCrossButton = document.querySelector('#main-cross-button')

    this.$mainSearchInput?.addEventListener('input', () => {
      // Get the value of the input and create a regex insensitive to case
      this.mainInput = this.$mainSearchInput.value
      const regex = new RegExp(this.mainInput, 'i')

      // Add event listener to the cross button to reset the search
      if (this.mainInput) {
        this.handleResetInputListener(this.$mainCrossButton, this.$mainCrossIcon, this.$recipesCards, this.$mainSearchInput, optionProperty, $dropdown)
        this.$mainCrossIcon.classList.remove('hidden')
      } else {
        this.$mainCrossIcon.classList.add('hidden')
      }

      // Call the method to filter the recipes based on the user's search and the selected options
      this.filterRecipesBySearch(regex)

      // Update the options based on the filtered recipes
      this.updatedOptionsList = this.filteredRecipesList.flatMap(recipe => [recipe.ingredientsList, recipe.appliance, recipe.utensils]).flat()

      // Update the view of options and recipes
      this.updateViewAfterFiltering(optionProperty, $dropdown)
    })
  }

  // Generic method to reset the inputs
  handleResetInputListener ($button, $icon, $elementList, $input = null, optionProperty, $dropdown) {
    $button.addEventListener('click', () => {
      if ($input) {
        $input.value = ''
        // Dispatch an event to trigger the input event listener
        $input.dispatchEvent(new Event('input', {
          bubbles: true
        }))
      }

      $icon.classList.add('hidden')
    })
  }

  // Generic method to handle the dropdown's search input
  handleSearchInput ($searchInput, $dropdown, $crossButton, $crossIcon, $optionsButtons, optionProperty) {
    $searchInput.addEventListener('input', () => {
      const input = $searchInput.value.toLowerCase()

      const currentoptionlist = this.filterOptionsBySearch(input)
      this.filteredOptionsList = currentoptionlist

      // Add event listener to the cross button to reset the search
      if (input) {
        $crossIcon.classList.remove('hidden')
        this.handleResetInputListener($crossButton, $crossIcon, $optionsButtons, $searchInput)
      }

      // Filter the options based on the user's search and hide the others
      // this.updateViewAfterFiltering(optionProperty, $dropdown)
      this.toggleElementVisibility($optionsButtons, this.filteredOptionsList, optionProperty, true)
    })
  }

  // Generic method to filter the options based on the user's search in the dropdown
  filterOptionsBySearch (input) {
    let optionsList

    // Choice the good option list in terms of there have been a search or a selection
    if (this.updatedOptionsList.length > 0) {
      optionsList = this.updatedOptionsList
    } else {
      optionsList = this.optionsList
    }

    // Get the options that match the user's search and return them
    const currentSearchOptionsList = optionsList.flat()
      .filter((option) =>
        option.toLowerCase().includes(input)
      )
    return currentSearchOptionsList
  }

  getDropdownElements ($dropdown) {
    const $searchInput = $dropdown.querySelector('.dropdown-search-input')
    const $crossButton = $dropdown.querySelector('.dropdown-cross-button')
    const $crossIcon = $dropdown.querySelector('.dropdown-cross-icon')
    const $options = $dropdown.querySelectorAll('.option-button')

    return { $searchInput, $crossButton, $crossIcon, $options }
  }

  // Generic method to handle the visibility of the elements
  toggleElementVisibility ($elementList, filteredList, optionProperty = null, useTextContent = false) {
    $elementList.forEach(($element) => {
      // Test if the element is in the filtered list
      if (filteredList === $elementList || filteredList.some(filter => {
        // Test if the filter is an object or a string
        const filterValue = typeof filter === 'object' ? filter[optionProperty].toLowerCase() : filter.toLowerCase()
        // Test if the element has a text content or a data-option attribute
        const elementValue = useTextContent ? $element.textContent.toLowerCase() : $element.dataset.option.toLowerCase()

        return filterValue === elementValue
      })) {
        $element.classList.remove('hidden')
      } else {
        $element.classList.add('hidden')
      }
    })
  }

  // Generic method to call the methods to update the view
  updateViewAfterFiltering (optionProperty, $dropdown) {
    this.toggleElementVisibility(this.$recipesCards, this.filteredRecipesList, '_name', false)

    this.$recipesNumber.textContent = this.filteredRecipesList.length

    const $optionsButtons = this.getDropdownElements($dropdown).$options
    const optionsList = this.updatedOptionsList

    this.toggleElementVisibility($optionsButtons, optionsList, optionProperty, true)
  }

  // Generic method to filter the recipes based on the selected options
  filterRecipesByOption () {
    const regex = new RegExp(this.mainInput, 'i')

    // Filters the list of recipes to include only those whose name, description,
    // or one of the ingredients matches the regex,
    // unless the length of this.mainInput is less than 3, in which case all recipes are included.
    this.filteredRecipesList = this.recipesList.filter((recipe) => {
      const matchesSearch = this.mainInput.length < 3 || regex.test(recipe._name) || regex.test(recipe._description) || recipe._ingredients.some(ingredient => regex.test(ingredient.ingredient))

      const matchesFilters = this.selectedOptionsList.every((selectedOption) =>
        recipe.ingredientsList.includes(selectedOption) ||
        recipe.appliance.includes(selectedOption) ||
        recipe.utensils.includes(selectedOption)
      )

      return matchesSearch && matchesFilters
    })
  }

  handleOptionButton ($dropdown, optionProperty, $input) {
    const $optionsButtons = $dropdown.querySelectorAll('.option-button')

    $optionsButtons.forEach(($optionButton, index) => {
      // Remove the border radius from the last visible option button
      $optionButton.classList.remove('rounded-hover')

      $optionButton?.addEventListener('click', () => {
        $input.value = ''

        this.selectedOptionsList.push($optionButton.textContent)

        // Call the methode to filter the recipes based on the user's search and the selected options
        this.filterRecipesByOption()

        // Update the options based on the filtered recipes
        this.updatedOptionsList = this.filteredRecipesList
          .flatMap(recipe => [recipe.ingredientsList, recipe.appliance, recipe.utensils])
          .flat()
          .filter(option => !this.selectedOptionsList.includes(option))

        console.log(this.updatedOptionsList)
        console.log(this.optionsList)

        const $dropdowns = document.querySelectorAll('.dropdown')
        $dropdowns.forEach($dropdown => {
          // Update the view of options and recipes
          this.updateViewAfterFiltering(optionProperty, $dropdown)
        })

        // Find the last visible option button and add the border radius to it
        const lastVisibleButton = Array.from($optionsButtons).reverse().find($optionButton => !$optionButton.classList.contains('hidden'))
        if (lastVisibleButton) {
          lastVisibleButton.classList.add('rounded-hover')
        }

        // Append the option button selected inside the dropdown
        const $buttonSelectedContainer = $dropdown.querySelector('.button-selected-container')

        const $optionSelected = dropdown.appendOption($optionButton.textContent, $dropdown)
        $optionSelected.classList.add('option-button-selected', 'bg-yellow', 'font-bold')
        $buttonSelectedContainer.appendChild($optionSelected)

        const $optionSelectedList = document.querySelectorAll('.option-button-selected')
        // Remove the class option-button so that the selected option don't become hidden
        // and add the rounded border to the last option selected
        $optionSelectedList.forEach(($optionSelected, index) => {
          $optionSelected.classList.remove('option-button')
          const allOptionsHidden = Array.from($optionsButtons).every($optionButton => $optionButton.classList.contains('hidden'))
          if (index === $optionSelectedList.length - 1 && allOptionsHidden) {
            $optionSelected.classList.add('rounded-b-lg')
          } else {
            $optionSelected.classList.remove('rounded-b-lg')
          }
        })

        // Call the method to remove the option selected inside the dropdown
        const $closeButtonSelected = $optionSelected.querySelector('.close-option-button')
        $closeButtonSelected.classList.remove('hidden')
        const $closeButtonsSelected = document.querySelectorAll('.close-option-button')
        this.handleCloseOption($closeButtonsSelected, $optionsButtons, optionProperty, $dropdown)

        // Append the option selected outside the dropdown
        // and call the method to remove the option selected
        dropdown.appendOptionSelected($optionButton.textContent, $dropdown)
        const $closeOptionsSelected = document.querySelectorAll('.close-option-selected')
        this.handleCloseOption($closeOptionsSelected, $optionsButtons, optionProperty, $dropdown)
      })
    })
  }

  // Generic method to handle the close button of the options selected inside and outside the dropdown
  handleCloseOption ($closeButtons, $optionsButtons, optionProperty, $dropdown) {
    $closeButtons.forEach(($closeButton) => {
      $closeButton?.addEventListener('click', () => {
        // Get the text content of the option selected corresponding to the close button
        const $optionSelected = $closeButton.parentElement

        // Call the method to remove the option selected
        this.removeOptionSelected($optionSelected, this.selectedOptionsList, $optionsButtons, optionProperty, $dropdown)

        // Reset the options list if there is no option selected
        if (this.selectedOptionsList.length === 0) {
          this.updatedOptionsList = this.optionsList.flat()
        }

        // Call the method to filter the recipes based on the user's search and the selected options
        this.filterRecipesByOption()

        // Update the updated options list based on the filtered recipes
        this.updatedOptionsList = this.filteredRecipesList
          .flatMap(recipe => [recipe.ingredientsList, recipe.appliance, recipe.utensils])
          .flat()
          .filter(option => !this.selectedOptionsList.includes(option))

        console.log(this.updatedOptionsList)
        const $dropdowns = document.querySelectorAll('.dropdown')
        $dropdowns.forEach($dropdown => {
          // Update the view of options and recipes
          this.updateViewAfterFiltering(optionProperty, $dropdown)
        })
      })
    })
  }

  /*
   * Generic method to remove the option selected
   * $optionSelected: the buttons outside the dropdown
   * $optionButton: the buttons inside the dropdown
   * $optionButtonSelected: the copies of the buttons inside the dropdown
   */
  removeOptionSelected ($optionSelected, selectedOptionsList, $optionsButtons, optionProperty, $dropdown) {
    const optionTextContent = $optionSelected.textContent

    // Remove the option from the selected options list
    const optionIndex = selectedOptionsList.indexOf(optionTextContent)
    if (optionIndex > -1) {
      selectedOptionsList.splice(optionIndex, 1)
    }

    if (!this.updatedOptionsList.includes(optionTextContent)) {
      this.updatedOptionsList.push(optionTextContent)
    }

    // Remove the option selected outside the dropdown
    const $optionsSelected = document.querySelectorAll('.option-selected')
    const $option = Array.from($optionsSelected).find(
      $option => $option.textContent === optionTextContent
    )
    if ($option) {
      $option.remove()
    }

    // Remove the visibility of the option button
    const $optionButton = Array.from($optionsButtons).find(
      $button => $button.textContent === optionTextContent
    )
    if ($optionButton) {
      $optionButton.classList.remove('hidden')
    }

    // Remove the option selected inside the dropdown
    const $optionsButtonsSelected = document.querySelectorAll('.option-button-selected')
    const $optionButtonSelected = Array.from($optionsButtonsSelected).find(
      $button => $button.textContent === optionTextContent
    )
    if ($optionButtonSelected) {
      $optionButtonSelected.remove()
    }
  }

  async init () {
    await this.displayRecipes()
    await this.displayDropdown()

    // Get the number of recipes displayed and display it
    const $recipesNumber = document.querySelector('.recipes-number')
    this.$recipesNumber = $recipesNumber.querySelector('span')
    this.$recipesNumber.textContent = this.recipesList.length

    this.$ingredientsDropdown = document.querySelector('.ingredients-dropdown')
    this.$appliancesDropdown = document.querySelector('.appliances-dropdown')
    this.$utensilsDropdown = document.querySelector('.utensils-dropdown')

    this.handleMainSearchInput('ingredientsList', this.$ingredientsDropdown)
    this.handleMainSearchInput('appliance', this.$appliancesDropdown)
    this.handleMainSearchInput('utensils', this.$utensilsDropdown)

    const ingredientsElements = this.getDropdownElements(this.$ingredientsDropdown)
    const appliancesElements = this.getDropdownElements(this.$appliancesDropdown)
    const utensilsElements = this.getDropdownElements(this.$utensilsDropdown)

    this.handleSearchInput(ingredientsElements.$searchInput, this.$ingredientsDropdown, ingredientsElements.$crossButton, ingredientsElements.$crossIcon, ingredientsElements.$options, 'ingredientsList')
    this.handleSearchInput(appliancesElements.$searchInput, this.$appliancesDropdown, appliancesElements.$crossButton, appliancesElements.$crossIcon, appliancesElements.$options, 'appliance')
    this.handleSearchInput(utensilsElements.$searchInput, this.$utensilsDropdown, utensilsElements.$crossButton, utensilsElements.$crossIcon, utensilsElements.$options, 'utensils')

    this.handleOptionButton(this.$ingredientsDropdown, 'ingredientsList', ingredientsElements.$searchInput)
    this.handleOptionButton(this.$appliancesDropdown, 'appliance', appliancesElements.$searchInput)
    this.handleOptionButton(this.$utensilsDropdown, 'utensils', utensilsElements.$searchInput)
  }
}

const app = new App()
app.init()
