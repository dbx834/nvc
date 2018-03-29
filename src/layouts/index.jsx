// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import moment from "moment";
import _ from "lodash";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Container } from "@bodhi-project/components";
import { Type, applyRhythm, applyType } from "@bodhi-project/typography";
import {
  InitializeMeta,
  UpdateTitle,
  WebsiteSchema,
  OrganisationSchema,
} from "@bodhi-project/seo";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import "../styles/index.less";
import indexImage from "../assets/launch.jpg";
import packageJson from "../../package.json";
import globalWithMediaQueries from "../helpers/globalWithMediaQueries";

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
  // margin: 30,
  background: "transparent",
  position: "relative",

  "& h1, h2, h3, h4, h5, h6, p, li": {
    color: "#4a4a4a",
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

  "& #content": _.merge(
    {
      marginLeft: 0,
    },
    ...applyRhythm({ padding: "1X 1X 4.8X 1X" }),
  ),

  "& #appWrapper": {
    display: "block",
    "@media(min-width: 768px)": {
      display: "flex",

      "& #menuWrapper": {
        flexGrow: "22",
        flexBasis: 0,
        background: "#fafafa",
        height: "100vh",
      },

      "& #contentWrapper": {
        flexGrow: "78",
        flexBasis: 0,
        maxHeight: "100vh",
        overflowX: "hidden",
        overflowY: "scroll",
      },
    },
  },
});
const wrapperStylesClass = wrapperStyles.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile
const mobileHeader = css({
  paddingBottom: 20,
});
const mobileHeaderClass = mobileHeader.toString();

const mobileMenu = css({
  backgroundColor: "#fcfcfc",
  "& .bm-item-list": {
    padding: "1em",

    "& a": {
      fontFamily: "futura-pt, sans-serif !important",
      color: "#4a4a4a",
      borderBottom: "1.625px solid transparent",
      transition: "0.125s",
      textTransform: "uppercase",
      letterSpacing: "0.08775ex",
      display: "block",
      marginBottom: "0.9em",
      fontSize: "115%",

      "&:hover": {
        color: "#4a4a4a",
        borderBottom: "1.625px solid transparent",
      },
    },

    "& a.active": {
      color: "#0000FF",
    },

    "& span.header": {
      display: "block",
      fontWeight: 700,
      fontSize: "95%",
      letterSpacing: "-0.08775ex",
      textTransform: "uppercase",
      marginTop: "2.7em",
      marginBottom: "0.9em",
    },

    "& span.header:first-child": {
      marginTop: "1.3em",
    },
  },
});
const mobileMenuClass = mobileMenu.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Indexpage */
class TemplateWrapper extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** on mount */
  componentDidUpdate() {
    if (!_.isUndefined(window)) {
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
