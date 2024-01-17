class App {
  constructor () {
    this.recipeFactory = new RecipeFactory()
    this.$recipesContainer = document.querySelector('.recipes-container')
    this.recipesInstances = []
    this.$cardList = []
  }

  async displayRecipes () {
    this.recipesInstances = recipes.map(
      (recipe) =>
        this.recipeFactory.createRecipe(recipe)
    )

    this.recipesInstances.forEach((recipe) => {
      const recipeModel = new RecipeTemplate(recipe)
      const recipesCardDOM = recipeModel.createRecipeCardDOM()
      recipeModel.assignRecipeValues(recipesCardDOM)
      recipeModel.assignRecipesClasses(recipesCardDOM)
      this.$recipesContainer.appendChild(recipesCardDOM.$card)
    })
    this.$cardList = document.querySelectorAll('.recipes-card')
  }

  async filterRecipes () {
    const $searchInput = document.querySelector('#search-input')

    $searchInput?.addEventListener('input', () => {
      const input = $searchInput.value
      const result = this.recipesInstances.filter((recipe) => recipe._name.toLowerCase().substring(0, input.length) === input.toLowerCase())

      this.$cardList.forEach((card) => {
        const title = card.querySelector('.card-title')
        if (result.some(recipe => recipe._name.toLowerCase() === title.textContent.toLowerCase())) {
          card.classList.remove('hidden')
          card.classList.add('flex')
        } else {
          card.classList.remove('flex')
          card.classList.add('hidden')
        }
      })
    })
  }

  async init () {
    await this.displayRecipes()
    await dropdown.initializationDropdown()
    await this.filterRecipes()
  }
}

const app = new App()
app.init()
