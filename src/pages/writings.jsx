// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isEqual from "lodash/isEqual";
import isNull from "lodash/isNull";
import filter from "lodash/filter";
import startsWith from "lodash/startsWith";
import trim from "lodash/trim";
import replace from "lodash/replace";
import lowerCase from "lodash/lowerCase";
import split from "lodash/split";
import uniq from "lodash/uniq";
import last from "lodash/last";
import kebabCase from "lodash/kebabCase";
import toLower from "lodash/toLower";
import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Tag from "antd/lib/tag";
import "antd/lib/tag/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const filterF = filter;
const { CheckableTag } = Tag;
const { H1, H2, H3, Paragraph } = Elements;

const colors = ["#f8e6ec", "#e6ecf8", "#f2e6f8", "#e6f8f2"];

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
  "& .articles": {
    display: "flex",
    flexWrap: "wrap",

    "& article": {
      flex: "0 0 30%",
      margin: "20px 1%",
      transition: "box-shadow 0.1s ease-in-out, border 0.5s ease-in-out",
      borderRadius: 6,
      border: "1px solid rgba(74, 74, 74, 0.25)",

      "&:hover": {
        boxShadow: "0 0 25px rgba(0,0,0,.11)",
        border: "1px solid rgba(74, 74, 74, 0.75)",
      },

      "& a": {
        borderBottom: "1.625px solid transparent",

        "&:hover": {
          color: "#6D00FF",
          borderBottom: "1.625px solid transparent",
        },
      },

      "& .abstract": {
        padding: "16px 10px",

        "& h3": {
          fontFamily: "adobe-garamond-pro, serif",
        },

        "& hr": {
          border: "none",
          borderTop: "1px solid #B43808",
          marginBottom: 20,
          marginLeft: 0,
          width: "37.5%",
        },

        "& .article-category": {},
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
    this.applyFilter = this.applyFilter.bind(this);
  }

  /** componentWillReceiveProps - set current date */
  componentWillReceiveProps(nextProps) {
    const nextQuery = parseQueryString(
      nextProps.location ? nextProps.location.search : null,
    );
    if (!isEqual(nextQuery, this.state.query)) {
      this.setState({ query: nextQuery });
    }
  }

  /** applyFilter */
  applyFilter(filter) {
    this.setState({ query: { filter: filter } });
  }

  /** standard renderer */
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    let accessibleCategories = [];
    let allCategories = [];
    let activeFilter = null;
    const urlQuery = parseQueryString(this.props.location.search);
    const query = isNull(this.state.query.filter) ? urlQuery : this.state.query;
    const { filter } = query;

    let filteredData = null;
    if (filter) {
      activeFilter = filter;
      filteredData = filterF(postEdges, ({ node }) => {
        let displayThis = false;
        if (startsWith(trim(node.fields.route), "writings") === true) {
          allCategories.push(node.frontmatter.category);
          const cat = replace(
            lowerCase(split(node.frontmatter.category, ".")[1]),
            " ",
            "-",
          );
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

    accessibleCategories = uniq(accessibleCategories);

    allCategories = uniq(allCategories);
    const sortedCategories = allCategories.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

    const categories = accessibleCategories.sort((a, b) => {
      const A = a.toLowerCase();
      const B = b.toLowerCase();
      // sort string ascending
      if (A < B) return -1;
      if (A > B) return 1;
      // default return value (no sorting)
      return 0;
    });

    let displayFilterAs = null;
    switch (activeFilter) {
      case "nvc":
        displayFilterAs = "Nonviolent Communication";
        break;
      case "rc":
        displayFilterAs = "Restorative Circles";
        break;
      case "journal":
        displayFilterAs = "Journal";
        break;
      case "corporate":
        displayFilterAs = "Corporate";
        break;
      case "published-articles":
        displayFilterAs = "Published Articles";
        break;
      case "all":
        displayFilterAs = "All Posts";
        break;
      case "testimonials":
        displayFilterAs = "Testimonials";
        break;
    }

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
          {activeFilter === "all" ? (
            <CheckableTag
              checked
              onClick={() => this.applyFilter("all")}
              style={{ marginBottom: 10 }}
            >
              All posts
            </CheckableTag>
          ) : (
            <Tag
              onClick={() => this.applyFilter("all")}
              style={{ marginBottom: 10 }}
            >
              All posts
            </Tag>
          )}
          {map(sortedCategories, category => {
            let displayAs = trim(last(split(category, ".")));
            const tagKey = kebabCase(toLower(displayAs));

            switch (displayAs) {
              case "NVC":
                displayAs = "Nonviolent Communication";
                break;
              case "RC":
                displayAs = "Restorative Circles";
                break;
              case "Journal":
                displayAs = "Journal";
                break;
              case "Corporate":
                displayAs = "Corporate";
                break;
              default:
                break;
            }

            return (
              <Fragment key={tagKey}>
                {activeFilter === tagKey ? (
                  <CheckableTag
                    checked
                    onClick={() => this.applyFilter(tagKey)}
                    style={{ marginBottom: 10 }}
                  >
                    {displayAs}
                  </CheckableTag>
                ) : (
                  <Tag
                    onClick={() => this.applyFilter(tagKey)}
                    style={{ marginBottom: 10 }}
                  >
                    {displayAs}
                  </Tag>
                )}
              </Fragment>
            );
          })}
          <div className="articles">
            {map(categories, category => {
              let catString = trim(last(split(category, ".")));
              const catId = kebabCase(toLower(catString));
              switch (catString) {
                case "NVC":
                  catString = "Nonviolent Communication";
                  break;
                case "RC":
                  catString = "Restorative Circles";
                  break;
                case "Journal":
                  catString = "Journal";
                  break;
                case "Corporate":
                  catString = "Corporate";
                  break;
                default:
                  break;
              }

              return (
                <Fragment key={catId}>
                  {map(filteredData, ({ node }) => {
                    const { date, title, abstract, cover } = node.frontmatter;
                    const { route } = node.fields;
                    const dateStr = moment(date).format("dddd, MMMM D, YYYY");
                    const when = moment(date).fromNow();
                    const randomColor =
                      colors[Math.floor(Math.random() * colors.length)];

                    return (
                      <Fragment key={route}>
                        {node.frontmatter.category === category && (
                          <Article
                            key={route}
                            // style={{ background: randomColor }}
                          >
                            <div className="banner">
                              <Link style={{ display: "block" }} to={route}>
                                <Image
                                  src={cover}
                                  rawWidth={1440}
                                  rawHeight={900}
                                  loader="gradient"
                                  style={{
                                    border: 0,
                                    borderTopLeftRadius: 6,
                                    borderTopRightRadius: 6,
                                  }}
                                />
                              </Link>
                            </div>
                            <div className="abstract">
                              <Header>
                                <Link to={route}>
                                  <h3>{title}</h3>
                                  <hr />
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
                </Fragment>
              );
            })}
          </div>
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
