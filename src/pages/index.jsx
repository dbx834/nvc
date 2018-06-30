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
import FacebookProvider, { Page as FBPage } from "react-facebook";
import ContainerDimensions from "react-container-dimensions";
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

import SectionHalley from "@bodhi-project/blocks/lib/SectionHalley";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Carousel from "antd/lib/carousel";
import "antd/lib/carousel/style/css";

import Icon from "antd/lib/icon";
import "antd/lib/icon/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";
import categoriseEvents from "../helpers/categoriseEvents";

import LearnMore from "../components/LearnMore";
import MiniCalendar from "../components/MiniCalendar";

import cnvc from "../assets/cnvc.png";
import plant from "../assets/plant.jpg";
import sun from "../assets/sun.jpg";
import flower from "../assets/flower.jpg";
import avLogo from "../assets/avLogo.png";

import slide1 from "../assets/slider/slide1.jpg";
import slide2 from "../assets/slider/slide2.jpg";
import slide3 from "../assets/slider/slide3.jpg";
import slide4 from "../assets/slider/slide4.jpg";
import slide5 from "../assets/slider/slide5.jpg";

import cover1X from "../assets/cover1X.jpg";

import nvc from "../assets/nvc.png";
import rc from "../assets/rc.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const landingData = [
  {
    image: sun,
    title: "Vision",
    lead:
      "We envision a world where everyone’s needs matter, where we live in a consciousness of trust and abundance, knowing that each one of us inherently belongs, and that together we are more powerful than apart.",
  },
  {
    image: plant,
    title: "Mission",
    lead:
      "Our mission is to live and share the principles of Nonviolence, not only in terms of an individual practice and way of life, but also in its application to social structures, such as in our families, schools, and organizations.",
  },
  {
    image: flower,
    title: "Aims",
    lead:
      "We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms.",
  },
];

const sliderData = [
  {
    image: slide1,
    text:
      "L’aura sharing her passion and giraffe ears with a youth program in Auroville, as they explored the applications of nonviolence in community (2018).",
  },
  {
    image: slide2,
    text:
      "L’aura teaching during an NVC Leadership Program in Mumbai, where participants journey through an intense 4-month program together (2014).",
  },
  {
    image: slide3,
    text:
      "An array of feelings and needs cards, as we deepen into our body’s wisdom and hear its message.",
  },
  {
    image: slide4,
    text:
      "A moment of connection after having explored our dream response to conflict and the principles and practice behind Restorative Circles, in Auroville (2017).",
  },
  {
    image: slide5,
    text:
      "Preparing for our Cross-Cultural Dialogue on Discrimination, in Auroville (2018).",
  },
];

