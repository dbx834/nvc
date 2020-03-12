// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'
import { Footer as SemanticFooter } from '@bodhi-project/semantic-webflow'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

import data from '../../data/website.json'

import waves from '../../assets/waves.png'
import boat from '../../assets/boat.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import vimeo from '../../assets/vimeo.png'
import paypal from '../../assets/paypal.png'
import soundcloud from '../../assets/soundcloud.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styles = css({
  marginTop: 60,
  background: '#f2f2f2',

  '& .waves': {
    height: '7px !important',
    width: '100% !important',
    background: 'transparent',
    border: 0,
    display: 'block',
    zIndex: 2,
    marginBottom: 20,
  },

  '& .boat': {
    background: 'transparent !important',
    border: 'none !important',
    position: 'absolute',
    height: '90px !important',
    width: '90px !important',
    right: 14,
    zIndex: 1,
    top: -82,

    '@media(min-width: 992px)': {
      height: '120px !important',
      width: '120px !important',
      right: 54,
      zIndex: 1,
      top: -118,
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopFooter */
const DesktopFooter = props => {
  const className = `${styles} mobile-only`

  return (
    <aside className={className}>
      <SemanticFooter>
        <Image src={waves} className="waves" alt="NVC India" />
        <Image src={boat} className="boat" />
        <p style={{ marginBottom: 0, padding: '2rem' }}>
          Made with&nbsp;
          <Icon
            type="heart"
            style={{ color: '#D34025', fontSize: '80%' }}
          /> by <Link to="https://www.bodhiproject.org/">Bodhi Project</Link>
          <br />
          {data.copyright}
        </p>
      </SemanticFooter>
    </aside>
  )
}

// --------------------------------------------------------------------- Export
export default DesktopFooter
