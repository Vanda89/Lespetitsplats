class RecipeTemplate {
  constructor (recipe) {
    this.recipe = recipe
  }

  createRecipeCardDOM () {
    const $card = document.createElement('article')
    const $thumbnailContainer = document.createElement('div')
    const $thumbnail = document.createElement('img')
    const $time = document.createElement('span')
    const $cardContent = document.createElement('div')
    const $cardTitle = document.createElement('h3')
    const $descriptionContainer = document.createElement('div')
    const $descriptionTitle = document.createElement('h4')
    const $description = document.createElement('p')
    const $ingredientsContainer = document.createElement('div')
    const $ingredientsTitle = document.createElement('h4')
    const $ingredientsContent = document.createElement('div')

    $card.appendChild($thumbnailContainer)
    $card.appendChild($cardContent)
    $thumbnailContainer.appendChild($thumbnail)
    $thumbnailContainer.appendChild($time)
    $cardContent.appendChild($cardTitle)
    $cardContent.appendChild($descriptionContainer)
    $cardContent.appendChild($ingredientsContainer)
    $descriptionContainer.appendChild($descriptionTitle)
    $descriptionContainer.appendChild($description)
    $ingredientsContainer.appendChild($ingredientsTitle)
    $ingredientsContainer.appendChild($ingredientsContent)

    return {
      $card,
      $thumbnailContainer,
      $thumbnail,
      $time,
      $cardContent,
      $cardTitle,
      $descriptionContainer,
      $descriptionTitle,
      $description,
      $ingredientsContainer,
      $ingredientsTitle,
      $ingredientsContent,
      ingredients: []
    }
  }

  assignRecipeValues (elements) {
    elements.$card.dataset.option = this.recipe.name.toLowerCase()
    elements.$thumbnail.src = this.recipe.image
    elements.$time.textContent = this.recipe.time
    elements.$cardTitle.textContent = this.recipe.name.charAt(0).toUpperCase() + this.recipe.name.slice(1).toLowerCase()
    elements.$descriptionTitle.textContent = 'Recette'
    elements.$description.textContent = this.recipe.description
    elements.$ingredientsTitle.textContent = 'Ingrédients'
    this.recipe.ingredients.forEach((ingredient) => {
      const $ingredients = document.createElement('ul')
      const $ingredientName = document.createElement('li')
      const $ingredientQuantity = document.createElement('li')

      $ingredientName.textContent = ingredient.ingredient.charAt(0).toUpperCase() + ingredient.ingredient.slice(1).toLowerCase()
      $ingredientQuantity.textContent = ((ingredient.quantity) ? ` ${ingredient.quantity}` : ' ') + ((ingredient.unit) ? ` ${ingredient.unit}` : ' ')

      $ingredients.appendChild($ingredientName)
      $ingredients.appendChild($ingredientQuantity)
      elements.$ingredientsContent.appendChild($ingredients)

      elements.ingredients.push({
        ingredient: $ingredients,
        name: $ingredientName,
        quantity: $ingredientQuantity
      })
    })
  }

  assignRecipesClasses (elements) {
    elements.$card.classList.add('recipes-card', 'flex', 'flex-col', 'w-96', 'h-182', 'bg-white', 'shadow-recipe-card', 'rounded-3xl')
    elements.$thumbnailContainer.classList.add('relative', 'w-full', 'h-64')
    elements.$thumbnail.classList.add('object-cover', 'w-full', 'h-64', 'rounded-t-3xl')
    elements.$time.classList.add('absolute', 'top-5', 'right-5', 'px-3.5', 'py-1.5', 'text-xs', 'text-black', 'bg-yellow', 'rounded-full')
    elements.$cardContent.classList.add('flex', 'flex-col', 'p-6', 'gap-7')
    elements.$cardTitle.classList.add('card-title', 'font-anton', 'text-lg')
    elements.$descriptionContainer.classList.add('flex', 'flex-col', 'gap-3.5')
    elements.$description.classList.add('line-clamp-4', 'text-sm', 'font-manrope', 'pr-4')
    elements.$descriptionTitle.classList.add('font-manrope', 'font-bold', 'text-grey-400', 'text-xs', 'uppercase')
    elements.$ingredientsContainer.classList.add('flex', 'flex-col', 'gap-3.5')
    elements.$ingredientsTitle.classList.add('font-manrope', 'font-bold', 'text-grey-400', 'text-xs', 'uppercase')
    elements.$ingredientsContent.classList.add('grid', 'grid-cols-2', 'gap-5', 'font-manrope', 'text-sm')
    elements.ingredients.forEach((ingredient) => {
      ingredient.name.classList.add('text-grey-700', 'font-medium')
      ingredient.quantity.classList.add('text-grey-400')
    })
  }

  assignRecipesAttributes (elements) {
  }
}