const learnMoreData = [
  {
    linkTo: "/writings/nonviolent-communication-and-restorative-circles",
    title: "Nonviolent Communication & Restorative Circles",
    image:
      "/content-assets/covers/nonviolent-communication-and-restorative-circles.jpg",
  },
  {
    linkTo: "/writings/embracing-interdependence-with-nonviolent-communication",
    title: "Embracing Interdependence with Nonviolent Communication",
    image:
      "/content-assets/covers/embracing-interdependence-with-nonviolent-communication.jpg",
  },
  {
    linkTo: "/writings/our-justice-system",
    title: "Our Justice System",
    image: "/content-assets/covers/our-justice-system.jpg",
  },
  {
    linkTo: "/writings/cross-cultural-dialogue",
    title: "Cross-Cultural Dialogue",
    image: "/content-assets/covers/cross-cultural-dialogue.jpg",
  },
  {
    linkTo: "/writings/passivity-on-the-plane",
    title: "Passivity on the Plane",
    image:
      "https://images.unsplash.com/photo-1453825517242-1a1527bf0a39?ixlib=rb-0.3.5&s=c97b93f170796ae2e043e971633901f1&auto=format&fit=crop&w=1440&h=900",
  },
  {
    linkTo: "/writings/ego",
    title: "ego",
    image: "/content-assets/covers/ego.jpg",
  },
];

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "NVC & RC in Auroville, India",
  nakedPageSlug: "",
  pageAbstract:
    "Nonviolent Communication & Restorative Circles in Auroville, India – We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles.",
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

  "& .block-pandora": {
    padding: 0,
    marginTop: -5,
  },

  "& .xCover": {
    background: "transparent !important",
    border: "none !important",
    position: "absolute",
    height: "99px !important",
    width: "132px !important",
    right: 34,
    zIndex: 1,
    top: -82,

    "@media(min-width: 768px)": {
      height: "125px !important",
      width: "170px !important",
      zIndex: 1,
      top: -118,
    },
  },

  "& h1": {
    textTransform: "uppercase",

    "& span": {
      fontSize: "110%",
    },
  },

  "& h2": {
    fontWeight: "200 !important",

    "& span": {
      fontSize: "90%",
    },
  },

  "& h3": {
    fontWeight: "700 !important",
  },

  "& .jke": {
    padding: "0em 1.25em",
  },

  "& hr": {
    border: "none",
    borderTop: "3px solid #B43808",
    marginBottom: 20,
  },

  "& .kale": {
    "@media(max-width: 768px)": {
      display: "block",
    },

    display: "flex",

    "& > div": {
      flexBasis: 0,
      padding: "0em 1.25em",

      "&:nth-child(1)": {
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
        flexGrow: 38,
      },
    },

    "& .ant-collapse": {
      fontFamily: "inherit !important",
      backgroundColor: "transparent !important",
      border: "unset !important",

      "& .ant-collapse-item": {
        border: "unset !important",
      },

      "& .ant-collapse-header": {
        padding: "12px 0 12px 24px",

        "& .arrow": {
          left: 8,
        },
      },

      "& .ant-collapse-content": {
        backgroundColor: "transparent !important",
        border: "unset",
        borderTop: "2px dotted #B43808",

        "& .abstract": {
          marginBottom: 0,

          "& .title": {},

          "& .date": {},

          "& .time": {},

          "& i.link": {
            "&:hover": {
              color: "#6D00FF",
              borderBottom: "1.625px solid #6D00FF",
            },
          },
        },
      },
    },
  },
});
const pageStyleClass = pageWrapper.toString();

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

/** Carousel next arrow */
const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <span style={{ fontSize: "250%" }}>
        <Icon
          type="right"
          style={{
            height: "inherit",
            width: "inherit",
            color: "#b43808",
            fontWeight: 700,
          }}
        />
      </span>
    </div>
  );
};

