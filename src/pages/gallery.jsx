// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react';
// import PropTypes from 'prop-types';
// import _ from 'lodash';
import { css } from 'glamor';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from 'gatsby-link';
// import { Row, Col } from 'antd';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import { Images } from '@bodhi-project/components';
import { Elements } from '@bodhi-project/typography';
import {
  Page as SemanticPage,
  // Section,
  // Article,
  // Header,
  // Footer,
} from '@bodhi-project/semantic-webflow';
import {
  // --------------- Basic
  UpdateTitle,
  GeneralMeta,
  // --------------- Twitter
  TwitterSummaryCard,
  // --------------- Open Graph
  OpenGraphSummary,
  // --------------- Schema.org JSON-LD
  WebpageSchema,
  BreadcrumbSchema,
} from '@bodhi-project/seo';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
import indexImage from './assets/index.jpg';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
const { Fragment } = React;
const { H1 } = Elements;

const photos = [
  {
    src: 'https://source.unsplash.com/2ShvY8Lf6l0/1440x900',
    width: 1440,
    height: 900,
  },
  {
    src: 'https://source.unsplash.com/Dm-qxdynoEc/900x900',
    width: 900,
    height: 900,
  },
  {
    src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
    width: 600,
    height: 800,
  },
  {
    src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
    width: 600,
    height: 800,
  },
  {
    src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
    width: 600,
    height: 800,
  },
  {
    src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
    width: 800,
    height: 600,
  },
  {
    src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
    width: 600,
    height: 800,
  },
  {
    src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
    width: 800,
    height: 600,
  },
  {
    src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
    width: 800,
    height: 600,
  },
  {
    src: 'https://source.unsplash.com/CSID46Dq4LA/800x599',
    width: 800,
    height: 600,
  },
  {
    src: 'https://source.unsplash.com/7bwQXzbF6KE/800x599',
    width: 800,
    height: 600,
  },
  {
    src: 'https://source.unsplash.com/hwyGkHopSRE/1200x800',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://source.unsplash.com/_QoAuZGAoPY/600x900',
    width: 600,
    height: 900,
  },
  {
    src: 'https://source.unsplash.com/VW8MUbHyxCU/1600x1200',
    width: 1600,
    height: 1200,
  },
  {
    src: 'https://source.unsplash.com/r5H2y4nUKAk/900x600',
    width: 900,
    height: 600,
  },
  {
    src: 'https://source.unsplash.com/2gk6BDXSxlQ/800x599',
    width: 800,
    height: 600,
  },
  {
    src: 'https://source.unsplash.com/lRSChvh1Mhs/600x600',
    width: 600,
    height: 600,
  },
  {
    src: 'https://source.unsplash.com/vddccTqwal8/900x1600',
    width: 900,
    height: 1600,
  },
  {
    src: 'https://source.unsplash.com/2Bjq3A7rGn4/800x1200',
    width: 800,
    height: 1200,
  },
  {
    src: 'https://source.unsplash.com/5Rhl-kSRydQ/2700x900',
    width: 2700,
    height: 900,
  },
  {
    src: 'https://source.unsplash.com/YN_JWPDYVoM/300x600',
    width: 300,
    height: 600,
  },
  {
    src: 'https://source.unsplash.com/X0OoHrPvgXE/1400x900',
    width: 1400,
    height: 900,
  },
  {
    src: 'https://source.unsplash.com/pHANr-CpbYM/1200x1600',
    width: 1200,
    height: 1600,
  },
  {
    src: 'https://source.unsplash.com/lpjb_UMOyx8/900x1800',
    width: 900,
    height: 1800,
  },
];

// ------------------------------------------------------------------------------
// -------------------------------------------------------------------------- SEO
// ------------------------------------------------------------------------------
const generalMetaData = {
  description: 'Launch Kit is an opionated GatsbyJS Starter kit.',
  keywords: 'GatsbyJS, React, Netlify',
  image: indexImage,
};

const twitterSummaryCardData = {
  site: 'Launch Kit',
  creator: 'Bodhi Project',
  title: 'Launch Kit',
  description: 'Launch Kit is an opionated GatsbyJS Starter kit.',
  image: indexImage,
};

const openGraphSummaryData = {
  siteName: 'Launch Kit',
  url: 'https://launch-kit.bodhiproject.org/',
  title: 'Launch Kit',
  description: 'Launch Kit is an opionated GatsbyJS Starter kit.',
  image: indexImage,
};

const webpageSchemaData = {
  url: 'https://launch-kit.bodhiproject.org/',
  name: 'Launch Kit',
  description: 'Launch Kit is an opionated GatsbyJS Starter kit.',
  author: 'Bodhi Project',
  publisher: 'Bodhi Project',
  image: indexImage,
};

const breadcrumbSchemaData = {
  breadcrumbs: [{ name: 'Home', url: 'https://launch-kit.bodhiproject.org/' }],
};

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({});
const pageStyleClass = pageStyle.toString();

// ----------------------------------------------------------------------- Component
/** Page */
class Page extends React.Component {
  /** standard renderer */
  render() {
    return (
      <Fragment>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title="Coming Soon" />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <SemanticPage className={`${pageStyleClass}`}>
          <H1>Gallery</H1>
          <Images photos={photos} loader="gradient" />
        </SemanticPage>
      </Fragment>
    );
  }
}

Page.propTypes = {};

// ----------------------------------------------------------------------- Export
export default Page;
