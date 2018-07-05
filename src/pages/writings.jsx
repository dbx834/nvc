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
import withSizes from "react-sizes";
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
import "@bodhi-project/antrd/lib/nvc-website/tag/style/css";

import SectionSaros from "@bodhi-project/blocks/lib/SectionSaros";
import "@bodhi-project/antrd/lib/nvc-website/collapse/style/css";
import "@bodhi-project/antrd/lib/nvc-website/spin/style/css";
import "@bodhi-project/antrd/lib/nvc-website/button/style/css";

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

  "& .oa-card": {
    "& .oa-card-details": {
      "& p:last-child": {
        "& span": {
          color: "#0000FF !important",
          borderBottom: "1.625px solid transparent",

          "&:hover": {
            color: "#6D00FF",
            borderBottom: "1.625px solid #6D00FF",
          },
          "&:visited": {
            textDecoration: "none",
          },
          "&:link": {
            textDecoration: "none",
          },
          "&:active": {
            textDecoration: "none",
          },
        },
      },
    },
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
    const { isMobile } = this.props;
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

    const sarosData = {
      cards,
      components: {
        localLink: Link,
      },
      show: 5,
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
          {!isMobile ? (
            <SectionAstrid data={astridData} />
          ) : (
            <SectionSaros
              data={sarosData}
              style={{ padding: 0, marginBottom: 60 }}
            />
          )}
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

/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
});

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default withSizes(mapSizesToProps)(Blog);
