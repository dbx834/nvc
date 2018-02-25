// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
import _ from 'lodash';
import isEmail from 'validator/lib/isEmail';
import isAlpha from 'validator/lib/isAlphanumeric';

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** Check if a field has an error */
const hasErrors = fieldsError =>
  Object.keys(fieldsError).some(field => fieldsError[field]);

/** Check email is valid */
const validateEmail = (rule, value, callback) => {
  if (_.isEmpty(value)) {
    callback('Please fill in your email.');
  } else {
    if (!isEmail(value)) {
      callback("That's not a valid email address!");
    } else {
      callback();
    }
  }
};

/** Check name is valid */
const validateName = (rule, value, callback) => {
  if (_.isEmpty(value)) {
    callback('Please fill in your name.');
  } else {
    if (!isAlpha(_.replace(value, ' ', ''))) {
      callback('A name can have only characters (a-z, A-Z).');
    } else {
      callback();
    }
  }
};

/** Check comment is valid */
const validateComment = (rule, value, callback) => {
  if (_.isEmpty(value)) {
    callback('Please add your comments.');
  } else {
    if (!isAlpha(_.replace(value, ' ', ''))) {
      callback('Comments can have only characters (a-z, A-Z).');
    } else {
      callback();
    }
  }
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
const exportThis = {
  hasErrors,
  validateEmail,
  validateName,
  validateComment,
};

export default exportThis;
