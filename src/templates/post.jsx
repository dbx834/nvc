// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import {
  Page,
  // Section,
  Article,
  Header,
  Footer,
} from "@bodhi-project/semantic-webflow";
import { Elements } from "@bodhi-project/typography";
import { treeCodeParser } from "@bodhi-project/markdown-to-react";
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
  BlogPostSchema,
} from "@bodhi-project/seo";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals - Images
import indexImage from "../pages/assets/index.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import packageJson from "../../package.json";
import markdownStylesClass from "../styles/markdownStyles";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { data } = packageJson;
const { H1, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  position: "relative",
});
const pageStyleClass = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** BlogPostTemplate */
class BlogPostTemplate extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    // Abstract stuff
    const { pathContext } = this.props;
    const { frontmatter } = pathContext;
    // const { toc } = pathContext;
    const { markdownAst } = pathContext;
    const { route } = pathContext;
    const checkedRoute = _.startsWith(route, "/") ? route : `/${route}`;
    // const { headings } = pathContext;

    // Date stuff
    const mDate = moment(frontmatter.date);
    const humanDate = mDate.format("dddd, MMMM Do YYYY");
    const isoDate = mDate.format();
    const elapsed = mDate.fromNow();

    const generalMetaData = {
      description: frontmatter.abstract,
      keywords: data.websiteKeywords,
      image: indexImage,
    };

    const twitterSummaryCardData = {
      site: data.websiteName,
      creator: data.websiteCreator,
      title: frontmatter.title,
      description: frontmatter.abstract,
      image: indexImage,
    };

    const openGraphSummaryData = {
      siteName: data.websiteName,
      url: `${data.nakedWebsiteUrl}${checkedRoute}`,
      title: frontmatter.title,
      description: frontmatter.abstract,
      image: indexImage,
    };

    const webpageSchemaData = {
      url: `${data.nakedWebsiteUrl}${checkedRoute}`,
      name: frontmatter.title,
      description: frontmatter.abstract,
      author: data.websiteCreator,
      publisher: data.websiteCreator,
      image: indexImage,
    };

    const breadcrumbSchemaData = {
      breadcrumbs: [
        { name: "Home", url: `${data.websiteUrl}` },
        {
          name: frontmatter.title,
          url: `${data.nakedWebsiteUrl}${checkedRoute}`,
        },
      ],
    };

    const blogPageSchemaData = {
      headline: frontmatter.title,
      image: indexImage,
      url: `${data.nakedWebsiteUrl}${route}`,
      datePublished: isoDate,
      description: frontmatter.abstract,
      publisher: data.org.name,
    };

    return (
      <Fragment>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title={frontmatter.title} />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />
        <BlogPostSchema data={blogPageSchemaData} />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <Page className={`${markdownStylesClass} ${pageStyleClass}`}>
          <Header className="stash">
            <H1>{frontmatter.title}</H1>
            <Paragraph>{humanDate}</Paragraph>
            <Paragraph>{frontmatter.abstract}</Paragraph>
          </Header>
          <Article>
            {treeCodeParser(
              markdownAst,
              {
                localLink: Link,
                linkHeaders: true,
                trackHeaders: false,
                nestHeaders: true,
              },
              {},
            )}
          </Article>
          <Footer className="stash">
            <Paragraph>
              Copyright&nbsp;{data.websiteCreator}&nbsp;2018.
              <br />
              <br />
              Published on {humanDate} ({elapsed}).
            </Paragraph>
          </Footer>
        </Page>
      </Fragment>
    );
  }
}

BlogPostTemplate.propTypes = {
  pathContext: PropTypes.object,
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default BlogPostTemplate;
