// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react';
// import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Form, Select, Input, Button } from 'antd';
import { Elements, applyType, applyRhythm } from '@bodhi-project/typography';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import {
  hasErrors,
  validateEmail,
  validateName,
  validateComment,
} from '../helpers/formHelpers';
import { formStyleClass } from '../helpers/defaultFormStyles';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const FormItem = Form.Item;
const { Option } = Select;
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

    // const today = moment();

    return (
      <Fragment>
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
            <div style={{ display: 'none' }}>
              <FormItem
                validateStatus={eventError ? 'error' : ''}
                help={eventError || ''}
              >
                {getFieldDecorator('event', {
                  initialValue: this.props.event.key,
                  rules: [
                    {
                      required: true,
                      message: 'Please select an event from the dropdown...',
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
      </Fragment>
    );
  }
}

const WrappedComponent = Form.create()(Component);

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedComponent;
