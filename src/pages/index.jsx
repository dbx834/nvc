// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import FacebookProvider, { Page as FBPage } from "react-facebook";
import { Image, OutLink } from "@bodhi-project/components";
import { Collapse, Carousel } from "antd";
import { Page, Article } from "@bodhi-project/semantic-webflow";
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
import LearnMore from "../components/LearnMore";
import MiniCalendar from "../components/MiniCalendar";

import nvcPhoto from "../assets/nvc-in-progress.jpg";
import cnvc from "../assets/cnvc.png";
import logo from "../assets/logo.png";
import plant from "../assets/plant.jpg";
import sun from "../assets/sun.jpg";
import earth from "../assets/earth.jpg";
import auroville from "../assets/auroville.png";

import slide1S2 from "../assets/slider/slide1.jpg";
import slide2S2 from "../assets/slider/slide2.jpg";
import slide3S2 from "../assets/slider/slide3.jpg";
import slide4S2 from "../assets/slider/slide4.jpg";
import slide5S2 from "../assets/slider/slide5.jpg";
import slide6S2 from "../assets/slider/slide6.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { Panel } = Collapse;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const landingData = [
  {
    image: sun,
    title: "Vision",
    lead:
      "We envision a world where everyone’s needs matter, and where we live in a consciousness of trust and abundance, knowing that each one of us inherently belongs, and that together we are more powerful than apart.",
  },
  {
    image: plant,
    title: "Mission",
    lead:
      "Our mission is to live and share the principles of Nonviolence, both in terms of an individual practice and way of life, but also in its application to social structures, be it in our families, schools, and organizations.",
  },
  {
    image: sun,
    title: "Aim",
    lead:
      "In our exploration of this paradigm shift and living in integrity with our values, we offer workshops, retreats and practice groups in Nonviolent Communication, Restorative Circles, and more. We also offer coaching and mediation, as well as community support and opportunities for apprenticeship programs.",
  },
  {
    image: earth,
    title: "About",
    lead:
      "Joy Living Learning is situated in Auroville, an international community in south India that aims to actualize human unity. We are surrounded by opportunities for growth, learning and exploration.",
  },
];

const sliderData = [
  {
    image: slide1S2,
  },
  {
    image: slide2S2,
  },
  {
    image: slide3S2,
  },
  {
    image: slide4S2,
  },
  {
    image: slide5S2,
  },
  {
    image: slide6S2,
  },
];

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Homepage",
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

  "& .joke": {
    padding: "0em 1.25em",
    marginBottom: 30,
  },

  "& hr": {
    border: "none",
    borderTop: "3px solid #B43808",
    marginBottom: 20,
  },

  "& .kale": {
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
  if (_.indexOf(array, value) >= 0) {
    rx = true;
  }
  return rx;
};

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** IndexPage */
class IndexPage extends React.Component {
  /** standard renderer */
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const todayInt = parseInt(moment().format("YYYYMMDD"), 10);
    let filteredRecords = 1;
    const totalEvents = 6;
    const featured = false;

    // get only events
    const eventNodes = [];
    _.map(postEdges, ({ node }) => {
      if (_.startsWith(_.trim(node.fields.route), "events") === true) {
        eventNodes.push({ node });
      }
    });

