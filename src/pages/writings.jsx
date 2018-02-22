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
const { H1, H2, H3, Paragraph } = Elements;
const { data } = packageJson;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageTitle = 'Blog';
const pageSlug = 'writings';
const pageAbstract = 'Blog abstract.';

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
  ...applyRhythm({ maxWidth: '40X' }),
  '& div.category': {
    ...applyRhythm({ marginBottom: '3X' }),
  },
  '& article': {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    ...applyRhythm({ marginBottom: '1.86X' }),

    '& .banner': {
      flex: '12 1 0%',
    },

    '& .abstract': {
      flex: '12 1 0%',
      ...applyRhythm({ paddingLeft: '0.6882X' }),

      '& h3': {
        marginTop: 0,
        marginBottom: 5,
      },
    },
  },
  '& article:last-child': {
    border: '0 !important',
  },
  '@media(max-width: 768px)': {
    '& .display': {
      display: 'block',
      '& .banner': {
        display: 'block',
      },
      '& .abstract': {
        display: 'block',
        padding: '0px',
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
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const writingsNodes = [];
    let accessibleCategories = [];

    _.map(postEdges, ({ node }) => {
      if (_.startsWith(_.trim(node.fields.route), 'writings') === true) {
        writingsNodes.push({ node });
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
                <H1 id={catId}>{catString}</H1>
                {_.map(writingsNodes, ({ node }) => {
                  const { date, title, abstract, cover } = node.frontmatter;
                  const { route } = node.fields;
                  const dateStr = moment(date).format('dddd, MMMM Do YYYY');
                  const when = moment(date).fromNow();

                  return (
                    <Fragment key={route}>
                      {node.frontmatter.category === category && (
                        <Article key={route}>
                          <div className="banner">
                            <Image
                              src={cover}
                              rawWidth={1440}
                              rawHeight={900}
                              loader="gradient"
                              style={{ border: 0 }}
                            />
                          </div>
                          <div className="abstract">
                            <Header>
                              <Link to={route}>
                                <H3 mask="h4">{title}</H3>
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
        <Paragraph style={{ textAlign: 'center' }}>~ fin ~</Paragraph>
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
