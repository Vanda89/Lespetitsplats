class Recipe {
  constructor (recipes) {
    this._id = recipes.id
    this._image = recipes.image
    this._name = recipes.name
    this._servings = recipes.servings
    this._ingredients = recipes.ingredients
    this._time = recipes.time
    this._description = recipes.description
    this._appliance = recipes.appliance
    this._utensils = recipes.utensils
  }

  get id () {
    return this._id
  }

  get image () {
    return (
      '/assets/Photos/Photos_P7_Les_petits_plats/' + `${this._image}`
    )
  }

  get name () {
    return this._name
  }

  get servings () {
    return this._servings
  }

  get ingredients () {
    return this._ingredients
  }

  get ingredientsList () {
    return this._ingredients.map(ingredient => ingredient.ingredient.charAt(0).toUpperCase() + ingredient.ingredient.slice(1).toLowerCase())
  }

  get time () {
    return this._time + ' min'
  }

  get description () {
    return this._description
  }

  get appliance () {
    return this._appliance
  }

  get utensils () {
    return this._utensils
  }
}

class RecipeFactory {
  createRecipe (recipesData) {
    return new Recipe(recipesData)
  }
}
