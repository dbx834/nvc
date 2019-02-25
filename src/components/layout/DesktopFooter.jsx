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
import payu from '../../assets/payu.png'
import soundcloud from '../../assets/soundcloud.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styles = css({
  padding: '0px 20px 20px 20px',

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

    '@media(min-width: 768px)': {
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
  const className = `${styles} desktop-only`

  return (
    <SemanticFooter id="desktop-footer" className={className}>
      <Container bleed block id="footer">
        <Image src={waves} className="waves" alt="NVC India" />
        <Image src={boat} className="boat" />
        <Row type="flex">
          <Col xs={23} sm={23} md={20} lg={17} xl={15}>
            <p>
              <br />
              <span className="strong italic">
                Nonviolent Communication & Restorative Circles in Auroville,
                India
              </span>
              <br />
            </p>
            <div className="mask-p hidden-sm">
              <Link to="https://www.facebook.com/JoyLivingLearning/">
                <Image
                  src={facebook}
                  rawWidth={450}
                  rawHeight={450}
                  style={{
                    display: 'inline-block',
                    border: 'none',
                    background: 'none',
                    height: 45,
                    width: 45,
                  }}
                  alt="Follow us on Facebook - https://www.facebook.com/JoyLivingLearning/"
                />
              </Link>
              <Link
                to="https://www.youtube.com/user/laurajoyful/videos"
                style={{ marginLeft: 17 }}
              >
                <Image
                  src={youtube}
                  rawWidth={450}
                  rawHeight={450}
                  style={{
                    display: 'inline-block',
                    border: 'none',
                    background: 'none',
                    height: 45,
                    width: 45,
                  }}
                  alt="See more videos on YouTube - https://www.youtube.com/user/laurajoyful/videos"
                />
              </Link>
              <Link
                to="https://vimeo.com/laurajoyful"
                style={{ marginLeft: 17 }}
              >
                <Image
                  src={vimeo}
                  rawWidth={450}
                  rawHeight={450}
                  style={{
                    display: 'inline-block',
                    border: 'none',
                    background: 'none',
                    height: 42,
                    width: 42,
                  }}
                  alt="See more videos on Vimeo - https://vimeo.com/laurajoyful"
                />
              </Link>
              <Link
                to="https://soundcloud.com/laura-joy-145472107"
                style={{ marginLeft: 17 }}
              >
                <Image
                  src={soundcloud}
                  rawWidth={450}
                  rawHeight={450}
                  style={{
                    display: 'inline-block',
                    border: 'none',
                    background: 'none',
                    height: 42,
                    width: 42,
                  }}
                  alt="Listen to our dialogues on Soundcloud - https://soundcloud.com/laura-joy-145472107"
                />
              </Link>
              <Link
                to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
                style={{ marginLeft: 17 }}
              >
                <Image
                  src={payu}
                  rawWidth={450}
                  rawHeight={450}
                  style={{
                    display: 'inline-block',
                    border: 'none',
                    background: 'none',
                    height: 42,
                    width: 42,
                  }}
                  alt="Donate or pay fees through PayU - https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
                />
              </Link>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_blank"
                style={{ display: 'inline-block', marginLeft: 17 }}
                className="hover"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="WFXM5RNDGBXL4"
                />
                <input
                  type="image"
                  src={paypal}
                  border="0"
                  name="submit"
                  alt="PayPal – The safer, easier way to pay online!"
                  style={{
                    height: 42,
                    width: 42,
                  }}
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
              <Icon
                type="heart"
                style={{ color: '#D34025', fontSize: '80%' }}
              />{' '}
              by <Link to="https://www.bodhiproject.org/">Bodhi Project</Link>
              <br />
              {data.copyright}
            </p>
          </Col>
        </Row>
      </Container>
    </SemanticFooter>
  )
}

// --------------------------------------------------------------------- Export
export default DesktopFooter
