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
// import { Image } from '@bodhi-project/components';
import { Elements } from '@bodhi-project/typography';
import {
  Page,
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
const { H3, Paragraph } = Elements;

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
const pageStyle = css({
  // «««««««««««««««««««««««««««««««««««««««««««««««««««««««««« HR
  '& hr': {
    border: '2px solid #363636',
    '@media(min-width: 800px)': {
      border: '3px solid #363636',
    },
    '@media(min-width: 1250px)': {
      border: '4px solid #363636',
    },
  },
});
const pageStyleClass = pageStyle.toString();

// ----------------------------------------------------------------------- Component
/** IndexPage */
class IndexPage extends React.Component {
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
        <Page className={`${pageStyleClass} text-center`}>
          <hr />
          <H3>Coming Soon</H3>
        </Page>
      </Fragment>
    );
  }
}

IndexPage.propTypes = {};

// ----------------------------------------------------------------------- Export
export default IndexPage;
