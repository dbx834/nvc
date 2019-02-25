// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'
// import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'

import Tooltip from 'antd/lib/tooltip'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/tooltip/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../Link'

import domestic from '../../../assets/domestic.png'
import international from '../../../assets/international.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styles = css({
  '& .hover': {
    borderBottom: '1.625px solid transparent',

    '&:hover': {
      color: '#b43808',
      borderBottom: '1.625px solid #b43808',
    },
  },

  '& .ant-btn-primary': {
    backgroundColor: '#b43808',
    borderColor: '#b43808',

    '&:hover': {
      backgroundColor: '#b43808',
      borderColor: '#b43808',
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** LearnMore */
class LearnMore extends React.Component {
  /** standard renderer */
  render() {
    return (
      <div className={styles}>
        <h1>Fee Payment</h1>
        <p style={{ marginTop: 0 }}>
          You may pay your fees here, or directly on the event page you’re
          registering for.
        </p>
        <p>
          Select the Domestic option for Indian bank/credit cards, or the
          International option for foreign bank/credit cards.
        </p>
        <div className="mask-p">
          <br />
          <Link
            to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
            style={{ marginRight: 17 }}
            className="hover"
          >
            <Tooltip title="Indian Card">
              <div style={{ display: 'inline-block' }}>
                <Image
                  src={domestic}
                  rawHeight={450}
                  rawWidth={450}
                  className="icon"
                  style={{
                    height: 65,
                    width: 65,
                    display: 'inline-block',
                    background: 'transparent',
                    border: 'unset',
                  }}
                />
              </div>
            </Tooltip>
          </Link>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_blank"
            style={{ display: 'inline-block' }}
            className="hover"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="WFXM5RNDGBXL4"
            />
            <Tooltip title="International Card">
              <input
                type="image"
                src={international}
                border="0"
                name="submit"
                alt="PayPal – The safer, easier way to pay online!"
                style={{
                  height: 65,
                  width: 65,
                }}
              />
            </Tooltip>
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </div>
    )
  }
}

LearnMore.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default LearnMore
