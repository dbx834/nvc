// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../Link'

import bookCover from '../../../assets/bookCover.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const video = css({
  marginBottom: 20,
})
const videoClass = video.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Block */
const Block = props => (
  <div>
    <hr />
    <h2 className="mask-p" style={{ marginBottom: 10 }}>
      Some Inspiration...
    </h2>
    <div
      style={{
        display: 'block',
        marginBottom: 30,
      }}
    >
      <div
        className="mask-p"
        style={{
          marginBottom: 30,
        }}
      >
        <Image
          src={bookCover}
          rawWidth={289}
          rawHeight={442}
          style={{
            width: '80%',
            height: 'auto',
            border: 0,
            background: 'transparent',
            display: 'block',
            marginBottom: 10,
          }}
        />
        <Link to="http://banyantreebookstore.weebly.com/nonviolent-communication.html">
          Click here
        </Link>{' '}
        to buy in India.
      </div>
      <hr />
      <p
        style={{
          fontFamily: 'futura-pt, sans-serif',
          fontWeight: 200,
          marginBottom: 30,
        }}
      >
        <span style={{ fontSize: '125%' }}>
          <i>
            "If the growth of consciousness were considered as the principal
            goal of life, many difficulties would find their solution."
          </i>
          <br />~ <strong>The Mother</strong>
        </span>
      </p>
    </div>
  </div>
)

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Block
