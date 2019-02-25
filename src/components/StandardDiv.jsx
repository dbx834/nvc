// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/row/style/css'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& > div': {
    '&:nth-child(1)': {},

    '&:nth-child(2)': {},
  },

  '& hr': {
    border: 'none',
    borderTop: '3px solid #B43808',
    marginBottom: 10,

    '&:not(:first-child)': {
      marginTop: 20,
    },
  },

  '@media(max-width: 1200px)': {
    '& hr': {
      borderTop: '2.25px solid #B43808',
      marginBottom: 8,
    },
  },

  '@media(max-width: 768px)': {
    '& hr': {
      borderTop: '1.75px solid #B43808',
      marginBottom: 4,
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
const StandardDiv = ({ children, leftLine = true, rightLine = true }) => {
  const div1 = children[0]
  const div2 = children[1]

  return (
    <Division golden className={style}>
      <Fragment>
        {leftLine === true && <hr />}
        {div1}
      </Fragment>
      <Fragment>
        {rightLine === true && <hr />}
        {div2}
      </Fragment>
    </Division>
  )
}

// StandardDiv.propTypes = {}

// --------------------------------------------------------------------- Export
export default StandardDiv
