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
// import { Row, Col, Carousel } from 'antd';
import { Image } from "@bodhi-project/components";
import { Elements, applyRhythm } from "@bodhi-project/typography";
import { Page, Article, Header } from "@bodhi-project/semantic-webflow";

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { H1, H2, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Blog",
  nakedPageSlug: "",
  pageAbstract: "Blog.",
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
  "& .top-link": {
    color: "inherit",
    "&:hover": {
      color: "#6D00FF",
      borderBottom: "1.625px solid #6D00FF",
    },
  },

  "& div.category": {
    ...applyRhythm({ marginBottom: "3X" }),
  },
  "& article": {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "flex-start",
    ...applyRhythm({ marginBottom: "1.86X" }),

    "& .banner": {
      flex: "7 1 0%",

      "& a": {
        borderBottom: "none",

        "&:hover": {
          borderBottom: "none",
        },
      },
    },

    "& .abstract": {
      flex: "12 1 0%",
      ...applyRhythm({ paddingLeft: "0.6882X" }),

      "& h3": {
        marginTop: 0,
        marginBottom: 5,
      },
    },
  },
  "& article:last-child": {
    border: "0 !important",
  },
  "@media(max-width: 768px)": {
    "& .display": {
      display: "block",
      "& .banner": {
        display: "block",
      },
      "& .abstract": {
        display: "block",
        padding: "0px",
      },
    },
  },
});
const pageStyleClass = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** parseQueryString */
const parseQueryString = string => {
  const objURL = {};

  string.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), ($0, $1, $2, $3) => {
    objURL[$1] = $3;
  });

  return objURL;
};

// ------------------------------------------------------------------------------
// -------------------------------------------------------------------- Component
// ------------------------------------------------------------------------------
/** Blog */
class Blog extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
    this.state = {
      query: { filter: null },
    };
  }

  /** componentWillReceiveProps - set current date */
  componentWillReceiveProps(nextProps) {
    const nextQuery = parseQueryString(
      nextProps.location ? nextProps.location.search : null,
    );
    if (!_.isEqual(nextQuery, this.state.query)) {
      this.setState({ query: nextQuery });
    }
  }

  /** standard renderer */
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    let accessibleCategories = [];
    let activeFilter = null;
    const urlQuery = parseQueryString(this.props.location.search);
    const query = _.isNull(this.state.query.filter)
      ? urlQuery
      : this.state.query;
    const { filter } = query;

    let filteredData = null;
    if (filter) {
      activeFilter = filter;
      filteredData = _.filter(postEdges, ({ node }) => {
        let displayThis = false;
        if (_.startsWith(_.trim(node.fields.route), "writings") === true) {
          const cat = _.lowercase(_.split(node.frontmatter.category, ".")[1]);
          if (activeFilter === "all") {
            displayThis = true;
            accessibleCategories.push(node.frontmatter.category);
          } else if (activeFilter === cat) {
            displayThis = true;
            accessibleCategories.push(node.frontmatter.category);
          }
        }
        return displayThis;
      });
    } else {
      filteredData = postEdges;
    }

    accessibleCategories = _.uniq(accessibleCategories);

    const categories = accessibleCategories.sort((a, b) => {
      const A = a.toLowerCase();
      const B = b.toLowerCase();
      // sort string ascending
      if (A < B) return -1;
      if (A > B) return 1;
      // default return value (no sorting)
      return 0;
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
        <Page className={pageStyleClass}>
          {_.map(categories, category => {
            let catString = _.trim(_.last(_.split(category, ".")));
            const catId = _.kebabCase(_.toLower(catString));
            switch (catString) {
              case "NVC":
                catString = "Nonviolent Communication";
                break;
              case "RC":
                catString = "Restorative Circles";
                break;
            }

            return (
              <div className="category" key={catId}>
                <H1 className="mask-h2" id={catId}>
                  {filter !== "all" && (
                    <Fragment>
                      <Link to="/writings?filter=all" className="top-link">
                        Blog
                      </Link>
                      &nbsp;›&nbsp;
                    </Fragment>
                  )}
                  {catString}
                </H1>
                {_.map(filteredData, ({ node }) => {
                  const { date, title, abstract, cover } = node.frontmatter;
                  const { route } = node.fields;
                  const dateStr = moment(date).format("dddd, MMMM D, YYYY");
                  const when = moment(date).fromNow();

                  return (
                    <Fragment key={route}>
                      {node.frontmatter.category === category && (
                        <Article key={route}>
                          <div className="banner">
                            <Link style={{ display: "block" }} to={route}>
                              <Image
                                src={cover}
                                rawWidth={1440}
                                rawHeight={900}
                                loader="gradient"
                                style={{ border: 0 }}
                              />
                            </Link>
                          </div>
                          <div className="abstract">
                            <Header>
                              <Link to={route}>
                                <H2 className="mask-h4">{title}</H2>
                                <Paragraph style={{ marginBottom: 20 }}>
                                  <small>
                                    <i>
                                      {dateStr}&nbsp;({when})
                                    </i>
                                  </small>
                                  <br />
                                  <br />
                                  {abstract}
                                </Paragraph>
                              </Link>
                            </Header>
                          </div>
                        </Article>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            );
          })}
        </Page>
      </Fragment>
    );
  }
}

Blog.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query WritingsQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
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
            category
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
export default Blog;