    // filter it
    const filtered = _.filter(postEdges, ({ node }) => {
      let includeThis = false;
      const { frontmatter } = node;
      const { tags, date, startDate } = frontmatter;
      const mDate = moment(!_.isNull(date) ? date : startDate);
      const xDate = parseInt(mDate.format("YYYYMMDD"), 10);

      const inTheFuture = todayInt <= xDate;
      const belowMax = totalEvents >= filteredRecords;
      const isFeatured = featured === true ? inArray(tags, "featured") : true;

      if (inTheFuture && belowMax && isFeatured) {
        includeThis = true;
        filteredRecords += 1;
      }
      return includeThis;
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
          <div className="joke">
            <h1 style={{ marginBottom: 10 }}>
              <span>Joy Living Learning</span>
            </h1>
            <h2 style={{ marginBottom: 10 }}>
              <span>
                Nonviolent Communication & Restorative Circles in Auroville &
                India
              </span>
            </h2>
          </div>
          <div className="kale">
            <div>
              <hr />
              {_.map(landingData, (dataBit, index) => {
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
                    <div style={{ flexGrow: 15, flexBasis: 0 }}>
                      <Image
                        src={image}
                        rawWidth={900}
                        rawHeight={900}
                        style={{
                          width: 45,
                          height: 45,
                          border: 0,
                          background: "transparent",
                          display: "block",
                          margin: "auto",
                        }}
                      />
                      <h3
                        className="mask-p"
                        style={{ textAlign: "center", marginBottom: 0 }}
                      >
                        {title}
                      </h3>
                    </div>
                    <p style={{ flexGrow: 80, flexBasis: 0, marginBottom: 0 }}>
                      {lead}
                    </p>
                  </div>
                );
              })}
              <br />
              <br />
              <Carousel autoplay>
                {_.map(sliderData, (slide, index) => {
                  const { image } = slide;

                  return (
                    <div key={`slide-${index}`}>
                      <Image
                        src={image}
                        rawWidth={1440}
                        rawHeight={900}
                        style={{
                          width: 600,
                          height: 375,
                          border: 0,
                          background: "transparent",
                        }}
                        loader="gradient"
                        className="mask-p"
                      />
                    </div>
                  );
                })}
              </Carousel>
              <br />
              <br />
              <LearnMore />
            </div>
            <div>
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 0 }}>
                Upcoming Events
              </h3>
              <MiniCalendar
                data={postEdges}
                location={this.props.location}
                givenTags={{
                  all: "All Events",
                  nvc: "NVC Events",
                  rc: "RC Events",
                  featured: "Featured Events",
                }}
              />
              <hr />
              <h3 className="mask-p">Living Nonviolence</h3>
              <p
                style={{
                  fontFamily: "futura-pt, sans-serif",
                  fontWeight: 200,
                  marginBottom: 30,
                }}
              >
                <span style={{ fontSize: "125%" }}>
                  <i>
                    “My optimism rests on my belief in the infinite
                    possibilities of the individual to develop nonviolence. The
                    more you develop it in your own heart, the more infectious
                    it becomes, till it overwhelms your surroundings and, by and
                    by, might oversweep the world.”
                  </i>{" "}
                  ~ <strong>Gandhi</strong>
                </span>
              </p>
              <hr />
              <h3 className="mask-p">Affiliations</h3>
              <p>
                Joy Living Learning is a Unit of the Auroville Foundation, and
                L'aura Joy is a Certified Trainer with the Center for Nonviolent
                Communication.
              </p>
              <div className="mask-p" style={{ marginBottom: 30 }}>
                <OutLink to="https://www.auroville.org/">
                  <Image
                    src={auroville}
                    rawWidth={450}
                    rawHeight={450}
                    style={{
                      display: "inline-block",
                      border: "none",
                      background: "none",
                      height: 90,
                      width: 90,
                      marginRight: 2,
                    }}
                  />
                </OutLink>
                <OutLink to="http://www.cnvc.org/" style={{ marginLeft: 17 }}>
                  <Image
                    src={cnvc}
                    rawWidth={450}
                    rawHeight={450}
                    style={{
                      display: "inline-block",
                      border: "none",
                      background: "none",
                      height: 90,
                      width: 90,
                    }}
                  />
                </OutLink>
              </div>
              <hr />
              <h3 className="mask-p">Find us on Facebook -</h3>
              <FacebookProvider appId="218604115574634">
                <FBPage
                  href="https://www.facebook.com/JoyLivingLearning"
                  tabs="timeline,events,messages"
                />
              </FacebookProvider>
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

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default IndexPage;
