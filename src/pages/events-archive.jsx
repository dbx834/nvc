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
import SectionOpheliaAlt from "@bodhi-project/blocks/lib/SectionOpheliaAlt";
import "@bodhi-project/antrd/lib/nvc-website/tag/style/css";

import SectionHalley from "@bodhi-project/blocks/lib/SectionHalley";
import "@bodhi-project/antrd/lib/nvc-website/list/style/css";
import "@bodhi-project/antrd/lib/nvc-website/spin/style/css";
import "@bodhi-project/antrd/lib/nvc-website/button/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import nvc from "../assets/nvc.png";
import rc from "../assets/rc.png";
import seoHelper from "../helpers/seoHelper";
import categoriseOldEvents from "../helpers/categoriseOldEvents";

import goldStar from "../assets/goldStar.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Events Archive",
  nakedPageSlug: "events-archive",
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
          color: "#b43808",
          borderBottom: "1.625px solid transparent",
          transition: "all .3s",

          "&:hover": {
            color: "#BA6B02",
            borderBottom: "1.625px solid #BA6B02",
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
    const events = categoriseOldEvents(postEdges);

    const opheliaData = {
      cards: events.featuredEvents,
      components: {
        localLink: Link,
      },
      conf: {
        gutterHeight: 12,
        image: {
          rawCoverWidth: 1440,
          rawCoverHeight: 900,
        },
        columnWidth: "24.5%",
      },
      categoryMap: {
        nvc: "Nonviolent Communication",
        rc: "Restorative Circles",
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
        star: goldStar,
      },
      show: 3,
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
          <h1 style={{ marginBottom: 10 }}>
            <span>Events Archive</span>
            &nbsp;<span style={{ fontSize: "60%" }}>(under construction…)</span>
          </h1>
          <hr />
          {!isMobile ? (
            <SectionOpheliaAlt data={opheliaData} />
          ) : (
            <SectionHalley data={pandoraData1} />
          )}
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
  query PastEventsQuery {
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
