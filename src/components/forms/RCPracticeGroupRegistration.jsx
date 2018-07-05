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
import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Elements } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from "@bodhi-project/components/lib/OutLink";
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Tooltip from "antd/lib/tooltip";
import "@bodhi-project/antrd/lib/nvc-website/tooltip/style/css";

import Form from "antd/lib/form";
import "@bodhi-project/antrd/lib/nvc-website/form/style/css";

import Select from "antd/lib/select";
import "@bodhi-project/antrd/lib/nvc-website/select/style/css";

import Input from "antd/lib/input";
import "@bodhi-project/antrd/lib/nvc-website/input/style/css";

import Button from "antd/lib/button";
import "@bodhi-project/antrd/lib/nvc-website/button/style/css";

import Radio from "antd/lib/radio";
import "@bodhi-project/antrd/lib/nvc-website/radio/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import {
  hasErrors,
  validateEmail,
  validateName,
  validateMobile,
  validateCountry,
  validateCurrentLocation,
  validateWhatDrawsYou,
  validateComment,
  validateExperience,
} from "../../helpers/formHelpers";
import { formStyleClass } from "../../helpers/defaultFormStyles";
import domestic from "../../assets/domestic.png";
import international from "../../assets/international.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
const { H1, Paragraph } = Elements;
const RadioGroup = Radio.Group;
const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  paddingBottom: "2em",

  "& h1": {
    textTransform: "uppercase",
    fontStyle: "italic",
    borderTop: "3px solid #B43808",

    "& span": {
      fontSize: "90%",
    },
  },
});
const styleClass = style.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** RCPracticeGroupSide */
class RCPracticeGroupSide extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);

    this.state = {
      loader: null,
      formSent: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /** componentDidMount - Disable submit button at the beginning. */
  componentDidMount() {
    this.props.form.validateFields();
  }

  /** handleSubmit - Post to google spreadsheet. */
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.setState({
          // Show loader and reset errors if any.
          loader: true,
        });

        let {
          name,
          email,
          event,
          mobile,
          country,
          whatDrawsYou,
          currentLocation,
          comment,
          experience,
          journey,
          wouldLikeInfo,
        } = values;

        name = isUndefined(name) ? " " : name;
        email = isUndefined(email) ? " " : email;
        event = isUndefined(event) ? " " : event;
        mobile = isUndefined(mobile) ? " " : mobile;
        country = isUndefined(country) ? " " : country;
        whatDrawsYou = isUndefined(whatDrawsYou) ? " " : whatDrawsYou;
        currentLocation = isUndefined(currentLocation) ? " " : currentLocation;
        comment = isUndefined(comment) ? " " : comment;
        experience = isUndefined(experience) ? " " : experience;
        journey = isUndefined(journey) ? " " : journey;
        wouldLikeInfo = isUndefined(wouldLikeInfo) ? " " : wouldLikeInfo;
        const note = " ";

        setTimeout(() => {
          // Mock some delay
          fetch(
            `https://script.google.com/macros/s/AKfycbxe5KaEdHtLH5JVpf-yntF5LZYAszQTwHHQ4tEjvBT4DyykpRtZ/exec?name=${name}&email=${email}&event=${event}&mobile=${mobile}&country=${country}&whatDrawsYou=${whatDrawsYou}&comment=${comment}&currentLocation=${currentLocation}&experience=${experience}&journey=${journey}&wouldLikeInfo=${wouldLikeInfo}&note=${note}&callback=?`,
            {
              method: "GET",
              mode: "no-cors",
            },
          )
            .then(response => {
              this.setState({
                loader: false,
                formSent: true,
              });
            })
            .catch(error => {
              this.setState({
                loader: false,
              });
            });
        }, 1500);
      }
    });
  }

  /** standard renderer */
  render() {
    const { data, pathContext } = this.props;
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;
    // Only show error after a field is touched.
    const nameError = isFieldTouched("name") && getFieldError("name");
    const emailError = isFieldTouched("email") && getFieldError("email");
    const eventError = isFieldTouched("event") && getFieldError("event");
    const countryError = isFieldTouched("country") && getFieldError("country");
    const commentError = isFieldTouched("comment") && getFieldError("comment");
    const whatDrawsYouError =
      isFieldTouched("whatDrawsYou") && getFieldError("whatDrawsYou");
    const mobileError = isFieldTouched("mobile") && getFieldError("mobile");
    const currentLocationError =
      isFieldTouched("currentLocation") && getFieldError("currentLocation");
    const experienceError =
      isFieldTouched("experience") && getFieldError("experience");
    const journeyError = isFieldTouched("journey") && getFieldError("journey");
    const wouldLikeInfoError =
      isFieldTouched("wouldLikeInfo") && getFieldError("wouldLikeInfo");

    const { date, startDate } = data;
    const { humanDate } = pathContext;

    const key = `${data.title} @ ${humanDate}`;
    const todayInt = parseInt(moment().format("YYYYMMDD"), 10);
    const begins = moment(!isNull(startDate) ? startDate : date);
    const beginDateInt = parseInt(begins.format("YYYYMMDD"), 10);
    let eventStatus = null;

    if (todayInt > beginDateInt) {
      eventStatus = "past";
    } else if (todayInt < beginDateInt) {
      eventStatus = "future";
    } else {
      eventStatus = "present";
    }

    return (
      <div className={styleClass}>
        {(eventStatus === "past" || eventStatus === "present") && (
          <Fragment>
            <H1 mask="h4">
              <span>Registration Closed</span>
            </H1>
          </Fragment>
        )}
        {eventStatus === "future" && (
          <Fragment>
            <H1 mask="h4">
              <span>Donate</span>
            </H1>
            <Paragraph style={{ marginBottom: 10 }}>
              <strong>
                <i>{data.cost}</i>
              </strong>
            </Paragraph>
            {this.props.showPay === true && (
              <Fragment>
                <br />
                <Paragraph>
                  You may join this practice group free of charge, as we offer
                  this space as a service to the community. And we also welcome
                  any contribution you'd like to make, so as to support our
                  work.
                  <br />
                  <br />
                  Select the Domestic option for Indian bank/credit cards, or
                  the International option for foreign bank/credit cards.
                </Paragraph>
                <OutLink
                  to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
                  style={{ marginRight: 17, borderBottom: 0 }}
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
              </Fragment>
            )}
            {this.props.showRegister === true && (
              <Fragment>
                <br />
                <br />
                <br />
                <br />
                <H1 mask="h4">
                  <span>Register</span>
                </H1>
                {this.state.formSent === false ? (
                  <p>You are about to register for {key}.</p>
                ) : (
                  <p>You registered for {key}.</p>
                )}
                {this.state.formSent === false && (
                  <Form
                    onSubmit={this.handleSubmit}
                    className={`${formStyleClass} mask-p`}
                  >
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Name */}
                    <FormItem
                      validateStatus={nameError ? "error" : ""}
                      help={nameError || ""}
                    >
                      {getFieldDecorator("name", {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [{ validator: validateName }],
                      })(<Input placeholder="Name" />)}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Email */}
                    <FormItem
                      validateStatus={emailError ? "error" : ""}
                      help={emailError || ""}
                    >
                      {getFieldDecorator("email", {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [{ validator: validateEmail }],
                      })(<Input placeholder="Email" />)}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile */}
                    <FormItem
                      validateStatus={mobileError ? "error" : ""}
                      help={mobileError || ""}
                    >
                      {getFieldDecorator("mobile", {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [{ validator: validateMobile }],
                      })(<Input placeholder="Mobile / Whatsapp" />)}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Country Selection */}
                    <FormItem
                      validateStatus={countryError ? "error" : ""}
                      help={countryError || ""}
                    >
                      {getFieldDecorator("country", {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [{ validator: validateCountry }],
                      })(
                        <Input placeholder="What's your country of origin?" />,
                      )}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Location */}
                    <FormItem
                      validateStatus={currentLocationError ? "error" : ""}
                      help={currentLocationError || ""}
                    >
                      {getFieldDecorator("currentLocation", {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [{ validator: validateCurrentLocation }],
                      })(
                        <Input placeholder="Where are you living presently?" />,
                      )}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ What Draws You */}
                    <FormItem
                      validateStatus={whatDrawsYouError ? "error" : ""}
                      help={whatDrawsYouError || ""}
                    >
                      {getFieldDecorator("whatDrawsYou", {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [{ validator: validateWhatDrawsYou }],
                      })(
                        <TextArea
                          placeholder="What draws you to this practice group?"
                          autosize={{ minRows: 4, maxRows: 6 }}
                        />,
                      )}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Experience Level */}
                    <span style={{ marginBottom: 8, display: "block" }}>
                      What’s your level of NVC and/or RC (or Restorative
                      Justice) experience
                    </span>
                    <FormItem
                      validateStatus={experienceError ? "error" : ""}
                      help={experienceError || ""}
                    >
                      {getFieldDecorator("experience", {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [{ validator: validateExperience }],
                      })(
                        <RadioGroup>
                          <Radio
                            style={radioStyle}
                            value="Beginner (0-5 days of NVC training)"
                          >
                            Beginner (0-5 days of NVC training)
                          </Radio>
                          <Radio
                            style={radioStyle}
                            value="Intermediate (5-10 days of NVC training)"
                          >
                            Intermediate (5-10 days of NVC training)
                          </Radio>
                          <Radio
                            style={radioStyle}
                            value="Advanced (over 10 days of NVC training)"
                          >
                            Advanced (over 10 days of NVC training)
                          </Radio>
                          <Radio
                            style={radioStyle}
                            value="NVC Certification Candidate"
                          >
                            NVC Certification Candidate
                          </Radio>
                          <Radio style={radioStyle} value="NVC Trainer">
                            NVC Trainer
                          </Radio>
                        </RadioGroup>,
                      )}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Journey */}
                    <FormItem
                      validateStatus={journeyError ? "error" : ""}
                      help={journeyError || ""}
                    >
                      {getFieldDecorator("journey", {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [{ validator: validateComment }],
                      })(
                        <TextArea
                          placeholder="Please share a few sentences about your NVC and/or RC journey."
                          autosize={{ minRows: 3, maxRows: 5 }}
                        />,
                      )}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ More Info. */}
                    <span style={{ marginBottom: 8, display: "block" }}>
                      Would you be like to receive information about future NVC
                      and/or RC events?
                    </span>
                    <FormItem
                      validateStatus={wouldLikeInfoError ? "error" : ""}
                      help={wouldLikeInfoError || ""}
                    >
                      {getFieldDecorator("wouldLikeInfo", {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [{ validator: validateExperience }],
                      })(
                        <RadioGroup>
                          <Radio
                            style={radioStyle}
                            value="Yes, I would like to receive some information every now and then."
                          >
                            Yes, I would like to receive some information every
                            now and then.
                          </Radio>
                          <Radio
                            style={radioStyle}
                            value="No, I would not like to receive any information."
                          >
                            No, I would not like to receive any information.
                          </Radio>
                        </RadioGroup>,
                      )}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Comment */}
                    <FormItem
                      validateStatus={commentError ? "error" : ""}
                      help={commentError || ""}
                    >
                      {getFieldDecorator("comment", {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [{ validator: validateComment }],
                      })(
                        <TextArea
                          placeholder="Any other comments / questions?"
                          autosize={{ minRows: 4, maxRows: 6 }}
                        />,
                      )}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Event Selection */}
                    <div style={{ display: "none" }}>
                      <FormItem
                        validateStatus={eventError ? "error" : ""}
                        help={eventError || ""}
                      >
                        {getFieldDecorator("event", {
                          initialValue: key,
                          rules: [
                            {
                              required: true,
                              message:
                                "Please select an event from the dropdown...",
                            },
                          ],
                        })(
                          <Select
                            placeholder="Select an event from the dropdown..."
                            disabled
                          >
                            <Option key={key} value={key}>
                              {key}
                            </Option>
                          </Select>,
                        )}
                      </FormItem>
                    </div>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Submit */}
                    <FormItem>
                      <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                        loading={this.state.loader}
                      >
                        Submit
                      </Button>
                    </FormItem>
                  </Form>
                )}
                {/* On-sent message */}
                {this.state.formSent === true && (
                  <Paragraph className="home" style={{ textIndent: 0 }}>
                    Thank you for registering! We'll get back to you shortly.
                  </Paragraph>
                )}
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    );
  }
}

const WrappedComponent = Form.create()(RCPracticeGroupSide);

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedComponent;
