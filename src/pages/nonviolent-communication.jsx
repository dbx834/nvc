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
// import Image from "@bodhi-project/components/lib/Image";
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
    linkTo: "/writings/embracing-interdependence-with-nonviolent-communication",
    title: "Embracing Interdependence with Nonviolent Communication",
    image:
      "/content-assets/covers/embracing-interdependence-with-nonviolent-communication.jpg",
  },
  {
    linkTo: "/writings/what-does-nvc-mean-to-you",
    title: "What does NVC mean to you…?",
    image:
      "https://images.unsplash.com/photo-1518983498539-c6e66c62f6b3?ixlib=rb-0.3.5&s=580f065422952f086541ba61e8ae5304&auto=format&fit=crop&w=1440&h=900",
  },
];

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Nonviolent Communication",
  nakedPageSlug: "nonviolent-communication",
  pageAbstract:
    "Nonviolent Communication (NVC) contains nothing new. It is based on historical principles of nonviolence – the natural state of compassion when no violence is present in the heart. NVC reminds us what we already instinctively know about how good it feels to authentically connect to another human being.",
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
    const nvcNodes = [];
    map(postEdges, ({ node }) => {
      if (inArray(node.frontmatter.tags, "nvc")) {
        nvcNodes.push({ node });
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
              <span>Nonviolent Communication</span>
            </h1>
          </div>
          <div className="kale">
            <div>
              <hr />
              <p>
                Nonviolent Communication (NVC) contains nothing new. It is based
                on historical principles of nonviolence – the natural state of
                compassion when no violence is present in the heart. NVC reminds
                us what we already instinctively know about how good it feels to
                authentically connect to another human being.
              </p>
              <p>
                With NVC we learn to hear our own deeper needs and those of
                others. Through its emphasis on deep listening to ourselves as
                well as others, NVC helps us discover the depth of our own
                compassion. This language reveals the awareness that all human
                beings are only trying to honor universal values and needs,
                every minute, every day.
              </p>
              <p>
                NVC can be seen as both a spiritual practice that helps us see
                our common humanity, using our power in a way that honors
                everyone’s needs, and a concrete set of skills which help us
                create life-serving families and communities.
              </p>
              <p>The form is simple, yet powerfully transformative.</p>
              <p>
                Through the practice of NVC, we can learn to clarify what we are
                observing, what emotions we are feeling, what values we want to
                live by, and what we want to ask of ourselves and others. We
                will no longer need to use the language of blame, judgment or
                domination. We can experience the deep pleasure of contributing
                to each other’s well being.
              </p>
              <p>
                NVC creates a path for healing and reconciliation in its many
                applications, ranging from intimate relationships, work
                settings, health care, social services, police, prison staff and
                inmates, to governments, schools and social change
                organizations.
              </p>
              <p style={{ marginBottom: 40 }}>
                [Source:{" "}
                <OutLink to="http://www.cnvc.org/">
                  Marshall Rosenberg and CNVC
                </OutLink>]
              </p>
              {!isMobile && <LearnMore data={learnMoreData} />}
            </div>
            <div>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 11 }}>
                Why Learn NVC?
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
                          url="https://www.youtube.com/watch?v=w0xrRihEK6A"
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
                    "All that has been integrated into NVC has been known for
                    centuries about consciousness, language, communication
                    skills, and use of power that enable us to maintain a
                    perspective of empathy for ourselves and others, even under
                    trying conditions."
                  </i>
                  <br />
                  ~ <strong>Marshall B. Rosenberg, Phd</strong>
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
                    "… Thank you for all you have done and all that you are --
                    grounded, free flowing, demanding, accepting, caring,
                    patient, happy, unhappy, an expert, a learner and super
                    fun!"
                  </i>
                  <br />
                  ~ <strong>Sonali, 2014</strong>
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
  query NVCEventsQuery {
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
export default withSizes(mapSizesToProps)(NVCPage);
