// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------

import indexOf from 'lodash/indexOf'

/**
 * [Checks if a value exists in an array]
 * @param  {array} array [The array to lookup a value in]
 * @param  {string} value [The value]
 * @return {boolean}       [Returns true or false]
 */
const inArray = (array, value) => {
  let rx = false
  if (indexOf(array, value) >= 0) {
    rx = true
  }
  return rx
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default inArray
