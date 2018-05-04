// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";
import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Image, OutLink } from "@bodhi-project/components";
import ContainerDimensions from "react-container-dimensions";
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

import groupFacilitation from "../assets/groupFacilitation.png";
import individualCoaching from "../assets/individualCoaching.png";
import mediation from "../assets/mediation.png";
import threeGiraffes from "../assets/threeGiraffes.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const offeringsData = [
  {
    image: mediation,
    title1: "Mediation",
    lead:
      "We offer mediation and facilitated conversations for those seeking support to dialogue with a friend, colleague or family member.",
  },
  {
    image: groupFacilitation,
    title1: "Group",
    title2: "Facilitation",
    lead:
      "We offer group facilitation for groups seeking support with team dynamics, or to reconnect with the group’s purpose and to clarify next steps for forward movement.",
  },
  {
    image: individualCoaching,
    title1: "Individual",
    title2: "Coaching",
    lead:
      "We offer individual coaching for those seeking support to work through challenges, to gain more self-understanding, and to access one’s own capacity to shift into a dynamic that feels more life-serving.",
  },
];

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "L'aura Joy",
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
  marginBottom: 60,
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
              <p>
                L’aura Joy is a Certified Trainer in Nonviolent Communication
                (CNVC, USA), and over the past 10 years she has been been
                working in the field of communication, conflict transformation,
                peace and justice, community building and healing,
                decision-making and leadership.
              </p>
              <p>
                Having grown up in Auroville, an international intentional
                community in Tamil Nadu, L'aura is passionate about exploring
                how we can live our lives in empowered and co-creative ways.
                Nonviolent Communication offers such a clear, yet deeply
                powerful and transformative framework within which to explore
                both our inner realities as well as outer relationships. In
                addition to NVC, L'aura is also trained in Restorative Circles
                and Sociocracy, and she applies these approaches to her work
                with justice and governance in Auroville.
              </p>
              <p>
                L’aura has traveled and shared in different countries and
                contexts, ranging from the corporate sector, to schools, to NGOs
                working with women and street kid, exploring NVC as a means to
                transformation and sustainable change. Most of her work has been
                in India, although she has also worked in Canada, UK,
                Switzerland, USA, Sri Lanka and Nepal.
              </p>
              <p>
                L'aura has been a pioneer in bringing NVC to India and has
                supported an ever-growing community to emerge. She has hosted
                and organized events for several international trainers here,
                she has published NVC books and teaching material, and she has
                offered her own training programs.
              </p>
              <p>
                At the beginning of her career, L'aura was a high-school
                teacher, and she taught in both Canada and Auroville. Her main
                subjects were English and French as second languages, plus
                introductory courses to Sociology, Anthropology and Psychology.
                She specialized in the International Baccalaureate Program (an
                internationally accredited program) and taught senior IB
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
