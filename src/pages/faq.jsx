// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { css } from 'glamor';
import moment from 'moment';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
// import { Row, Col, Carousel } from 'antd';
import { Image } from '@bodhi-project/components';
import { Elements, applyRhythm } from '@bodhi-project/typography';
import {
  Page,
  Section,
  Article,
  Header,
  Footer,
} from '@bodhi-project/semantic-webflow';
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import ogX from './assets/ogX.jpg';
import twitterSummaryX from './assets/twitterSummaryX.jpg';
import packageJson from '../../package.json';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { data } = packageJson;
const { H2, H3, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageTitle = 'FAQs';
const pageSlug = 'faq';
const pageAbstract = 'FAQ abstract...';

const generalMetaData = {
  description: pageAbstract,
  keywords: data.websiteKeywords,
  image: ogX,
};

const twitterSummaryCardData = {
  site: data.websiteName,
  creator: data.org.name,
  title: pageTitle,
  description: pageAbstract,
  image: twitterSummaryX,
};

const openGraphSummaryData = {
  siteName: data.websiteName,
  url: `${data.websiteUrl}${pageSlug}`,
  title: pageTitle,
  description: pageAbstract,
  image: ogX,
};

const webpageSchemaData = {
  url: `${data.websiteUrl}${pageSlug}`,
  name: pageTitle,
  description: pageAbstract,
  author: data.org.name,
  publisher: data.org.name,
  image: ogX,
};

const breadcrumbSchemaData = {
  breadcrumbs: [
    { name: 'Home', url: `${data.websiteUrl}` },
    { name: pageTitle, url: `${data.websiteUrl}${pageSlug}` },
  ],
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  '& hr': {
    borderBottom: '2px solid #292929',
  },
});
const pageStyleClass = pageStyle.toString();

// ------------------------------------------------------------------------------
// -------------------------------------------------------------------- Component
// ------------------------------------------------------------------------------
/** FAQs */
class Faqs extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const faqNodes = [];
    let accessibleCategories = [];

    _.map(postEdges, ({ node }) => {
      if (_.startsWith(_.trim(node.fields.route), 'faq') === true) {
        faqNodes.push({ node });
        accessibleCategories.push(node.frontmatter.category);
      }
    });

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
            const catString = _.trim(_.last(_.split(category, '.')));
            const catId = _.kebabCase(_.toLower(catString));

            return (
              <div className="category" key={catId}>
                <hr />
                <H2 id={catId}>{catString}</H2>
                {_.map(faqNodes, ({ node }) => {
                  const { date, title, abstract, cover } = node.frontmatter;
                  const { route } = node.fields;
                  // const dateStr = moment(date).format('dddd, MMMM Do YYYY');
                  // const when = moment(date).fromNow();

                  return (
                    <Fragment key={route}>
                      {node.frontmatter.category === category && (
                        <Article key={route}>
                          <Header>
                            <H3 mask="h4">Q. {title} ?</H3>
                          </Header>
                          <Paragraph style={{ marginBottom: 20 }}>
                            A. {abstract}
                          </Paragraph>
                        </Article>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            );
          })}
        </Page>
        <Paragraph style={{ textAlign: 'center' }}>~ fin ~</Paragraph>
      </Fragment>
    );
  }
}

Faqs.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query FaqsQuery {
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
export default Faqs;
