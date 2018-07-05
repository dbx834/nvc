// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Elements, applyRhythm } from "@bodhi-project/typography";
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
import { Page } from "@bodhi-project/semantic-webflow";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Form from "antd/lib/form";
import "@bodhi-project/antrd/lib/nvc-website/form/style/css";

import Select from "antd/lib/select";
import "@bodhi-project/antrd/lib/nvc-website/select/style/css";

import Input from "antd/lib/input";
import "@bodhi-project/antrd/lib/nvc-website/input/style/css";

import Button from "antd/lib/button";
import "@bodhi-project/antrd/lib/nvc-website/button/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import {
  hasErrors,
  validateEmail,
  validateName,
  validateComment,
} from "../helpers/formHelpers";
import { formStyleClass } from "../helpers/defaultFormStyles";
import seoHelper from "../helpers/seoHelper";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
const { H1, H2, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Contact Us",
  nakedPageSlug: "contact-us",
  pageAbstract: "Write to us at joylivinglearning@gmail.com.",
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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageWrapper = css({});
const pageWrapperClass = pageWrapper.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
class IndexPage extends React.Component {
  /** standard constructor. */
  constructor(props) {
    super(props);

    this.state = {
      loader: null,
      formSent: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /** handleSubmit - Post to google spreadsheet. */
  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.setState({
          // Show loader and reset errors if any.
          loader: true,
        });

        let { name, email, comment } = values;

        name = isUndefined(name) ? " " : name;
        email = isUndefined(email) ? " " : email;
        comment = isUndefined(comment) ? " " : comment;

        // Mock some delay
        setTimeout(() => {
          fetch(
            `https://script.google.com/macros/s/AKfycbxapf3fZy2Jafdoc_-wB7FXa_OPI30iPcRZK8rNc8wyUQ52cEvT/exec?email=${email}&name=${name}&comment=${comment}&callback=?`,
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
    const commentError = isFieldTouched("comment") && getFieldError("comment");

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
        <Page className={pageWrapperClass}>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Form */}
          <div>
            <H1>Contact</H1>
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
                      placeholder="Your questions / comments…"
                      autosize={{ minRows: 1, maxRows: 6 }}
                    />,
                  )}
                </FormItem>
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
                We recieved your message. We'll get back to you shortly.
              </Paragraph>
            )}
          </div>
        </Page>
      </Fragment>
    );
  }
}

const WrappedForm = Form.create()(IndexPage);

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedForm;
