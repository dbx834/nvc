// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";
import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
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

import groupFacilitation from "../assets/groupFacilitation.png";
import individualCoaching from "../assets/individualCoaching.png";
import mediation from "../assets/mediation.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const offeringsData = [
  {
    image: mediation,
    title1: "Mediation",
    lead:
      "Are you seeking support to dialogue with a friend, colleague or family member? If so, you might consider asking for a mediation or facilitated dialogue, where we hold space for both parties to express themselves and to hear the other, and where we end with mutually beneficial agreements that support forward movement.",
  },
  {
    image: groupFacilitation,
    title1: "Group",
    title2: "Facilitation",
    lead:
      "Is your team struggling with internal dynamics, such that it's getting in the way of being able to fulfil your group's purpose? Would you like support to reconnect to your project's vision and to clarify next steps as a team?",
  },
  {
    image: individualCoaching,
    title1: "Individual",
    title2: "Coaching",
    lead:
      "Are you struggling with internal challenges? Would you like support to work through the stress or confusion, and to gain more self-understanding? If so, a coaching session may offer you the space to reconnect with yourself, and to make choices that feel more in alignment with your present needs.",
  },
  {
    image: individualCoaching,
    title1: "Restorative",
    title2: "Circle",
    lead:
      "Are you impacted by an issue that involves several people from different parts of your community or network? You could initiate a Restorative Circle, which is a process designed to hold space for conflict within the context of community.",
  },
];

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Facilitated Spaces",
  nakedPageSlug: "/facilitated-spaces",
  pageAbstract:
    "We facilitate meetings and hold space based primarily on the principles of Nonviolent Communication and Restorative Circles. In addition, we use practices from Sociocracy (shared-power governance) and Internal Family Systems (learning to recognize our inner parts and their messages), both of which offer powerful modalities for group and inner work.",
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
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** NVCPage */
class NVCPage extends React.PureComponent {
  /** standard renderer */
  render() {
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
              <span>Facilitated Spaces</span>
            </h1>
          </div>
          <div className="kale">
            <div>
              <hr />
              <p>
                We facilitate meetings and hold space based primarily on the
                principles of Nonviolent Communication and Restorative Circles.
                In addition, we use practices from{" "}
                <OutLink to="https://www.wikiwand.com/en/Sociocracy">
                  Sociocracy
                </OutLink>{" "}
                (shared-power governance) and{" "}
                <OutLink to="https://selfleadership.org/">
                  Internal Family Systems
                </OutLink>{" "}
                (learning to recognize our inner parts and their messages), both
                of which offer powerful modalities for group and inner work.
              </p>
              {map(offeringsData, (dataBit, index) => {
                const { image, title1, title2, lead, linkText, link } = dataBit;

                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 50,
                    }}
                    key={`bit-${index}`}
                  >
                    <div
                      style={{
                        flexGrow: 10,
                        flexBasis: 0,
                        paddingRight: "1.5em",
                      }}
                    >
                      <Image
                        src={image}
                        rawWidth={900}
                        rawHeight={900}
                        style={{
                          width: 55,
                          height: 55,
                          border: 0,
                          background: "transparent",
                          display: "block",
                          marginBottom: 10,
                        }}
                      />
                      <h3 className="mask-p" style={{ marginBottom: 0 }}>
                        {!isUndefined(title1) && <Fragment>{title1}</Fragment>}
                        {!isUndefined(title2) && (
                          <Fragment>
                            <br />
                            {title2}
                          </Fragment>
                        )}
                      </h3>
                    </div>
                    <p style={{ flexGrow: 80, flexBasis: 0, marginBottom: 0 }}>
                      {lead}&nbsp;{!isUndefined(linkText) && (
                        <Fragment>
                          <Link to={link}>{linkText}</Link>.
                        </Fragment>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 10 }}>
                Surya Shares Her Experience…
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
                          url="https://www.youtube.com/watch?v=uIyY6TDbnSQ"
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
                  More Videos ⋗
                </OutLink>
              </div>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p">A Participant Shares...</h3>
              <p
                style={{
                  fontFamily: "futura-pt, sans-serif",
                  fontWeight: 200,
                  marginBottom: 30,
                }}
              >
                <span style={{ fontSize: "125%" }}>
                  <i>
                    “I contacted L’aura to hold a safe space for truth. I was
                    moved by her ability to catch our hidden needs, by the way
                    she connected us to our true, vulnerable and honest
                    expression, and the beauty of our needs and intention. She
                    has the NVC gift, the gift of unveiling our real essence:
                    translating our wounded expression into its true message of
                    care, love and peace, for ourselves and for others!”
                  </i>{" "}
                  <br />
                  ~ <strong>Michelle, 2015</strong>
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
                  More Celebrations & Gratitude ⋗
                </Link>
              </div>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p">A Participant Shares...</h3>
              <p
                style={{
                  fontFamily: "futura-pt, sans-serif",
                  fontWeight: 200,
                  marginBottom: 30,
                }}
              >
                <span style={{ fontSize: "125%" }}>
                  <i>
                    "The training was very insightful. It helped us to bond as a
                    group, to understand the issues we face working as a team,
                    and how we can use NVC to resolve our issues. L'aura has a
                    way of creating an environment where we feel very
                    comfortable to share, to look within ourselves and
                    participate from the heart.
                  </i>
                  <br />
                  ~ <strong>Kesang, 2010</strong>
                </span>
              </p>
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
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default NVCPage;
