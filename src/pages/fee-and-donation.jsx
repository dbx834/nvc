// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Modal } from "antd";
import { Image, OutLink } from "@bodhi-project/components";
import { Elements, applyRhythm } from "@bodhi-project/typography";
import {
  Page,
  // Section,
  Article,
  // Header,
  // Footer,
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import seoHelper from "../helpers/seoHelper";
import globalWithMediaQueries from "../helpers/globalWithMediaQueries";
import donateButton from "../assets/donateButton.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { H1, H2, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Fee and Donation",
  nakedPageSlug: "fee-and-donation",
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
});
const pageStyleClass = pageWrapper.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** IndexPage */
class IndexPage extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      modalData: null,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  /** show the modal */
  showModal(e, dataKey) {
    e.preventDefault();
    this.setState({
      visible: true,
      modalData: dataKey,
    });
  }

  /** hide the modal */
  hideModal(e) {
    this.setState({
      visible: false,
      modalData: null,
    });
  }

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
          <div className="constrain">
            <H1>Fee Payment</H1>
            <Paragraph>
              You may pay your fees here, or directly on the page on the event
              you’re registering for.
              <br />
              <br />
              Select the Domestic option for Indian bank/credit cards, or the
              International option for foreign bank/credit cards.
            </Paragraph>
            <Image
              src={""}
              rawHeight={450}
              rawWidth={450}
              className="icon"
              style={{
                height: 65,
                width: 65,
                display: "inline-block",
                background: "transparent",
                border: "1px solid #4a4a4a",
                marginRight: 15,
              }}
            />
            <Image
              src={""}
              rawHeight={450}
              rawWidth={450}
              className="icon"
              style={{
                height: 65,
                width: 65,
                background: "transparent",
                border: "1px solid #4a4a4a",
                display: "inline-block",
              }}
            />
            <br />
            <br />
            <br />
            <br />
            <H1>Donation</H1>
            <Paragraph>
              If you’d like to make a donation to Joy Living Learning, you may
              do so below. This will link directly to the Auroville Foundation
              payment gateway page, and you will be able to receive a tax
              exemption.
            </Paragraph>
            <Paragraph>
              <a href="#" onClick={e => this.showModal(e)}>
                click!
              </a>
            </Paragraph>
            <Paragraph>
              Please email{" "}
              <OutLink to="mailto:joylivinglearning@gmail.com">
                joylivinglearning@gmail.com
              </OutLink>{" "}
              to let us know that you have sent a donation, so that we can track
              it.
            </Paragraph>
            <Paragraph>
              Joy Living Learning is a Unit under the Auroville Foundation,
              which is a Charitable Trust under the Ministry of Human Resources
              (Indian Government). Your donation will support Joy Living
              Learning in its mission to share the principles of applied
              nonviolence in different communities and sectors, such as
              education, governance, and the corporate world.
            </Paragraph>
            <Paragraph>
              If you would like more detailed information about our projects,{" "}
              <Link to="/contact">contact us</Link>.
            </Paragraph>
          </div>
        </Page>
        <Modal
          footer={null}
          visible={this.state.visible}
          onCancel={this.hideModal}
        >
          {!_.isNull(this.state.modalData) && (
            <div className="av-page">hello!</div>
          )}
        </Modal>
      </Fragment>
    );
  }
}

IndexPage.propTypes = {};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default IndexPage;
