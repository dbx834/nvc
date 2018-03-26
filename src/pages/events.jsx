// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
// import _ from "lodash";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import "moment/locale/en-gb";
import { Page } from "@bodhi-project/semantic-webflow";
import { Elements, applyRhythm, applyType } from "@bodhi-project/typography";
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

import EventsGrid from "../components/EventsGrid";
import Calendar from "../components/Calendar";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { H1 } = Elements;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Events",
  nakedPageSlug: "events",
  pageAbstract: "Page abstract.",
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
  ...applyRhythm({ maxWidth: "40X" }),
  "& .blank": {
    visibility: "hidden",
  },

  "& .cover": {
    zIndex: -1,
  },

  "& ul.event-icons": {
    listStyle: "none",
    padding: 0,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,

    "& li": {
      margin: "0 !important",
      display: "inline-block",

      "& .icon": {
        border: 0,
        marginTop: 2,
        marginRight: 2,
      },
    },
  },

  "& .ant-fullcalendar-fullscreen": {
    "& .ant-fullcalendar-header": {
      width: 90 * 7,
      padding: "11px 0px",
    },

    "& .ant-fullcalendar-year-select": {
      ...applyType("ltb1ekq"),
      "& .ant-select-selection": {
        fontSize: "80%",
        backgroundColor: "transparent",
        border: "none",
      },
    },

    "& .ant-fullcalendar-month-select": {
      ...applyType("ltb1ekq"),
      "& .ant-select-selection": {
        fontSize: "80%",
        backgroundColor: "transparent",
        border: "none",
      },
    },

    "& .ant-radio-group": {
      display: "none",
    },
  },

  "& .ant-fullcalendar": {
    ...applyType("ltb1ekq"),

    "& .ant-fullcalendar-calendar-body": {
      padding: 0,
      width: "fit-content",
      maxWidth: "fit-content",

      "& table": {
        "& thead": {
          borderTop: "1px solid #4a4a4a",
          borderBottom: "1px solid #4a4a4a",

          "& .ant-fullcalendar-column-header": {
            textAlign: "left",
            paddingTop: 6,
            paddingBottom: 6,
            "& span": {
              fontWeight: 700,
              fontStyle: "italic",
            },
          },
        },
      },
    },

    "& table": {
      width: "unset",
      maxWidth: "unset",
    },

    "& tbody": {
      "& .ant-fullcalendar-cell": {
        position: "relative",
        width: 90,
        height: 90,
      },

      "& div.date-block": {
        position: "absolute",
        top: 0,
        left: 0,
        width: 89,
        height: 89,
        WebkitTransition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",
        transition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",

        "&:hover": {
          backgroundColor: "#FFDA9A",
        },

        "& > span": {
          display: "block",
          width: 88,
          height: 89,
        },

        "& .ant-badge": {
          fontFamily: "inherit",
          fontSize: "inherit",
          "& .ant-badge-dot": {
            top: 4,
            height: 8,
            width: 8,
            transform: "translateX(-10%)",
          },
        },

        "& a": {
          display: "block",
          height: 89,
          width: 89,

          "&:hover": {
            color: "#6D00FF",
            borderBottom: "1.625px solid transparent",
          },
        },
      },

      "& div.this-month": {
        backgroundColor: "#fff5cd",
      },

      "& div.that-month": {
        backgroundColor: "#F6F4FE",
      },

      "& tr": {
        "& td": {
          "& div.date-block": {
            backgroundImage:
              "linear-gradient(to right, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%), linear-gradient(to bottom, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)",
            backgroundPosition: "bottom, right",
            backgroundSize: "4.45px 1px, 1px 4.45px",
            backgroundRepeat: "repeat-x, repeat-y",
          },
        },

        "& td:last-child": {
          "& div.date-block": {
            backgroundImage:
              "linear-gradient(to right, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)",
            backgroundPosition: "bottom",
            backgroundSize: "4.45px 1px",
            backgroundRepeat: "repeat-x",
          },
        },
      },

      "& tr:last-child": {
        "& td": {
          "& div.date-block": {
            backgroundImage:
              "linear-gradient(to bottom, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)",
            backgroundPosition: "right",
            backgroundSize: "1px 4.45px",
            backgroundRepeat: "repeat-y",
          },
        },

        "& td:last-child": {
          "& div.date-block": {
            backgroundImage: "none",
          },
        },
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
          <Calendar data={postEdges} />
          <H1>Upcoming Events</H1>
          <EventsGrid data={postEdges} totalEvents={6} />
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
      limit: 365
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { type: { eq: "event" } } }
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
            starts
            end
            from
            to
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
