// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Page } from "@bodhi-project/semantic-webflow";
import Link from "gatsby-link";

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
import SectionAstrid from "@bodhi-project/blocks/lib/SectionAstrid";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Writings",
  nakedPageSlug: "writings",
  pageAbstract:
    "Our mission is to live and share the principles of Nonviolence, not only in terms of an individual practice and way of life, but also in its application to social structures, such as in our families, schools, and organizations.",
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
  "& hr": {
    border: "none",
    borderTop: "3px solid #B43808",
    marginBottom: 20,
  },
});
const pageStyleClass = pageStyle.toString();

// ------------------------------------------------------------------------------
// -------------------------------------------------------------------- Component
// ------------------------------------------------------------------------------
/** Blog */
class Blog extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const cards = [];

    map(postEdges, ({ node }) => {
      cards.push({
        route: node.fields.route,
        humanDate: node.fields.humanDate,
        elapsed: node.fields.elapsed,
        abstract: node.frontmatter.abstract,
        title: node.frontmatter.title,
        cover: node.frontmatter.cover,
        date: node.frontmatter.date,
        category: node.frontmatter.category,
      });
    });

    const astridData = {
      cards,
      components: {
        localLink: Link,
      },
      conf: {
        image: {
          rawCoverWidth: 1440,
          rawCoverHeight: 900,
        },
      },
      categoryMap: {
        NVC: "Nonviolent Communication",
        RC: "Restorative Circles",
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
        <Page className={pageStyleClass}>
          <h1 style={{ marginBottom: 10 }}>Blog</h1>
          <hr />
          <SectionAstrid data={astridData} />
        </Page>
      </Fragment>
    );
  }
}

Blog.propTypes = {
  data: PropTypes.object, // eslint-disable-line react/forbid-prop-types
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
      filter: { frontmatter: { type: { eq: "post" } } }
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
