// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// import _ from 'lodash';
import { css } from 'glamor';
// import moment from 'moment';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
import { Row, Col } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import { Container } from '@bodhi-project/components';
import { Elements } from '@bodhi-project/typography';
// import { Page, Section, Article, Header, Footer } from '@bodhi-project/semantic-webflow';
import { treeCodeParser, tocParser } from '@bodhi-project/markdown-to-react';
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
} from '@bodhi-project/seo';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
import indexImage from '../pages/assets/index.jpg';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
// const { Fragment } = React;
const { H1, H2, H3, H4, H5, H6, Paragraph, Ul, Ol } = Elements;
// console.log(type);

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Style for Markdown ---> React
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Style for Markdown ---> React
const markdownStyles = css({
  '& p + p': {
    textIndent: '0px !important',
  },

  '& h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child, p.md-cat:first-child': {
    marginTop: '0 !important',
  },
  '& .md-pages > li:last-child': {
    // marginBottom: `${modularScale.base.px * 0.375 / 4}em`,
  },
  '& .md-pages': {
    paddingLeft: '1.5em',
    listStyle: 'none',
  },
  '& .md-page-active > span': {
    marginLeft: '-28.2px !important',
  },
  '& .md-headings': {
    listStyle: 'none',
    paddingLeft: '1.25em',

    '& li': {
      fontSize: 'inherit',
      position: 'relative',

      '&:first-child': {
        marginTop: 20,
      },

      '&:before': {
        content: `""`,
        display: 'block',
        borderTop: '1px solid #363636',
        borderLeft: '1px solid #363636',
        height: '100%',
        width: '0.475em',
        position: 'absolute',
        bottom: '-0.625em',
        left: '-0.863em',
      },

      '&:after': {
        content: `""`,
        display: 'block',
        borderLeft: '1px solid #363636',
        height: '100%',
        width: '0.475em',
        position: 'absolute',
        bottom: '0.475em',
        left: '-0.863em',
      },

      '&:last-child:before': {
        borderLeft: 'none',
      },
    },
  },
});
const markdownStylesClass = markdownStyles.toString();

// ----------------------------------------------------------------------- Component
/**
 * PageWrapper
 */
class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { frontmatter } = this.props.data.markdownRemark;
    const { toc } = this.props.pathContext;
    const { markdownAst } = this.props.pathContext;
    const { headings } = this.props.data.markdownRemark;
    const { route } = this.props.pathContext;

    const generalMetaData = {
      description: frontmatter.abstract,
      keywords: 'GatsbyJS, React, Netlify',
      image: indexImage,
    };

    const twitterSummaryCardData = {
      site: 'Launch Kit',
      creator: 'Bodhi Project',
      title: frontmatter.title,
      description: frontmatter.abstract,
      image: indexImage,
    };

    const openGraphSummaryData = {
      siteName: 'Launch Kit',
      url: `https://launch-kit.bodhiproject.org${route}`,
      title: frontmatter.title,
      description: frontmatter.abstract,
      image: indexImage,
    };

    const webpageSchemaData = {
      url: `https://launch-kit.bodhiproject.org${route}`,
      name: frontmatter.title,
      description: frontmatter.abstract,
      author: 'Bodhi Project',
      publisher: 'Bodhi Project',
      image: indexImage,
    };

    const breadcrumbSchemaData = {
      breadcrumbs: [{ name: 'Home', url: 'https://launch-kit.bodhiproject.org/' }, { name: frontmatter.title, url: `https://launch-kit.bodhiproject.org${route}` }],
    };

    return (
      <Container block bleed noFade style={{ padding: '102px 0px 63px 0px', background: '#090C6D' }}>
        <Container noFade block style={{ padding: '0px 23px 0px 23px', minHeight: '100vh', background: '#FAFAFA' }} className={markdownStylesClass}>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
          <UpdateTitle title={frontmatter.title} />
          <GeneralMeta data={generalMetaData} />
          <TwitterSummaryCard data={twitterSummaryCardData} />
          <OpenGraphSummary data={openGraphSummaryData} />
          <WebpageSchema data={webpageSchemaData} />
          <BreadcrumbSchema data={breadcrumbSchemaData} />

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
          <Row type="flex" style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
            <Col xs={0} sm={0} md={1}>
              &nbsp;
            </Col>
            <Col xs={24} sm={24} md={16}>
              {treeCodeParser(markdownAst, { localLink: Link, linkHeaders: true, trackHeaders: true, nestHeaders: true }, {})}
            </Col>
            <Col xs={0} sm={0} md={1}>
              &nbsp;
            </Col>
            <Col xs={24} sm={24} md={6}>
              {tocParser(toc, this.props.location.pathname, { localLink: Link }, {}, { where: frontmatter.title, what: headings })}
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.func,
};

// {renderToc(toc, this.props.location.pathname)}
// ----------------------------------------------------------------------- GraphQL Query
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query BlogPostBySlug($route: String!) {
    markdownRemark(fields: { route: { eq: $route } }) {
      headings {
        depth
        value
      }
      frontmatter {
        title
        cover
        date
        category
        tags
        abstract
      }
    }
  }
`;
/* eslint-enable no-undef */

// ----------------------------------------------------------------------- Export
export default PageWrapper;
