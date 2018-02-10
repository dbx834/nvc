// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
// import PropTypes from 'prop-types';
// import _ from 'lodash';
import { css } from 'glamor';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
// import { Row, Col } from 'antd';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import {
  Container,
  OutLink,
  Image,
  HexaGrid as HexaGridX,
} from '@bodhi-project/components';
import { Elements } from '@bodhi-project/typography';
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Styles
import '../style/index.less';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
import indexImage from './assets/index.jpg';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
// const { Fragment } = React;
const { H3, Paragraph } = Elements;
// const { HexaGrid, Hex } = HexaGridX;

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
/**
 * IndexPage
 */
class IndexPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * Standard renderer
   */
  render() {
    return (
      <Container block bleed style={{ padding: 0 }} className={pageStyleClass}>
        {/* SEO */}
        <UpdateTitle title="Coming Soon" />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />

        <Container small block>
          <div className="text-center">
            <H3>Coming Soon</H3>
          </div>
        </Container>
      </Container>
    );
  }
}

IndexPage.propTypes = {};

// ----------------------------------------------------------------------- Export
export default IndexPage;