/** Carousel prev arrow */
const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <span style={{ fontSize: "250%" }}>
        <Icon
          type="left"
          style={{
            height: "inherit",
            width: "inherit",
            color: "#b43808",
            fontWeight: 700,
          }}
        />
      </span>
    </div>
  );
};

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** IndexPage */
class IndexPage extends React.Component {
  /** standard renderer */
  render() {
    const { isMobile } = this.props;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const events = categoriseEvents(postEdges, 3, 1);

    const pandoraData1 = {
      cards: events.featuredEvents,
      components: {
        localLink: Link,
      },
      tagMap: {
        nvc,
        rc,
      },
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
        <Page className={`${pageStyleClass}`}>
          <div className="jke">
            <h1 style={{ marginBottom: 10 }}>
              <span>Joy Living Learning</span>
            </h1>
            <h2 style={{ marginBottom: 10 }}>
              <span>
                Nonviolent Communication & Restorative Circles in Auroville,
                India
              </span>
            </h2>
          </div>
          <div className="kale">
            <div>
              <hr />
              {map(landingData, (dataBit, index) => {
                const { image, title, lead } = dataBit;

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
                        {title}
                      </h3>
                    </div>
                    <p style={{ flexGrow: 80, flexBasis: 0, marginBottom: 0 }}>
                      {lead}
                    </p>
                  </div>
                );
              })}
              <div
                style={{
                  display: "block",
                  marginBottom: 10,
                }}
              >
                <ContainerDimensions>
                  {({ width }) => {
                    const carouselWidth = width;
                    const carouselHeight = width * 0.625;
                    return (
                      <div
                        style={{
                          width: carouselWidth,
                          height: "auto",
                        }}
                      >
                        <Carousel
                          autoplay
                          arrows
                          nextArrow={<NextArrow />}
                          prevArrow={<PrevArrow />}
                        >
                          {map(sliderData, (slide, index) => {
                            const { image, text } = slide;

                            return (
                              <div key={`slide-${index}`}>
                                <Image
                                  src={image}
                                  rawWidth={1440}
                                  rawHeight={900}
                                  style={{
                                    width: carouselWidth,
                                    height: carouselHeight,
                                    border: 0,
                                    background: "transparent",
                                    marginBottom: 20,
                                  }}
                                  loader="gradient"
                                />
                                <p>{text}</p>
                              </div>
                            );
                          })}
                        </Carousel>
                      </div>
                    );
                  }}
                </ContainerDimensions>
              </div>
              {!isMobile && <LearnMore data={learnMoreData} />}
            </div>
            <div>
              <Image src={cover1X} className="xCover is-hidden-mobile" />
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 6 }}>
                About
              </h3>
              <p style={{ marginTop: 0 }}>
                Joy Living Learning is situated in Auroville, an international
                community in south India that aims to actualize human unity.
                Given this environment, we are surrounded by opportunities for
                growth, learning and exploration.
              </p>
              <p>
                Joy Living Learning is a Unit of the Auroville Foundation, and
                L'aura Joy is a Certified Trainer with the Center for Nonviolent
                Communication (USA).
              </p>
              <div className="mask-p" style={{ marginBottom: 20 }}>
                <OutLink to="https://www.auroville.org/">
                  <Image
                    src={avLogo}
                    rawWidth={450}
                    rawHeight={450}
                    style={{
                      display: "inline-block",
                      border: "none",
                      background: "none",
                      height: 55,
                      width: 55,
                      marginRight: 2,
                    }}
                  />
                </OutLink>
                <OutLink to="http://www.cnvc.org/" style={{ marginLeft: 17 }}>
                  <Image
                    src={cnvc}
                    rawWidth={1233}
                    rawHeight={734}
                    style={{
                      display: "inline-block",
                      border: "none",
                      background: "none",
                      height: 47,
                      marginBottom: 4,
                      width: "auto",
                    }}
                  />
                </OutLink>
              </div>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <div style={{ position: "relative" }}>
                <h3 className="mask-p" style={{ marginBottom: 0 }}>
                  Upcoming Events
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
                  <Link to="/workshops-and-events">See more ⇝</Link>
                </p>
              </div>
              <SectionHalley data={pandoraData1} />

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
              <SectionHalley data={pandoraData2} />

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
              <SectionHalley data={pandoraData3} />

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 5 }}>
                Living Nonviolence
              </h3>
              <p
                style={{
                  fontFamily: "futura-pt, sans-serif",
                  fontWeight: 200,
                  marginBottom: 17,
                  marginTop: 0,
                }}
              >
                <span style={{ fontSize: "125%" }}>
                  <i>
                    “My optimism rests on my belief in the infinite
                    possibilities of the individual to develop nonviolence. The
                    more you develop it in your own heart, the more infectious
                    it becomes, till it overwhelms your surroundings and, by and
                    by, might oversweep the world.”
                  </i>
                  <br />
                  ~ <strong>Mahatma Gandhi</strong>
                </span>
              </p>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 13 }}>
                Find us on Facebook
              </h3>
              <FacebookProvider appId="218604115574634">
                <FBPage
                  href="https://www.facebook.com/JoyLivingLearning"
                  tabs="timeline,events,messages"
                />
              </FacebookProvider>

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

IndexPage.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query IndexQuery {
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
export default withSizes(mapSizesToProps)(IndexPage);
