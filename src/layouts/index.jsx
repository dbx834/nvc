// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import merge from "lodash/merge";
import isUndefined from "lodash/isUndefined";
import startsWith from "lodash/startsWith";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Type, applyRhythm } from "@bodhi-project/typography";
import {
  InitializeMeta,
  UpdateTitle,
  WebsiteSchema,
  OrganisationSchema,
} from "@bodhi-project/seo";
import { CSSTransitionGroup } from "react-transition-group";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Container from "@bodhi-project/components/lib/Container";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import "../styles/index.less";
import indexImage from "../assets/launch.jpg";
import packageJson from "../../package.json";

import Footer from "../components/Footer";
import Header from "../components/Header";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { data } = packageJson;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------- Global SEO
// ----------------------------------------------------------------------------
const websiteSchemaData = {
  url: data.websiteUrl,
  name: data.websiteName,
  description: data.websiteDescription,
  author: data.org.name,
  publisher: data.org.name,
  image: indexImage,
};

const organisationSchemaData = {
  name: data.org.name,
  legalName: data.org.legalName,
  url: data.org.url,
  logo: `${data.org.url}${data.org.logo}`,
  foundingDate: moment(data.org.foundingDate).format(),
  founders: data.org.founders,
  streetAddress: data.orgLocation.streetAddress,
  addressLocality: data.orgLocation.addressLocality,
  addressRegion: data.orgLocation.addressRegion,
  postalCode: data.orgLocation.postalCode,
  addressCountry: data.orgLocation.addressCountry,
  telephone: data.orgContact.telephone,
  email: data.orgContact.email,
  sameAs: data.orgSocialMediaProfiles,
  image: indexImage,
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const wrapperStyles = css({
  position: "relative",

  "& h1, h2, h3, h4, h5, h6, p, li": {
    color: "#4a4a4a !important",
  },

  "& a": {
    color: "#0000FF",
    borderBottom: "1.625px solid transparent",

    "&:hover": {
      color: "#6D00FF",
      borderBottom: "1.625px solid #6D00FF",
    },
    "&:visited": {
      textDecoration: "none",
    },
    "&:link": {
      textDecoration: "none",
    },
    "&:active": {
      textDecoration: "none",
    },
  },

  "& #content": merge(
    {
      marginLeft: 0,
    },
    ...applyRhythm({ padding: "1X 1X 4.8X 1X" }),
  ),

  "& #modalWrapper": {
    display: "block",
    background: "rgba(0, 0, 0, .65)",

    "& .modalContentWrapper": {
      boxShadow: "0 0 25px rgba(0,0,0,.11)",
      maxHeight: "100vh",
      overflowX: "hidden",
      overflowY: "scroll",
    },

    "& #modalContent": {
      backgroundColor: "#f8f2e6",
      marginTop: 20,
      ...applyRhythm({ padding: "2X 0.5X" }),
    },
  },

  "& #appWrapper": {
    display: "block",
    backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",

    "& .appContentWrapper": {
      minHeight: "100vh",
    },

    "@media(min-width: 768px)": {
      display: "flex",

      "& #menuWrapper": {
        flexGrow: "19",
        flexBasis: 0,
        height: "100vh",
      },

      "& .appContentWrapper": {
        backgroundColor: "#f8f2e6",
        boxShadow: "0 0 25px rgba(0,0,0,.11)",
        flexGrow: "81",
        flexBasis: 0,
        maxHeight: "100vh",
        overflowX: "hidden",
        overflowY: "scroll",
        borderTopLeftRadius: 16,
        marginTop: 16,
      },
    },
  },
});
const wrapperStylesClass = wrapperStyles.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** parseQueryString */
const parseQueryString = string => {
  const objURL = {};

  string.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), ($0, $1, $2, $3) => {
    objURL[$1] = $3;
  });

  return objURL;
};

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Indexpage */
class TemplateWrapper extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** after mount */
  componentDidMount() {
    if (!isUndefined(document)) {
      const htmlElement = document.documentElement;
      if (htmlElement.classList.contains("lk-loading")) {
        htmlElement.classList.toggle("lk-loading");
      }
      if (!htmlElement.classList.contains("lk-active")) {
        htmlElement.classList.toggle("lk-active");
      }
    }
  }

  /** on mount */
  componentDidUpdate() {
    if (!isUndefined(window)) {
      const element = document.getElementById("scrollAnchor");
      element.scrollTop = 0;
    }
  }

  /** standard renderer */
  render() {
    const urlQuery = parseQueryString(this.props.location.search);
    const inModal = startsWith(this.props.location.pathname, "/writings/");
    console.log(inModal);

    return (
      <Type
        kit="dkc2ilk"
        style={{ minHeight: "100vh" }}
        className={wrapperStylesClass}
        options={{ range: !inModal ? [12, 21] : [21, 21] }}
      >
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <InitializeMeta data={{ titleTemplate: "%s | Joy Living Learning" }} />
        <UpdateTitle title="Loading..." />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />

        {inModal ? (
          <div id="modalWrapper">
            <CSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}
            >
              <div id="scrollAnchor" className="modalContentWrapper">
                <Container block goldenMajor id="modalContent">
                  {this.props.children()}
                </Container>
              </div>
            </CSSTransitionGroup>
          </div>
        ) : (
          <div id="appWrapper">
            <div id="menuWrapper">
              <Header {...this.props} />
            </div>
            <div id="scrollAnchor" className="appContentWrapper">
              <Container bleed block id="content">
                {this.props.children()}
              </Container>
              <Footer />
            </div>
          </div>
        )}
      </Type>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

// ----------------------------------------------------------------------- Export
export default TemplateWrapper;
