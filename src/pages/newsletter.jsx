// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
// import PropTypes from 'prop-types';
import _ from "lodash";
import { css } from "glamor";
import serialize from "form-serialize";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Form, Select, Input, Button } from "antd";
import isEmail from "validator/lib/isEmail";
import { Image, OutLink } from "@bodhi-project/components";
import { Elements, applyType, applyRhythm } from "@bodhi-project/typography";
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
import {
  Page as SemanticPage,
  // Section,
  Article,
  Header,
  Footer,
} from "@bodhi-project/semantic-webflow";

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
  pageTitle: "Newsletter",
  nakedPageSlug: "newsletter",
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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageWrapper = css({
  ...applyRhythm({ maxWidth: "27X" }),

  "& .ant-form-item": {
    width: "100% !important",
  },

  "@media(min-width: 768px)": {
    "& .ant-form-item:nth-child(1)": {
      marginRight: "0px !important",
    },

    "& .ant-form-item:nth-child(2)": {
      marginLeft: "0px !important",
    },
  },
});
const pageWrapperClass = pageWrapper.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
class Page extends React.Component {
  /** standard constructor. */
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

        const { email } = values;

        // Mock some delay
        setTimeout(() => {
          fetch(
            `https://script.google.com/macros/s/AKfycbx6xNPY__NC6jrneaGeH1NPLkjdrNSc3NMUV-oHAWnWln2WDWZL/exec?email=${email}&callback=?`,
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
    const emailError = isFieldTouched("email") && getFieldError("email");

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
        <SemanticPage className={pageWrapperClass}>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Form */}
          <div>
            <H1>Newsletter</H1>
            <Paragraph>
              If you'd like to receive updates about our programs, please sign
              up for our newsletter.
            </Paragraph>
            {this.state.formSent === false && (
              <Form onSubmit={this.handleSubmit} className={formStyleClass}>
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
                Thanks! We've added your email to our list.
              </Paragraph>
            )}
          </div>
        </SemanticPage>
      </Fragment>
    );
  }
}

const WrappedPage = Form.create()(Page);

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedPage;
