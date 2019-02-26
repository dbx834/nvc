// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types';
// import _ from 'lodash';
import { css } from 'glamor'

import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Images from '@bodhi-project/components/lib/Images'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'
import PageHeader from '../components/PageHeader'

import seoHelper from '../methods/seoHelper'

import nvcX1 from '../assets/gallery/nvcX1.jpg'
import nvcX2 from '../assets/gallery/nvcX2.jpg'
import nvcX4 from '../assets/gallery/nvcX4.jpg'
import nvcX5 from '../assets/gallery/nvcX5.jpg'
import nvcX6 from '../assets/gallery/nvcX6.jpg'
import nvcX7 from '../assets/gallery/nvcX7.jpg'
import nvcX8 from '../assets/gallery/nvcX8.jpg'
import nvcX9 from '../assets/gallery/nvcX9.jpg'
import nvcX10 from '../assets/gallery/nvcX10.jpg'
import nvcX11 from '../assets/gallery/nvcX11.jpg'
import nvcX12 from '../assets/gallery/nvcX12.jpg'
import nvcX13 from '../assets/gallery/nvcX13.jpg'
import nvcX14 from '../assets/gallery/nvcX14.jpg'
import nvcX15 from '../assets/gallery/nvcX15.jpg'
import nvcX16 from '../assets/gallery/nvcX16.jpg'
import nvcX17 from '../assets/gallery/nvcX17.jpg'
import nvcX18 from '../assets/gallery/nvcX18.jpg'
import nvcX19 from '../assets/gallery/nvcX19.jpg'
import nvcX20 from '../assets/gallery/nvcX20.jpg'
import nvcX21 from '../assets/gallery/nvcX21.jpg'
import nvcX22 from '../assets/gallery/nvcX22.jpg'
import nvcX23 from '../assets/gallery/nvcX23.jpg'
import nvcX24 from '../assets/gallery/nvcX24.jpg'
import nvcX25 from '../assets/gallery/nvcX25.jpg'
import nvcX26 from '../assets/gallery/nvcX26.jpg'
import nvcX27 from '../assets/gallery/nvcX27.jpg'
import nvcX28 from '../assets/gallery/nvcX28.jpg'
import nvcX29 from '../assets/gallery/nvcX29.jpg'
import nvcX30 from '../assets/gallery/nvcX30.jpg'
import nvcX32 from '../assets/gallery/nvcX32.jpg'
import nvcX33 from '../assets/gallery/nvcX33.jpg'
import nvcX34 from '../assets/gallery/nvcX34.jpg'
import nvcX35 from '../assets/gallery/nvcX35.jpg'
import nvcX36 from '../assets/gallery/nvcX36.jpg'
import nvcX37 from '../assets/gallery/nvcX37.jpg'
import nvcX38 from '../assets/gallery/nvcX38.jpg'
import nvcX39 from '../assets/gallery/nvcX39.jpg'
import nvcX40 from '../assets/gallery/nvcX40.jpg'
import nvcX41 from '../assets/gallery/nvcX41.jpg'
import nvcX42 from '../assets/gallery/nvcX42.jpg'
import nvcX43 from '../assets/gallery/nvcX43.jpg'
import nvcX44 from '../assets/gallery/nvcX44.jpg'
import nvcX45 from '../assets/gallery/nvcX45.jpg'
import nvcX46 from '../assets/gallery/nvcX46.jpg'
import nvcX47 from '../assets/gallery/nvcX47.jpg'
import nvcX48 from '../assets/gallery/nvcX48.jpg'
import nvcX49 from '../assets/gallery/nvcX49.jpg'
import nvcX50 from '../assets/gallery/nvcX50.jpg'
import nvcX51 from '../assets/gallery/nvcX51.jpg'
import nvcX52 from '../assets/gallery/nvcX52.jpg'
import nvcX53 from '../assets/gallery/nvcX53.jpg'
import nvcX54 from '../assets/gallery/nvcX54.jpg'
import nvcX55 from '../assets/gallery/nvcX55.jpg'
import nvcX56 from '../assets/gallery/nvcX56.jpg'
import nvcX57 from '../assets/gallery/nvcX57.jpeg'
import nvcX58 from '../assets/gallery/nvcX58.jpeg'
import nvcX59 from '../assets/gallery/nvcX59.jpg'

const photos = [
  { src: nvcX56, width: 600, height: 214 },
  { src: nvcX57, width: 600, height: 400 },
  { src: nvcX58, width: 600, height: 400 },
  { src: nvcX1, width: 600, height: 450 },
  { src: nvcX2, width: 600, height: 353 },
  { src: nvcX4, width: 600, height: 800 },
  { src: nvcX5, width: 600, height: 400 },
  { src: nvcX6, width: 600, height: 803 },
  { src: nvcX7, width: 600, height: 401 },
  { src: nvcX8, width: 600, height: 818 },
  { src: nvcX9, width: 600, height: 450 },
  { src: nvcX10, width: 600, height: 433 },
  { src: nvcX11, width: 600, height: 450 },
  { src: nvcX12, width: 600, height: 373 },
  { src: nvcX13, width: 600, height: 800 },
  { src: nvcX14, width: 600, height: 530 },
  { src: nvcX15, width: 600, height: 800 },
  { src: nvcX16, width: 600, height: 800 },
  { src: nvcX17, width: 600, height: 448 },
  { src: nvcX18, width: 600, height: 1077 },
  { src: nvcX19, width: 600, height: 448 },
  { src: nvcX20, width: 600, height: 450 },
  { src: nvcX21, width: 600, height: 367 },
  { src: nvcX22, width: 600, height: 368 },
  { src: nvcX23, width: 600, height: 377 },
  { src: nvcX24, width: 600, height: 450 },
  { src: nvcX25, width: 600, height: 450 },
  { src: nvcX26, width: 600, height: 400 },
  { src: nvcX27, width: 600, height: 328 },
  { src: nvcX28, width: 600, height: 596 },
  { src: nvcX29, width: 600, height: 368 },
  { src: nvcX30, width: 600, height: 465 },
  { src: nvcX32, width: 600, height: 333 },
  { src: nvcX33, width: 600, height: 356 },
  { src: nvcX34, width: 600, height: 450 },
  { src: nvcX35, width: 600, height: 396 },
  { src: nvcX36, width: 600, height: 450 },
  { src: nvcX37, width: 600, height: 800 },
  { src: nvcX38, width: 600, height: 450 },
  { src: nvcX39, width: 600, height: 450 },
  { src: nvcX40, width: 600, height: 414 },
  { src: nvcX41, width: 600, height: 450 },
  { src: nvcX42, width: 600, height: 450 },
  { src: nvcX43, width: 600, height: 450 },
  { src: nvcX44, width: 600, height: 461 },
  { src: nvcX45, width: 600, height: 800 },
  { src: nvcX46, width: 600, height: 459 },
  { src: nvcX47, width: 600, height: 613 },
  { src: nvcX48, width: 600, height: 431 },
  { src: nvcX49, width: 600, height: 448 },
  { src: nvcX50, width: 600, height: 448 },
  { src: nvcX51, width: 600, height: 450 },
  { src: nvcX52, width: 600, height: 450 },
  { src: nvcX53, width: 600, height: 455 },
  { src: nvcX54, width: 600, height: 497 },
  { src: nvcX55, width: 600, height: 899 },
]

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
        <Images photos={photos} loader="gradient" />
      </StandardPage>
    )
  }
}

Page.propTypes = {}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
