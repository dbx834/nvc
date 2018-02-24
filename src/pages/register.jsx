// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react';
// import PropTypes from 'prop-types';
import _ from 'lodash';
import { css } from 'glamor';
import moment from 'moment';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
import { Form, Select, Input, Button } from 'antd';
import isEmail from 'validator/lib/isEmail';
import isAlpha from 'validator/lib/isAlphanumeric';
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
      backgroundColor: '#f8f2e6',

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
        marginTop: -16,
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
/** Check if a field has an error */
const hasErrors = fieldsError =>
  Object.keys(fieldsError).some(field => fieldsError[field]);

/** Check email is valid */
const validateEmail = (rule, value, callback) => {
  if (_.isEmpty(value)) {
    callback('Your email please…');
  } else {
    if (!isEmail(value)) {
      callback("That's not a valid email address!");
    } else {
      callback();
    }
  }
};

/** Check username is valid */
const validateName = (rule, value, callback) => {
  if (_.isEmpty(value)) {
    callback('Name thyself!');
  } else {
    if (!isAlpha(_.replace(value, ' ', ''))) {
      callback('A name can have only characters (a-z, A-Z).');
    } else {
      callback();
    }
  }
};

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

        const { name, email, event } = values;

        setTimeout(() => {
          // Mock some delay
          fetch(
            `https://script.google.com/macros/s/AKfycbxe5KaEdHtLH5JVpf-yntF5LZYAszQTwHHQ4tEjvBT4DyykpRtZ/exec?name=${name}&email=${email}&event=${event}&callback=?`,
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
    const eventError = isFieldTouched('event') && getFieldError('event');

    const postEdges = this.props.data.allMarkdownRemark.edges;

    // get only events
    const eventNodes = [];
    const dates = [];
    _.map(postEdges, ({ node }) => {
      if (_.startsWith(_.trim(node.fields.route), 'events') === true) {
        eventNodes.push({ node });
        dates.push({ date: moment(node.frontmatter.date, 'YYYY-MM-DD'), node });
      }
    });

    const today = moment();

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
            <H1>Register</H1>
            <Paragraph>blah blah blah…</Paragraph>
            {this.state.formSent === false && (
              <Form onSubmit={this.handleSubmit} className={formStyleClass}>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Name */}
                <FormItem
                  validateStatus={nameError ? 'error' : ''}
                  help={nameError || ''}
                >
                  {getFieldDecorator('name', {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [{ validator: validateName }],
                  })(<Input placeholder="Name" />)}
                </FormItem>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Email */}
                <FormItem
                  validateStatus={emailError ? 'error' : ''}
                  help={emailError || ''}
                >
                  {getFieldDecorator('email', {
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [{ validator: validateEmail }],
                  })(<Input placeholder="Email" />)}
                </FormItem>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Event Selection */}
                <FormItem
                  validateStatus={eventError ? 'error' : ''}
                  help={eventError || ''}
                >
                  {getFieldDecorator('event', {
                    rules: [
                      {
                        required: true,
                        message: 'Please select an event from the dropdown...',
                      },
                    ],
                  })(
                    <Select placeholder="Select an event from the dropdown...">
                      {_.map(eventNodes, ({ node }, index) => {
                        // let eventSchemaData = null;
                        const { frontmatter } = node;
                        const mDate = moment(frontmatter.date);
                        const humanDate = mDate.format('dddd, MMMM Do YYYY');
                        const elapsed = mDate.fromNow();

                        if (mDate.isSameOrAfter(today) === true) {
                          return (
                            <Option
                              key={humanDate}
                              value={`${frontmatter.title} on ${humanDate}`}
                            >
                              {frontmatter.title} on {humanDate} ({elapsed})
                            </Option>
                          );
                        }
                      })}
                    </Select>,
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
                Thank you for registering! We'll get back to you shortly.
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
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query EventSignUpQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            route
          }
          frontmatter {
            abstract
            title
            cover
            date
            category
          }
        }
      }
    }
  }
`;
/* eslint-enable no-undef */

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedForm;
