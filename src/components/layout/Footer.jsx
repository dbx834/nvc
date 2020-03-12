// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Container from '@bodhi-project/components/lib/Container'
import Image from '@bodhi-project/components/lib/Image'
import container from '@bodhi-project/components/lib/methods/container'

import { Footer as SemanticFooter } from '@bodhi-project/semantic-webflow'

import Row from 'antd/lib/row'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/row/style/css'

import Col from 'antd/lib/col'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/col/style/css'

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
import instaMojo from '../../assets/instaMojo.png'
import soundcloud from '../../assets/soundcloud.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styles = css({
  '&#footer': {
    '& .waves': {
      height: '7px !important',
      width: '100% !important',
      background: 'transparent',
      border: 0,
      display: 'block',
      zIndex: 2,
      marginBottom: '1rem',
    },

    '& .boat': {
      background: 'transparent !important',
      border: 'none !important',
      position: 'absolute',
      zIndex: 1,
    },

    '& .img': {
      display: 'inline-block',
      border: 'none',
      background: 'none',
    },

    '@media(max-width: 992px)': {
      marginTop: 90,
      paddingBottom: '1rem',

      '& .boat': {
        height: '90px !important',
        width: '90px !important',
        right: 14,
        top: -85,
      },

      '& .links': {
        '& a': {
          marginRight: 12,
          height: '26px !important',
          width: '26px !important',
          display: 'inline-block',
        },
      },

      '& .img': {
        height: '26px !important',
        width: '26px !important',
      },

      '& .paypal-img': {
        height: '26px !important',
        width: '26px !important',
      },
    },

    '@media(min-width: 992px)': {
      marginTop: 120,

      '& .boat': {
        height: '120px !important',
        width: '120px !important',
        right: 54,
        top: -118,
      },

      '& .links': {
        '& a': {
          marginRight: 17,
          height: '45px !important',
          width: '45px !important',
          display: 'inline-block',
        },
      },

      '& .img': {
        height: '45px !important',
        width: '45px !important',
      },

      '& .paypal-img': {
        height: '42px !important',
        width: '42px !important',
      },
    },
  },
}).toString()

const bleedBlock = container({ bleed: true, block: true })

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopFooter */
const DesktopFooter = props => {
  const { isDesktop } = props
  console.log(isDesktop)

  return (
    <footer className={`${styles} ${bleedBlock}`} id="footer">
      <Image src={waves} className="waves" />
      <Image src={boat} className="boat" />
      <p className="copy">
        <br />
        <span className="strong italic">
          Nonviolent Communication & Restorative Circles in Auroville, India
        </span>
        <br />
      </p>
      <div className="mask-p links">
        <Link to="https://www.facebook.com/JoyLivingLearning/">
          <Image
            src={facebook}
            rawWidth={450}
            rawHeight={450}
            className="img"
            alt="Follow us on Facebook - https://www.facebook.com/JoyLivingLearning/"
          />
        </Link>
        <Link to="https://www.youtube.com/user/laurajoyful/videos">
          <Image
            src={youtube}
            rawWidth={450}
            rawHeight={450}
            className="img"
            alt="See more videos on YouTube - https://www.youtube.com/user/laurajoyful/videos"
          />
        </Link>
        <Link to="https://vimeo.com/laurajoyful">
          <Image
            src={vimeo}
            rawWidth={450}
            rawHeight={450}
            className="img"
            alt="See more videos on Vimeo - https://vimeo.com/laurajoyful"
          />
        </Link>
        <Link to="https://soundcloud.com/laura-joy-145472107">
          <Image
            src={soundcloud}
            rawWidth={450}
            rawHeight={450}
            className="img"
            alt="Listen to our dialogues on Soundcloud - https://soundcloud.com/laura-joy-145472107"
          />
        </Link>
        <Link to="https://www.instamojo.com/@joylivinglearning/lc8626c75ec504947856a740e8ba71b94/">
          <Image
            src={instaMojo}
            rawWidth={450}
            rawHeight={450}
            className="img"
            alt="Donate or pay fees through InstaMojo - https://www.instamojo.com/@joylivinglearning/lc8626c75ec504947856a740e8ba71b94/"
          />
        </Link>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
          style={{ display: 'inline-block' }}
          className="hover"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="WFXM5RNDGBXL4" />
          <input
            type="image"
            src={paypal}
            border="0"
            name="submit"
            alt="PayPal – The safer, easier way to pay online!"
            className="paypal-img"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
      <p style={{ marginBottom: 20 }}>
        Made with{' '}
        <Icon type="heart" style={{ color: '#D34025', fontSize: '80%' }} /> by{' '}
        <Link to="https://www.bodhiproject.org/">Bodhi Project</Link>
        <br />
        {data.copyright}
      </p>
    </footer>
  )
}

// --------------------------------------------------------------------- Export
export default DesktopFooter
