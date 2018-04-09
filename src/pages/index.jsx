// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
// import PropTypes from "prop-types";
import _ from "lodash";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Image } from "@bodhi-project/components";
import { Elements, applyRhythm } from "@bodhi-project/typography";
import { Page } from "@bodhi-project/semantic-webflow";
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
import EventsGrid from "../components/EventsGrid";
import LearnMore from "../components/LearnMore";

import deepening from "../assets/deepening.png";
import introduction from "../assets/introduction.png";
import practiceGroup from "../assets/practiceGroup.png";
import webinar from "../assets/webinar.png";
import workshop from "../assets/workshop.png";
import nvc from "../assets/nvc.png";
import rc from "../assets/rc.png";
import dummy1 from "../assets/dummy1.jpg";
import nvcPhoto from "../assets/nvc-in-progress.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { H1, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Homepage",
  nakedPageSlug: "",
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

  "& .events": {
    ...applyRhythm({ maxWidth: "40X" }),
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
    const postEdges = this.props.data.allMarkdownRemark.edges;

    // get only events
    const eventNodes = [];
    _.map(postEdges, ({ node }) => {
      if (_.startsWith(_.trim(node.fields.route), "events") === true) {
        eventNodes.push({ node });
      }
    });
    const todayInt = parseInt(moment().format("YYYYMMDD"), 10);
    let totalEvents = 0;

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
            <H1 style={{ marginBottom: 10 }}>Joy Living Learning</H1>
            <Paragraph>
              Nonviolent Communication & Restorative Circles in Auroville &
              India.
            </Paragraph>
            <Image
              src={nvcPhoto}
              rawWidth={1440}
              rawHeight={900}
              style={{
                height: "50vh",
                width: "auto",
                border: 0,
                background: "transparent",
              }}
              loader="gradient"
              className="mask-p"
            />
            <Paragraph>
              With our main focus on Nonviolence, we organize workshops,
              residential programs and practice groups on Nonviolent
              Communication (NVC) and Restorative Circles (RC). We are also
              available for community support, mediations, and personal
              coaching.
            </Paragraph>
            <Paragraph>
              We are situated in Auroville, an international community in south
              India, and with its purpose being to actualize human unity, we’re
              surrounded by opportunities for growth, learning and exploration.
            </Paragraph>
            <Paragraph
              style={{ paddingLeft: 10, borderLeft: "1px solid #B43808" }}
            >
              <i>
                “My optimism rests on my belief in the infinite possibilities of
                the individual to develop nonviolence. The more you develop it
                in your own heart, the more infectious it becomes, till it
                overwhelms your surroundings and, by and by, might oversweep the
                world.”
              </i>{" "}
              – Gandhi
            </Paragraph>
            <H1>Upcoming Events...</H1>
          </div>
          <div className="events">
            <EventsGrid data={postEdges} totalEvents={6} featured={false} />
          </div>
          <br />
          <br />
          <div className="constrain">
            <LearnMore />
          </div>
        </Page>
      </Fragment>
    );
  }
}

IndexPage.propTypes = {};

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 365
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { type: { eq: "event" } } }
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
            startDate
            finishDate
            fromTime
            toTime
            category
            tags
            type
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
export default IndexPage;
