// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";
import indexOf from "lodash/indexOf";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withSizes from "react-sizes";
import Link from "gatsby-link";
import ContainerDimensions from "react-container-dimensions";
import ReactPlayer from "react-player";
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";
import OutLink from "@bodhi-project/components/lib/OutLink";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";
import LearnMore from "../components/LearnMore";
import Calendar from "../components/Calendar";
import EventsGrid from "../components/EventsGrid";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const learnMoreData = [
  {
    linkTo: "/writings/restorative-circles-in-auroville",
    title: "Restorative Circles in Auroville",
    image: "/content-assets/covers/restorative-circles-in-auroville.jpg",
  },
  {
    linkTo: "/writings/la-responsabilite-de-tous",
    title: "La responsabilité de tous",
    image: "/content-assets/covers/la-responsabilite-de-tous.jpg",
  },
];

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Restorative Circles",
  nakedPageSlug: "restorative-circles",
  pageAbstract:
    "A Restorative Circle (RC) is a community process designed to hold space for those in conflict. It brings together the three parties in a conflict – those who acted, those directly impacted, and the wider community – within an intentional systemic context, to dialogue as equals. Participants invite each other and attend voluntarily.",
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
const pageWrapper = css({
  marginBottom: 60,
  display: "block",
  position: "relative",

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
const pageStyleClass = pageWrapper.toString();

const video = css({
  marginBottom: 20,
});
const videoClass = video.toString();

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
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** NVCPage */
class NVCPage extends React.PureComponent {
  /** standard renderer */
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const { isMobile } = this.props;
    // get only events
    const rcNodes = [];
    map(postEdges, ({ node }) => {
      if (inArray(node.frontmatter.tags, "rc")) {
        rcNodes.push({ node });
      }
    });

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
          <div className="jke">
            <h1 style={{ marginBottom: 10 }}>
              <span>Restorative Circles</span>
            </h1>
          </div>
          <div className="kale">
            <div>
              <hr />
              <p>
                A Restorative Circle (RC) is a community process designed to
                hold space for those in conflict. It brings together the three
                parties in a conflict – those who acted, those directly
                impacted, and the wider community – within an intentional
                systemic context, to dialogue as equals. Participants invite
                each other and attend voluntarily. The dialogue process used is
                shared openly with all participants, and facilitated by a
                community member. The process ends when actions have been found
                that bring mutual benefit and nurture the inherent integrity of
                all those involved in the conflict.
              </p>
              <p>
                Restorative Circles are facilitated in 3 stages, and are
                designed to identify the key factors in the conflict, reach
                agreements on next steps, and evaluate the results. As Circles
                form, they invite shared power, mutual understanding,
                self-responsibility and effective action within the community.
              </p>
              <p>
                Restorative Circles are a specific restorative practice whose
                development began with the work of Dominic Barker in the favelas
                in Rio de Janeiro in the mid 1990s and continues with a growing
                community both in Brazil and internationally.
              </p>
              <p>
                [Source:{" "}
                <OutLink to="http://www.restorativecircles.org/">
                  Dominic Barter and Restorative Circles
                </OutLink>]
              </p>
              <Image
                src="/content-assets/restorative-circles/rc_800X561.png"
                rawWidth={800}
                rawHeight={561}
                style={{
                  width: "100%",
                  height: "auto",
                  border: 0,
                  background: "transparent",
                  display: "block",
                  marginBottom: 30,
                }}
              />
              {!isMobile && <LearnMore data={learnMoreData} />}
            </div>
            <div>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 10 }}>
                On Justice In Auroville
              </h3>
              <div
                style={{
                  display: "block",
                  marginBottom: 10,
                }}
              >
                <ContainerDimensions>
                  {({ width }) => {
                    const playerWidth = width;
                    const playerHeight = width * 0.62;
                    return (
                      <div
                        style={{
                          width: playerWidth,
                          height: playerHeight,
                        }}
                      >
                        <ReactPlayer
                          url="https://www.youtube.com/watch?v=kqBM5Xr5VfI"
                          className={videoClass}
                          width="inherit"
                          height="inherit"
                        />
                      </div>
                    );
                  }}
                </ContainerDimensions>
              </div>
              <div style={{ width: "100%", height: 18, marginBottom: 16 }}>
                <OutLink
                  style={{
                    display: "inline-block",
                    float: "right",
                  }}
                  to="https://www.youtube.com/user/laurajoyful/videos"
                >
                  More Videos ⇝
                </OutLink>
              </div>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <p
                style={{
                  fontFamily: "futura-pt, sans-serif",
                  fontWeight: 200,
                  marginBottom: 30,
                }}
              >
                <span style={{ fontSize: "125%" }}>
                  <i>
                    "Conflict is not a problem that needs solving, but a
                    phenomenon that needs understanding."
                  </i>
                  <br />
                  ~ <strong>Dominic Barter</strong>
                </span>
              </p>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <p
                style={{
                  fontFamily: "futura-pt, sans-serif",
                  fontWeight: 200,
                  marginBottom: 30,
                }}
              >
                <span style={{ fontSize: "125%" }}>
                  <i>
                    "Power without love is reckless and abusive, and love
                    without power is sentimental and anemic. Power at its best
                    is love implementing the demands of justice, and justice at
                    its best is power correcting everything that stands against
                    love."
                  </i>
                  <br />
                  ~ <strong>Martin Luther King Jr.</strong>
                </span>
              </p>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 5 }}>
                A Participant Shares...
              </h3>
              <p
                style={{
                  fontFamily: "futura-pt, sans-serif",
                  fontWeight: 200,
                  marginBottom: 20,
                  marginTop: 0,
                }}
              >
                <span style={{ fontSize: "125%" }}>
                  <i>
                    "Recently I attended a workshop with L'aura. It was an
                    amazing eye-opener, because it showed the possibility of how
                    the whole community can get involved and learn to hold
                    conflict, and to take responsibility for one's actions,
                    without being crucified for one's so-called 'mistakes.'"
                  </i>
                  <br />
                  ~ <strong>Vikram, 2015</strong>
                </span>
              </p>
              <div style={{ width: "100%", height: 18, marginBottom: 30 }}>
                <Link
                  style={{
                    display: "inline-block",
                    float: "right",
                  }}
                  to="/writings/celebrations-and-gratitude"
                >
                  More Celebrations & Gratitude ⇝
                </Link>
              </div>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              {isMobile && (
                <Fragment>
                  <hr />
                  <LearnMore data={learnMoreData} />
                </Fragment>
              )}
            </div>
          </div>
        </Page>
      </Fragment>
    );
  }
}

NVCPage.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query RCEventsQuery {
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
export default withSizes(mapSizesToProps)(NVCPage);
