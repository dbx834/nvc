// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import indexOf from "lodash/indexOf";
import map from "lodash/map";
import join from "lodash/join";
import merge from "lodash/merge";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withSizes from "react-sizes";
import Link, { withPrefix } from "gatsby-link";
import "moment/locale/en-gb";
import { Page } from "@bodhi-project/semantic-webflow";
import { Elements, applyType } from "@bodhi-project/typography";
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
import SectionPhoebe from "@bodhi-project/blocks/lib/SectionPhoebe";
import "@bodhi-project/antrd/lib/nvc-website/locale-provider/style/css";
import "@bodhi-project/antrd/lib/nvc-website/calendar/style/css";
import "@bodhi-project/antrd/lib/nvc-website/popover/style/css";
import "@bodhi-project/antrd/lib/nvc-website/tag/style/css";

import SectionHalleyAlt from "@bodhi-project/blocks/lib/SectionHalleyAlt";
import "@bodhi-project/antrd/lib/nvc-website/list/style/css";
import "@bodhi-project/antrd/lib/nvc-website/spin/style/css";
import "@bodhi-project/antrd/lib/nvc-website/button/style/css";
import "@bodhi-project/antrd/lib/nvc-website/select/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";
import globalWithMediaQueries from "../helpers/globalWithMediaQueries";

import nvc from "../assets/nvc.png";
import rc from "../assets/rc.png";
import goldStar from "../assets/goldStar.png";

import start from "../assets/start.png";
import middle from "../assets/middle.png";
import end from "../assets/end.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { H1 } = Elements;

globalWithMediaQueries(
  ".ant-popover-inner-content .phoebe-popcontent",
  { ...applyType("dkc2ilk", { range: [12, 21] }) },
  true,
);

globalWithMediaQueries(
  ".ant-popover-inner-content .phoebe-popcontent a",
  {
    color: "#0000FF",
    borderBottom: "1.625px solid transparent",
  },
  true,
);

globalWithMediaQueries(
  ".ant-popover-inner-content .phoebe-popcontent a:hover",
  {
    color: "#6D00FF",
    borderBottom: "1.625px solid #6D00FF",
  },
  true,
);

globalWithMediaQueries(
  ".ant-popover-inner-content .phoebe-popcontent a:visited",
  {
    textDecoration: "none",
  },
  true,
);

globalWithMediaQueries(
  ".ant-popover-inner-content .phoebe-popcontent a:link",
  {
    textDecoration: "none",
  },
  true,
);

globalWithMediaQueries(
  ".ant-popover-inner-content .phoebe-popcontent a:active",
  {
    textDecoration: "none",
  },
  true,
);

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

  "& .ant-btn": {
    color: "#ffffff !important",
  },

  "& .ant-fullcalendar-header": {
    paddingTop: "0px !important",
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
    "& section": {
      padding: 0,
    },

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
    const events = [];

    map(postEdges, ({ node }) => {
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

      events.push({
        route: node.fields.route,
        humanDate: node.fields.humanDate,
        elapsed: node.fields.elapsed,
        beginDateInt: node.fields.beginDateInt,
        diff: node.fields.diff,
        abstract: inArray(node.frontmatter.tags, "practice-group")
          ? null
          : node.frontmatter.abstract,
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
    });

    const phoebeData = {
      events,
      components: {
        localLink: Link,
      },
      conf: {
        multiDay: {
          start,
          middle,
          end,
        },
      },
      tagMap: {
        nvc,
        rc,
      },
      nullTag: goldStar,
      categoryMap: {
        nvc: "Nonviolent Communication",
        rc: "Restorative Circles",
        practiceGroup: "Practice Group",
      },
    };

    const altHalleyData = {
      cards: events,
      components: {
        localLink: Link,
      },
      show: 4,
      tagMap: {
        nvc,
        rc,
        star: goldStar,
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
              <span>Calendar</span>
            </h1>
          </div>
          <div className="kale">
            <div>
              <hr />
              {!isMobile ? (
                <div className="mask-p">
                  <SectionPhoebe data={phoebeData} />
                </div>
              ) : (
                <div className="mask-p">
                  <SectionHalleyAlt
                    data={altHalleyData}
                    style={{ padding: 0 }}
                  />
                </div>
              )}
            </div>
            <div>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <p>
                <strong>How Joy Living Learning came to be...</strong>
              </p>
              <p>
                In the winter of 2008-09, L'aura along with Jason Stewart had a
                dream of hosting a 3-week international NVC Camp in her garden.
                In order to fundraise and sponsor 3 Ladakhi participants, plus a
                young man from Koot Road village (near Auroville) who was
                volunteering with them, they needed to set up a financial entity
                – and that was the birth of Joy Living Learning.
              </p>
              <p>
                That Camp was a wild success, with over 200 participants and 12
                international trainers, and non-stop events staggered over the 3
                weeks.
              </p>
              <p>
                A short while later, L'aura joined Saleem Ebrahim and Aniruddha
                Gadankush in setting up the Charitable Trust, "Institute of
                Nonviolent Communication (in India)," and together they hosted
                the first few annual International NVC Conventions in India.
              </p>
              <p>
                In addition, Joy Living Learning has organized many other events
                with international trainers, such as <i>NVC Mediation</i> with
                Kay Rung and Liv Larsson, <i>NVC & Aikido</i> with Saleem
                Ebrahim,{" "}
                <i>Compassionate Living (Embodied Spirituality of NVC)</i> with
                Robert Gonzales, <i>NVC & Internal Family Systems (IFS)</i> with
                Caroline Ader-Lamy and Saleem Ebrahim,{" "}
                <i>NVC Certification Mentoring & Assessment</i> with Katherine
                Singer and Gina Lawrie, an{" "}
                <i>International Intensive Training (IIT)</i>, and more...
              </p>
              <p>
                <strong>Today...</strong>
              </p>
              <p>
                Joy Living Learning continues to offer regular NVC and RC
                workshops in Auroville and other cities in the country, plus
                weekly practice groups in Auroville.
              </p>
              <p>
                Joy Living Learning has also incorporated RC into Auroville's
                conflict resolution policy and is working towards building an
                alternative justice system in Auroville based on the principles
                that underly the NVC movement.
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
  query UpcomingEventsQuery {
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
            beginDateInt
            diff
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
