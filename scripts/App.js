class App {
  constructor () {
    this.recipeFactory = new RecipeFactory()

    this.$recipesCards = []
    this.mainInputValue = ''
    this.recipesList = []
    this.filteredRecipesList = []
    this.optionsList = []
    this.updatedOptionsList = []
    this.filteredOptionsList = []
    this.selectedOptionsList = []
  }

  async displayRecipes () {
    this.recipesList = recipes.map(
      (recipe) =>
        this.recipeFactory.createRecipe(recipe)
    )

    // Create a document fragment to append the recipes cards to the DOM and avoid reflow
    const fragment = document.createDocumentFragment()

    this.recipesList.forEach((recipe) => {
      const recipeModel = new RecipeTemplate(recipe)
      const recipesCardDOM = recipeModel.createRecipeCardDOM()
      recipeModel.assignRecipeValues(recipesCardDOM)
      recipeModel.assignRecipesClasses(recipesCardDOM)
      fragment.appendChild(recipesCardDOM.$card)
    })
    this.$recipesContainer.appendChild(fragment)

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
    // Get the recipesList without duplicates,
    // maps over it to get the optionProperty from each recipe,
    // flat the resulting array, remove any occurrence of a space followed by one or more digits in parentheses from each option,
    // convert options to lowercase, and remove the duplicates
    const options = [...new Set(this.recipesList
      .map(recipe => recipe[optionProperty])
      .flat()
      .map(option => option.replace(/ \(\d+\)/, '').toLowerCase())
    )]

    options.forEach(option => {
      dropdown.appendOption(option, $dropdown)
    })

    this.optionsList.push(options)
    this.optionsList = this.optionsList.flat()
  }

  // Generic method to call the methods to update the view
  updateViewAfterFiltering (optionProperty, $dropdown) {
    this.toggleElementVisibility(this.$recipesCards, this.filteredRecipesList, '_name', false)

    this.$recipesNumber.textContent = this.filteredRecipesList.length

    const $optionsButtons = this.getDropdownElements($dropdown).$options

    const optionsList = this.updatedOptionsList

    this.toggleElementVisibility($optionsButtons, optionsList, optionProperty, true)
  }

  toggleElementVisibility ($elementList, filteredList, optionProperty = null, useTextContent = false) {
  // Create a set of the filtered list and test if is an object or a string
    const filteredSet = new Set(filteredList.map(filter => {
      const value = typeof filter === 'object' ? filter[optionProperty].toLowerCase() : filter.toLowerCase()
      return value
    }))

    // Test if the element has a text content or a data-option attribute
    $elementList.forEach(($element) => {
      const elementValue = useTextContent ? $element.textContent.toLowerCase() : $element.dataset.option.toLowerCase()

      // Toggle 'hidden' class if the element is not in the filteredSet(filteredList)
      $element.classList.toggle('hidden', !filteredSet.has(elementValue))
    })
  }

  getDropdownElements ($dropdown) {
    const $searchInput = $dropdown.querySelector('.dropdown-search-input')
    const $crossButton = $dropdown.querySelector('.dropdown-cross-button')
    const $crossIcon = $dropdown.querySelector('.dropdown-cross-icon')
    const $options = $dropdown.querySelectorAll('.option-button')

    return { $searchInput, $crossButton, $crossIcon, $options }
  }

  // Generic method to update the options based on the filtered recipes
  updateOptionsList () {
    const selectedOptionsSet = new Set(this.selectedOptionsList.map(option => option.toLowerCase()))

    this.updatedOptionsList = this.filteredRecipesList
      .flatMap(recipe => [recipe.ingredientsList, recipe.appliance, recipe.utensils])
      .flat()
      .filter(option => !selectedOptionsSet.has(option.toLowerCase()))
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

  handleMainSearchInput (optionProperty, $dropdown) {
    this.$mainSearchInput?.addEventListener('input', () => {
      // Get the value of the input
      this.mainInputValue = this.$mainSearchInput.value

      // Add event listener to the cross button to reset the search
      if (this.mainInputValue) {
        this.handleResetInputListener(this.$mainCrossButton, this.$mainCrossIcon, this.$recipesCards, this.$mainSearchInput, optionProperty, $dropdown)
        this.$mainCrossIcon.classList.remove('hidden')

        // Call the method to filter the recipes based on the user's search and the selected options
        this.filterRecipesBySearch()

        // Update the options based on the filtered recipes
        this.updateOptionsList()

        // Update the view of options and recipes
        this.updateViewAfterFiltering(optionProperty, $dropdown)

        // Display the no recipes message if the user's search is less than 3 characters
        if (this.mainInputValue.length >= 3) {
          this.displayNoRecipesMessage()
        }
      } else {
        this.$mainCrossIcon.classList.add('hidden')
      }
    })
  }

  filterRecipesBySearch () {
    const regex = new RegExp(this.mainInputValue, 'i')

    this.filteredRecipesList = this.recipesList.filter((recipe) => {
      const matchesSearch = this.mainInputValue.length < 3 || regex.test(recipe._name) || regex.test(recipe._description) || recipe._ingredients.some(ingredient => regex.test(ingredient.ingredient))

      const matchesFilters = this.selectedOptionsList.every((selectedOption) =>
        recipe.ingredientsList.includes(selectedOption) ||
          recipe.appliance.includes(selectedOption) ||
          recipe.utensils.includes(selectedOption)
      )

      return matchesSearch && matchesFilters
    })
  }

  displayNoRecipesMessage () {
    const $noRecipesElement = document.getElementById('no-recipes-message')
    const $noRecipesMessage = $noRecipesElement.querySelector('p')

    if (this.filteredRecipesList.length !== 0) {
      $noRecipesElement.classList.add('hidden')
      return
    }

    $noRecipesElement.classList.remove('hidden')
    const firstLetter = this.mainInputValue[0].toLowerCase()
    const regex = new RegExp(`^${firstLetter}`, 'i')

    const suggestions = this.recipesList
      .filter(recipe => regex.test(recipe.name))
      .slice(0, 2)
      .map(recipe => recipe.name.toLowerCase())
      .join('", "')
    if (suggestions) {
      $noRecipesMessage.textContent = `Aucune recette ne contient "${this.mainInputValue}".\nVous pouvez chercher "${suggestions}".`
    } else {
      $noRecipesMessage.textContent = `Aucune recette ne contient "${this.mainInputValue}". Essayez une autre recherche.`
    }
    $noRecipesMessage.classList.add('whitespace-pre-line')
  }

  // Handle the dropdowns' search input
  handleSearchInput ($searchInput, $dropdown, $crossButton, $crossIcon, $optionsButtons, optionProperty) {
    const $dropdowns = document.querySelectorAll('.dropdown')

    $searchInput.addEventListener('input', () => {
      const input = $searchInput.value.toLowerCase()

      this.filteredOptionsList = this.filterOptionsBySearch(input)

      // Add event listener to the cross button to reset the search
      if (input) {
        $crossIcon.classList.remove('hidden')
        this.handleResetInputListener($crossButton, $crossIcon, $optionsButtons, $searchInput)
      }

      // Filter the options based on the user's search and hide the others
      this.toggleElementVisibility($optionsButtons, this.filteredOptionsList, optionProperty, true)

      // Get the options buttons for the current dropdown and display the no option message if all the options are hidden
      $dropdowns.forEach($dropdown => {
        const $currentOptionsButtons = $dropdown.querySelectorAll('.option-button')
        const $noOptionMessage = $dropdown.querySelector('.no-option-message')

        if (Array.from($currentOptionsButtons).every(button => button.classList.contains('hidden'))) {
          console.log($currentOptionsButtons)
          $noOptionMessage.classList.remove('hidden')
        } else {
          $noOptionMessage.classList.add('hidden')
        }
      })
    })
  }

  // Filter the options based on the user's search in the dropdowns
  filterOptionsBySearch (input) {
    // Update updatedOptionsList based on the selected options and the filtered recipes
    this.updateOptionsList()

    // Use a ternary operator to choose the options list
    const optionsList = this.updatedOptionsList.length > 0 ? this.updatedOptionsList : this.optionsList

    // Filter the options that match the user's search and return them
    const currentSearchOptionsList = optionsList
      .filter((option) => option.toLowerCase().includes(input))

    return currentSearchOptionsList
  }

  handleOptionButton ($dropdown, optionProperty, $input) {
    const $dropdowns = document.querySelectorAll('.dropdown')
    const $optionsButtons = $dropdown.querySelectorAll('.option-button')

    const handleOptionClick = ($optionButton, index) => {
      $input.value = ''
      this.selectedOptionsList.push($optionButton.textContent)
      this.filterRecipesByOption()
      this.updateOptionsList()

      $dropdowns.forEach($dropdown => {
        this.updateViewAfterFiltering(optionProperty, $dropdown)
      })
      // Find the last visible option button and add the border radius to it
      this.styleLastOptionButton($optionsButtons)
      // Append the option button selected inside the dropdown
      this.appendOptionButtonSelected($dropdown, $optionButton.textContent)
      this.styleOptionButtonSelected($optionsButtons, index)
      // Append the option selected outside the dropdown and style it
      this.appendOptionSelected($dropdown, $optionButton.textContent)
      // Call the method to handle the close button of the options selected inside and outside the dropdown
      this.handleCloseOptionCall($dropdown, optionProperty)
    }

    $optionsButtons.forEach(($optionButton, index) => {
      $optionButton.classList.remove('rounded-hover')
      $optionButton?.addEventListener('click', () => handleOptionClick($optionButton, index))
    })
  }
  /*
      const t0 = performance.now()

 const t1 = performance.now()
      console.log(
        "L'appel de doSomething a demandé " + (t1 - t0) + ' millisecondes.'
      )
  */

  filterRecipesByOption () {
    const regex = new RegExp(this.mainInputValue, 'i')
    const selectedOptionsLower = this.selectedOptionsList.map(option => option.toLowerCase().trim())

    this.filteredRecipesList = this.recipesList.filter((recipe) => {
      const matchesSearch = this.mainInputValue.length < 3 || regex.test(recipe._name) || regex.test(recipe._description) || recipe._ingredients.some(ingredient => regex.test(ingredient.ingredient))

      const ingredientsListLower = recipe.ingredientsList.map(ingredient => ingredient.toLowerCase().trim())
      const applianceLower = recipe.appliance.toLowerCase().trim()
      const utensilsListLower = recipe.utensils.map(utensil => utensil.toLowerCase().trim())

      const matchesFilters = selectedOptionsLower.every((selectedOption) =>
        ingredientsListLower.includes(selectedOption) ||
        applianceLower.includes(selectedOption) ||
        utensilsListLower.includes(selectedOption)
      )

      return matchesSearch && matchesFilters
    })
  }

  styleLastOptionButton ($optionsButtons) {
    // Iterate over the options buttons in reverse order
    // and add the border radius to the last visible option button
    for (let i = $optionsButtons.length - 1; i >= 0; i--) {
      const $optionButton = $optionsButtons[i]
      if (!$optionButton.classList.contains('hidden')) {
        $optionButton.classList.add('rounded-b-lg')
        break
      }
    }
  }

  // Append the option button selected inside the dropdown
  appendOptionButtonSelected ($dropdown, optionText) {
    const $buttonSelectedContainer = $dropdown.querySelector('.button-selected-container')
    const $optionSelected = dropdown.appendOption(optionText, $dropdown)
    $optionSelected.classList.add('option-button-selected', 'bg-yellow', 'font-bold')
    $buttonSelectedContainer.appendChild($optionSelected)
  }

  styleOptionButtonSelected ($optionsButtons, index) {
    const $selectedButtonList = document.querySelectorAll('.option-button-selected')

    const allOptionsHidden = Array.from($optionsButtons).every($optionButton => $optionButton.classList.contains('hidden'))

    // Style the option selected inside the dropdown if it is the last one and all the options are hidden
    $selectedButtonList.forEach(($button, index) => {
      $button.classList.remove('option-button')
      if (index === $selectedButtonList.length - 1 && allOptionsHidden) {
        $button.classList.add('rounded-b-lg')
      } else {
        $button.classList.remove('rounded-b-lg')
      }
      // Give visisbility to its close button
      const $closeButtonSelected = $button.querySelector('.close-option-button')
      $closeButtonSelected.classList.remove('hidden')
    })
  }

  // Append the option selected outside the dropdown
  appendOptionSelected ($dropdown, optionText) {
    dropdown.appendOptionSelected(optionText, $dropdown)
  }

  handleCloseOptionCall ($dropdown, optionProperty) {
    const $closeButtonsSelected = document.querySelectorAll('.close-option-button')
    this.handleCloseOptionClick($closeButtonsSelected, $dropdown, optionProperty)

    const $closeOptionsSelected = document.querySelectorAll('.close-option-selected')
    this.handleCloseOptionClick($closeOptionsSelected, $dropdown, optionProperty)
  }

  // Generic method to handle the close button of the options selected inside and outside the dropdown
  handleCloseOptionClick ($closeButtons, $dropdown, optionProperty) {
    $closeButtons.forEach(($closeButton) => {
      $closeButton?.addEventListener('click', () => {
        const $selectedOptionElement = $closeButton.parentElement
        this.removeOptionSelected($selectedOptionElement, this.selectedOptionsList, $dropdown.querySelectorAll('.option-button'), optionProperty, $dropdown)

        // Reset the options list if there is no option selected
        if (this.selectedOptionsList.length === 0) {
          this.updatedOptionsList = this.optionsList
        }

        this.filterRecipesByOption()
        this.updateOptionsList()
        this.updateViewAfterFiltering(optionProperty, $dropdown)
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

    // Helper function to find and manipulate DOM elements
    const findAndRemoveOption = (selector, action) => {
      const options = document.querySelectorAll(selector)
      const option = Array.from(options).find(
        option => option.textContent === optionTextContent
      )

      if (option) {
        if (action === 'remove') {
          option.remove()
        } else if (action === 'removeClass') {
          option.classList.remove('hidden')
        }
      }
    }

    // Remove the option selected outside the dropdown
    findAndRemoveOption('.option-selected', 'remove')

    // Remove the visibility of the option button
    findAndRemoveOption('.option-button', 'removeClass')

    // Remove the option selected inside the dropdown
    findAndRemoveOption('.option-button-selected', 'remove')
  }

  async init () {
    this.$recipesContainer = document.querySelector('.recipes-container')
    this.$mainSearchInput = document.querySelector('#main-search-input')
    this.$mainCrossButton = document.querySelector('#main-cross-button')
    this.$mainCrossIcon = document.querySelector('#main-cross-icon')

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
