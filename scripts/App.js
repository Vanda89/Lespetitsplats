class App {
  constructor () {
    this.recipeFactory = new RecipeFactory()
    this.recipesContainer = document.querySelector('.recipes-container')
  }

  async displayRecipes () {
    dropdown.initializationDropdown()

    const recipeInstances = recipes.map(
      (recipe) =>
        this.recipeFactory.createRecipe(recipe)
    )

    recipeInstances.forEach((recipe) => {
      const recipeModel = new RecipeTemplate(recipe)
      const $recipeCardDOM = recipeModel.createRecipeCardDOM()
      console.log($recipeCardDOM)
      recipeModel.assignRecipeValues($recipeCardDOM)
      console.log($recipeCardDOM)

      this.recipesContainer.appendChild($recipeCardDOM.$card)
      console.log(this.recipesContainer)
      recipeModel.assignRecipesClasses($recipeCardDOM)
    })
    console.log(this.recipesContainer)
  }

  async init () {
    await this.displayRecipes()
  }
}

const app = new App()
app.init()
