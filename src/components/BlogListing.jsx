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
import trim from "lodash/trim";
import replace from "lodash/replace";
import lowerCase from "lodash/lowerCase";
import split from "lodash/split";
import uniq from "lodash/uniq";
import last from "lodash/last";
import kebabCase from "lodash/kebabCase";
import toLower from "lodash/toLower";
import map from "lodash/map";
import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Elements } from "@bodhi-project/typography";
import { Article, Header } from "@bodhi-project/semantic-webflow";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Tag from "antd/lib/tag";
import "antd/lib/tag/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const filterF = filter;
const { CheckableTag } = Tag;
const { Paragraph } = Elements;

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
      margin: "5px 1%",
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
class BlogListing extends React.Component {
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
    const postEdges = this.props.nodes;
    let accessibleCategories = [];
    let allCategories = [];
    const urlQuery = parseQueryString(this.props.location.search);
    const query = isNull(this.state.query.filter) ? urlQuery : this.state.query;
    let { filter } = query;
    filter = isUndefined(filter) ? "all" : filter;
    let filteredData = null;

    filteredData = filterF(postEdges, ({ node }) => {
      let displayThis = false;
      const cat = replace(
        lowerCase(split(node.frontmatter.category, ".")[1]),
        " ",
        "-",
      );

      allCategories.push(node.frontmatter.category);

      if (filter === "all") {
        displayThis = true;
        accessibleCategories.push(node.frontmatter.category);
      } else if (filter === cat) {
        displayThis = true;
        accessibleCategories.push(node.frontmatter.category);
      }

      return displayThis;
    });

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
    switch (filter) {
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
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <div className={pageStyleClass}>
          <div style={{ padding: "0em 1em" }}>
            {filter === "all" ? (
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
                  {filter === tagKey ? (
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
          </div>

          <div className="articles">
            {map(filteredData, ({ node }) => {
              const { date, title, abstract, cover } = node.frontmatter;
              const { route } = node.fields;
              const dateStr = moment(date).format("dddd, MMMM D, YYYY");
              const when = moment(date).fromNow();

              return (
                <Article key={route}>
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
                        <Paragraph style={{ marginBottom: 2 }}>
                          <small style={{ marginBottom: 10, display: "block" }}>
                            <i>
                              {dateStr}&nbsp;({when})
                            </i>
                          </small>
                          {abstract}
                        </Paragraph>
                      </Link>
                    </Header>
                  </div>
                </Article>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

BlogListing.propTypes = {
  nodes: PropTypes.array,
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default BlogListing;
