// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react';
// import PropTypes from 'prop-types';
import _ from 'lodash';
import { css } from 'glamor';

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
  Page,
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
        width: '37.5%',
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

  '@media(min-width: 768px)': {
    '& .ant-form-item:nth-child(1)': {
      marginRight: 10,
    },

    '& .ant-form-item:nth-child(2)': {
      marginLeft: 10,
    },
  },

  // Dropdown
  '& .ant-form-item:nth-child(3)': {
    display: 'none !important',
    width: '100%',

    '& .ant-select': {
      fontSize: 'inherit',
      fontFamily: 'inherit',
      color: '#363636',
    },

    '& .ant-select-selection': {
      border: 'none',
      borderBottom: '3px solid #363636',
      borderRadius: 0,
      height: 'auto',

      '&:focus,:active': {
        border: 'none',
        boxShadow: 'none',
        borderBottom: '3px solid #363636',
      },
    },

    '& .ant-select-selection__rendered': {
      margin: 0,
      ...applyRhythm({ padding: '0X 0X 0.141X' }),
    },

    '& .ant-select-selection__placeholder': {
      color: '#363636',
      height: 'auto',
      top: 'unset',
      left: 'unset',
      right: 'unset',
      marginTop: 'unset',
    },

    '& .ant-select-arrow': _.merge(
      {
        color: '#363636',
        right: 0,
      },
      ...applyType('ltb1ekq'),
    ),
  },

  // Textarea
  '& .ant-form-item:nth-child(4)': {
    width: '100%',
  },

  // Name, email, concern
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
/**
 * IndexPage
 */
class IndexPage extends React.Component {
  /**
   * constructor - Just a standard constructor.
   */
  constructor(props) {
    super(props);

    /**
     * state - Track token-check mutation, send-verification-mail mutation, and when to redirect.
     */
    this.state = {
      loader: null,
      formSent: false,
      geo: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkEmailValid = this.checkEmailValid.bind(this);
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();

    fetch('https://freegeoip.net/json/')
      .then(response => response.json())
      .then(json => {
        this.setState({
          geo: {
            ip: json.ip,
            country: `${json.country_name} (${json.country_code})`,
            region: `${json.region_name} (${json.region_code})`,
            city: json.city ? json.city : 'NA',
            latLon: `${json.latitude}, ${json.longitude}`,
            pin: `http://maps.google.com/maps?q=${json.latitude},${
              json.longitude
            }`,
            timeZone: json.time_zone,
          },
        });
      })
      .catch(error => {
        console.log(error);
      });
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

        setTimeout(() => {
          // Mock some delay
          fetch(
            'https://hooks.slack.com/services/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',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
              },
              body: JSON.stringify({
                attachments: [
                  {
                    fallback:
                      'Someone filled the contact form @ <https://www.dmi.systems/contact|https://www.dmi.systems/contact>',
                    pretext:
                      'Someone filled the contact form @ <https://www.dmi.systems/contact|https://www.dmi.systems/contact>',
                    color: '#DEAE4D',
                    fields: [
                      {
                        title: 'Name',
                        value: values.name,
                        short: false,
                      },
                      {
                        title: 'Email',
                        value: values.email,
                        short: false,
                      },
                      {
                        title: 'Reason',
                        value: values.reason,
                        short: false,
                      },
                      {
                        title: 'Concern',
                        value: values.concern,
                        short: false,
                      },
                      {
                        title: 'Location (Approximation)',
                        value: `IP: ${this.state.geo.ip}\nCountry: ${
                          this.state.geo.country
                        }\nRegion: ${this.state.geo.region}\nCity: ${
                          this.state.geo.city
                        }\nRegion: ${this.state.geo.region}\nLat,Lon: ${
                          this.state.geo.latLon
                        }\nPin: <${this.state.geo.pin}|${
                          this.state.geo.pin
                        }>\nTimezone: ${this.state.geo.timeZone}`,
                        short: false,
                      },
                    ],
                  },
                ],
              }),
            },
          )
            .then(() => {
              this.setState({
                loader: false,
                formSent: true,
              });
            })
            .catch(error => {
              console.log(error);
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
    const nameError = isFieldTouched('name') && getFieldError('name');
    const emailError = isFieldTouched('email') && getFieldError('email');
    const reasonError = isFieldTouched('reason') && getFieldError('reason');
    const concernError = isFieldTouched('concern') && getFieldError('concern');

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
            <Paragraph>
              Our email is -&nbsp;
              <a href="mailto:laura.joyful@gmail.com">
                laura.joyful@gmail.com
              </a>. You can also fill the form below…
            </Paragraph>
            {this.state.formSent === false && (
              <Form onSubmit={this.handleSubmit} className={formStyleClass}>
                <FormItem
                  validateStatus={nameError ? 'error' : ''}
                  help={nameError || ''}
                >
                  {getFieldDecorator('name', {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [{ required: true, message: 'Name thyself!' }],
                  })(<Input placeholder="Name…" />)}
                </FormItem>
                <FormItem
                  validateStatus={emailError ? 'error' : ''}
                  help={emailError || ''}
                >
                  {getFieldDecorator('email', {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [{ validator: this.checkEmailValid }],
                  })(<Input placeholder="Email…" />)}
                </FormItem>
                <FormItem
                  validateStatus={reasonError ? 'error' : ''}
                  help={reasonError || ''}
                >
                  {getFieldDecorator('reason', {
                    initialValue: 'request-for-information',
                    rules: [
                      {
                        required: true,
                        message:
                          'Telling us what we can help you with will allow us to get back to you quicker.',
                      },
                    ],
                  })(
                    <Select placeholder="How can we help you?">
                      <Option value="request-for-information">
                        Request for information
                      </Option>
                      <Option value="general-support">General support</Option>
                      <Option value="billing-and-payment">
                        Billing and payment issues
                      </Option>
                      <Option value="technical-issues">Technical issues</Option>
                      <Option value="upload-issues">Upload issues</Option>
                      <Option value="account-issues">Account Issues</Option>
                      <Option value="other-issues">Other Issues</Option>
                    </Select>,
                  )}
                </FormItem>
                <FormItem
                  validateStatus={concernError ? 'error' : ''}
                  help={concernError || ''}
                >
                  {getFieldDecorator('concern', {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [{ required: true, message: 'What concerns you?' }],
                  })(
                    <TextArea
                      placeholder="Your concern…"
                      autosize={{ minRows: 1, maxRows: 6 }}
                    />,
                  )}
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
              <Paragraph class="home" style={{ textIndent: 0 }}>
                We recieved your message. We'll get back to you shortly.
              </Paragraph>
            )}
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Person Details */}
          <H1>Contact Person</H1>
          <Image
            src={''}
            style={{
              height: 250,
              width: 155,
              border: 0,
              background: '#4a4a4a',
            }}
            loader="gradient"
          />
          <Paragraph>
            <strong>Laur'a Joy</strong>
            <br />
            <br />
            Email:&nbsp;
            <a href="mailto:laura.joyful@gmail.com">laura.joyful@gmail.com</a>
            <br />
            Skype: <a href="skype:laura?">laura?</a>
            <br />
            Facebook:{' '}
            <OutLink to="https://facebook.com/">https://facebook.com/</OutLink>
          </Paragraph>
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
