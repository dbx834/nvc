// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Elements } from "@bodhi-project/typography";

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
  validateComment,
} from "../helpers/formHelpers";
import { formStyleClass } from "../helpers/defaultFormStyles";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
const { Paragraph } = Elements;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Register component */
class Component extends React.Component {
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

    // const today = moment();

    return (
      <Fragment>
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
              })(<Input placeholder="Your country..." />)}
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
                  placeholder="Any other comments/questions?"
                  autosize={{ minRows: 4, maxRows: 6 }}
                />,
              )}
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
                  placeholder="What draws you to this workshop/training/practice group?"
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
                  initialValue: this.props.event.key,
                  rules: [
                    {
                      required: true,
                      message: "Please select an event from the dropdown...",
                    },
                  ],
                })(
                  <Select
                    placeholder="Select an event from the dropdown..."
                    disabled
                  >
                    <Option
                      key={this.props.event.key}
                      value={this.props.event.key}
                    >
                      {this.props.event.key}
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
        <br />
        <br />
        <br />
      </Fragment>
    );
  }
}

const WrappedComponent = Form.create()(Component);

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedComponent;
