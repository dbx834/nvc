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
import { Tooltip } from "antd";
import {
  Image,
  TetraGrid as TetraGridX,
  HexaGrid as HexaGridX,
} from "@bodhi-project/components";
import { Elements, applyRhythm } from "@bodhi-project/typography";
import {
  Page,
  // Section,
  Article,
  // Header,
  // Footer,
} from "@bodhi-project/semantic-webflow";
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
const { H1, H3, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Fee and Donation",
  nakedPageSlug: "fee-and-donation",
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
  "& .constrain": {
    ...applyRhythm({ maxWidth: "27X" }),
  },
});
const pageStyleClass = pageWrapper.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** IndexPage */
class IndexPage extends React.Component {
  /** standard renderer */
  render() {
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
          <div className="constrain">
            <H1>Fee Payment</H1>
            <Paragraph>blah blah.</Paragraph>
            <H3>Domestic Transfer</H3>
            <Paragraph>blah blah.</Paragraph>
            <H3>International Transfer</H3>
            <Paragraph>blah blah.</Paragraph>
            <H1>Donation</H1>
            <Paragraph>blah blah.</Paragraph>
          </div>
        </Page>
      </Fragment>
    );
  }
}

IndexPage.propTypes = {};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default IndexPage;
