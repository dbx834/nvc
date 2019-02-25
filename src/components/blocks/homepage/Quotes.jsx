// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * [description]
 * @return {[type]} [description]
 */
const About = () => {
  return (
    <Fragment>
      <hr />
      <h2 className="mask-p" style={{ marginBottom: 5 }}>
        Living Nonviolence
      </h2>
      <p
        style={{
          fontFamily: 'futura-pt, sans-serif',
          fontWeight: 200,
          marginBottom: 17,
          marginTop: 0,
        }}
      >
        <span style={{ fontSize: '125%' }}>
          <i>
            “My optimism rests on my belief in the infinite possibilities of the
            individual to develop nonviolence. The more you develop it in your
            own heart, the more infectious it becomes, till it overwhelms your
            surroundings and, by and by, might oversweep the world.”
          </i>
          <br />~ <span className="strong">Mahatma Gandhi</span>
        </span>
      </p>
    </Fragment>
  )
}

// About.propTypes = {}

// --------------------------------------------------------------------- Export
export default About
