// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// mport map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleObject = css({
  '& a': {
    padding: '20px 0px',
    display: 'flex',
    height: 'auto',
    justifyContent: 'space-between',
    borderBottom: 'unset',

    '& h1': {
      height: 65,
      marginBottom: 0,
      flexBasis: 'auto',
      paddingLeft: 45,
    },

    '& h2': {
      marginBottom: 0,
      flexBasis: 'auto',
      textTransform: 'lowercase',
      fontWeight: 100,
      lineHeight: '65px',
      fontStyle: 'italic',
    },

    '&:hover': {
      borderBottom: 'unset',
    },
  },
})

const style = styleObject.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** WebsiteTitle */
const WebsiteTitle = props => {
  const { title, subTitle, logo } = props

  return (
    <header className={style}>
      <Link to="/">
        <h1
          style={{
            background: `url(${logo}) 0% 10px / 40px 40px no-repeat`,
          }}
        >
          {title}
        </h1>
        <h2>{subTitle}</h2>
      </Link>
    </header>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default WebsiteTitle
