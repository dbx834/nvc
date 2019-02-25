// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
import isEmpty from 'lodash/isEmpty'
// import isEmail from 'validator/lib/isEmail'
// import isAlpha from 'validator/lib/isAlphanumeric'

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** Check if a field has an error */
export const hasErrors = fieldsError =>
  Object.keys(fieldsError).some(field => fieldsError[field])

/** Check email is valid */
export const validateEmail = (rule, value, callback) => {
  if (isEmpty(value)) {
    callback('Please fill in your email.')
  } else {
    callback()
    // if (!isEmail(value)) {
    //   callback("That's not a valid email address!")
    // } else {
    //   callback()
    // }
  }
}

/** Check email is valid */
export const validateMobile = (rule, value, callback) => {
  callback()
  // if (isEmpty(value)) {
  //   callback("Please fill in these details.");
  // }
}

/**
 * [description]
 * @param  {[type]}   rule     [description]
 * @param  {[type]}   value    [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
export const validateCountry = (rule, value, callback) => {
  callback()
  // if (isEmpty(value)) {
  //   callback("Please fill in these details.");
  // }
}

/**
 * [description]
 * @param  {[type]}   rule     [description]
 * @param  {[type]}   value    [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
export const validateCurrentLocation = (rule, value, callback) => {
  callback()
  // if (isEmpty(value)) {
  //   callback("Please fill in these details.");
  // }
}

/**
 * [description]
 * @param  {[type]}   rule     [description]
 * @param  {[type]}   value    [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
export const validateWhatDrawsYou = (rule, value, callback) => {
  callback()
  // if (isEmpty(value)) {
  //   callback("Please fill in these details.");
  // }
}

/**
 * [description]
 * @param  {[type]}   rule     [description]
 * @param  {[type]}   value    [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
export const validateComment = (rule, value, callback) => {
  callback()
  // if (isEmpty(value)) {
  //   callback("Please fill in these details.");
  // }
}

/** Check name is valid */
export const validateName = (rule, value, callback) => {
  if (isEmpty(value)) {
    callback('Please fill in your name.')
  } else {
    callback()
    // if (!isAlpha(value.split(' ').join(''))) {
    //   callback('A name can have only characters (a-z, A-Z).')
    // } else {
    //   callback()
    // }
  }
}

/** Check experience is valid */
export const validateExperience = (rule, value, callback) => {
  callback()
  // if (isEmpty(value)) {
  //   callback("Please fill in these details.");
  // }
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
const exportThis = {
  hasErrors,
  validateEmail,
  validateName,
  validateMobile,
  validateCountry,
  validateCurrentLocation,
  validateWhatDrawsYou,
  validateComment,
  validateExperience,
}

export default exportThis
