// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Form from 'antd/lib/form'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/form/style/css'

import Input from 'antd/lib/input'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/input/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/button/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import {
  hasErrors,
  validateEmail,
  validateName,
  validateComment,
} from '../../../methods/formHelpers'
import { formStyle } from '../../../methods/defaultFormStyles'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const FormItem = Form.Item
const { TextArea } = Input

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageWrapper = css({})
const pageWrapperClass = pageWrapper.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
class IndexPage extends React.Component {
  /** standard constructor. */
  constructor(props) {
    super(props)

    this.state = {
      loader: null,
      formSent: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  /** handleSubmit - Post to google spreadsheet. */
  componentDidMount() {
    const { form } = this.props
    form.validateFields()
  }

  /**
   * [handleSubmit description]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  handleSubmit(e) {
    e.preventDefault()
    const { form } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.setState({
          // Show loader and reset errors if any.
          loader: true,
        })

        let { name, email, comment } = values

        name = isUndefined(name) ? ' ' : name
        email = isUndefined(email) ? ' ' : email
        comment = isUndefined(comment) ? ' ' : comment

        // Mock some delay
        setTimeout(() => {
          fetch(
            `https://script.google.com/macros/s/AKfycbxapf3fZy2Jafdoc_-wB7FXa_OPI30iPcRZK8rNc8wyUQ52cEvT/exec?email=${email}&name=${name}&comment=${comment}&callback=?`,
            {
              method: 'GET',
              mode: 'no-cors',
            }
          )
            .then(response => {
              this.setState({
                loader: false,
                formSent: true,
              })
            })
            .catch(error => {
              this.setState({
                loader: false,
              })
            })
        }, 1500)
      }
    })
  }

  /** standard renderer */
  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form
    // Only show error after a field is touched.
    const nameError = isFieldTouched('name') && getFieldError('name')
    const emailError = isFieldTouched('email') && getFieldError('email')
    const commentError = isFieldTouched('comment') && getFieldError('comment')

    return (
      <div className={pageWrapperClass}>
        <h1>Contact Us</h1>
        {this.state.formSent === false && (
          <Form
            onSubmit={this.handleSubmit}
            className={`${formStyle} mask-p`}
            style={{ marginTop: 0 }}
          >
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
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Comment */}
            <FormItem
              validateStatus={commentError ? 'error' : ''}
              help={commentError || ''}
            >
              {getFieldDecorator('comment', {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{ validator: validateComment }],
              })(
                <TextArea
                  placeholder="Your questions / comments…"
                  autosize={{ minRows: 1, maxRows: 6 }}
                />
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
          <p className="home" style={{ marginTop: 10 }}>
            We recieved your message. We'll get back to you shortly.
          </p>
        )}
      </div>
    )
  }
}

IndexPage.propTypes = {
  form: PropTypes.object,
}

const WrappedForm = Form.create()(IndexPage)

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedForm
