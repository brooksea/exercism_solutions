// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  const dateInput = now ?? Date.now()
  const currentTime = new Date(dateInput)
  
  currentTime.setDate(currentTime.getDate() + days)
  return currentTime
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString()
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const time = new Date(timestamp)
  return {
    year: time.getFullYear(),
    month: time.getMonth(),
    date: time.getDate(),
    hour: time.getHours(),
    minute: time.getMinutes()
  }
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const apptDetails = new Date(timestamp)

  for (const [key, value] of Object.entries(options)) {
    switch(key) {
      case 'year':
        apptDetails.setYear(value)
        break;
      case 'month':
        apptDetails.setMonth(value)
        break;
      case 'date':
        apptDetails.setDate(value)
        break;
      case 'hour':
        apptDetails.setHours(value)
        break;
      case 'minute':
        apptDetails.setMinutes(value)
        break;
    }
  }

  return getAppointmentDetails(apptDetails)
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const dateA = new Date(timestampA)
  const dateB = new Date(timestampB)

  const secondsA = dateA.getTime()/1000
  const secondsB = dateB.getTime()/1000

  const roundedTimeBetween = Math.round(Math.abs(secondsA - secondsB))
  
  return roundedTimeBetween
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const apptDate = new Date(appointmentTimestamp)
  const currentDate = new Date(currentTimestamp)

  const apptEpoch = apptDate.getTime()
  const currentEpoch = currentDate.getTime()

  return apptEpoch > currentEpoch
}
