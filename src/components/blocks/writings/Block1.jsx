// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from "prop-types";
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import ContainerDimensions from 'react-container-dimensions'
import ReactPlayer from 'react-player'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

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
      <ContainerDimensions>
        {({ width }) => {
          const playerWidth = width
          const playerHeight = width * 0.62
          return (
            <div
              style={{
                width: playerWidth,
                height: playerHeight,
                marginBottom: 30,
              }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=jbDGU3C_xww"
                className={videoClass}
                width="inherit"
                height="inherit"
              />
            </div>
          )
        }}
      </ContainerDimensions>
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
            "If we touch fire, it burns, but there is no principle of punishment
            in this relation of cause and effect, it is a lesson of relation and
            a lesson of experience; so in all Nature's dealings with us there is
            a relation of things and there is a corresponding lesson of
            experience."
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
