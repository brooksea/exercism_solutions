//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const EARTH_YEAR_IN_DAYS = 365.25
const EARTH_YEAR_IN_HOURS = 24 * EARTH_YEAR_IN_DAYS
const EARTH_YEAR_IN_MINUTES = 60 * EARTH_YEAR_IN_HOURS
const EARTH_YEAR_IN_SECONDS = 60 * EARTH_YEAR_IN_MINUTES

const ORBITAL_PERIODS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

export const age = (planet, givenAge) => {
  if (!(planet in ORBITAL_PERIODS)) {
    throw new Error("not a planet")
  }
  
  const ageInEarthYears = givenAge/EARTH_YEAR_IN_SECONDS
  const planetConversion = Number((ageInEarthYears / ORBITAL_PERIODS[planet]).toFixed(2))
  
  return planetConversion
};
