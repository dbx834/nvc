// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";
import indexOf from "lodash/indexOf";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withSizes from "react-sizes";
// import Link from "gatsby-link";
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

import supergirls from "../assets/supergirls.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

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
    const { isMobile } = this.props;

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
              <span>Nonviolent Communication in India</span>
            </h1>
          </div>
          <div className="kale">
            <div>
              <hr />
              <p>Our NVC community in India is a thriving one!</p>
              <p>
                It’s incredible to see how we’ve grown and touched so many
                hundreds of people over the past several years.
              </p>
              <p>
                Marshall Rosenberg first came to India in 2004, and offered an
                International Intensive Training (IIT) in Bangalore, and then
                another one in Pune in 2006.
              </p>
              <p>
                And then we’ve had annual International NVC Conventions since
                2010, plus so many other events with trainers from all over the
                world.
              </p>
              <p>We have four CNVC Certified Trainers:</p>
              <ul className="mask-p">
                <li>L’aura Joy</li>
                <li>Ranjitha Jeurkar</li>
                <li>Stefan Gebert</li>
                <li>Sudha Shankar</li>
              </ul>
              <p>
                and many more Certification Candidates preparing themselves to
                become Trainers.
              </p>
              <p style={{ marginBottom: 40 }}>
                To know more about what’s happening in India, check out{" "}
                <OutLink to="https://www.indianvc.org/">indianvc.org</OutLink>{" "}
                or join our{" "}
                <OutLink to="https://www.facebook.com/groups/nvc.india/">
                  Facebook Group
                </OutLink>.
              </p>
            </div>
            <div>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 11 }}>
                NVC India – an old fundraiser…
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
                          url="https://www.youtube.com/watch?v=6UqhACynw0s"
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
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  <small>
                    <OutLink
                      style={{
                        display: "inline-block",
                        float: "right",
                      }}
                      to="https://www.youtube.com/user/laurajoyful/videos"
                    >
                      More Videos ⇝
                    </OutLink>
                  </small>
                </p>
              </div>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <p
                style={{
                  fontFamily: "futura-pt, sans-serif",
                  fontWeight: 200,
                  marginBottom: 17,
                }}
              >
                <span style={{ fontSize: "125%" }}>
                  <i>
                    "This world is what we have made of it. If it is ruthless
                    today it is because we have made it ruthless by our
                    attitudes. If we change ourselves we can change the world,
                    and changing ourselves begins with changing our language and
                    methods of communication. I highly recommend reading this
                    book and applying the Nonviolent Communication process it
                    teaches. It is a significant first step toward changing our
                    communication and creating a compassionate world."
                  </i>
                  <br />
                  ~ <strong>Arun Gandhi</strong>
                </span>
              </p>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 5 }}>
                Supergirls: L'aura, Sudha & Ranjitha
              </h3>
              <Image
                src={supergirls}
                rawWidth={1235}
                rawHeight={1235}
                style={{
                  width: "100%",
                  height: "auto",
                  border: 0,
                  background: "transparent",
                  display: "block",
                  marginBottom: 30,
                }}
              />
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

/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
});

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default withSizes(mapSizesToProps)(NVCPage);
