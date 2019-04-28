// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& .xCover': {
    background: 'transparent !important',
    border: 'none !important',
    position: 'absolute',
    height: '99px !important',
    width: '132px !important',
    right: 34,
    zIndex: 1,
    top: -82,

    '@media(min-width: 992px)': {
      height: '125px !important',
      width: '170px !important',
      zIndex: 1,
      top: -148,
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
const About = () => {
  return (
    <div className={style}>
      <Image
        src="/assets/homepage/about/giraffe.jpg"
        className="xCover desktop-only"
      />
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      <h2 className="mask-p" style={{ marginBottom: 6 }}>
        About
      </h2>
      <p style={{ marginTop: 0 }}>
        Joy Living Learning is situated in&nbsp;
        <Link to="https://www.auroville.org/">Auroville</Link>, an international
        community in south India that aims to actualize human unity. Given this
        environment, we are surrounded by opportunities for growth, learning and
        exploration.
      </p>
      <p>
        Joy Living Learning is a Unit of the Auroville Foundation, and L'aura
        Joy is a Certified Trainer with the&nbsp;
        <Link to="https://www.cnvc.org/">
          Center for Nonviolent Communication (USA)
        </Link>
        .
      </p>
      <div className="mask-p" style={{ marginBottom: 20 }}>
        <Link to="https://www.auroville.org/">
          <Image
            src="/assets/homepage/about/auroville-logo.png"
            rawWidth={450}
            rawHeight={450}
            style={{
              display: 'inline-block',
              border: 'none',
              background: 'none',
              height: 55,
              width: 55,
              marginRight: 2,
            }}
          />
        </Link>
        <Link to="https://www.cnvc.org/" style={{ marginLeft: 17 }}>
          <Image
            src="/assets/homepage/about/cnvc-logo.png"
            rawWidth={1233}
            rawHeight={734}
            style={{
              display: 'inline-block',
              border: 'none',
              background: 'none',
              height: 47,
              marginBottom: 4,
              width: 'auto',
            }}
          />
        </Link>
      </div>
    </div>
  )
}

// About.propTypes = {}

// --------------------------------------------------------------------- Export
export default About
