// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import startsWith from 'lodash/startsWith'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Link as GatsbyLink } from 'gatsby'
import OutLink from '@bodhi-project/components/lib/OutLink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Link */
const Link = ({ to, children, outLink = false, ...props }) => {
  const isOutLink =
    outLink === true ? true : startsWith(to, 'http') || startsWith(to, 'https')
  const isHashLink = startsWith(to, '#') || isUndefined(to)

  return (
    <Fragment>
      {isOutLink === true ? (
        <OutLink to={to} {...props}>
          {children}
        </OutLink>
      ) : (
        <Fragment>
          {isHashLink === true ? (
            <a href="#" {...props}>
              {children}
            </a>
          ) : (
            <GatsbyLink to={to} {...props}>
              {children}
            </GatsbyLink>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

Link.propTypes = {
  to: PropTypes.string,
}

// --------------------------------------------------------------------- Export
export default Link
