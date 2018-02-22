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
import { Calendar } from 'antd';
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
});
const pageStyleClass = pageStyle.toString();

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
                <Hex className="hex">
                  <Article>
                    {index <= 30 && <EventSchema data={eventSchemaData} />}
                    <Image
                      src={''}
                      style={{
                        height: 200,
                        width: '100%',
                        border: 0,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        background: '#4a4a4a',
                      }}
                      loader="gradient"
                    />
                    <Paragraph className="abstract">
                      <span className="title" style={{ fontSize: '110%' }}>
                        {frontmatter.title}
                      </span>
                      <br />
                      <small className="date">
                        <i>{humanDate}</i>
                      </small>
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
