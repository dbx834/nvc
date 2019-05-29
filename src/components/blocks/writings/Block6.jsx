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

import danceFloor from '../../../assets/danceFloor.jpg'

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
          src={danceFloor}
          rawWidth={600}
          rawHeight={448}
          style={{
            width: '100%',
            height: 'auto',
            border: 0,
            background: 'transparent',
            display: 'block',
            marginBottom: 10,
          }}
        />
        <Link to="http://nvcdancefloors.com/">Click here</Link> for NVC Dance
        Floors.
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
            "Only those thoughts are true the opposite of which is also true in
            its own time and application; indisputable dogmas are the most
            dangerous kind of falsehood."
          </i>
          <br />~ <strong>Sri Aurobindo</strong>
        </span>
      </p>
    </div>
  </div>
)

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Block
