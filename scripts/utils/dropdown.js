const dropdown = {

  createDropdownDOM () {
    const $dropdown = document.createElement('div')
    const $dropdownButton = document.createElement('button')
    const $dropdownSpan = document.createElement('span')
    const $chevronDownIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const $chevronDownPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    const $dropdownMenu = document.createElement('div')
    const $dropdownHeader = document.createElement('div')
    const $dropdownLabel = document.createElement('label')
    const $chevronUpIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const $chevronUpPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    const $searchContainer = document.createElement('div')
    const $searchInput = document.createElement('input')
    const $crossButton = document.createElement('button')
    const $crossIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const $crossPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    const $searchButton = document.createElement('button')
    const $searchIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const $searchPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    const $optionContainer = document.createElement('div')
    const $buttonSelectedContainer = document.createElement('div')
    const $noOptionMessage = document.createElement('p')
    $noOptionMessage.textContent = 'Aucune correspondance'

    $dropdown.classList.add('dropdown', 'h-auto')
    $dropdownButton.classList.add('dropdown-button', 'flex', 'justify-between', 'items-center', 'w-50', 'p-4', 'bg-white', 'rounded-xl', 'font-medium', 'text-grey-700', 'text-base', 'font-manrope')
    $dropdownSpan.classList.add('dropdown-title')
    $chevronDownIcon.classList.add('w-6', 'h-4', 'stroke-grey-700', 'fill-none', 'stroke-1.5')
    $chevronDownPath.classList.add('translate-x-1')
    $dropdownMenu.classList.add('dropdown-menu', 'hidden', 'flex', 'flex-col', 'items-start', 'w-50', 'gap-3.25', 'bg-white', 'rounded-xl', 'shadow')
    $dropdownHeader.classList.add('dropdown-header', 'flex', 'justify-between', 'items-center', 'w-full', 'pt-4', 'px-4', 'cursor-pointer')
    $dropdownLabel.classList.add('dropdown-label', 'font-manrope', 'font-medium', 'text-grey-700', 'text-base', 'cursor-pointer')
    $chevronUpIcon.classList.add('w-6', 'h-4', 'stroke-[#1B1B1B]', 'fill-none', 'stroke-1.5', 'cursor-pointer')
    $chevronUpPath.classList.add('translate-x-1')
    $searchContainer.classList.add('search-container', 'relative', 'flex', 'items-center', 'justify-center', 'h-9', 'mx-4', 'border', 'border-grey-200', 'rounded-sm')
    $searchInput.classList.add('dropdown-search-input', 'w-full', 'h-full', 'font-manrope', 'text-grey-400', 'text-sm', 'pl-2', 'rounded-sm', 'focus:outline-none')
    $crossButton.classList.add('dropdown-cross-button', 'w-4', 'h-4', 'absolute', 'right-5')
    $crossIcon.classList.add('hidden', 'dropdown-cross-icon', 'w-4', 'h-4', 'stroke-[#7A7A7A]', 'fill-[#7A7A7A]', 'stroke-0.5')
    $crossPath.classList.add('translate-y-0.5')
    $searchButton.classList.add('dropdown-search-button', 'w-3.5', 'h-3.5', 'absolute', 'right-2')
    $searchIcon.classList.add('w-3.5', 'h-3.5', 'stroke-[#7A7A7A]', 'stroke-1', 'fill-none')
    $optionContainer.classList.add('option-container', 'flex', 'flex-col', 'items-start', 'w-full', 'max-h-80', 'mt-3', 'overflow-auto')
    $buttonSelectedContainer.classList.add('button-selected-container', 'flex', 'flex-col', 'w-full', 'rounded-b-none', 'last:rounded-b-xl')
    $noOptionMessage.classList.add('no-option-message', 'hidden', 'text-grey-400', 'text-sm', 'font-manrope', 'px-4', 'py-2.5', 'rounded-b-xl', 'bg-white')

    $chevronDownPath.setAttribute('stroke-linejoin', 'round')
    $chevronDownIcon.setAttribute('viewBox', '0 0 20 20')
    $chevronDownPath.setAttribute('d', 'm19.5 8.25-7.5 7.5-7.5-7.5')
    $chevronDownPath.setAttribute('stroke-linecap', 'round')
    $chevronUpPath.setAttribute('stroke-linejoin', 'round')
    $chevronUpIcon.setAttribute('viewBox', '0 0 20 20')
    $chevronUpPath.setAttribute('d', 'm4.5 15.75 7.5-7.5 7.5 7.5')
    $chevronUpPath.setAttribute('stroke-linecap', 'round')
    $searchInput.setAttribute('type', 'text')
    $searchPath.setAttribute('d', 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z')
    $searchIcon.setAttribute('viewBox', '0 0 24 24')
    $crossPath.setAttribute('d', 'M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z')
    $crossIcon.setAttribute('viewBox', '0 0 24 24')

    $dropdown.appendChild($dropdownButton)
    $dropdown.appendChild($dropdownMenu)
    $dropdownButton.appendChild($dropdownSpan)
    $dropdownButton.appendChild($chevronDownIcon)
    $chevronDownIcon.appendChild($chevronDownPath)
    $dropdownMenu.appendChild($dropdownHeader)
    $dropdownMenu.appendChild($searchContainer)
    $dropdownMenu.appendChild($optionContainer)
    $dropdownMenu.appendChild($noOptionMessage)
    $dropdownHeader.appendChild($dropdownLabel)
    $dropdownHeader.appendChild($chevronUpIcon)
    $chevronUpIcon.appendChild($chevronUpPath)
    $searchContainer.appendChild($searchInput)
    $searchContainer.appendChild($crossButton)
    $searchContainer.appendChild($searchButton)
    $crossButton.appendChild($crossIcon)
    $crossIcon.appendChild($crossPath)
    $searchButton.appendChild($searchIcon)
    $searchIcon.appendChild($searchPath)
    $optionContainer.appendChild($buttonSelectedContainer)

    return $dropdown
  },

  appendDropdown () {
    const $filterBar = document.querySelector('.filter-bar')
    const $dropdown = dropdown.createDropdownDOM()
    $filterBar?.appendChild($dropdown)

    return $dropdown
  },

  initializationDropdown ($ingredientsDropdown, $appliancesDropdown, $utensilsDropdown) {
    this.initializeDropdown($ingredientsDropdown, 'Ingrédients')
    this.initializeDropdown($appliancesDropdown, 'Appareils')
    this.initializeDropdown($utensilsDropdown, 'Ustensiles')
  },

  initializeDropdown ($dropdown, textContent) {
    this.openDropdown($dropdown)
    this.closeDropdown($dropdown)
    this.setTextContent($dropdown, textContent)
  },

  openDropdown ($dropdown) {
    const $dropdownButton = $dropdown.querySelector('.dropdown-button')
    const $dropdownMenu = $dropdown.querySelector('.dropdown-menu')
    $dropdownButton?.addEventListener('click', () => {
      $dropdownMenu?.classList.remove('hidden')
      $dropdownButton?.classList.add('hidden')
    })
  },

  closeDropdown ($dropdown) {
    const $dropdownButton = $dropdown.querySelector('.dropdown-button')
    const $dropdownMenu = $dropdown.querySelector('.dropdown-menu')
    const $dropdownHeader = $dropdown.querySelector('.dropdown-header')

    $dropdownHeader?.addEventListener('click', () => {
      $dropdownMenu?.classList.add('hidden')
      $dropdownButton?.classList.remove('hidden')
    })

    document.addEventListener('click', (event) => {
      if (!$dropdown?.contains(event.target)) {
        $dropdownMenu?.classList.add('hidden')
        $dropdownButton?.classList.remove('hidden')
      }
    })
  },

  setTextContent ($dropdown, dropdownTitle) {
    const $dropdownSpan = $dropdown.querySelector('.dropdown-title')
    $dropdownSpan.textContent = dropdownTitle
    const $dropdownLabel = $dropdown.querySelector('.dropdown-label')
    $dropdownLabel.textContent = dropdownTitle
    $dropdownLabel.setAttribute('for', `search-${dropdownTitle}`)
    const $searchInput = $dropdown.querySelector('.dropdown-search-input')
    $searchInput.setAttribute('placeholder', 'Recherchez...')
    $searchInput.setAttribute('aria-label', `Input de recherche pour ${dropdownTitle}`)
    $searchInput.setAttribute('id', `search-${dropdownTitle}`)
  },

  // Bouton de l'option à ajouter dans le dropdown pour chacune des options correspondant à la recherche
  appendOption ($dropdown, option) {
    const $optionContainer = $dropdown.querySelector('.option-container')

    const $optionButton = document.createElement('button')
    $optionButton?.classList.add('option-button', 'relative', 'flex', 'items-center', 'font-manrope', 'text-left', 'text-sm', 'font-grey-700', 'w-full', 'px-4', 'py-2.5', 'hover:bg-yellow')
    $optionButton?.setAttribute('type', 'button')
    $optionButton.textContent = option.charAt(0).toUpperCase() + option.slice(1)

    const $crossIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    $crossIcon?.setAttribute('viewBox', '0 0 24 24')
    $crossIcon?.classList.add('close-option-button', 'hidden', 'absolute', 'right-3', 'stroke-yellow', 'fill-black', 'dropdown-cross-icon', 'w-4', 'h-4', 'stroke-0.5', 'rounded-xl')
    const $crossCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    $crossCircle?.setAttribute('cx', '8.5')
    $crossCircle?.setAttribute('cy', '10')
    $crossCircle?.setAttribute('r', '8.5')
    $crossIcon?.appendChild($crossCircle)
    const $crossPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    $crossPath.classList?.add('translate-y-0.5')
    $crossPath?.setAttribute('d', 'M11 11L8.5 8.5M8.5 8.5L6 6M8.5 8.5L11 6M8.5 8.5L6 11')
    $crossPath?.setAttribute('stroke-linecap', 'round')
    $crossPath?.setAttribute('stroke-linejoin', 'round')
    $crossIcon?.appendChild($crossPath)

    $optionButton?.appendChild($crossIcon)
    $optionContainer?.appendChild($optionButton)

    return $optionButton
  },

  // Button a ajouté quand une option est sélectionnée
  appendOptionSelected (optionSelected, $dropdown) {
    const $optionSelectedContainer = document.querySelector('.option-selected-container')

    const $optionSelected = document.createElement('div')
    $optionSelected?.classList.add('option-selected', 'relative', 'flex', 'justify-start', 'items-center', 'h-9', 'p-6.5', 'text-sm', 'bg-yellow', 'rounded-xl')

    const $optionSelectedSpan = document.createElement('span')
    $optionSelectedSpan?.classList.add('option-selected-span', 'font-manrope', 'text-sm', 'font-grey-700', 'mr-16')
    $optionSelectedSpan.textContent = optionSelected

    const $closeButton = document.createElement('button')
    $closeButton.classList?.add('close-option-selected', 'absolute', 'right-5')

    const $crossIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    $crossIcon?.setAttribute('viewBox', '0 0 24 24')
    $crossIcon?.classList.add('close-option-icon', 'w-6', 'h-6', 'right-5', 'stroke-[#1B1B1B]', 'fill-none', 'stroke-2')
    const $crossPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    $crossPath?.classList.add('translate-y-1.6')
    $crossPath?.setAttribute('stroke-linecap', 'round')
    $crossPath?.setAttribute('stroke-linejoin', 'round')
    $crossPath?.setAttribute('d', 'M12 11.5L7 6.5M7 6.5L2 1.5M7 6.5L12 1.5M7 6.5L2 11.5')
    $crossIcon?.appendChild($crossPath)

    $closeButton?.appendChild($crossIcon)
    $optionSelected?.appendChild($optionSelectedSpan)
    $optionSelected?.appendChild($closeButton)
    $optionSelectedContainer?.appendChild($optionSelected)
  }

}
