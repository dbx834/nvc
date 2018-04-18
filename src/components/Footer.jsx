// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Row, Col, Icon } from "antd";
import { Container, Image, OutLink } from "@bodhi-project/components";
import { Elements, applyRhythm } from "@bodhi-project/typography";
import { Footer as SemanticFooter } from "@bodhi-project/semantic-webflow";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import packageJson from "../../package.json";
import waves from "../assets/waves.png";
import boat from "../assets/boat.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import vimeo from "../assets/vimeo.png";
import paypal from "../assets/paypal.png";
import payu from "../assets/payu.png";
import soundcloud from "../assets/soundcloud.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Paragraph } = Elements;
const { data } = packageJson;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer
const footerStyle = css({
  ...applyRhythm({ padding: "0X 1X 1X 1X" }),

  "& .waves": {
    ...applyRhythm({ marginBottom: "1X" }),
  },

  "& .hover": {
    borderBottom: "1.625px solid transparent",

    "&:hover": {
      color: "#6D00FF",
      borderBottom: "1.625px solid #6D00FF",
    },
  },

  "& .boat": {
    background: "transparent !important",
    border: "none !important",
    position: "absolute",
    height: "90px !important",
    width: "90px !important",
    right: 14,
    zIndex: 1,
    top: -82,

    "@media(min-width: 768px)": {
      height: "120px !important",
      width: "120px !important",
      right: 54,
      zIndex: 1,
      top: -118,
    },
  },
});
const footerStyleClass = footerStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Header */
class Header extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    return (
      <SemanticFooter className={footerStyleClass}>
        <Container bleed noFade block id="footer">
          <Image
            src={waves}
            className="waves"
            style={{
              height: 7,
              width: "100%",
              background: "transparent",
              border: 0,
              display: "block",
              zIndex: 2,
            }}
          />
          <Image src={boat} className="boat" />
          <Row type="flex">
            <Col xs={23} sm={23} md={20} lg={17} xl={15}>
              <Paragraph>
                <br />
                <strong>
                  <i>
                    Nonviolent Communication & Restorative Circles in Auroville
                    & India
                  </i>
                </strong>
                <br />
              </Paragraph>
              <Paragraph className="hidden-sm">
                <OutLink to="https://www.facebook.com/JoyLivingLearning/">
                  <Image
                    src={facebook}
                    rawWidth={450}
                    rawHeight={450}
                    style={{
                      display: "inline-block",
                      border: "none",
                      background: "none",
                      height: 45,
                      width: 45,
                    }}
                  />
                </OutLink>
                <OutLink
                  to="https://www.youtube.com/user/laurajoyful/videos"
                  style={{ marginLeft: 17 }}
                >
                  <Image
                    src={youtube}
                    rawWidth={450}
                    rawHeight={450}
                    style={{
                      display: "inline-block",
                      border: "none",
                      background: "none",
                      height: 45,
                      width: 45,
                    }}
                  />
                </OutLink>
                <OutLink
                  to="https://vimeo.com/laurajoyful"
                  style={{ marginLeft: 17 }}
                >
                  <Image
                    src={vimeo}
                    rawWidth={450}
                    rawHeight={450}
                    style={{
                      display: "inline-block",
                      border: "none",
                      background: "none",
                      height: 42,
                      width: 42,
                    }}
                  />
                </OutLink>
                <OutLink
                  to="https://soundcloud.com/laura-joy-145472107"
                  style={{ marginLeft: 17 }}
                >
                  <Image
                    src={soundcloud}
                    rawWidth={450}
                    rawHeight={450}
                    style={{
                      display: "inline-block",
                      border: "none",
                      background: "none",
                      height: 42,
                      width: 42,
                    }}
                  />
                </OutLink>
                <OutLink
                  to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
                  style={{ marginLeft: 17 }}
                >
                  <Image
                    src={payu}
                    rawWidth={450}
                    rawHeight={450}
                    style={{
                      display: "inline-block",
                      border: "none",
                      background: "none",
                      height: 42,
                      width: 42,
                    }}
                  />
                </OutLink>
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_blank"
                  style={{ display: "inline-block", marginLeft: 17 }}
                  className="hover"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="WFXM5RNDGBXL4"
                  />
                  <input
                    type="image"
                    src={paypal}
                    border="0"
                    name="submit"
                    alt="PayPal – The safer, easier way to pay online!"
                    style={{
                      height: 42,
                      width: 42,
                    }}
                  />
                  <img
                    alt=""
                    border="0"
                    src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </Paragraph>
              <Paragraph style={{ marginBottom: 20 }}>
                Made with{" "}
                <Icon
                  type="heart"
                  style={{ color: "#D34025", fontSize: "80%" }}
                />{" "}
                by{" "}
                <OutLink to="https://www.bodhiproject.org/">
                  Bodhi Project
                </OutLink>
                <br />
                {data.copyright}
              </Paragraph>
            </Col>
          </Row>
        </Container>
      </SemanticFooter>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default Header;
