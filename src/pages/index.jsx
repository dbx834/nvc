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
import { Image, OutLink } from "@bodhi-project/components";
import { Collapse } from "antd";
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

import nvcPhoto from "../assets/nvc-in-progress.jpg";
import cnvc from "../assets/cnvc.png";
import logo from "../assets/logo.png";
import auroville from "../assets/auroville.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { Panel } = Collapse;

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
  "& h1": {
    textTransform: "uppercase",
    fontStyle: "italic",

    "& span": {
      fontSize: "125%",
    },
  },

  "& h2": {
    fontWeight: "200 !important",

    "& span": {
      fontSize: "105%",
    },
  },

  "& h3": {
    fontWeight: "700 !important",
    fontStyle: "italic",
  },

  "& .joke": {
    padding: "0em 0.625em",
    marginBottom: 30,
  },

  "& .kale": {
    display: "flex",

    "& > div": {
      flexBasis: 0,
      padding: "0em 0.625em",

      "& hr": {
        border: "none",
        borderTop: "3px solid #B43808",
        marginBottom: 20,
      },

      "&:nth-child(1)": {
        flexGrow: 62,

        "& .hope": {
          display: "flex",

          "& > div": {
            "&:nth-child(1)": {
              flexGrow: 50,
              paddingRight: "0.625em",
            },

            "&:nth-child(2)": {
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
              <p>
                With our main focus on Nonviolence, we organize workshops,
                residential programs and practice groups on Nonviolent
                Communication (NVC) and Restorative Circles (RC). We are also
                available for community support, mediations, and personal
                coaching.
              </p>
              <p>
                <i>
                  “My optimism rests on my belief in the infinite possibilities
                  of the individual to develop nonviolence. The more you develop
                  it in your own heart, the more infectious it becomes, till it
                  overwhelms your surroundings and, by and by, might oversweep
                  the world.”
                </i>{" "}
                - Gandhi
              </p>
              <Image
                src={nvcPhoto}
                rawWidth={1440}
                rawHeight={900}
                style={{
                  height: "auto",
                  width: "100%",
                  border: 0,
                  background: "transparent",
                }}
                loader="gradient"
                className="mask-p"
              />
              <div className="hope">
                <div>
                  <hr />
                  <h3 className="mask-p">Vision</h3>
                  <p>something something...</p>
                </div>
                <div>
                  <hr />
                  <h3 className="mask-p">Mission</h3>
                  <p>something something...</p>
                </div>
              </div>
              <br />
              <hr />
              <LearnMore />
            </div>
            <div>
              <hr />
              <h3 className="mask-p">About The Center</h3>
              <p>
                We are situated in Auroville, an international community in
                south India, and with its purpose being to actualize human
                unity, we’re surrounded by opportunities for growth, learning
                and exploration.
              </p>
              <p className="text-center">
                <i>Joy Living Learning is a Unit of Auroville Foundation</i>
              </p>
              <div className="mask-p">
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
                      marginRight: 15,
                    }}
                  />
                </OutLink>
                <Link to="/">
                  <Image
                    src={logo}
                    rawWidth={450}
                    rawHeight={450}
                    style={{
                      display: "inline-block",
                      border: "none",
                      background: "none",
                      height: 75,
                      width: 75,
                    }}
                  />
                </Link>
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
                    }}
                  />
                </OutLink>
              </div>
              <hr />
              <h3 className="mask-p">Upcoming Events</h3>
              <p style={{ marginBottom: 20 }}>something something...</p>
              <Collapse>
                {_.map(filtered, ({ node }) => {
                  const { frontmatter } = node;
                  const { fromTime, toTime } = frontmatter;
                  const { fields } = node;
                  const { route, elapsed, humanDate } = fields;

                  return (
                    <Panel
                      header={
                        <p style={{ marginBottom: 0 }}>
                          {frontmatter.title} ({elapsed})
                        </p>
                      }
                      key={route}
                    >
                      <Link to={`/${route}`}>
                        <Article>
                          <p className="abstract">
                            <small className="date">
                              <i>{humanDate}</i>
                            </small>
                            <br />
                            <small className="time">
                              <i>
                                {fromTime} - {toTime}
                              </i>
                            </small>
                            <br />
                            <br />
                            {frontmatter.abstract}
                            <br />
                            <br />
                            <i className="link" style={{ color: "#0000FF" }}>
                              Click to read more…
                            </i>
                          </p>
                        </Article>
                      </Link>
                    </Panel>
                  );
                })}
              </Collapse>
              <br />
              <Link to="/upcoming-events?filter=all">All events ⇝</Link>
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
