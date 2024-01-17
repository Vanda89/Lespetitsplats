const dropdown = {

  createDropdownDOM () {
    const $dropdown = document.createElement('div')
    $dropdown.classList.add('dropdown', 'h-auto')

    const $dropdownButton = document.createElement('button')
    $dropdownButton.classList.add('dropdown-button', 'flex', 'justify-between', 'items-center', 'w-50', 'p-4', 'bg-white', 'rounded-xl', 'font-medium', 'text-grey-700', 'text-base', 'font-manrope')

    const $dropdownSpan = document.createElement('span')
    $dropdownSpan.classList.add('dropdown-title')

    const $chevronDownIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    $chevronDownIcon.setAttribute('viewBox', '0 0 20 20')
    $chevronDownIcon.classList.add('w-6', 'h-4', 'stroke-grey-700', 'fill-none', 'stroke-1.5')
    const $chevronDownPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    $chevronDownPath.classList.add('translate-x-1')
    $chevronDownPath.setAttribute('stroke-linecap', 'round')
    $chevronDownPath.setAttribute('stroke-linejoin', 'round')
    $chevronDownPath.setAttribute('d', 'm19.5 8.25-7.5 7.5-7.5-7.5')
    $chevronDownIcon.appendChild($chevronDownPath)

    const $dropdownMenu = document.createElement('div')
    $dropdownMenu.classList.add('dropdown-menu', 'hidden', 'flex', 'flex-col', 'items-start', 'w-50', 'gap-3.25', 'bg-white', 'rounded-xl')

    const $dropdownHeader = document.createElement('div')
    $dropdownHeader.classList.add('dropdown-header', 'flex', 'justify-between', 'items-center', 'w-full', 'pt-4', 'px-4', 'cursor-pointer')

    const $dropdownLabel = document.createElement('label')
    $dropdownLabel.setAttribute('for', 'search')
    $dropdownLabel.classList.add('dropdown-label', 'font-manrope', 'font-medium', 'text-grey-700', 'text-base', 'cursor-pointer')

    const $chevronUpIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    $chevronUpIcon.setAttribute('viewBox', '0 0 20 20')
    $chevronUpIcon.classList.add('w-6', 'h-4', 'stroke-[#1B1B1B]', 'fill-none', 'stroke-1.5', 'cursor-pointer')
    const $chevronUpPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    $chevronUpPath.classList.add('translate-x-1')
    $chevronUpPath.setAttribute('stroke-linecap', 'round')
    $chevronUpPath.setAttribute('stroke-linejoin', 'round')
    $chevronUpPath.setAttribute('d', 'm4.5 15.75 7.5-7.5 7.5 7.5')
    $chevronUpIcon.appendChild($chevronUpPath)

    const $searchContainer = document.createElement('div')
    $searchContainer.classList.add('search-container', 'relative', 'flex', 'items-center', 'justify-center', 'h-9', 'mx-4', 'border', 'border-grey-200', 'rounded-sm')

    const $searchInput = document.createElement('input')
    $searchInput.setAttribute('type', 'text')
    $searchInput.setAttribute('id', 'search')
    $searchInput.classList.add('search-input', 'w-full', 'h-full', 'font-manrope', 'text-grey-400', 'text-sm', 'pl-2', 'rounded-sm', 'focus:outline-none')

    const $crossIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    $crossIcon.setAttribute('viewBox', '0 0 24 24')
    $crossIcon.classList.add('w-4', 'h-4', 'absolute', 'right-5', 'stroke-[#7A7A7A]', 'fill-[#7A7A7A]', 'stroke-0.5')
    const $crossPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    $crossPath.classList.add('translate-y-0.5')
    $crossPath.setAttribute('d', 'M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z')
    $crossIcon.appendChild($crossPath)

    const $searchIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    $searchIcon.setAttribute('viewBox', '0 0 24 24')
    $searchIcon.classList.add('w-3.5', 'h-3.5', 'absolute', 'right-2', 'stroke-[#7A7A7A]', 'stroke-1', 'fill-none')
    const $searchPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    $searchPath.setAttribute('d', 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z')
    $searchIcon.appendChild($searchPath)

    const $optionContainer = document.createElement('div')
    $optionContainer.classList.add('option-container', 'flex', 'flex-col', 'w-full', 'items-start', 'mt-3')

    $dropdownButton.appendChild($dropdownSpan)
    $dropdownButton.appendChild($chevronDownIcon)
    $dropdown.appendChild($dropdownButton)
    $dropdown.appendChild($dropdownMenu)
    $dropdownMenu.appendChild($dropdownHeader)
    $dropdownMenu.appendChild($searchContainer)
    $dropdownMenu.appendChild($optionContainer)
    $dropdownHeader.appendChild($dropdownLabel)
    $dropdownHeader.appendChild($chevronUpIcon)
    $searchContainer.appendChild($searchInput)
    $searchContainer.appendChild($crossIcon)
    $searchContainer.appendChild($searchIcon)

    return $dropdown
  },

  initializationDropdown () {
    const $ingredientsDropdown = this.appendDropdown()
    const $appliancesDropdown = this.appendDropdown()
    const $toolsDropdown = this.appendDropdown()

    this.openDropdown($ingredientsDropdown)
    this.closeDropdown($ingredientsDropdown)
    this.setTextContent($ingredientsDropdown, 'Ingrédients', 'Crème de coco')

    this.openDropdown($appliancesDropdown)
    this.closeDropdown($appliancesDropdown)
    this.setTextContent($appliancesDropdown, 'Appareils', 'Mixeur')

    this.openDropdown($toolsDropdown)
    this.closeDropdown($toolsDropdown)
    this.setTextContent($toolsDropdown, 'Ustensiles', 'Spatule')
  },

  openDropdown ($dropdown) {
    const $dropdownButton = $dropdown.querySelector('.dropdown-button')
    const $dropdownMenu = $dropdown.querySelector('.dropdown-menu')
    $dropdownButton?.addEventListener('click', () => {
      $dropdownMenu.classList.remove('hidden')
      $dropdownButton.classList.add('hidden')
    })
  },

  closeDropdown ($dropdown) {
    const $dropdownButton = $dropdown.querySelector('.dropdown-button')
    const $dropdownMenu = $dropdown.querySelector('.dropdown-menu')
    const $dropdownHeader = $dropdown.querySelector('.dropdown-header')
    $dropdownHeader?.addEventListener('click', () => {
      $dropdownMenu.classList.add('hidden')
      $dropdownButton.classList.remove('hidden')
    })
  },

  appendDropdown (searchResults) {
    const $filterBar = document.querySelector('.filter-bar')
    const $dropdown = dropdown.createDropdownDOM()
    $filterBar.appendChild($dropdown)

    this.appendOption('option 1', $dropdown)
    this.appendOption('option 2', $dropdown)
    this.handleSelectionOption($dropdown)
    /* Quand une recherche est effectuée, on affiche les options correspondantes
    searchResults.forEach(result => {
      this.appendOption(result, $dropdown)
    })
    */

    /* Quand une option est sélectionnée, on l'ajoute dans le dropdown
    this.appendOptionSelected('Option selected', $dropdown) */
    return $dropdown
  },

  setTextContent ($dropdown, dropdownTitle, option) {
    const $dropdownSpan = $dropdown.querySelector('.dropdown-title')
    $dropdownSpan.textContent = dropdownTitle
    const $dropdownLabel = $dropdown.querySelector('.dropdown-label')
    $dropdownLabel.textContent = dropdownTitle
    const $optionButton = $dropdown.querySelector('.option-button')
    $optionButton.textContent = option
  },

  // Bouton de l'option à ajouter dans le dropdown pour chacune des options correspondant à la recherche
  appendOption (option, $dropdown) {
    const $optionContainer = $dropdown.querySelector('.option-container')
    const $optionButton = document.createElement('button')
    $optionButton.classList.add('option-button', 'font-manrope', 'text-left', 'text-sm', 'font-grey-700', 'w-full', 'px-4', 'py-2.5', 'hover:bg-yellow', 'rounded-b-none', 'last:rounded-b-xl')
    $optionButton.textContent = option
    $optionContainer.appendChild($optionButton)
  },

  handleSelectionOption ($dropdown) {
    const $optionButton = $dropdown.querySelector('.option-button')
    $optionButton?.addEventListener('click', () => {
      this.appendOptionSelected($optionButton.textContent, $dropdown)
      this.removeOptionSelected()
    })
  },

  // Button a ajouté quand une option est sélectionnée
  appendOptionSelected (optionSelected, $dropdown) {
    const $optionSelectedContainer = document.querySelector('.option-selected-container')

    const $optionSelected = document.createElement('div')
    $optionSelected.classList.add('option-selected', 'relative', 'flex', 'justify-start', 'items-center', 'h-9', 'p-6.5', 'text-sm', 'bg-yellow', 'rounded-xl')

    const $optionSelectedSpan = document.createElement('span')
    $optionSelectedSpan.classList.add('option-selected-span', 'font-manrope', 'text-sm', 'font-grey-700', 'mr-16')
    $optionSelectedSpan.textContent = optionSelected

    const $closeButton = document.createElement('button')
    $closeButton.classList.add('close-option-button', 'absolute', 'right-5')

    const $crossIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    $crossIcon.setAttribute('viewBox', '0 0 24 24')
    $crossIcon.classList.add('w-6', 'h-6', 'right-5', 'stroke-[#1B1B1B]', 'fill-none', 'stroke-2')
    const $crossPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    $crossPath.classList.add('translate-y-0.5')
    $crossPath.setAttribute('d', 'M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z')
    $crossIcon.appendChild($crossPath)

    $closeButton.appendChild($crossIcon)
    $optionSelected.appendChild($optionSelectedSpan)
    $optionSelected.appendChild($closeButton)
    $optionSelectedContainer?.appendChild($optionSelected)
  },

  // Suppression de l'option sélectionnée
  removeOptionSelected () {
    const $optionSelected = document.querySelector('.option-selected')
    const $closeButton = document.querySelector('.close-option-button')
    $closeButton?.addEventListener('click', () => {
      $optionSelected?.classList.add('hidden')
    })
  }

}