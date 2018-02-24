// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react';
// import PropTypes from 'prop-types';
import _ from 'lodash';
import { css } from 'glamor';
import serialize from 'form-serialize';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
import { Form, Select, Input, Button } from 'antd';
import isEmail from 'validator/lib/isEmail';
import { Image, OutLink } from '@bodhi-project/components';
import { Elements, applyType, applyRhythm } from '@bodhi-project/typography';
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
} from '@bodhi-project/seo';
import {
  Page as SemanticPage,
  // Section,
  Article,
  Header,
  Footer,
} from '@bodhi-project/semantic-webflow';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import docbrij from './assets/docbrij.jpg';
import ogX from './assets/ogX.jpg';
import twitterSummaryX from './assets/twitterSummaryX.jpg';
import packageJson from '../../package.json';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;
const { H1, H2, Paragraph } = Elements;
const { data } = packageJson;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageTitle = 'Contact Us';
const pageSlug = 'contact';
const pageAbstract =
  'Expertise, care to detail and professionalism matter deeply to us and our clients recognise it in us. That is why 9 out of 10 people come back to us with more work. Talk to us today to find out what we can do for you.';

const generalMetaData = {
  description: pageAbstract,
  keywords: data.websiteKeywords,
  image: ogX,
};

const twitterSummaryCardData = {
  site: data.websiteName,
  creator: data.org.name,
  title: pageTitle,
  description: pageAbstract,
  image: twitterSummaryX,
};

const openGraphSummaryData = {
  siteName: data.websiteName,
  url: `${data.websiteUrl}${pageSlug}`,
  title: pageTitle,
  description: pageAbstract,
  image: ogX,
};

const webpageSchemaData = {
  url: `${data.websiteUrl}${pageSlug}`,
  name: pageTitle,
  description: pageAbstract,
  author: data.org.name,
  publisher: data.org.name,
  image: ogX,
};

const breadcrumbSchemaData = {
  breadcrumbs: [
    { name: 'Home', url: `${data.websiteUrl}` },
    { name: pageTitle, url: `${data.websiteUrl}${pageSlug}` },
  ],
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageWrapper = css({
  ...applyRhythm({ maxWidth: '27X' }),
});
const pageWrapperClass = pageWrapper.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Hex style
const formStyle = css({
  display: 'flex !important',
  flexWrap: 'wrap !important',
  color: 'inherit !important',

  '& .ant-form-item': _.merge(
    {
      display: 'flex !important',
      width: '100%',
      '@media(min-width: 768px)': {
        width: '62.5%',
      },
      flexGrow: '1',

      '& .ant-form-explain': {
        fontSize: '70%',
        marginTop: 5,
      },
    },
    ...applyType('ltb1ekq'),
    ...applyRhythm({ marginBottom: '1.625X' }),
  ),

  '& .ant-form-item-control-wrapper': {
    width: '100%',
  },

  // Email
  '& .ant-input': {
    fontSize: 'inherit',
    fontFamily: 'inherit',
    border: 'none',
    borderBottom: '3px solid #363636',
    borderRadius: 0,
    height: 'auto',
    color: '#363636',
    transition: 'border 500ms cubic-bezier(0.215, 0.61, 0.355, 1)',
    backgroundColor: '#f8f2e6',
    ...applyRhythm({ padding: '0X 0X 0.141X' }),

    '&::-webkit-input-placeholder': {
      color: '#363636',
    },

    '&:hover::-webkit-input-placeholder': {
      color: '#0000FF',
    },

    '&:hover': {
      border: 'none',
      boxShadow: 'none',
      borderBottom: '3px solid #0000FF',
      color: '#0000FF',
    },
    '&:visited': {
      border: 'none',
      boxShadow: 'none',
      borderBottom: '3px solid #363636',
    },
    '&:link': {
      border: 'none',
      boxShadow: 'none',
      borderBottom: '3px solid #363636',
    },
    '&:active': {
      border: 'none',
      boxShadow: 'none',
      borderBottom: '3px solid #363636',
    },
    '&:focus': {
      border: 'none',
      boxShadow: 'none',
      borderBottom: '3px solid #0000FF',
      color: '#0000FF',
    },
  },

  // Submit button
  '& .ant-btn-primary': _.merge(
    {
      fontSize: 'inherit',
      borderRadius: 0,
      backgroundColor: '#0000FF',
      borderColor: '#0000FF',
    },
    ...applyRhythm({ height: '1.375X' }),
    ...applyRhythm({ padding: '0X 1.625X' }),
  ),

  '& .ant-btn-primary[disabled]': {
    color: 'rgba(54, 54, 54, 0.375)',
    backgroundColor: '#FFFFFF',
    borderColor: '#363636',
    backgroundImage:
      'linear-gradient(-45deg, rgba(0, 0, 0, 0) 46%, #363636 49%, #363636 51%, rgba(0, 0, 0, 0) 10%)',
    ...applyRhythm({ backgroundSize: '0.45X 0.45X' }),
  },

  '& .has-error .ant-input:focus': {
    border: 'none !important',
    boxShadow: 'none !important',
    borderBottom: '3px solid #ff4d4f !important',
  },
});

const formStyleClass = formStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** Checks errors */
const hasErrors = fieldsError =>
  Object.keys(fieldsError).some(field => fieldsError[field]);

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
    this.checkEmailValid = this.checkEmailValid.bind(this);
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

        setTimeout(() => {
          // Mock some delay
          fetch(
            `https://script.google.com/macros/s/AKfycbx6xNPY__NC6jrneaGeH1NPLkjdrNSc3NMUV-oHAWnWln2WDWZL/exec?email=${email}&callback=?`,
            {
              method: 'GET',
              mode: 'no-cors',
            },
          )
            .then(response => {
              console.log('success', response);
              this.setState({
                loader: false,
                formSent: true,
              });
            })
            .catch(error => {
              console.log('error', error);
              this.setState({
                loader: false,
              });
            });
        }, 1500);
      }
    });
  }

  /** checkEmailValid -- checks email is valid */
  checkEmailValid(rule, value, callback) {
    if (_.isEmpty(value)) {
      // Is empty
      callback('Your email please...');
    } else {
      if (!isEmail(value)) {
        // Is not an email
        callback("That's not a valid email address!");
      } else {
        callback();
      }
    }
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;
    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');

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
              You can subscribe to our montly newsletter below —
            </Paragraph>
            {this.state.formSent === false && (
              <Form onSubmit={this.handleSubmit} className={formStyleClass}>
                <FormItem
                  validateStatus={emailError ? 'error' : ''}
                  help={emailError || ''}
                >
                  {getFieldDecorator('email', {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [{ validator: this.checkEmailValid }],
                  })(<Input placeholder="Email…" />)}
                </FormItem>
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
