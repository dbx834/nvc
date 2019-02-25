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
      Some Inspiration…
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
                url="https://www.youtube.com/watch?v=uIyY6TDbnSQ"
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
            "In dealing with the criminal, the most advanced societies are no
            longer altogether satisfied with regarding him as a law-breaker to
            be punished, imprisoned, terrified, hanged or else tortured
            physically and morally, whether as a revenge for his revolt or as an
            example to others; there is a growing attempt to understand him, to
            make allowance for his heredity, environment and inner deficiencies
            and to change him from within rather than crush him from without."
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
