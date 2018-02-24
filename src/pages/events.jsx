// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { css } from 'glamor';
import moment from 'moment';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
import { Calendar, Tooltip, Popover } from 'antd';
import {
  Page,
  // Section,
  Article,
  // Header,
  // Footer,
} from '@bodhi-project/semantic-webflow';
import { Image, HexaGrid as HexaGridX } from '@bodhi-project/components';
import { Elements, applyRhythm } from '@bodhi-project/typography';
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
  EventSchema,
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
const { data } = packageJson;
const { Fragment } = React;
const { H1, H2, Paragraph } = Elements;
const { HexaGrid, Hex } = HexaGridX;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageTitle = 'Events';
const pageSlug = 'events';
const pageAbstract = 'Events abstract...';

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
const pageStyle = css({
  ...applyRhythm({ maxWidth: '40X' }),
  '& .hex': {
    padding: 0,
    border: '1px solid #4a4a4a !important',
    borderRadius: 8,
    background: '#f6f2f8',
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
const pageStyleClass = pageStyle.toString();

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
/** EventsAndCalendar */
class EventsAndCalendar extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    // get only events
    const eventNodes = [];
    const dates = [];
    _.map(postEdges, ({ node }) => {
      if (_.startsWith(_.trim(node.fields.route), 'events') === true) {
        eventNodes.push({ node });
        dates.push({ date: moment(node.frontmatter.date, 'YYYY-MM-DD'), node });
      }
    });

    /** renders each date */
    const dateCellRender = value => {
      let frag = <Fragment />;
      _.map(dates, ({ date, node }) => {
        const { frontmatter } = node;
        const { title } = frontmatter;
        if (value.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')) {
          frag = <span>{title}</span>;
        }
      });
      return frag;
    };

    /** renders each month */
    const monthCellRender = value => {
      let frag = <Fragment />;
      let totalEvents = 0;
      _.map(dates, date => {
        if (value.format('YYYY-MM') === date.format('YYYY-MM')) {
          totalEvents += 1;
        }
      });
      if (totalEvents > 0) {
        frag = <span>{totalEvents}</span>;
      }
      return frag;
    };

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
        <Page className={pageStyleClass}>
          <H1>Event Calendar</H1>
          <Calendar
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
          />
          <br />
          <br />
          <H1>Events</H1>
          <HexaGrid id="events-grid">
            {_.map(eventNodes, ({ node }, index) => {
              let eventSchemaData = null;
              const { frontmatter } = node;
              const mDate = moment(frontmatter.date);
              const humanDate = mDate.format('dddd, MMMM Do YYYY');
              const { tags } = frontmatter;
              const when = moment(mDate).fromNow();

              if (index <= 30) {
                const startDate = mDate.format();
                const endDate = mDate.add(23, 'hours').format();
                const { orgLocation } = data;
                const { route } = node.fields;

                eventSchemaData = {
                  name: frontmatter.title,
                  url: `${data.nakedWebsiteUrl}${route}`,
                  description: frontmatter.abstract,
                  startDate,
                  endDate,
                  locationName: orgLocation.locationName,
                  locationUrl: orgLocation.locationUrl,
                  streetAddress: orgLocation.streetAddress,
                  addressLocality: orgLocation.addressLocality,
                  addressRegion: orgLocation.addressRegion,
                  postalCode: orgLocation.postalCode,
                  addressCountry: orgLocation.addressCountry,
                  image: ogX,
                };
              }

              return (
                <Hex className="hex" key={humanDate}>
                  <Article>
                    {index <= 30 && <EventSchema data={eventSchemaData} />}
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
                        <Link to="/">Read more ⇾</Link>
                      </small>
                    </Paragraph>
                  </Article>
                </Hex>
              );
            })}
          </HexaGrid>
        </Page>
      </Fragment>
    );
  }
}

EventsAndCalendar.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query EventsQuery {
    allMarkdownRemark(
      limit: 2000
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
export default EventsAndCalendar;
