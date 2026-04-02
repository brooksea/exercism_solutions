/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  if (extras.length === 0) {
    const pizzaPrices = {
      Margherita: 7,
      Caprese: 9,
      Formaggio: 10
    }
    return pizzaPrices[pizza]
  }

  const extrasPrice = {
    ExtraSauce: 1,
    ExtraToppings: 2
  } 

  return extrasPrice[extras[0]] + pizzaPrice(pizza, ...extras.slice(1))
}

console.log(pizzaPrice('Margherita', []))

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0
  for (const order of pizzaOrders) {
    total += pizzaPrice(order.pizza, ...order.extras)
  }
  return total
}
