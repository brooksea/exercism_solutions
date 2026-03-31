// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5
    case 'Energizer':
    case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesAvailable = 0
  let remainingWedges = wedgesNeeded
  let i = 0
  while (remainingWedges > 0 && i < limes.length) {
    switch(limes[i]) {
      case 'small':
        wedgesAvailable = 6
        break
      case 'medium': 
        wedgesAvailable = 8
        break
      case 'large':
        wedgesAvailable = 10
        break
    }
    remainingWedges -= wedgesAvailable;
    i++;
  }
  return i
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const OGOrders = [...orders]
  const ordersRemaining = orders.length
  let i = 0
  
  while (timeLeft > 0 && i < ordersRemaining) {
    timeLeft -= timeToMixJuice(OGOrders[i])
    orders.shift()
    i++
  }
  

  return orders
}