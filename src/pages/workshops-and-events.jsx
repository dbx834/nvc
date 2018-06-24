// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";
import indexOf from "lodash/indexOf";
import isNull from "lodash/isNull";
import isUndefined from "lodash/isUndefined";
import join from "lodash/join";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link, { withPrefix } from "gatsby-link";
import "moment/locale/en-gb";
import { Page } from "@bodhi-project/semantic-webflow";
import ContainerDimensions from "react-container-dimensions";

import { Elements, applyRhythm } from "@bodhi-project/typography";
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

import EventsGrid from "../components/EventsGrid";
import Calendar from "../components/Calendar";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { H1 } = Elements;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** inArray */
const inArray = (array, value) => {
  let rx = false;
  if (indexOf(array, value) >= 0) {
    rx = true;
  }
  return rx;
};

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
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const featuredEvents = [];
    const NVCEvents = [];
    const RCEvents = [];
    const todayInt = parseInt(moment().format("YYYYMMDD"), 10);
    let filteredFeaturedRecords = 1;
    let filteredNVCRecords = 1;
    let filteredRCRecords = 1;
    const totalFeaturedEvents = 16;
    const totalPracticeGroups = 4;

    map(postEdges, ({ node }) => {
      const { date, startDate } = node.frontmatter;
      const mDate = moment(!isNull(date) ? date : startDate);
      const xDate = parseInt(mDate.format("YYYYMMDD"), 10);
      const inTheFuture = todayInt <= xDate;

      const belowFeaturedMax = totalFeaturedEvents >= filteredFeaturedRecords;
      const isFeatured = inArray(node.frontmatter.tags, "featured");

      // Make banner
      let eventBanner = null;
      if (node.frontmatter.cover === "fallback") {
        const coverHint = join(node.frontmatter.tags, "-");
        eventBanner = withPrefix(
          `/content-assets/event-fallbacks/${coverHint}.jpg`,
        );
      } else {
        eventBanner = withPrefix(node.frontmatter.cover);
      }

      if (inTheFuture && belowFeaturedMax && isFeatured) {
        featuredEvents.push({
          route: node.fields.route,
          humanDate: node.fields.humanDate,
          elapsed: node.fields.elapsed,
          abstract: node.frontmatter.abstract,
          title: node.frontmatter.title,
          subTitle: node.frontmatter.subTitle,
          cover: eventBanner,
          date: node.frontmatter.date,
          startDate: node.frontmatter.startDate,
          finishDate: node.frontmatter.finishDate,
          fromTime: node.frontmatter.fromTime,
          toTime: node.frontmatter.toTime,
          category: node.frontmatter.category,
          tags: node.frontmatter.tags,
          type: node.frontmatter.type,
        });
        filteredFeaturedRecords += 1;
      } else {
        const belowNVCMax = totalPracticeGroups >= filteredNVCRecords;
        const isNVCPracticeGroup =
          inArray(node.frontmatter.tags, "nvc") &&
          inArray(node.frontmatter.tags, "practice-group");

        const belowRCMax = totalPracticeGroups >= filteredRCRecords;
        const isRCPracticeGroup =
          inArray(node.frontmatter.tags, "rc") &&
          inArray(node.frontmatter.tags, "practice-group");

        if (inTheFuture && belowNVCMax && isNVCPracticeGroup) {
          NVCEvents.push({
            route: node.fields.route,
            humanDate: node.fields.humanDate,
            elapsed: node.fields.elapsed,
            abstract: node.frontmatter.abstract,
            title: node.frontmatter.title,
            subTitle: node.frontmatter.subTitle,
            cover: eventBanner,
            date: node.frontmatter.date,
            startDate: node.frontmatter.startDate,
            finishDate: node.frontmatter.finishDate,
            fromTime: node.frontmatter.fromTime,
            toTime: node.frontmatter.toTime,
            category: node.frontmatter.category,
            tags: node.frontmatter.tags,
            type: node.frontmatter.type,
          });
          filteredNVCRecords += 1;
        }

        if (inTheFuture && belowRCMax && isRCPracticeGroup) {
          RCEvents.push({
            route: node.fields.route,
            humanDate: node.fields.humanDate,
            elapsed: node.fields.elapsed,
            abstract: node.frontmatter.abstract,
            title: node.frontmatter.title,
            subTitle: node.frontmatter.subTitle,
            cover: eventBanner,
            date: node.frontmatter.date,
            startDate: node.frontmatter.startDate,
            finishDate: node.frontmatter.finishDate,
            fromTime: node.frontmatter.fromTime,
            toTime: node.frontmatter.toTime,
            category: node.frontmatter.category,
            tags: node.frontmatter.tags,
            type: node.frontmatter.type,
          });
          filteredRCRecords += 1;
        }
      }
    });

    const opheliaData = {
      cards: featuredEvents,
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
      cards: featuredEvents,
      components: {
        localLink: Link,
      },
      tagMap: {
        nvc,
        rc,
      },
    };

    const pandoraData2 = {
      cards: NVCEvents,
      components: {
        localLink: Link,
      },
    };

    const pandoraData3 = {
      cards: RCEvents,
      components: {
        localLink: Link,
      },
    };

    let windowWidth = 1440;

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
              {windowWidth >= 768 ? (
                <SectionOphelia data={opheliaData} />
              ) : (
                <SectionHalley data={pandoraData1} />
              )}
            </div>
            <div>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 10 }}>
                NVC Practice Group
              </h3>
              <SectionHalley data={pandoraData2} />
              <br />
              <p>
                <Link to="events-calendar">See calendar ⇝</Link>
              </p>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 10 }}>
                RC Practice Group
              </h3>
              <SectionHalley data={pandoraData3} />
              <br />
              <p>
                <Link to="events-calendar">See calendar ⇝</Link>
              </p>
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

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default EventsAndCalendar;
