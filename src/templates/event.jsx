// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isNull from "lodash/isNull";
import join from "lodash/join";
import startsWith from "lodash/startsWith";
import trim from "lodash/trim";
import split from "lodash/split";
import last from "lodash/last";
import indexOf from "lodash/indexOf";
import findIndex from "lodash/findIndex";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link, { withPrefix } from "gatsby-link";
import FacebookProvider, { Like as FBLike } from "react-facebook";
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";
import Container from "@bodhi-project/components/lib/Container";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import withUrl from "../helpers/withUrl";
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
  display: "block",
  position: "relative",

  "& #fb": {
    "& > div": {
      "& > div": {
        "& > span": {
          width: "98px !important",
          overflow: "hidden !important",

          "& > iframe": {
            width: "98px !important",
            overflow: "hidden !important",
          },
        },
      },
    },
  },

  "& h1": {
    "& span": {
      fontSize: "90%",
    },
  },

  "& h3": {
    fontWeight: "700 !important",
  },

  "& hr": {
    border: "none",
    borderTop: "3px solid #B43808",
    marginBottom: 20,
  },

  "& .kale": {
    "@media(max-width: 768px)": {
      display: "block",
    },

    display: "flex",

    "& > div": {
      padding: "0em 1.25em",

      "&:nth-child(1)": {
        flexBasis: 0,
        flexGrow: 62,

        "& .hope": {
          display: "flex",

          "& > div": {
            "&:nth-child(1)": {
              flexBasis: 0,
              flexGrow: 50,
              paddingRight: "1.25em",
            },

            "&:nth-child(2)": {
              flexBasis: 0,
              flexGrow: 50,
            },
          },
        },
      },

      "&:nth-child(2)": {
        flexBasis: 0,
        flexGrow: 38,
      },
    },
  },

  "& .headings": {
    "@media(max-width: 768px)": {
      display: "block",
    },

    display: "flex",
    flexFlow: "row wrap",
    alignItems: "flex-start",
    ...applyRhythm({ marginBottom: "1.86X" }),

    "& .banner": {
      flex: "7 1 0%",

      "@media(max-width: 768px)": {
        marginBottom: 10,
      },
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
});
const pageStyleClass = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** inArray */
const inArray = (array, value) => {
  let rx = false;
  if (indexOf(array, value) >= 0) {
    rx = true;
  }
  return rx;
};

/** remove */
// function removeA(arr) {
//   var what,
//     a = arguments,
//     L = a.length,
//     ax;
//   while (L > 1 && arr.length) {
//     what = a[--L];
//     while ((ax = arr.indexOf(what)) !== -1) {
//       arr.splice(ax, 1);
//     }
//   }
//   return arr;
// }

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
    const checkedRoute = startsWith(route, "/") ? route : `/${route}`;
    const nakedRoute = checkedRoute.substr(1);

    // Date stuff
    const begins = moment(!isNull(startDate) ? startDate : date);
    const ends = moment(
      !isNull(finishDate) ? finishDate : begins.clone().add(23, "hours"),
    );

    const { orgLocation } = data;

    let catString = trim(last(split(frontmatter.category, ".")));
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

    let showRegister = true;
    if (inArray(tags, "unregister")) {
      showRegister = false;
      tags.splice(findIndex(tags, "unregister"), 0, null);
    }

    let showPay = true;
    if (inArray(tags, "unpay")) {
      showPay = false;
      tags.splice(findIndex(tags, "unpay"), 0, null);
    }

    // Make banner
    let eventBanner = null;
    if (cover === "fallback") {
      const coverHint = join(tags, "-");
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
      pageBanner: eventBanner,
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
      url: `${data.websiteUrl}${route}`,
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
      image: `${data.websiteUrl}${eventBanner}`,
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
          <Container block bleed>
            <div className="kale">
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Main */}
              <div>
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
                      {(inArray(tags, "rc") &&
                        inArray(tags, "practice-group")) ||
                      (inArray(tags, "nvc") &&
                        inArray(tags, "practice-group")) ? (
                        <Fragment>
                          <strong>
                            {frontmatter.subTitle}
                            &nbsp; • &nbsp;
                            {fromTime} – {toTime}
                          </strong>
                          <br />
                          <br />
                        </Fragment>
                      ) : (
                        <Fragment>
                          {frontmatter.subTitle !== "na" && (
                            <Fragment>
                              <strong>{frontmatter.subTitle}</strong>
                              <br />
                              <br />
                            </Fragment>
                          )}
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
                    <br />
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 99,
                          backgroundColor: "#f8f2e6",
                          zIndex: 10,
                          height: 20,
                          width: "calc(100% - 98px)",
                        }}
                      />
                      <div style={{ maxWidth: 98 }} id="fb">
                        <FacebookProvider appId="218604115574634">
                          <FBLike
                            href={withUrl(route, data)}
                            colorScheme="dark"
                            showFaces
                            share
                          />
                        </FacebookProvider>
                      </div>
                    </div>
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
                <Footer>
                  <H1 mask="h4">More events</H1>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      {!isNull(prev) && (
                        <Link to={`/${prev.fields.route}`}>⇜ Previous</Link>
                      )}
                    </div>
                    <div>
                      {!isNull(next) && (
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
                <br />
                <br />
              </div>

              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Side */}
              <div>
                {!isNull(whichSide) &&
                  whichSide === "rc-practice-group" && (
                    <RCPracticeGroupSide
                      data={frontmatter}
                      pathContext={pathContext}
                      showRegister={showRegister}
                      showPay={showPay}
                    />
                  )}
                {!isNull(whichSide) &&
                  whichSide === "nvc-practice-group" && (
                    <NVCPracticeGroupSide
                      data={frontmatter}
                      pathContext={pathContext}
                      showRegister={showRegister}
                      showPay={showPay}
                    />
                  )}
                {!isNull(whichSide) &&
                  whichSide === "workshop" && (
                    <WorkshopSide
                      data={frontmatter}
                      pathContext={pathContext}
                      showRegister={showRegister}
                      showPay={showPay}
                    />
                  )}
              </div>
            </div>
          </Container>
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
