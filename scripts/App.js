class App {
  constructor () {
    this.recipeFactory = new RecipeFactory()
    this.$recipesContainer = document.querySelector('.recipes-container')
    this.$recipesCards = []
    this.$optionsButtons = []
    this.recipesList = []
    this.filteredRecipesList = []
    this.optionsList = []
    this.filteredOptionsList = []
    this.selectedOptionsList = []
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
      if (filteredList.some(filter => {
        // If the filter is an object, use the optionProperty to get the value to compare
        const filterValue = typeof filter === 'object' ? filter[optionProperty].toLowerCase() : filter.toLowerCase()
        // If the element is a button, use the text content to get the value to compare
        const elementValue = useTextContent ? element.textContent.toLowerCase() : element.dataset.option.toLowerCase()
        return filterValue === elementValue
      })) {
        element.classList.remove('hidden')
        element.classList.add('flex')
      } else {
        element.classList.remove('flex')
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
      const input = $mainSearchInput.value
      if (input) {
        this.addSearchResetListener($mainCrossButton, this.mainCrossIcon, this.$recipesCards, () => {}, $mainSearchInput)
        this.mainCrossIcon.classList.remove('hidden')
      } else {
        this.mainCrossIcon.classList.add('hidden')
      }

      // Filter the recipes based on the user's search
      this.filteredRecipesList = this.recipesList.filter((recipe) => recipe._name.toLowerCase().substring(0, input.length) === input.toLowerCase())

      // Filter the recipes cards based on the user's search and hide the others
      this.toggleElementVisibility(this.$recipesCards, this.filteredRecipesList, '_name', false)

      // Hide the options that do not match the user's search
      this.hideOptionsAfterSearch('ingredientsList', this.$ingredientsDropdown)
      this.hideOptionsAfterSearch('appliance', this.$appliancesDropdown)
      this.hideOptionsAfterSearch('utensils', this.$utensilsDropdown)
    })
  }

  hideOptionsAfterSearch (option, dropdown) {
    let filteredCardOptions = this.filteredRecipesList
      .map(recipe => recipe[option])
      .flat()

    filteredCardOptions = [...new Set(filteredCardOptions)]

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

  filterOptions (searchInput, dropdown, crossButton, crossIcon, optionsButtons) {
    // Add event listener to the search input to filter the options
    searchInput.addEventListener('input', () => {
      const input = searchInput.value.toLowerCase()
      this.filteredOptionsList = this.optionsList
        .flat()
        .filter((option) =>
          option.toLowerCase().substring(0, input.length) === input.toLowerCase()
        )
      if (input) {
        this.addSearchResetListener(crossButton, crossIcon, optionsButtons, () => {}, searchInput)
        crossIcon.classList.remove('hidden')
      } else {
        crossIcon.classList.add('hidden')
      }
      console.log(this.filteredRecipesList)

      // Filter the options based on the user's search and hide the others
      this.toggleElementVisibility(optionsButtons, this.filteredOptionsList, null, true)
    })
  }

  selectOption ($dropdown, optionProperty) {
    const $optionsButtons = $dropdown.querySelectorAll('.option-button')
    $optionsButtons.forEach(($optionButton) => {
      $optionButton?.addEventListener('click', () => {
        // Add the option to the selected options list
        this.selectedOptionsList.push($optionButton.textContent)
        // Disabled the option button when it is selected
        $optionButton.disabled = true
        $optionButton.classList.add('disabled')
        // Append the option selected in the dropdown with the text content of the option button
        dropdown.appendOptionSelected($optionButton.textContent, $dropdown)

        // Filter the recipes based on the option selected
        this.filterRecipesByOption(optionProperty)
        // Call the function to add the event listener to the close button of the option selected
        this.removeOptionSelected(this.selectedOptionsList, $optionsButtons, optionProperty)

        // Hide the options that do not match the user's search
        this.hideOptionsAfterSearch('ingredientsList', this.$ingredientsDropdown)
        this.hideOptionsAfterSearch('appliance', this.$appliancesDropdown)
        this.hideOptionsAfterSearch('utensils', this.$utensilsDropdown)
      })
    })
  }

  filterRecipesByOption (optionProperty) {
    //
    const recipesListToFilter = this.filteredRecipesList.length > 0 ? this.filteredRecipesList : this.recipesList

    const filteredRecipes = recipesListToFilter.filter((recipe) => {
      const options = recipe[optionProperty]
      return options && Array.isArray(options) && this.selectedOptionsList.every(selectedOption =>
        options.includes(selectedOption)
      )
    })

    //
    this.filteredRecipesList = filteredRecipes

    //
    this.toggleElementVisibility(this.$recipesCards, filteredRecipes, '_name', false)
  }

  removeOptionSelected (selectedOptionsList, $optionsButtons, optionProperty) {
    const $closeButtons = document.querySelectorAll('.close-option-button')
    $closeButtons.forEach(($closeButton) => {
      $closeButton?.addEventListener('click', () => {
        const $optionSelected = $closeButton.parentElement
        $optionSelected?.classList.add('hidden')

        // Remove the option from the selected options list
        const optionIndex = selectedOptionsList.indexOf($optionSelected.textContent)
        if (optionIndex > -1) {
          selectedOptionsList.splice(optionIndex, 1)
        }

        // Enable all option buttons
        $optionsButtons.forEach(($optionButton) => {
          $optionButton.disabled = false
          $optionButton.classList.remove('disabled')
        })

        // Reinitialize the filtered recipes list to the original recipes list
        this.filteredRecipesList = this.recipesList

        /* Filter the recipes based on the user's search
        to display the recipes corresponding to the user's search
        after the option is removed */
        const $mainSearchInput = document.querySelector('#main-search-input')
        const input = $mainSearchInput.value
        this.filteredRecipesList = this.filteredRecipesList.filter((recipe) => recipe._name.toLowerCase().substring(0, input.length) === input.toLowerCase())

        // Filter the recipes based on the remaining selected options
        this.filterRecipesByOption(optionProperty)

        // Hide the options that do not match the user's search
        this.hideOptionsAfterSearch('ingredientsList', this.$ingredientsDropdown)
        this.hideOptionsAfterSearch('appliance', this.$appliancesDropdown)
        this.hideOptionsAfterSearch('utensils', this.$utensilsDropdown)
      })
    })
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

    this.selectOption(this.$ingredientsDropdown, 'ingredientsList')
    this.selectOption(this.$appliancesDropdown, 'appliance')
    this.selectOption(this.$utensilsDropdown, 'utensils')
  }
}

const app = new App()
app.init()
