// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import DisqusComments from '@bodhi-project/components/lib/DisqusComments'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/collapse/style/css'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  position: 'relative',

  '& .chirpy': {
    width: 90,
    height: 60,
    position: 'absolute',
    top: -39,
    right: 0,
    zIndex: 100,
  },

  '&.simple': {
    '& aside': {
      background: '#fef3ef !important',
      paddingLeft: '16px !important',
      paddingRight: '16px !important',
      paddingTop: '8px !important',
      // paddingBottom: '8px !important',
      border: '1px solid #b43808 !important',
      borderRadius: '8px !important',

      '& > p:nth-child(1)': {
        display: 'none',
      },

      '& > p:nth-child(2)': {
        marginTop: '0px !important',
      },
    },
  },

  '& .ant-collapse-borderless': {
    background: 'transparent !important',
    borderColor: 'transparent !important',

    '& .ant-collapse-item': {
      background: 'transparent !important',
      borderColor: 'transparent !important',

      '& .ant-collapse-header': {
        background: '#fef3ef !important',
        border: '1px solid #b43808 !important',
        paddingLeft: '16px !important',
        paddingRight: '16px !important',
        paddingTop: '8px !important',
        paddingBottom: '8px !important',
        borderRadius: '8px !important',
        marginBottom: '10px !important',
        display: 'flex',
        alignItems: 'flex-start',

        '& .anticon': {
          verticalAlign: 'unset !important',
          top: 'unset !important',
          transform: 'unset !important',
          lineHeight: '28px !important',
        },

        '& > div': {
          '& > p': {
            '& > span': {
              fontSize: '90%',
            },
          },
        },
      },

      '& .ant-collapse-content-active': {
        background: '#fef3ef !important',
        paddingLeft: '16px !important',
        paddingRight: '16px !important',
        paddingTop: '8px !important',
        paddingBottom: '8px !important',
        border: '1px solid #b43808 !important',
        borderRadius: '8px !important',

        '& .ant-collapse-content-box': {
          padding: '0px !important',
        },
      },
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
const query = graphql`
  query {
    chirpy: file(relativePath: { eq: "chirpy.png" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * [description]
 * @return {[type]} [description]
 */
const DisqusCommentsX = ({
  pageData,
  collapsible = true,
  text = [
    <p>
      <strong>Please share your thoughts and inspiration...</strong>
    </p>,
  ],
}) => {
  return (
    <div
      className={`${collapsible === false ? 'simple' : 'collapse'} ${style}`}
    >
      <StaticQuery
        query={query}
        render={data => (
          <div className="chirpy">
            <Img fluid={data.chirpy.childImageSharp.fluid} />
          </div>
        )}
      />
      <DisqusComments
        data={{
          websiteUrl: 'https://www.joylivinglearning.org/',
          disqusConfig: {
            disqusShortname: 'joylivinglearning',
          },
        }}
        pageData={pageData}
        text={text}
        collapsible={collapsible}
      />
    </div>
  )
}

// About.propTypes = {}

// --------------------------------------------------------------------- Export
export default DisqusCommentsX
