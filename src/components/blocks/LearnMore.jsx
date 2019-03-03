// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'
import map from 'lodash/map'
import pick from 'lodash/pick'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'
import Video from '@bodhi-project/components/lib/Video'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'

import keygen from '../../methods/keygen'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '&#learn-more': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    WebkitBoxOrient: 'horizontal',
    WebkitBoxDirection: 'normal',
    WebkitFlexDirection: 'row',
    WebkitBoxLines: 'multiple',
    WebkitFlexWrap: 'wrap',
    WebkitBoxPack: 'justify',
    WebkitJustifyContent: 'space-between',

    '& .hex': {
      boxShadow: 'none ',
      padding: '0px ',
      paddingBottom: '1vh',
      paddingRight: '1vh',

      boxSizing: 'border-box',
      display: 'flex',
      transform: 'translateZ(0)',
      WebkitTransform: 'translateZ(0)',

      '& > div': {
        width: '100%',
      },

      '@media (min-width: 450px)': {
        flex: '0 0 50%',
        maxWidth: '50%',
        boxShadow: '0 1px 0 0 #f6f2f8',
        WebkitFlex: '0 0 50%',

        '&:nth-child(4)': {
          boxShadow: 'none',
        },

        '&:nth-child(5)': {
          boxShadow: 'none',
        },

        '&:nth-child(6)': {
          boxShadow: 'none',
        },
      },

      '& a': {
        display: 'block',
        height: '100%',
        width: '100%',
        borderBottom: 'none',
        color: '#4a4a4a',

        '&:hover': {
          color: '#4a4a4a',
          borderBottom: 'none',
        },
        '&:visited': {
          textDecoration: 'none',
        },
        '&:link': {
          textDecoration: 'none',
        },
        '&:active': {
          textDecoration: 'none',
        },
      },

      '& div': {
        WebkitTransition: 'all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',
        transition: 'all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      },

      '& p': {
        position: 'absolute',
        width: '96%',
        margin: '0px 2% !important',
        textAlign: 'center',
        background: 'rgba(248, 242, 230, 0.9)',
        color: '#4a4a4a !important',
        bottom: 10,
        left: 0,
        padding: 10,
        fontFamily: 'futura-pt, sans-serif',
        lineHeight: 1,

        '& span': {
          fontSize: '110%',
        },
      },
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
    const { data } = this.props

    return (
      <div {...pick(this.props, ['className'])}>
        <p className="mask-h3" style={{ marginBottom: 10 }}>
          Further Links…
        </p>
        <div id="learn-more" className={style}>
          {map(data, ({ linkTo, title, image, video }) => {
            return (
              <div className="hex" key={keygen()}>
                {isUndefined(video) ? (
                  <Link to={linkTo}>
                    <Image
                      src={image}
                      rawWidth={1440}
                      rawHeight={900}
                      style={{
                        height: 'auto',
                        width: '100%',
                        border: 0,
                        background: '#4a4a4a',
                      }}
                      alt={title}
                    />
                    <p>
                      <span>{title}</span>
                    </p>
                  </Link>
                ) : (
                  <Video url={video} />
                )}
              </div>
            )
          })}
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
