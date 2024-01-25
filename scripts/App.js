class App {
  constructor () {
    this.recipeFactory = new RecipeFactory()
    this.$recipesContainer = document.querySelector('.recipes-container')
    this.$recipesCards = []
    this.$optionsButtons = []
    this.mainInput = ''
    this.dropdownInput = ''
    this.recipesList = []
    this.filteredRecipesList = []
    this.optionsList = []
    this.updatedOptionsList = this.optionsList.flat()
    this.filteredOptionsList = []
    this.selectedOptionsList = []
    this.recipesNumber = 0
    this.mainCrossIcon = document.querySelector('#main-cross-icon')
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
    let options = this.recipesList
    // Get the options from the recipes list
      .map(recipe => recipe[optionProperty])
      // Add the options in an single array
      .flat()
      // Remove the numbers in parentheses
      .map(option => option.replace(/ \(\d+\)/, ''))

    // Remove the duplicates
    options = [...new Set(options)]

    // Append the options in the dropdowns
    options.forEach(option => {
      dropdown.appendOption(option, $dropdown)
    })

    // Add the options to the optionsList
    this.optionsList.push(options)
  }

  getDropdownElements (dropdown) {
    const searchInput = dropdown.querySelector('.dropdown-search-input')
    const crossButton = dropdown.querySelector('.dropdown-cross-button')
    const crossIcon = dropdown.querySelector('.dropdown-cross-icon')
    const options = dropdown.querySelectorAll('.option-button')

    return { searchInput, crossButton, crossIcon, options }
  }

  toggleElementVisibility (elementList, filteredList, optionProperty = null, useTextContent = false) {
    elementList.forEach((element) => {
      if (filteredList === elementList || filteredList.some(filter => {
        // If the filter is an object, use the optionProperty to get the value to compare
        const filterValue = typeof filter === 'object' ? filter[optionProperty].toLowerCase() : filter.toLowerCase()
        // If the element is a button, use the text content to get the value to compare
        const elementValue = useTextContent ? element.textContent.toLowerCase() : element.dataset.option.toLowerCase()
        return filterValue === elementValue
      })) {
        element.classList.remove('hidden')
      } else {
        element.classList.add('hidden')
      }
    })
  }

  // Filter the recipes based on the user's search and hide the others
  filterRecipes () {
    const $mainSearchInput = document.querySelector('#main-search-input')
    const $mainCrossButton = document.querySelector('#main-cross-button')

    // Add event listeners to the main search input and the cross button
    $mainSearchInput?.addEventListener('input', () => {
      this.mainInput = $mainSearchInput.value.toLowerCase()

      console.log(this.mainInput)
      if (this.mainInput) {
        this.addSearchResetListener($mainCrossButton, this.mainCrossIcon, this.$recipesCards, () => {}, $mainSearchInput)
        this.mainCrossIcon.classList.remove('hidden')
      } else {
        this.mainCrossIcon.classList.add('hidden')
      }

      if (this.mainInput.length >= 3) {
        // Filter the recipes based on the user's search on the name, the description and the ingredients
        this.filteredRecipesList = this.recipesList.filter((recipe) => {
          const nameMatches = recipe._name.toLowerCase().includes(this.mainInput)
          const descriptionMatches = recipe._description.toLowerCase().includes(this.mainInput)
          const ingredientsMatches = recipe._ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(this.mainInput))

          // Check if the recipe matches the current filters
          const matchesFilters = this.selectedOptionsList.every((selectedOption) =>
            recipe.ingredientsList.includes(selectedOption) ||
      recipe.appliance.includes(selectedOption) ||
      recipe.utensils.includes(selectedOption)
          )

          return (nameMatches || descriptionMatches || ingredientsMatches) && matchesFilters
        })

        // Filter the recipes cards based on the user's search and hide the others
        this.toggleElementVisibility(this.$recipesCards, this.filteredRecipesList, '_name', false)
      } else {
        this.filteredRecipesList = this.recipesList
        this.toggleElementVisibility(this.$recipesCards, this.filteredRecipesList, '_name', false)
      }
      // Hide the options that do not match the user's search
      this.hideOptionsAfterSearch('ingredientsList', this.$ingredientsDropdown)
      this.hideOptionsAfterSearch('appliance', this.$appliancesDropdown)
      this.hideOptionsAfterSearch('utensils', this.$utensilsDropdown)
    })
  }

  hideOptionsAfterSearch (option, dropdown) {
    // Get the search input inside the dropdown
    const searchInput = dropdown.querySelector('.search-input')

    // Filter the options based on the user's search and hide the others
    // If the user's search is less than 3 characters, display all the options
    // If the user's search is more than 3 characters, display only the options
    // that match the user's search and the options that are selected
    let filteredCardOptions
    if (this.mainInput.length >= 3) {
      filteredCardOptions = this.filteredRecipesList
        .map(recipe => recipe[option])
        .flat()

      filteredCardOptions = [...new Set(filteredCardOptions)]
    } else {
      filteredCardOptions = this.recipesList
        .map(recipe => recipe[option])
        .flat()

      filteredCardOptions = [...new Set(filteredCardOptions)]
    }

    // Filter the options based on the user's search in the dropdown
    if (searchInput) {
      filteredCardOptions = filteredCardOptions.filter(option =>
        option.toLowerCase().includes(searchInput.toLowerCase())
      )
    }

    const optionsButtons = this.getDropdownElements(dropdown).options
    this.toggleElementVisibility(optionsButtons, filteredCardOptions, option, true)

    return filteredCardOptions
  }

  addSearchResetListener (button, icon, elementList, callback, input = null) {
    // Add event listener to the cross button to reset the search
    button.addEventListener('click', () => {
      callback()
      if (input) {
        input.value = ''
      }
      icon.classList.add('hidden')
      elementList.forEach((element) => {
        element.classList.remove('hidden')
        element.classList.add('flex')
      })
    })
  }

  addCloseOptionListener ($closeButtons, $optionsButtons, optionProperty) {
    $closeButtons.forEach(($closeButton) => {
      $closeButton?.addEventListener('click', () => {
        this.removeOptionSelected($closeButton, this.selectedOptionsList, $optionsButtons, optionProperty)
      })
    })
  }

  filterOptions (searchInput, dropdown, crossButton, crossIcon, optionsButtons) {
    // Add event listener to the search input to filter the options
    searchInput.addEventListener('input', () => {
      const input = searchInput.value.toLowerCase()

      // Use the updated options list if an option has been selected, otherwise use the original options list
      const optionsListToUse = this.selectedOptionsList.length > 0 ? this.updatedOptionsList : this.optionsList.flat()

      // Filter the options based on the user's search
      const currentSearchOptionsList = optionsListToUse
        .filter((option) =>
          option.toLowerCase().includes(input)
        )

      console.log(currentSearchOptionsList)
      console.log(this.updatedOptionsList)

      // Add event listener to the cross button to reset the search
      if (input) {
        crossIcon.classList.remove('hidden')
        this.addSearchResetListener(crossButton, crossIcon, optionsButtons, () => {}, searchInput)
      }

      console.log(this.filteredRecipesList)

      // Filter the options based on the user's search and hide the others
      this.toggleElementVisibility(optionsButtons, currentSearchOptionsList, null, true)
    })
  }

  filterRecipesByOption (optionProperty) {
    // Filter the recipes based on the remaining selected options and the user's search
    const recipesListToFilter = this.filteredRecipesList.length > 0 ? this.filteredRecipesList : this.recipesList

    // Filter the recipes based on the remaining selected options
    this.filteredRecipesList = recipesListToFilter.filter((recipe) => {
      let options = recipe[optionProperty]
      options.flat()
      options = [...new Set(options)]

      return options && Array.isArray(options) &&
      this.selectedOptionsList.every(selectedOption =>
        options.includes(selectedOption)
      )
    })

    // Update the updatedOptionsList with the ingredients of the remaining recipes
    this.updatedOptionsList = [...new Set(this.filteredRecipesList.map(recipe => recipe[optionProperty]).flat())]
    console.log(this.updatedOptionsList)
  }

  updateViewAfterFiltering (optionProperty, $optionsButtons) {
    // Filter the recipes based on the option selected
    this.filterRecipesByOption(optionProperty)

    // Filter the recipes cards based on the user's search and hide the others
    this.toggleElementVisibility(this.$recipesCards, this.filteredRecipesList, '_name', false)

    // Get the list of options to show
    const optionsList = this.filteredRecipesList
      .map(recipe => recipe[optionProperty])
      .flat()

    // Hide the options that do not match the user's search
    this.toggleElementVisibility($optionsButtons, optionsList, optionProperty, true)
  }

  selectOption ($dropdown, optionProperty, input) {
    // Add event listener to the option buttons to select the option
    const $optionsButtons = $dropdown.querySelectorAll('.option-button')
    $optionsButtons.forEach(($optionButton) => {
      $optionButton?.addEventListener('click', () => {
        // Reset the user's search
        input.value = ''

        // Add the option to the selected options list
        this.selectedOptionsList.push($optionButton.textContent)
        console.log(this.selectedOptionsList)

        this.updatedOptionsList = this.updatedOptionsList
          .filter(option => option !== $optionButton.textContent)

        console.log(this.updatedOptionsList)
        // console.log(this.optionsList)

        // Filter the recipes based on the option selected
        this.updateViewAfterFiltering(optionProperty, $optionsButtons)

        // Hide the option button selected
        $optionButton.classList.add('hidden')

        // Append the option button selected inside the dropdown
        // and add event listener to the close button
        const $optionContainer = $dropdown.querySelector('.option-container')
        const $optionSelected = dropdown.appendOption($optionButton.textContent, $dropdown)
        $optionContainer.insertBefore($optionSelected, $optionContainer.firstChild)
        $optionSelected.classList.add('option-button-selected', 'bg-yellow', 'font-bold')
        const $closeButtonSelected = $optionSelected.querySelector('.close-option-button')
        $closeButtonSelected.classList.remove('hidden')
        // Add event listener to the close button of the option button inside the dropdown
        const $closeButtonsSelected = document.querySelectorAll('.close-option-button')
        this.addCloseOptionListener($closeButtonsSelected, $optionsButtons, optionProperty)

        // Append the option selected outside the dropdown
        // and add event listener to the close button
        dropdown.appendOptionSelected($optionButton.textContent, $dropdown)
        const $closeOptionsSelected = document.querySelectorAll('.close-option-selected')
        this.addCloseOptionListener($closeOptionsSelected, $optionsButtons, optionProperty)
      })
    })
  }

  // $optionSelected: the buttons outside the dropdown
  // $optionButton: the buttons inside the dropdown
  // $optionButtonSelected: the copies of the buttons inside the dropdown
  removeOptionSelected (button, selectedOptionsList, $optionsButtons, optionProperty) {
    const $optionSelected = button.parentElement

    // Remove the option from the selected options list
    const optionIndex = selectedOptionsList.indexOf($optionSelected.textContent)
    if (optionIndex > -1) {
      selectedOptionsList.splice(optionIndex, 1)
    }
    console.log(optionIndex)

    const $optionsSelected = document.querySelectorAll('.option-selected')
    const $option = Array.from($optionsSelected).find(
      $option => $option.textContent === button.parentElement.textContent
    )

    const $optionButton = Array.from($optionsButtons).find(
      $button => $button.textContent === $optionSelected.textContent
    )

    const $optionsButtonsSelected = document.querySelectorAll('.option-button-selected')
    const $optionButtonSelected = Array.from($optionsButtonsSelected).find(
      $button => $button.textContent === $option.textContent
    )

    $optionButton.classList.remove('hidden')
    if ($optionButtonSelected) {
      $optionButtonSelected.remove()
      $option.remove()
    }

    // Reinitialize the filtered recipes list to the original recipes list
    this.filteredRecipesList = this.recipesList

    /* Filter the recipes based on the user's search
        to display the recipes corresponding to the user's search
        after the option is removed */
    const $mainSearchInput = document.querySelector('#main-search-input')
    const input = $mainSearchInput.value
    this.mainInput = input
    this.filteredRecipesList = this.filteredRecipesList.filter((recipe) => recipe._name.toLowerCase().substring(0, input.length) === input.toLowerCase())

    // Filter the recipes based on the remaining selected options
    this.updateViewAfterFiltering(optionProperty, $optionsButtons)
  }

  async init () {
    await this.displayRecipes()
    await this.displayDropdown()
    this.filterRecipes()

    this.$ingredientsDropdown = document.querySelector('.ingredients-dropdown')
    this.$appliancesDropdown = document.querySelector('.appliances-dropdown')
    this.$utensilsDropdown = document.querySelector('.utensils-dropdown')

    const ingredientsElements = this.getDropdownElements(this.$ingredientsDropdown)
    const appliancesElements = this.getDropdownElements(this.$appliancesDropdown)
    const utensilsElements = this.getDropdownElements(this.$utensilsDropdown)

    this.filterOptions(ingredientsElements.searchInput, this.$ingredientsDropdown, ingredientsElements.crossButton, ingredientsElements.crossIcon, ingredientsElements.options)
    this.filterOptions(appliancesElements.searchInput, this.$appliancesDropdown, appliancesElements.crossButton, appliancesElements.crossIcon, appliancesElements.options)
    this.filterOptions(utensilsElements.searchInput, this.$utensilsDropdown, utensilsElements.crossButton, utensilsElements.crossIcon, utensilsElements.options)

    this.selectOption(this.$ingredientsDropdown, 'ingredientsList', ingredientsElements.searchInput)
    this.selectOption(this.$appliancesDropdown, 'appliance', appliancesElements.searchInput)
    this.selectOption(this.$utensilsDropdown, 'utensils', utensilsElements.searchInput)
  }
}

const app = new App()
app.init()
