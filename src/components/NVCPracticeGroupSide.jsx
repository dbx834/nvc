// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Form, Select, Input, Button } from "antd";
import { Elements } from "@bodhi-project/typography";
import { Image } from "@bodhi-project/components";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import {
  hasErrors,
  validateEmail,
  validateName,
  validateComment,
} from "../helpers/formHelpers";
import { formStyleClass } from "../helpers/defaultFormStyles";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
const { H1, Paragraph } = Elements;

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
/** NVCPracticeGroupSide */
class NVCPracticeGroupSide extends React.Component {
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

        const {
          name,
          email,
          event,
          mobile,
          country,
          whatDrawsYou,
          currentLocation,
        } = values;

        setTimeout(() => {
          // Mock some delay
          fetch(
            `https://script.google.com/macros/s/AKfycbxe5KaEdHtLH5JVpf-yntF5LZYAszQTwHHQ4tEjvBT4DyykpRtZ/exec?name=${name}&email=${email}&event=${event}&mobile=${mobile}&country=${country}&whatDrawsYou=${whatDrawsYou}&currentLocation=${currentLocation}&callback=?`,
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
    const { data } = this.props;
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

    const { date, startDate } = data;

    const key = `${data.title} @ ${data.date}`;
    const todayInt = parseInt(moment().format("YYYYMMDD"), 10);
    const begins = moment(!_.isNull(startDate) ? startDate : date);
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
              <span>Registeration Closed</span>
            </H1>
            <Paragraph style={{ marginBottom: 30 }}>
              something something.
            </Paragraph>
          </Fragment>
        )}
        {eventStatus === "future" && (
          <Fragment>
            <H1 mask="h4">
              <span>Fees</span>
            </H1>
            <Paragraph style={{ marginBottom: 30 }}>
              <strong>
                <i>{data.cost}</i>
              </strong>
              <br />
              <br />
              Please make your payment to confirm your seat.
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
                background: "#4a4a4a",
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
                background: "#4a4a4a",
                display: "inline-block",
              }}
            />
            <br />
            <br />
            <br />
            <br />
            <H1 mask="h4">
              <span>Register</span>
            </H1>
            <br />
            <br />
            {this.state.formSent === false && (
              <Form onSubmit={this.handleSubmit} className={formStyleClass}>
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
                    rules: [{ validator: validateEmail }],
                  })(<Input placeholder="Mobile / Whatsapp" />)}
                </FormItem>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Country Selection */}
                <FormItem
                  validateStatus={countryError ? "error" : ""}
                  help={countryError || ""}
                >
                  {getFieldDecorator("country", {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [{ validator: validateName }],
                  })(<Input placeholder="What's your country of origin?" />)}
                </FormItem>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Location */}
                <FormItem
                  validateStatus={currentLocationError ? "error" : ""}
                  help={currentLocationError || ""}
                >
                  {getFieldDecorator("currentLocation", {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [{ validator: validateName }],
                  })(<Input placeholder="Where are you living presently?" />)}
                </FormItem>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ What Draws You */}
                <FormItem
                  validateStatus={whatDrawsYouError ? "error" : ""}
                  help={whatDrawsYouError || ""}
                >
                  {getFieldDecorator("whatDrawsYou", {
                    validateTrigger: ["onChange", "onBlur"],
                    rules: [{ validator: validateComment }],
                  })(
                    <TextArea
                      placeholder="What draws you to this practice group?"
                      autosize={{ minRows: 4, maxRows: 6 }}
                    />,
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
      </div>
    );
  }
}

const WrappedComponent = Form.create()(NVCPracticeGroupSide);

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedComponent;
