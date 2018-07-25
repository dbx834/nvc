// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from "gatsby-link";
// import ContainerDimensions from "react-container-dimensions";
import {
  Page,
  Header as SemanticHeader,
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";
// import OutLink from "@bodhi-project/components/lib/OutLink";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "L'aura Joy",
  nakedPageSlug: "laura-joy",
  pageAbstract:
    "L’aura Joy is a Certified Trainer in Nonviolent Communication (CNVC, USA), and since 2007 she has been working in the fields of communication, conflict resolution, peace and justice, healing, and decision-making and leadership.",
  pageBanner: "/content-assets/laura-joy/laura4_900X600.jpeg",
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
  marginBottom: 70,
  display: "block",
  position: "relative",

  "& h3": {
    fontWeight: "700 !important",
  },

  "& hr": {
    border: "none",
    borderTop: "3px solid #B43808",
    marginBottom: 20,
  },

  "& .jke": {
    padding: "0em 1.25em",
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
});
const pageStyleClass = pageWrapper.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** NVCPage */
class NVCPage extends React.PureComponent {
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
          <div className="jke">
            <h1 style={{ marginBottom: 10 }}>
              <span>L'aura Joy</span>
            </h1>
          </div>
          <div className="kale">
            <div>
              <hr />
              <h2 className="mask-p">
                L’aura Joy is a Certified Trainer in Nonviolent Communication
                (CNVC, USA), and since 2007 she has been working in the fields
                of communication, conflict resolution, peace and justice,
                healing, and decision-making and leadership.
              </h2>
              <p>
                Having grown up in Auroville, an international intentional
                community in Tamil Nadu, India, L'aura is passionate about
                exploring how we can live our lives in empowered and co-creative
                ways. Nonviolent Communication (NVC) offers such a clear, yet
                deeply powerful and transformative framework within which to
                explore both our inner realities as well as outer relationships.
                In addition to NVC, L'aura is also trained in Restorative
                Circles and Sociocracy, and she applies these approaches to her
                work with justice and governance in Auroville.
              </p>
              <p>
                L’aura has travelled and shared in different countries and
                contexts, ranging from the corporate sector, to schools, to NGOs
                working with women and street children, exploring NVC as a means
                to transformation and sustainable change. Most of her work has
                been in India, although she has also worked in Sri Lanka, Nepal,
                Canada, USA, UK and Switzerland.
              </p>
              <p>
                L'aura has been a pioneer in bringing NVC to India and has
                supported an ever-growing community to emerge. She has hosted
                and organized several large-scale international events here, and
                has published NVC books and teaching material.
              </p>
              <p>
                At the beginning of her career, L'aura was a high-school
                teacher, and she taught in both Canada and Auroville. Her main
                subjects were English and French as second languages, plus
                introductory courses to Sociology, Anthropology and Psychology.
                She specialized in the International Baccalaureate (IB) Program
                (an internationally accredited program) and taught senior IB
                students. She organized several extra-curricular programs for
                the students, including international travel programs, cultural
                outings, camping and trekking trips, and cross-country running.
              </p>
              <p>
                L'aura's personal interests lie in making deep connections with
                people, living a meaningful and sustainable life, contributing
                to community, and practicing yoga and being physically active.
              </p>
            </div>
            <div>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <hr />
              <h3 className="mask-p" style={{ marginBottom: 10 }}>
                In Action…
              </h3>

              <Image
                src="/content-assets/laura-joy/laura4_900X600.jpeg"
                rawWidth={900}
                rawHeight={600}
                style={{
                  width: "100%",
                  height: "auto",
                  border: 0,
                  background: "transparent",
                  display: "block",
                  marginBottom: 10,
                }}
              />
              <Image
                src="/content-assets/laura-joy/laura2_900X600.jpeg"
                rawWidth={900}
                rawHeight={600}
                style={{
                  width: "100%",
                  height: "auto",
                  border: 0,
                  background: "transparent",
                  display: "block",
                  marginBottom: 10,
                }}
              />
              <Image
                src="/content-assets/laura-joy/laura3_900X600.jpeg"
                rawWidth={900}
                rawHeight={600}
                style={{
                  width: "100%",
                  height: "auto",
                  border: 0,
                  background: "transparent",
                  display: "block",
                  marginBottom: 10,
                }}
              />
            </div>
          </div>
        </Page>
      </Fragment>
    );
  }
}

NVCPage.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default NVCPage;
