// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Type } from "@bodhi-project/typography";
import {
  InitializeMeta,
  UpdateTitle,
  WebsiteSchema,
  OrganisationSchema,
} from "@bodhi-project/seo";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Container from "@bodhi-project/components/lib/Container";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import "../styles/index.less";
import indexImage from "../assets/twitterSummaryX.jpg";
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

  "& #content": {
    marginLeft: 0,
    padding: "1.5em 0.5em 2.5em 0.5em",

    "@media(min-width: 768px)": {
      padding: "1.5em 1.5em 7.5em 1.5em",
    },
  },

  "& #appWrapper": {
    display: "block",
    backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",

    "& #contentWrapper": {
      backgroundColor: "#f8f2e6",
      background: "#f8f2e6",
      minHeight: "100vh",
    },

    "@media(min-width: 768px)": {
      display: "flex",

      "& #menuWrapper": {
        flexGrow: "19",
        flexBasis: 0,
        height: "100vh",
      },

      "& #contentWrapper": {
        boxShadow: "0 0 25px rgba(0,0,0,.11)",
        flexGrow: "81",
        flexBasis: 0,
        maxHeight: "100vh",
        overflowX: "hidden",
        overflowY: "scroll",
        marginTop: 16,
        borderTopLeftRadius: 16,
      },
    },
  },
});
const wrapperStylesClass = wrapperStyles.toString();

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
      const element = document.getElementById("contentWrapper");
      element.scrollTop = 0;
    }
  }

  /** standard renderer */
  render() {
    return (
      <Type
        kit="dkc2ilk"
        style={{ minHeight: "100vh" }}
        className={wrapperStylesClass}
        options={{ range: [12, 21] }}
      >
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <InitializeMeta data={{ titleTemplate: "%s | Joy Living Learning" }} />
        <UpdateTitle title="Loading..." />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />
        <div id="appWrapper">
          <div id="menuWrapper">
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Header */}
            <Header {...this.props} />
          </div>
          <div id="contentWrapper">
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
            <Container noFade block id="content">
              {this.props.children()}
            </Container>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer */}
            <Footer />
          </div>
        </div>
      </Type>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

// ----------------------------------------------------------------------- Export
export default TemplateWrapper;
