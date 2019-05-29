// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types';
// import _ from 'lodash';
import { css } from 'glamor'
import { graphql } from 'gatsby'

import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Gallery from '@bodhi-project/components/lib/gatsby/Gallery'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Img from 'gatsby-image'
import StandardPage from '../components/wrappers/StandardPage'
import PageHeader from '../components/PageHeader'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

const pageData = {
  pageTitle: 'Gallery',
  nakedPageSlug: 'gallery',
  pageAbstract:
    'Joy Living Learning is situated in Auroville, an international community in south India that aims to actualize human unity. Given this enviornment, we are surrounded by opportunities for growth, learning and exploration.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    nvcX56: file(relativePath: { eq: "gallery/nvcX56.jpg" }) {
      ...defaultImage
    }
    nvcX57: file(relativePath: { eq: "gallery/nvcX57.jpg" }) {
      ...defaultImage
    }
    nvcX58: file(relativePath: { eq: "gallery/nvcX58.jpg" }) {
      ...defaultImage
    }
    nvcX1: file(relativePath: { eq: "gallery/nvcX1.jpg" }) {
      ...defaultImage
    }
    nvcX2: file(relativePath: { eq: "gallery/nvcX2.jpg" }) {
      ...defaultImage
    }
    nvcX3: file(relativePath: { eq: "gallery/nvcX3.jpg" }) {
      ...defaultImage
    }
    nvcX4: file(relativePath: { eq: "gallery/nvcX4.jpg" }) {
      ...defaultImage
    }
    nvcX5: file(relativePath: { eq: "gallery/nvcX5.jpg" }) {
      ...defaultImage
    }
    nvcX6: file(relativePath: { eq: "gallery/nvcX6.jpg" }) {
      ...defaultImage
    }
    nvcX7: file(relativePath: { eq: "gallery/nvcX7.jpg" }) {
      ...defaultImage
    }
    nvcX8: file(relativePath: { eq: "gallery/nvcX8.jpg" }) {
      ...defaultImage
    }
    nvcX9: file(relativePath: { eq: "gallery/nvcX9.jpg" }) {
      ...defaultImage
    }
    nvcX10: file(relativePath: { eq: "gallery/nvcX10.jpg" }) {
      ...defaultImage
    }
    nvcX11: file(relativePath: { eq: "gallery/nvcX11.jpg" }) {
      ...defaultImage
    }
    nvcX12: file(relativePath: { eq: "gallery/nvcX12.jpg" }) {
      ...defaultImage
    }
    nvcX13: file(relativePath: { eq: "gallery/nvcX13.jpg" }) {
      ...defaultImage
    }
    nvcX14: file(relativePath: { eq: "gallery/nvcX14.jpg" }) {
      ...defaultImage
    }
    nvcX15: file(relativePath: { eq: "gallery/nvcX15.jpg" }) {
      ...defaultImage
    }
    nvcX16: file(relativePath: { eq: "gallery/nvcX16.jpg" }) {
      ...defaultImage
    }
    nvcX17: file(relativePath: { eq: "gallery/nvcX17.jpg" }) {
      ...defaultImage
    }
    nvcX18: file(relativePath: { eq: "gallery/nvcX18.jpg" }) {
      ...defaultImage
    }
    nvcX19: file(relativePath: { eq: "gallery/nvcX19.jpg" }) {
      ...defaultImage
    }
    nvcX20: file(relativePath: { eq: "gallery/nvcX20.jpg" }) {
      ...defaultImage
    }
    nvcX21: file(relativePath: { eq: "gallery/nvcX21.jpg" }) {
      ...defaultImage
    }
    nvcX22: file(relativePath: { eq: "gallery/nvcX22.jpg" }) {
      ...defaultImage
    }
    nvcX23: file(relativePath: { eq: "gallery/nvcX23.jpg" }) {
      ...defaultImage
    }
    nvcX24: file(relativePath: { eq: "gallery/nvcX24.jpg" }) {
      ...defaultImage
    }
    nvcX25: file(relativePath: { eq: "gallery/nvcX25.jpg" }) {
      ...defaultImage
    }
    nvcX26: file(relativePath: { eq: "gallery/nvcX26.jpg" }) {
      ...defaultImage
    }
    nvcX27: file(relativePath: { eq: "gallery/nvcX27.jpg" }) {
      ...defaultImage
    }
    nvcX28: file(relativePath: { eq: "gallery/nvcX28.jpg" }) {
      ...defaultImage
    }
    nvcX29: file(relativePath: { eq: "gallery/nvcX29.jpg" }) {
      ...defaultImage
    }
    nvcX30: file(relativePath: { eq: "gallery/nvcX30.jpg" }) {
      ...defaultImage
    }
    nvcX31: file(relativePath: { eq: "gallery/nvcX31.jpg" }) {
      ...defaultImage
    }
    nvcX32: file(relativePath: { eq: "gallery/nvcX32.jpg" }) {
      ...defaultImage
    }
    nvcX33: file(relativePath: { eq: "gallery/nvcX33.jpg" }) {
      ...defaultImage
    }
    nvcX34: file(relativePath: { eq: "gallery/nvcX34.jpg" }) {
      ...defaultImage
    }
    nvcX35: file(relativePath: { eq: "gallery/nvcX35.jpg" }) {
      ...defaultImage
    }
    nvcX36: file(relativePath: { eq: "gallery/nvcX36.jpg" }) {
      ...defaultImage
    }
    nvcX37: file(relativePath: { eq: "gallery/nvcX37.jpg" }) {
      ...defaultImage
    }
    nvcX38: file(relativePath: { eq: "gallery/nvcX38.jpg" }) {
      ...defaultImage
    }
    nvcX39: file(relativePath: { eq: "gallery/nvcX39.jpg" }) {
      ...defaultImage
    }
    nvcX40: file(relativePath: { eq: "gallery/nvcX40.jpg" }) {
      ...defaultImage
    }
    nvcX41: file(relativePath: { eq: "gallery/nvcX41.jpg" }) {
      ...defaultImage
    }
    nvcX42: file(relativePath: { eq: "gallery/nvcX42.jpg" }) {
      ...defaultImage
    }
    nvcX43: file(relativePath: { eq: "gallery/nvcX43.jpg" }) {
      ...defaultImage
    }
    nvcX44: file(relativePath: { eq: "gallery/nvcX44.jpg" }) {
      ...defaultImage
    }
    nvcX45: file(relativePath: { eq: "gallery/nvcX45.jpg" }) {
      ...defaultImage
    }
    nvcX46: file(relativePath: { eq: "gallery/nvcX46.jpg" }) {
      ...defaultImage
    }
    nvcX47: file(relativePath: { eq: "gallery/nvcX47.jpg" }) {
      ...defaultImage
    }
    nvcX48: file(relativePath: { eq: "gallery/nvcX48.jpg" }) {
      ...defaultImage
    }
    nvcX49: file(relativePath: { eq: "gallery/nvcX49.jpg" }) {
      ...defaultImage
    }
    nvcX50: file(relativePath: { eq: "gallery/nvcX50.jpg" }) {
      ...defaultImage
    }
    nvcX51: file(relativePath: { eq: "gallery/nvcX51.jpg" }) {
      ...defaultImage
    }
    nvcX52: file(relativePath: { eq: "gallery/nvcX52.jpg" }) {
      ...defaultImage
    }
    nvcX53: file(relativePath: { eq: "gallery/nvcX53.jpg" }) {
      ...defaultImage
    }
    nvcX54: file(relativePath: { eq: "gallery/nvcX54.jpg" }) {
      ...defaultImage
    }
    nvcX55: file(relativePath: { eq: "gallery/nvcX55.jpg" }) {
      ...defaultImage
    }
    nvcX59: file(relativePath: { eq: "gallery/nvcX59.jpg" }) {
      ...defaultImage
    }
    nvcX60: file(relativePath: { eq: "gallery/nvcX60.jpg" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
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

  '@media(max-width: 992px)': {
    '& hr': {
      borderTop: '1.75px solid #B43808',
      marginBottom: 4,
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
class Page extends React.Component {
  /** standard renderer */
  render() {
    return (
      <StandardPage
        className={pageStyle}
        seoData={seoData}
        {...pick(this.props, ['location'])}
      >
        <PageHeader title="Gallery" />
        <hr />
        <Gallery
          data={this.props.data}
          lookup="nvcX"
          columns={{ min: 2, max: 3 }}
          Img={Img}
        />
      </StandardPage>
    )
  }
}

Page.propTypes = {}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
