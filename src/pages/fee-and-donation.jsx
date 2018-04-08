// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
// import PropTypes from "prop-types";
import _ from "lodash";
import { css } from "glamor";
// import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Modal, Tooltip } from "antd";
import { Image, OutLink } from "@bodhi-project/components";
import { Elements, applyRhythm } from "@bodhi-project/typography";
import Iframe from "react-iframe";
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
import globalWithMediaQueries from "../helpers/globalWithMediaQueries";
import domestic from "../assets/domestic.png";
import international from "../assets/international.png";

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
  "& .hover": {
    borderBottom: "1.625px solid transparent",

    "&:hover": {
      color: "#6D00FF",
      borderBottom: "1.625px solid #6D00FF",
    },
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
            <div className="mask-p">
              <OutLink
                to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
                style={{ marginRight: 17 }}
              >
                <Tooltip title="Indian Card">
                  <div style={{ display: "inline-block" }}>
                    <Image
                      src={domestic}
                      rawHeight={450}
                      rawWidth={450}
                      className="icon"
                      style={{
                        height: 65,
                        width: 65,
                        display: "inline-block",
                        background: "transparent",
                        border: "unset",
                      }}
                    />
                  </div>
                </Tooltip>
              </OutLink>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_blank"
                style={{ display: "inline-block" }}
                className="hover"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="WFXM5RNDGBXL4"
                />
                <Tooltip title="International Card">
                  <input
                    type="image"
                    src={international}
                    border="0"
                    name="submit"
                    alt="PayPal – The safer, easier way to pay online!"
                    style={{
                      height: 65,
                      width: 65,
                    }}
                  />
                </Tooltip>
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
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
            <div className="av-page">
              <Iframe
                url="https://www.auroville.com/donations/"
                width="450px"
                height="450px"
                className="embed"
                display="initial"
                position="relative"
                allowFullScreen
              />
            </div>
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
