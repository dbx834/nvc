// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { css } from "glamor";
// import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
// import FacebookProvider, { Page as FBPage } from "react-facebook";
import { Image, OutLink } from "@bodhi-project/components";
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
      "We offer mediation and facilitated conversations for those seeking support to dialogue with a friend, colleague or family member.",
  },
  {
    image: groupFacilitation,
    title1: "Group",
    title2: "Facilitation",
    lead:
      "We offer group facilitation for groups seeking support with team dynamics, or to reconnect with the group’s purpose and to clarify next steps for forward movement.",
  },
  {
    image: individualCoaching,
    title1: "Individual",
    title2: "Coaching",
    lead:
      "We offer individual coaching for those seeking support to work through challenges, to gain more self-understanding, and to access one’s own capacity to shift into a dynamic that feels more life-serving.",
  },
];

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Restorative Circles",
  nakedPageSlug: "",
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
                We hold space based primarily on the principles of Nonviolent
                Communication. And in addition, we may use practices from
                <OutLink to="https://www.wikiwand.com/en/Sociocracy">
                  Sociocracy
                </OutLink>{" "}
                (shared-power governance) and{" "}
                <OutLink to="https://selfleadership.org/">
                  Internal Family Systems
                </OutLink>
                &nbsp;(uncovering our inner parts), both of which complement NVC
                beautifully.
              </p>
              <h2>
                <span>Offers</span>
              </h2>
              {_.map(offeringsData, (dataBit, index) => {
                const { image, title1, title2, lead } = dataBit;

                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 30,
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
                          width: 53,
                          height: 53,
                          border: 0,
                          background: "transparent",
                          display: "block",
                          marginBottom: 10,
                        }}
                      />
                      <h3 className="mask-p" style={{ marginBottom: 0 }}>
                        {!_.isUndefined(title1) && (
                          <Fragment>{title1}</Fragment>
                        )}
                        {!_.isUndefined(title2) && (
                          <Fragment>
                            <br />
                            {title2}
                          </Fragment>
                        )}
                      </h3>
                    </div>
                    <p style={{ flexGrow: 80, flexBasis: 0, marginBottom: 0 }}>
                      {lead}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 10 }}>
                No Title
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
                    const playerHeight = width * 0.625;
                    return (
                      <div
                        style={{
                          width: playerWidth,
                          height: playerHeight,
                        }}
                      >
                        <Image
                          src={""}
                          rawWidth={1440}
                          rawHeight={900}
                          style={{
                            width: "inherit",
                            height: "inherit",
                            border: 0,
                            background: "blue",
                            display: "block",
                          }}
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
                    "Recently I attended a workshop with L'aura. It was an
                    amazing eye-opener, because it showed the possibility of how
                    the whole community can get involved and learn to hold
                    conflict, and to take responsibility for one's actions,
                    without being crucified for one's so-called 'mistakes.'"
                  </i>{" "}
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
                  More Celebrations & Gratitude ⋗
                </Link>
              </div>
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
