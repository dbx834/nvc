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
import Link, { withPrefix } from "gatsby-link";
import { Tag } from "antd";
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
import RCPracticeGroupSide from "../components/RCPracticeGroupSide";
import NVCPracticeGroupSide from "../components/NVCPracticeGroupSide";
import WorkshopSide from "../components/WorkshopSide";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { data } = packageJson;
const { H1, H2, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  display: "flex",
  position: "relative",
  marginBottom: 60,

  "& .left": {
    flexGrow: 10,
    flexBasis: 0,
    padding: "0em 1em",

    "& .headings": {
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "flex-start",
      ...applyRhythm({ marginBottom: "1.86X" }),

      "& .banner": {
        flex: "7 1 0%",
      },

      "& .abstract": {
        flex: "12 1 0%",
        ...applyRhythm({ paddingLeft: "0.6882X" }),

        "& h3": {
          marginTop: 0,
          marginBottom: 5,
        },
      },
    },
  },

  "& .right": {
    flexGrow: 5,
    flexBasis: 0,
    padding: "0em 1em",
  },
});
const pageStyleClass = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** inArray */
const inArray = (array, value) => {
  let rx = false;
  if (_.indexOf(array, value) >= 0) {
    rx = true;
  }
  return rx;
};

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
    const {
      fromTime,
      toTime,
      tags,
      date,
      startDate,
      finishDate,
      cover,
    } = frontmatter;
    const { markdownAst, next, prev } = pathContext;
    const { route, humanDate, elapsed } = pathContext;
    const checkedRoute = _.startsWith(route, "/") ? route : `/${route}`;
    const nakedRoute = checkedRoute.substr(1);

    // Date stuff
    const begins = moment(!_.isNull(startDate) ? startDate : date);
    const ends = moment(
      !_.isNull(finishDate) ? finishDate : begins.clone().add(23, "hours"),
    );

    const { orgLocation } = data;

    let catString = _.trim(_.last(_.split(frontmatter.category, ".")));
    switch (catString) {
      case "NVC":
        catString = "Nonviolent Communication";
        break;
      case "RC":
        catString = "Restorative Circles";
        break;
    }

    let whichSide = null;
    if (inArray(tags, "rc") && inArray(tags, "practice-group")) {
      whichSide = "rc-practice-group";
    }
    if (inArray(tags, "nvc") && inArray(tags, "practice-group")) {
      whichSide = "nvc-practice-group";
    }
    if (inArray(tags, "workshop")) {
      whichSide = "workshop";
    }

    // Make banner
    let eventBanner = null;
    if (cover === "fallback") {
      const coverHint = _.join(tags, "-");
      eventBanner = withPrefix(
        `/content-assets/event-fallbacks/${coverHint}.jpg`,
      );
    } else {
      eventBanner = withPrefix(cover);
    }

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
      startDate: begins,
      endDate: ends,
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
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Main */}
          <div className="left">
            <Header className="headings">
              <div className="banner">
                <Image
                  src={eventBanner}
                  rawWidth={1440}
                  rawHeight={900}
                  loader="gradient"
                  style={{ border: 0 }}
                />
              </div>
              <div className="abstract">
                <H1 className="mask-h3" style={{ marginBottom: 5 }}>
                  {frontmatter.title}
                </H1>
                <Paragraph style={{ marginBottom: 0 }}>
                  {((inArray(tags, "rc") && inArray(tags, "practice-group")) ||
                    (inArray(tags, "nvc") &&
                      inArray(tags, "practice-group"))) && (
                    <Fragment>
                      <strong>
                        {frontmatter.subTitle}
                        &nbsp; • &nbsp;
                        {fromTime} – {toTime}
                      </strong>
                      <br />
                      <br />
                    </Fragment>
                  )}
                  <i>
                    {humanDate}&nbsp;({elapsed})
                  </i>
                  <br />
                  <i>
                    {fromTime} - {toTime}
                  </i>
                </Paragraph>
              </div>
            </Header>
            <hr />
            <br />
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

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Side */}
          <div className="right">
            {!_.isNull(whichSide) &&
              whichSide === "rc-practice-group" && (
                <RCPracticeGroupSide data={frontmatter} />
              )}
            {!_.isNull(whichSide) &&
              whichSide === "nvc-practice-group" && (
                <NVCPracticeGroupSide data={frontmatter} />
              )}
            {!_.isNull(whichSide) &&
              whichSide === "workshop" && <WorkshopSide data={frontmatter} />}
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
