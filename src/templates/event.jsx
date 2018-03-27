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
import { OutLink, Image } from "@bodhi-project/components";
import {
  Page,
  // Section,
  Article,
  Header,
  Footer,
} from "@bodhi-project/semantic-webflow";
import { Elements, applyRhythm } from "@bodhi-project/typography";
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
  EventSchema,
} from "@bodhi-project/seo";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";
import packageJson from "../../package.json";
import markdownStylesClass from "../styles/markdownStyles";
import Register from "../components/Register";
import donateButton from "../assets/donateButton.png";
import Price from "../bits/EventPagePrice";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { data } = packageJson;
const { H1, H2, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  marginBottom: 40,
  position: "relative",
  display: "flex",
  // ...applyRhythm({ maxWidth: "27X" }),
  "& div + p": {
    // ...applyRhythm({ marginTop: "2X" }),
  },

  "& .contain": {
    padding: "0em 2em",
  },

  "& .etc": {
    "& h1": {
      textTransform: "uppercase",
      borderTop: "3px solid #4a4a4a",
      fontStyle: "italic",
    },
  },

  // "& a": {
  //   color: "inherit",
  //   borderBottom: "none",

  //   "&:hover": {
  //     color: "inherit",
  //     borderBottom: "none",
  //   },
  //   "&:visited": {
  //     textDecoration: "none",
  //   },
  //   "&:link": {
  //     textDecoration: "none",
  //   },
  //   "&:active": {
  //     textDecoration: "none",
  //   },
  // },
});
const pageStyleClass = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** EventTemplate */
class EventTemplate extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    // Abstract stuff
    const { pathContext } = this.props;
    const { frontmatter } = pathContext;
    const { tags, date, startDate } = frontmatter;
    const { markdownAst, next, prev } = pathContext;
    const { route } = pathContext;
    const checkedRoute = _.startsWith(route, "/") ? route : `/${route}`;
    const nakedRoute = checkedRoute.substr(1);

    // Date stuff
    const mDate = moment(!_.isNull(date) ? date : startDate);
    const humanDate = mDate.format("dddd, MMMM D, YYYY");
    const elapsed = mDate.fromNow();
    // const startDate = mDate;
    const endDate = mDate.add(23, "hours").format();

    const { orgLocation } = data;
    const { fromTime, toTime } = frontmatter;

    // -------------------------------------------------------------------- SEO
    const pageData = {
      pageTitle: frontmatter.title,
      nakedPageSlug: nakedRoute,
      pageAbstract: frontmatter.abstract,
    };

    const seoData = seoHelper(pageData);

    const {
      pageTitle,
      twitterSummaryX,
      generalMetaData,
      twitterSummaryCardData,
      openGraphSummaryData,
      webpageSchemaData,
      breadcrumbSchemaData,
    } = seoData;

    const eventSchemaData = {
      name: frontmatter.title,
      url: `${data.nakedWebsiteUrl}${route}`,
      description: frontmatter.abstract,
      startDate,
      endDate,
      locationName: orgLocation.locationName,
      locationUrl: orgLocation.locationUrl,
      streetAddress: orgLocation.streetAddress,
      addressLocality: orgLocation.addressLocality,
      addressRegion: orgLocation.addressRegion,
      postalCode: orgLocation.postalCode,
      addressCountry: orgLocation.addressCountry,
      image: twitterSummaryX,
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
        <EventSchema data={eventSchemaData} />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <Page className={`${markdownStylesClass} ${pageStyleClass}`}>
          <div
            style={{
              flexGrow: 10,
              flexBasis: 0,
            }}
            className="contain"
          >
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
                  linkHeaders: false,
                  trackHeaders: false,
                  nestHeaders: false,
                },
                {},
              )}
            </Article>
            <Footer
              style={{ borderTop: "1px solid #4a4a4a", paddingTop: "1em" }}
            >
              <H1 mask="h4">More like this…</H1>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  {!_.isNull(prev) && (
                    <Link to={`/${prev.fields.route}`}>⇜ Previous</Link>
                  )}
                </div>
                <div>
                  {!_.isNull(next) && (
                    <Link to={`/${next.fields.route}`}>Next ⇝</Link>
                  )}
                </div>
              </div>
              <Paragraph className="stash">
                {data.copyright}
                <br />
                <br />
                Published on {humanDate} ({elapsed}).
              </Paragraph>
            </Footer>
          </div>
          <div
            style={{
              flexGrow: 5,
              flexBasis: 0,
            }}
            className="etc"
          >
            <H1 mask="h4">Date & Time</H1>
            <Paragraph>
              {humanDate}
              <br />
              <i>
                {fromTime} – {toTime}
              </i>
            </Paragraph>
            <Price frontmatter={frontmatter} />

            <H1 mask="h4">Register</H1>
            <Paragraph style={{ marginBottom: 30 }}>
              Thank you for your interest in this upcoming
              workshop/training/practice group!
              <br />
              <br />
              Please fill out the below details, and we will respond shortly
              with additional details (availability, price, venue, etc).
            </Paragraph>
            <div id="register-form">
              <Register event={{ key: humanDate }} />
            </div>
            <H1 mask="h4">Pay Now</H1>
            <Paragraph>
              Please make your payment to confirm your seat. Select the Domestic
              option for Indian bank/credit cards, or the International option
              for foreign bank/credit cards.
            </Paragraph>
            <H2 mask="h5">Domestic Transfer (₹)</H2>
            <Paragraph>
              <OutLink to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD">
                <Image
                  src={donateButton}
                  rawWidth={135}
                  rawHeight={48}
                  style={{
                    height: "auto",
                    width: "150px",
                    border: 0,
                    background: "transparent",
                    display: "inline-block",
                  }}
                  loader="gradient"
                />
              </OutLink>
            </Paragraph>
            <H2 mask="h5">International Transfer ($)</H2>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="WFXM5RNDGBXL4"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_GB/i/btn/btn_buynowCC_LG.gif"
                border="0"
                name="submit"
                alt="PayPal – The safer, easier way to pay online!"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        </Page>
      </Fragment>
    );
  }
}

EventTemplate.propTypes = {
  pathContext: PropTypes.object,
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default EventTemplate;
