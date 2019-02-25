// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from './Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** PreviousNext */
const PreviousNext = ({ prev, next }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
    className="mask-p"
  >
    <div>
      {!isUndefined(prev) && !isUndefined(prev.nakedPageSlug) ? (
        <Link to={`/${prev.nakedPageSlug}`} rel="previous">
          ⇜ Previous
        </Link>
      ) : (
        <span style={{ color: '#8a8a8a', cursor: 'not-allowed' }}>
          ⇜ Previous
        </span>
      )}
    </div>
    <div>
      {!isUndefined(next) && !isUndefined(next.nakedPageSlug) ? (
        <Link to={`/${next.nakedPageSlug}`} rel="next">
          Next ⇝
        </Link>
      ) : (
        <span style={{ color: '#8a8a8a', cursor: 'not-allowed' }}>Next ⇝</span>
      )}
    </div>
  </div>
)

PreviousNext.propTypes = {
  prev: PropTypes.object,
  next: PropTypes.object,
}

// --------------------------------------------------------------------- Export
export default PreviousNext
