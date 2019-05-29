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
const { TextArea } = Input
const FormItem = Form.Item

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageWrapper = css({
  '& .ant-form-item': {
    width: '100% !important',
  },

  '@media(min-width: 992px)': {
    '& .ant-form-item:nth-child(1)': {
      marginRight: '0px !important',
    },

    '& .ant-form-item:nth-child(2)': {
      marginLeft: '0px !important',
    },
  },
})
const pageWrapperClass = pageWrapper.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** IndexPage */
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

  /** componentDidMount - Disable submit button at the beginning. */
  componentDidMount() {
    const { form } = this.props
    form.validateFields()
  }

  /** handleSubmit - Post to google spreadsheet. */
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
            `https://script.google.com/macros/s/AKfycbx6xNPY__NC6jrneaGeH1NPLkjdrNSc3NMUV-oHAWnWln2WDWZL/exec?email=${email}&name=${name}&comment=${comment}&callback=?`,
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
    const emailError = isFieldTouched('email') && getFieldError('email')
    const nameError = isFieldTouched('name') && getFieldError('name')
    const commentError = isFieldTouched('comment') && getFieldError('comment')

    return (
      <div className={pageWrapperClass}>
        <p style={{ marginTop: 0 }}>
          If you'd like to receive updates about our programs, please sign up
          for our newsletter.
        </p>
        {this.state.formSent === false && (
          <Form
            onSubmit={this.handleSubmit}
            className={`${formStyle} mask-p`}
            style={{ marginTop: 0 }}
          >
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Name */}
            <FormItem validateStatus={nameError ? 'error' : ''} help="">
              {getFieldDecorator('name', {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{ validator: validateName }],
              })(<Input placeholder="Name" />)}
            </FormItem>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Email */}
            <FormItem validateStatus={emailError ? 'error' : ''} help="">
              {getFieldDecorator('email', {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{ validator: validateEmail }],
              })(<Input placeholder="Email" />)}
            </FormItem>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Comment */}
            <FormItem validateStatus={commentError ? 'error' : ''} help="">
              {getFieldDecorator('comment', {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{ validator: validateComment }],
              })(
                <TextArea
                  placeholder="What is your area of interest? What sort of information would you enjoy receiving?"
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
            Thanks! We've added your email to our list.
          </p>
        )}
      </div>
    )
  }
}

IndexPage.propTypes = {
  form: PropTypes.object,
}

const WrappedPage = Form.create()(IndexPage)

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedPage
