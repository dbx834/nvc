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
import { Calendar } from 'antd';

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
const pageStyle = css({});
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

        <Container
          noFade
          threeQuarters
          block
          style={{ paddingTop: '3em', paddingBottom: '3em' }}
        >
          <div>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  flexGrow: 20,
                  flexBasis: 0,
                  paddingRight: 20,
                }}
              >
                <div
                  style={{ background: '#665F7B', width: '100%', height: 200 }}
                />
              </div>
              <div
                style={{
                  flexGrow: 20,
                  flexBasis: 0,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <div
                  style={{ background: '#665F7B', width: '100%', height: 200 }}
                />
              </div>
              <div
                style={{
                  flexGrow: 20,
                  flexBasis: 0,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <div
                  style={{ background: '#665F7B', width: '100%', height: 200 }}
                />
              </div>
              <div
                style={{
                  flexGrow: 20,
                  flexBasis: 0,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <div
                  style={{ background: '#665F7B', width: '100%', height: 200 }}
                />
              </div>
              <div
                style={{
                  flexGrow: 20,
                  flexBasis: 0,
                  paddingLeft: 20,
                }}
              >
                <div
                  style={{ background: '#665F7B', width: '100%', height: 200 }}
                />
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  flexGrow: 80,
                  flexBasis: 0,
                  paddingRight: 20,
                  padding: '2em 0px 2em 0px',
                }}
              >
                <Paragraph>
                  Alaudeen was a small boy. He lived in a village in Persia. He
                  played in the streets with his friends often. One day he met a
                  stranger in the road, while he was playing. He said that he
                  was his father’s brother. He had seen him as a small boy. So
                  you didn’t recognize me. "I am your uncle. If you come with
                  me, I will show a wonderful thing" he said in a low voice.
                  Alaudeen saw his face and followed him with confidence.
                </Paragraph>
                <Paragraph>
                  The stranger went into a dark place under a mountain with
                  Alaudeen. He was a good magician. "Here is a wonderful thing
                  in the center of the Cave". He said to Alaudeen. "You can take
                  whatever your want. "At one corner, you will find an old lamp.
                  Bring it to me. Now wear this ring and it will save you from
                  any danger" he said.
                </Paragraph>
              </div>
              <div
                style={{
                  flexGrow: 20,
                  flexBasis: 0,
                  padding: '2em 0px 2em 0px',
                }}
              >
                <ul style={{ padding: 0, listStyle: 'none' }}>
                  <li>
                    <Link to="/">Link 1</Link>
                  </li>
                  <li>
                    <Link to="/">Link 2</Link>
                  </li>
                  <li>
                    <Link to="/">Link 3</Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <H3 caps scale="0.85X">
              Calendar
            </H3>
            <Calendar />
            <Paragraph>
              <Link to="/">See more ⇝</Link>
            </Paragraph>
            <hr />
            <H3 caps scale="0.85X">
              Featured Writings
            </H3>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  flexGrow: 20,
                  flexBasis: 0,
                  paddingRight: 20,
                }}
              >
                <div
                  style={{ background: '#665F7B', width: '100%', height: 400 }}
                />
              </div>
              <div
                style={{
                  flexGrow: 20,
                  flexBasis: 0,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <div
                  style={{ background: '#665F7B', width: '100%', height: 400 }}
                />
              </div>
              <div
                style={{
                  flexGrow: 20,
                  flexBasis: 0,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <div
                  style={{ background: '#665F7B', width: '100%', height: 400 }}
                />
              </div>
            </div>
            <br />
            <br />
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  flexGrow: 20,
                  flexBasis: 0,
                  paddingRight: 20,
                }}
              >
                <div
                  style={{ background: '#665F7B', width: '100%', height: 400 }}
                />
              </div>
              <div
                style={{
                  flexGrow: 20,
                  flexBasis: 0,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <div
                  style={{ background: '#665F7B', width: '100%', height: 400 }}
                />
              </div>
              <div
                style={{
                  flexGrow: 20,
                  flexBasis: 0,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <div
                  style={{ background: '#665F7B', width: '100%', height: 400 }}
                />
              </div>
            </div>
            <Paragraph>
              <Link to="/">See more ⇝</Link>
            </Paragraph>
          </div>
        </Container>
      </Container>
    );
  }
}

IndexPage.propTypes = {};

// ----------------------------------------------------------------------- Export
export default IndexPage;
