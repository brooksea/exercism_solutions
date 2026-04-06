/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.'
  }

  return remainingTime === 0 ? 'Lasagna is done.' : 'Not done, please wait.'
}

export function preparationTime(layers, prepTime = 2) {
  return layers.length * prepTime
}

export function quantities(layers) {
  return layers.reduce(({ noodles, sauce }, layer) => ({
        noodles: layer === 'noodles' ? noodles + 50 : noodles,
        sauce: layer === 'sauce' ? sauce + 0.2 : sauce
      }), { noodles: 0, sauce: 0 })
}

export function addSecretIngredient(friendRecipe, myRecipe) {
  myRecipe.push(friendRecipe[friendRecipe.length - 1])
}

export function scaleRecipe(recipe, scaler) {
  return Object.fromEntries(
    Object.entries(recipe)
    .map(([ingredient, amount]) => [ingredient, amount * scaler/2])
  )
}