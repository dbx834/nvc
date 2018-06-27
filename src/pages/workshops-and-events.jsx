// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withSizes from "react-sizes";
import Link from "gatsby-link";
import "moment/locale/en-gb";
import { Page } from "@bodhi-project/semantic-webflow";
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
} from "@bodhi-project/seo";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/blocks
import SectionOphelia from "@bodhi-project/blocks/lib/SectionOphelia";
import SectionHalley from "@bodhi-project/blocks/lib/SectionHalley";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import nvc from "../assets/nvc.png";
import rc from "../assets/rc.png";
import seoHelper from "../helpers/seoHelper";
import categoriseEvents from "../helpers/categoriseEvents";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Events",
  nakedPageSlug: "upcoming-events",
  pageAbstract:
    "We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms.",
};

const seoData = seoHelper(pageData);

const {
  pageTitle,
  generalMetaData,
  twitterSummaryCardData,
  openGraphSummaryData,
  webpageSchemaData,
  breadcrumbSchemaData,
} = seoData;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  marginBottom: 60,
  display: "block",
  position: "relative",

  "& .block-pandora": {
    padding: 0,
  },

  "& .oa-card": {
    "& .oa-card-details": {
      "& p:last-child": {
        "& span": {
          color: "#0000FF !important",
          borderBottom: "1.625px solid transparent",

          "&:hover": {
            color: "#6D00FF",
            borderBottom: "1.625px solid #6D00FF",
          },
          "&:visited": {
            textDecoration: "none",
          },
          "&:link": {
            textDecoration: "none",
          },
          "&:active": {
            textDecoration: "none",
          },
        },
      },
    },
  },

  "& h3": {
    fontWeight: "700 !important",
  },

  "& hr": {
    border: "none",
    borderTop: "3px solid #B43808",
    marginBottom: 20,
  },

  "& .jke": {
    padding: "0em 1.25em",
  },

  "& .kale": {
    "@media(max-width: 768px)": {
      display: "block",
    },

    display: "flex",

    "& > div": {
      padding: "0em 1.25em",

      "&:nth-child(1)": {
        flexBasis: 0,
        flexGrow: 62,

        "& .hope": {
          display: "flex",

          "& > div": {
            "&:nth-child(1)": {
              flexBasis: 0,
              flexGrow: 50,
              paddingRight: "1.25em",
            },

            "&:nth-child(2)": {
              flexBasis: 0,
              flexGrow: 50,
            },
          },
        },
      },

      "&:nth-child(2)": {
        flexBasis: 0,
        flexGrow: 38,
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
    const { isMobile } = this.props;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const events = categoriseEvents(postEdges);

    const opheliaData = {
      cards: events.featuredEvents,
      components: {
        localLink: Link,
      },
      conf: {
        image: {
          rawCoverWidth: 1440,
          rawCoverHeight: 900,
        },
        columnWidth: "49%",
      },
    };

    const pandoraData1 = {
      cards: events.featuredEvents,
      components: {
        localLink: Link,
      },
      tagMap: {
        nvc,
        rc,
      },
      show: 3,
    };

    const pandoraData2 = {
      cards: events.NVCEvents,
      components: {
        localLink: Link,
      },
      tagMap: {
        nvc,
        rc,
      },
    };

    const pandoraData3 = {
      cards: events.RCEvents,
      components: {
        localLink: Link,
      },
      tagMap: {
        nvc,
        rc,
      },
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
          <div className="jke">
            <h1 style={{ marginBottom: 10 }}>
              <span>Workshops & Events</span>
            </h1>
          </div>
          <div className="kale">
            <div>
              <hr />
              {!isMobile ? (
                <SectionOphelia data={opheliaData} />
              ) : (
                <SectionHalley data={pandoraData1} />
              )}
            </div>
            <div>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <div style={{ position: "relative" }}>
                <h3 className="mask-p" style={{ marginBottom: 0 }}>
                  NVC Practice Group
                </h3>
                <p
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    display: "inline-block",
                    margin: 0,
                    marginTop: -3,
                  }}
                >
                  <Link to="/calendar">See calendar ⇝</Link>
                </p>
              </div>
              <SectionHalley data={pandoraData2} style={{ marginTop: -5 }} />

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <div style={{ position: "relative" }}>
                <h3 className="mask-p" style={{ marginBottom: 0 }}>
                  RC Practice Group
                </h3>
                <p
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    display: "inline-block",
                    margin: 0,
                    marginTop: -3,
                  }}
                >
                  <Link to="/calendar">See calendar ⇝</Link>
                </p>
              </div>
              <SectionHalley data={pandoraData3} style={{ marginTop: -5 }} />
            </div>
          </div>
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
  query FeaturedEventsQuery {
    allMarkdownRemark(
      limit: 365
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { type: { eq: "event" } } }
    ) {
      edges {
        node {
          fields {
            route
            humanDate
            elapsed
          }
          frontmatter {
            abstract
            title
            subTitle
            cover
            date
            startDate
            finishDate
            fromTime
            toTime
            category
            tags
            type
          }
        }
      }
    }
  }
`;
/* eslint-enable no-undef */

/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
});

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default withSizes(mapSizesToProps)(EventsAndCalendar);
