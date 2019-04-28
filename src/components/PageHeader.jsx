// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '&#page-header': {
    // padding: '0em 1.25rem',

    '& h1': {
      marginBottom: -10,

      '& span.home': {
        fontSize: '110%',
      },
    },

    '& h2': {
      marginBottom: 10,
      fontWeight: '200 !important',

      '@media(max-width: 1300px)': {
        maxWidth: '38rem',
      },

      '& span.home': {
        fontSize: '90%',
      },
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * [description]
 * @return {[type]} [description]
 */
const PageHeader = ({
  title,
  subTitle,
  home = false,
  stashSubTitle = false,
  hero,
}) => {
  return (
    <header className={style} id="page-header">
      {!isUndefined(title) && (
        <Fragment>
          <h1>
            <span className={home === true ? 'home' : ''}>{title}</span>
          </h1>
        </Fragment>
      )}
      {!isUndefined(subTitle) && (
        <h2 className={stashSubTitle === true ? 'stash' : ''}>
          <span className={home === true ? 'home' : ''}>{subTitle}</span>
        </h2>
      )}
      {!isUndefined(hero) && <p className="stash">{hero}</p>}
    </header>
  )
}

// PageHeader.propTypes = {}

// --------------------------------------------------------------------- Export
export default PageHeader
