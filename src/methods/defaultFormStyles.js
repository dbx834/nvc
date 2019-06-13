// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import { css } from 'glamor'
import merge from 'lodash/merge'

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
export const formStyle = css({
  '& .ant-form-item': merge({
    display: 'flex !important',
    width: '100%',
    flexGrow: '1',
    fontSize: 'inherit !important',

    '& .ant-form-explain': {
      fontSize: '70%',
    },

    '& .ant-select': {
      fontSize: 'inherit',
      fontFamily: 'inherit',
      color: '#363636',
    },

    '& .ant-select-selection': {
      border: '1.25px solid #646464',
      borderRadius: 0,
      height: 'auto',
      backgroundColor: '#f8f2e6',

      '&:focus,:active': {
        border: '1.25px solid #646464',
        boxShadow: 'none',
      },
    },

    '& .ant-select-selection__rendered': {
      margin: 0,
      padding: '0px 0px 5px',
      // ...applyRhythm({ padding: '0X 0X 0.141X' }),
    },

    '& .ant-select-selection__placeholder': {
      color: '#363636',
      height: 'auto',
      top: 'unset',
      left: 'unset',
      right: 'unset',
      marginTop: 'unset',
    },

    '& .ant-select-arrow': merge({
      color: '#363636',
      right: 0,
      marginTop: -16,
    }),
  }),

  '& .ant-form-item-control-wrapper': {
    width: '100%',
  },

  '& .ant-input': {
    fontSize: 'inherit !important',
    fontFamily: 'inherit',
    border: '1.25px solid #646464',
    borderRadius: 6,
    height: 'auto',
    color: '#363636',
    transition: 'border 500ms cubic-bezier(0.215, 0.61, 0.355, 1)',
    backgroundColor: 'rgba(255,215,0,0.033) !important',
    boxShadow: '0 3px 6px rgba(255,215,0,0.033)',
    padding: '0.25rem 0.5rem',

    '&::-webkit-input-placeholder': {
      color: '#363636',
    },

    '&:hover::-webkit-input-placeholder': {
      color: '#b43808',
    },

    '&:hover': {
      boxShadow: 'none',
      border: '1.25px solid #646464',
      color: '#b43808',
    },
    '&:visited': {
      boxShadow: 'none',
      border: '1.25px solid #646464',
    },
    '&:link': {
      border: '1.25px solid #646464',
      boxShadow: 'none',
    },
    '&:active': {
      border: '1.25px solid #646464',
      boxShadow: 'none',
    },
    '&:focus': {
      border: '1.25px solid #646464',
      boxShadow: 'none',
      color: '#b43808',
    },
  },

  // Submit button
  '& .ant-btn-primary': {
    borderRadius: 0,
    backgroundColor: '#b43808',
    borderColor: '#b43808',
    margin: 0,
  },

  '& .ant-btn-primary[disabled]': {
    color: 'rgba(54, 54, 54, 0.375)',
    backgroundColor: '#FFFFFF',
    borderColor: '#363636',
    backgroundImage:
      'linear-gradient(-45deg, rgba(0, 0, 0, 0) 46%, #363636 49%, #363636 51%, rgba(0, 0, 0, 0) 10%)',
    backgroundSize: '10px 10px',
  },

  // Error state
  '& .has-error .ant-input': {
    boxShadow: 'none !important',
    borderColor: '#8b0000 !important',

    '&:focus': {
      boxShadow: 'none !important',
      borderColor: '#8b0000 !important',
    },
  },

  // Space below error message
  '& .ant-form-explain': {
    '& > p': {
      marginBottom: 12,
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default { formStyle }
