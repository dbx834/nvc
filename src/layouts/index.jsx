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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Container } from "@bodhi-project/components";
import { Type, applyRhythm } from "@bodhi-project/typography";
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

  "& #appWrapper": {
    display: "block",
    backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",

    "@media(min-width: 768px)": {
      display: "flex",

      "& #menuWrapper": {
        flexGrow: "22",
        flexBasis: 0,
        height: "100vh",
      },

      "& #contentWrapper": {
        backgroundColor: "#f8f2e6",
        background: "#f8f2e6",
        boxShadow: "0 0 25px rgba(0,0,0,.11)",
        flexGrow: "78",
        flexBasis: 0,
        maxHeight: "100vh",
        overflowX: "hidden",
        overflowY: "scroll",
        marginTop: 16,
        borderTopLeft: 8,
      },
    },
  },
});
const wrapperStylesClass = wrapperStyles.toString();

globalWithMediaQueries(".ant-modal", {
  height: "90vh !important",
  width: "90vw !important",
  padding: "0em !important",
  top: "20px !important",
});

globalWithMediaQueries(".ant-modal-body", {
  padding: "0em !important",
});

globalWithMediaQueries(".ant-modal-content", {
  minHeight: "90vh !important",
  minWidth: "90vw !important",
});

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
      htmlElement.classList.toggle("lk-loading");
      htmlElement.classList.toggle("lk-active");
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
