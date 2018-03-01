// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { css } from 'glamor';
import moment from 'moment';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
import { Tooltip } from 'antd';
import {
  Image,
  TetraGrid as TetraGridX,
  HexaGrid as HexaGridX,
} from '@bodhi-project/components';
import { Elements, applyRhythm } from '@bodhi-project/typography';
import {
  Page,
  // Section,
  Article,
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import ogX from './assets/ogX.jpg';
import twitterSummaryX from './assets/twitterSummaryX.jpg';
import packageJson from '../../package.json';

import deepening from './assets/deepening.png';
import introduction from './assets/introduction.png';
import practiceGroup from './assets/practiceGroup.png';
import webinar from './assets/webinar.png';
import workshop from './assets/workshop.png';
import nvc from './assets/nvc.png';
import rc from './assets/rc.png';
import dummy1 from './assets/dummy1.jpg';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { H1, H3, Paragraph } = Elements;
const { data } = packageJson;
const { TetraGrid } = TetraGridX;
const THex = TetraGridX.Hex;
const { HexaGrid } = HexaGridX;
const HHex = HexaGridX.Hex;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageTitle = 'About Us';
const pageSlug = 'about';
const pageAbstract =
  "Digital Media Initiatives has a small, close-knit and formidable team with expertise in the domains of technology, design, teaching, marketing, finance, management and core banking. Our passion for quality, aesthetics and social transformation informs what we do every day, whether it's building innovative technology tools, connecting with communities, or dreaming up new things.";

const generalMetaData = {
  description: pageAbstract,
  keywords: data.websiteKeywords,
  image: ogX,
};

const twitterSummaryCardData = {
  site: data.websiteName,
  creator: data.org.name,
  title: pageTitle,
  description: pageAbstract,
  image: twitterSummaryX,
};

const openGraphSummaryData = {
  siteName: data.websiteName,
  url: `${data.websiteUrl}${pageSlug}`,
  title: pageTitle,
  description: pageAbstract,
  image: ogX,
};

const webpageSchemaData = {
  url: `${data.websiteUrl}${pageSlug}`,
  name: pageTitle,
  description: pageAbstract,
  author: data.org.name,
  publisher: data.org.name,
  image: ogX,
};

const breadcrumbSchemaData = {
  breadcrumbs: [
    { name: 'Home', url: `${data.websiteUrl}` },
    { name: pageTitle, url: `${data.websiteUrl}${pageSlug}` },
  ],
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageWrapper = css({
  '& .constrain': {
    ...applyRhythm({ maxWidth: '27X' }),
  },

  '& .hex': {
    boxShadow: 'none ',
    padding: '0px ',
    paddingBottom: '1vh',
    paddingRight: '1vh',

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

    '& h3': {
      position: 'absolute',
      width: '100%',
      margin: '0px !important',
      textAlign: 'center',
      background: '#f9ba59',
      color: '#4a4a4a',
      bottom: -100,
      left: 0,
      WebkitTransition: 'all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      transition: 'all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      paddingTop: '10px',
      paddingBottom: '10px',
      fontWeight: 400,
    },

    '@media(max-width: 768px)': {
      '& h3': {
        position: 'relative',
        bottom: 0,
      },
    },

    '& div:hover': {
      '& h3': {
        bottom: 0,
      },
    },
  },

  '& .eHex': {
    padding: 0,
    border: '1px solid #4a4a4a !important',
    borderRadius: 8,
    background: '#f6f2f8',
    marginBottom: 30,

    '@media (min-width: 768px)': {
      flex: '0 0 32.333%',
      maxWidth: '32.333%',
      WebkitFlex: '0 0 32.333%',
      marginRight: '1%',
      marginBottom: '1%',
    },

    '& .abstract': {
      padding: '9px 12px',
      marginBottom: 0,

      '& .title': {
        fontFamily: 'futura-pt, sans-serif !important',
        fontWeight: 700,
        letterSpacing: '-0.08775ex',
      },

      '& .date': {
        fontFamily: 'futura-pt, sans-serif !important',
      },
    },
  },
  '& .blank': {
    visibility: 'hidden',
  },

  '& .cover': {
    zIndex: -1,
  },

  '& ul.event-icons': {
    listStyle: 'none',
    padding: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,

    '& li': {
      margin: '0 !important',
      display: 'inline-block',

      '& .icon': {
        border: 0,
        marginTop: 2,
        marginRight: 2,
      },
    },
  },
});
const pageStyleClass = pageWrapper.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** inArray */
const inArray = (array, value) => {
  let rx = false;
  if (_.indexOf(array, value) >= 0) {
    rx = true;
  }
  return rx;
};

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** IndexPage */
class IndexPage extends React.Component {
  /** standard renderer */
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    // get only events
    const eventNodes = [];
    _.map(postEdges, ({ node }) => {
      if (_.startsWith(_.trim(node.fields.route), 'events') === true) {
        eventNodes.push({ node });
      }
    });
    const todayInt = parseInt(moment().format('YYYYMMDD'), 10);
    let totalEvents = 0;

    return (
      <Fragment>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title={pageTitle} />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <Page className={`${pageStyleClass}`}>
          <div className="constrain">
            <H1>Joy Living Learning</H1>
            <Paragraph scale="1.375X">
              <i>Nonviolent Communication & Restorative Circles in India</i>
            </Paragraph>
            <Image
              src={''}
              style={{
                height: '50vh',
                width: '100%',
                border: 0,
                background: '#4a4a4a',
              }}
              loader="gradient"
              className="mask-p"
            />
            <Paragraph>
              Abstract - blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah.
            </Paragraph>
            <Paragraph style={{ marginBottom: 0 }}>
              <Link to="/nonviolent-communication">Learn More ⇾</Link>
            </Paragraph>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <H1>Learn More...</H1>
            <Paragraph style={{ marginBottom: 30 }}>
              Abstract - blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah.
            </Paragraph>
            <TetraGrid>
              <THex className="hex">
                <Link to="/mediation">
                  <Image
                    src={''}
                    rawWidth={900}
                    rawHeight={900}
                    style={{
                      height: '33vh',
                      width: '100%',
                      border: 0,
                      background: '#4a4a4a',
                    }}
                  />
                  <H3 style={{ lineHeight: 1 }}>Something 1</H3>
                </Link>
              </THex>
              <THex className="hex">
                <Link to="/mediation">
                  <Image
                    src={''}
                    rawWidth={900}
                    rawHeight={900}
                    style={{
                      height: '33vh',
                      width: '100%',
                      border: 0,
                      background: '#4a4a4a',
                    }}
                  />
                  <H3 style={{ lineHeight: 1 }}>Something 2</H3>
                </Link>
              </THex>
              <THex className="hex">
                <Link to="/mediation">
                  <Image
                    src={''}
                    rawWidth={900}
                    rawHeight={900}
                    style={{
                      height: '33vh',
                      width: '100%',
                      border: 0,
                      background: '#4a4a4a',
                    }}
                  />
                  <H3 style={{ lineHeight: 1 }}>Something 3</H3>
                </Link>
              </THex>
              <THex className="hex">
                <Link to="/mediation">
                  <Image
                    src={''}
                    rawWidth={900}
                    rawHeight={900}
                    style={{
                      height: '33vh',
                      width: '100%',
                      border: 0,
                      background: '#4a4a4a',
                    }}
                  />
                  <H3 style={{ lineHeight: 1 }}>Something 4</H3>
                </Link>
              </THex>
            </TetraGrid>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <H1>Upcoming Events...</H1>
            <Paragraph style={{ marginBottom: 30 }}>
              Abstract - blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah.
            </Paragraph>
          </div>
          <HexaGrid id="events-grid">
            {_.map(eventNodes, ({ node }, index) => {
              const { frontmatter } = node;
              const mDate = moment(frontmatter.date);
              const humanDate = mDate.format('dddd, MMMM Do YYYY');
              const { tags } = frontmatter;
              const when = moment(mDate).fromNow();
              const { fields } = node;
              const { route } = fields;
              const xDate = parseInt(mDate.format('YYYYMMDD'), 10);

              if (todayInt <= xDate) {
                totalEvents += 1;
                return (
                  <HHex className="eHex" key={humanDate}>
                    <Article>
                      <ul className="event-icons">
                        {inArray(tags, 'nvc') && (
                          <li>
                            <Tooltip title="Nonviolent Communication">
                              <div>
                                <Image
                                  src={nvc}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                        {inArray(tags, 'rc') && (
                          <li>
                            <Tooltip title="Restorative Circle">
                              <div>
                                <Image
                                  src={rc}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                        {inArray(tags, 'introduction') && (
                          <li>
                            <Tooltip title="Introduction">
                              <div>
                                <Image
                                  src={introduction}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                        {inArray(tags, 'deepening') && (
                          <li>
                            <Tooltip title="Deepening">
                              <div>
                                <Image
                                  src={deepening}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                        {inArray(tags, 'workshop') && (
                          <li>
                            <Tooltip title="Workshop">
                              <div>
                                <Image
                                  src={workshop}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                        {inArray(tags, 'practice group') && (
                          <li>
                            <Tooltip title="Practice group">
                              <div>
                                <Image
                                  src={practiceGroup}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                        {inArray(tags, 'webinar') && (
                          <li>
                            <Tooltip title="Webinar">
                              <div>
                                <Image
                                  src={webinar}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                      </ul>
                      <Image
                        src={dummy1}
                        rawHeight={1400}
                        rawWidth={2100}
                        className="cover"
                        style={{
                          height: 'auto',
                          width: '100%',
                          border: 0,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        }}
                        loader="gradient"
                      />
                      <Paragraph className="abstract">
                        <Tooltip title={when} placement="topLeft">
                          <span className="title" style={{ fontSize: '110%' }}>
                            {frontmatter.title}
                          </span>
                          <br />
                          <small className="date">
                            <i>{humanDate}</i>
                          </small>
                        </Tooltip>
                        <br />
                        <br />
                        {frontmatter.abstract}
                        <br />
                        <br />
                        <small className="readmore">
                          <Link to={route}>Read more ⇾</Link>
                        </small>
                      </Paragraph>
                    </Article>
                  </HHex>
                );
              }
            })}
            {_.map(_.times(3 - totalEvents % 3, String), x => {
              return (
                <HHex className="hex blank" key={x}>
                  <div>&nbsp;</div>
                </HHex>
              );
            })}
          </HexaGrid>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Page>
      </Fragment>
    );
  }
}

IndexPage.propTypes = {};

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            route
          }
          frontmatter {
            abstract
            title
            cover
            date
            category
            tags
          }
        }
      }
    }
  }
`;
/* eslint-enable no-undef */

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default IndexPage;
