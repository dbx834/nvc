// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

import isNull from 'lodash/isNull'
import isUndefined from 'lodash/isUndefined'
import indexOf from 'lodash/indexOf'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'

import Tooltip from 'antd/lib/tooltip'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/tooltip/style/css'

import Form from 'antd/lib/form'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/form/style/css'

import Select from 'antd/lib/select'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/select/style/css'

import Input from 'antd/lib/input'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/input/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/button/style/css'

import Radio from 'antd/lib/radio'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/radio/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'
import {
  hasErrors,
  validateEmail,
  validateName,
  validateMobile,
  validateCountry,
  validateCurrentLocation,
  validateWhatDrawsYou,
  validateComment,
  validateExperience,
} from '../../methods/formHelpers'
import { formStyle } from '../../methods/defaultFormStyles'
import domestic from '../../assets/domestic.png'
import international from '../../assets/international.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const FormItem = Form.Item
const { Option } = Select
const { TextArea } = Input
const RadioGroup = Radio.Group
const radioStyle = {
  display: 'block',
  height: '24px',
  lineHeight: '24px',
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------ Local Functions
// ----------------------------------------------------------------------------
/** inArray */
const inArray = (array, value) => {
  let rx = false
  if (indexOf(array, value) >= 0) {
    rx = true
  }
  return rx
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  paddingBottom: '4rem',
})
const styleClass = style.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** RCPracticeGroupSide */
class RCPracticeGroupSide extends React.Component {
  /** standard constructor */
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

        let {
          name,
          email,
          event,
          mobile,
          country,
          whatDrawsYou,
          currentLocation,
          comment,
          experience,
          journey,
          wouldLikeInfo,
        } = values

        name = isUndefined(name) ? ' ' : name
        email = isUndefined(email) ? ' ' : email
        event = isUndefined(event) ? ' ' : event
        mobile = isUndefined(mobile) ? ' ' : mobile
        country = isUndefined(country) ? ' ' : country
        whatDrawsYou = isUndefined(whatDrawsYou) ? ' ' : whatDrawsYou
        currentLocation = isUndefined(currentLocation) ? ' ' : currentLocation
        comment = isUndefined(comment) ? ' ' : comment
        experience = isUndefined(experience) ? ' ' : experience
        journey = isUndefined(journey) ? ' ' : journey
        wouldLikeInfo = isUndefined(wouldLikeInfo) ? ' ' : wouldLikeInfo
        const note = ' '

        setTimeout(() => {
          // Mock some delay
          fetch(
            `https://script.google.com/macros/s/AKfycbxe5KaEdHtLH5JVpf-yntF5LZYAszQTwHHQ4tEjvBT4DyykpRtZ/exec?name=${name}&email=${email}&event=${event}&mobile=${mobile}&country=${country}&whatDrawsYou=${whatDrawsYou}&comment=${comment}&currentLocation=${currentLocation}&experience=${experience}&journey=${journey}&wouldLikeInfo=${wouldLikeInfo}&note=${note}&callback=?`,
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
    const { data, pathContext } = this.props
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form
    // Only show error after a field is touched.
    const nameError = isFieldTouched('name') && getFieldError('name')
    const emailError = isFieldTouched('email') && getFieldError('email')
    const eventError = isFieldTouched('event') && getFieldError('event')
    const countryError = isFieldTouched('country') && getFieldError('country')
    const commentError = isFieldTouched('comment') && getFieldError('comment')
    const whatDrawsYouError =
      isFieldTouched('whatDrawsYou') && getFieldError('whatDrawsYou')
    const mobileError = isFieldTouched('mobile') && getFieldError('mobile')
    const currentLocationError =
      isFieldTouched('currentLocation') && getFieldError('currentLocation')
    const experienceError =
      isFieldTouched('experience') && getFieldError('experience')
    const journeyError = isFieldTouched('journey') && getFieldError('journey')
    const wouldLikeInfoError =
      isFieldTouched('wouldLikeInfo') && getFieldError('wouldLikeInfo')

    const { date, startDate } = data
    const { humanDate } = pathContext

    const key = `${data.title} @ ${humanDate}`
    const todayInt = parseInt(moment().format('YYYYMMDD'), 10)
    const begins = moment(!isNull(startDate) ? startDate : date)
    const beginDateInt = parseInt(begins.format('YYYYMMDD'), 10)
    let showForm = null

    if (inArray(data.tags, 'manualOpen')) {
      showForm = true
    } else {
      if (todayInt > beginDateInt) {
        showForm = false
      } else if (todayInt < beginDateInt) {
        showForm = true
      } else {
        if (inArray(data.tags, 'sameday')) {
          showForm = true
        } else {
          showForm = false
        }
      }
    }

    return (
      <div className={styleClass}>
        {showForm === false && (
          <Fragment>
            <h1 className="mask-h4">
              <span>Registration Closed</span>
            </h1>
          </Fragment>
        )}
        {showForm === true && (
          <Fragment>
            <h1 className="mask-h4">
              <span>FEE</span>
            </h1>
            <p style={{ marginTop: 10, marginBottom: 10 }}>
              <strong>
                <i>{data.cost}</i>
              </strong>
            </p>
            {this.props.showPay === true && (
              <Fragment>
                <br />
                <p>
                  Please make your payment to confirm your seat.
                  <br />
                  <br />
                  Select the Domestic option for Indian bank/credit cards, or
                  the International option for foreign bank/credit cards.
                </p>
                <Link
                  to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
                  style={{ marginRight: 17, borderBottom: 0 }}
                >
                  <Tooltip title="Indian Card">
                    <div style={{ display: 'inline-block' }}>
                      <Image
                        src={domestic}
                        rawHeight={450}
                        rawWidth={450}
                        className="icon"
                        style={{
                          height: 65,
                          width: 65,
                          display: 'inline-block',
                          background: 'transparent',
                          border: 'unset',
                        }}
                      />
                    </div>
                  </Tooltip>
                </Link>
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_blank"
                  style={{ display: 'inline-block' }}
                  className="hover"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="WFXM5RNDGBXL4"
                  />
                  <Tooltip title="International Card">
                    <input
                      type="image"
                      src={international}
                      border="0"
                      name="submit"
                      alt="PayPal – The safer, easier way to pay online!"
                      style={{
                        height: 65,
                        width: 65,
                      }}
                    />
                  </Tooltip>
                  <img
                    alt=""
                    border="0"
                    src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </Fragment>
            )}
            {this.props.showRegister === true && (
              <Fragment>
                <br />
                <br />
                <br />
                <br />
                <hr />
                <h1 className="mask-h4">
                  <span>Register</span>
                </h1>
                {this.state.formSent === false ? (
                  <p style={{ marginTop: 10 }}>
                    You are about to register for {data.title} on {humanDate}.
                  </p>
                ) : (
                  <p style={{ marginTop: 10 }}>
                    You registered for {data.title} on {humanDate}.
                  </p>
                )}
                {this.state.formSent === false && (
                  <Form
                    onSubmit={this.handleSubmit}
                    className={`${formStyle} mask-p`}
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
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile */}
                    <FormItem
                      validateStatus={mobileError ? 'error' : ''}
                      help={mobileError || ''}
                    >
                      {getFieldDecorator('mobile', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateMobile }],
                      })(<Input placeholder="Mobile / WhatsApp" />)}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Country Selection */}
                    <FormItem
                      validateStatus={countryError ? 'error' : ''}
                      help={countryError || ''}
                    >
                      {getFieldDecorator('country', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateCountry }],
                      })(
                        <Input placeholder="What's your country of origin?" />
                      )}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Location */}
                    <FormItem
                      validateStatus={currentLocationError ? 'error' : ''}
                      help={currentLocationError || ''}
                    >
                      {getFieldDecorator('currentLocation', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateCurrentLocation }],
                      })(
                        <Input placeholder="Where are you living presently?" />
                      )}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ What Draws You */}
                    <FormItem
                      validateStatus={whatDrawsYouError ? 'error' : ''}
                      help={whatDrawsYouError || ''}
                    >
                      {getFieldDecorator('whatDrawsYou', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateWhatDrawsYou }],
                      })(
                        <TextArea
                          placeholder="What draws you to this workshop?"
                          autosize={{ minRows: 3, maxRows: 5 }}
                        />
                      )}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Experience Level */}
                    <span style={{ marginBottom: 8, display: 'block' }}>
                      Do you have any previous experience with NVC and/or RC (or
                      Restorative Justice)?
                    </span>
                    <FormItem
                      validateStatus={experienceError ? 'error' : ''}
                      help={experienceError || ''}
                    >
                      {getFieldDecorator('experience', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateExperience }],
                      })(
                        <RadioGroup>
                          <Radio
                            style={radioStyle}
                            value="Beginner (0-5 days of NVC/RC/RJ training)"
                          >
                            Beginner (0-5 days of NVC/RC/RJ training)
                          </Radio>
                          <Radio
                            style={radioStyle}
                            value="Intermediate (5-10 days of NVC/RC/RJ training)"
                          >
                            Intermediate (5-10 days of NVC/RC/RJ training)
                          </Radio>
                          <Radio
                            style={radioStyle}
                            value="Advanced (over 10 days of NVC/RC/RJ training)"
                          >
                            Advanced (over 10 days of NVC/RC/RJ training)
                          </Radio>
                          <Radio
                            style={radioStyle}
                            value="NVC Certification Candidate"
                          >
                            NVC Certification Candidate
                          </Radio>
                          <Radio style={radioStyle} value="NVC Trainer">
                            NVC Trainer
                          </Radio>
                        </RadioGroup>
                      )}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Journey */}
                    <FormItem
                      validateStatus={journeyError ? 'error' : ''}
                      help={journeyError || ''}
                    >
                      {getFieldDecorator('journey', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateComment }],
                      })(
                        <TextArea
                          placeholder="Please share a few sentences about your NVC and/or RC journey."
                          autosize={{ minRows: 3, maxRows: 5 }}
                        />
                      )}
                    </FormItem>

                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ More Info. */}
                    <span style={{ marginBottom: 8, display: 'block' }}>
                      Would you be like to receive information about future NVC
                      and/or RC events?
                    </span>
                    <FormItem
                      validateStatus={wouldLikeInfoError ? 'error' : ''}
                      help={wouldLikeInfoError || ''}
                    >
                      {getFieldDecorator('wouldLikeInfo', {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{ validator: validateExperience }],
                      })(
                        <RadioGroup>
                          <Radio
                            style={radioStyle}
                            value="Yes, I'd like to receive information every now and then."
                          >
                            Yes, I'd like to receive information every now and
                            then.
                          </Radio>
                          <Radio
                            style={radioStyle}
                            value="No, I'd not like to receive information."
                          >
                            No, I'd not like to receive information.
                          </Radio>
                        </RadioGroup>
                      )}
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
                          placeholder="Any other comments / questions?"
                          autosize={{ minRows: 3, maxRows: 5 }}
                        />
                      )}
                    </FormItem>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Event Selection */}
                    <div style={{ display: 'none' }}>
                      <FormItem
                        validateStatus={eventError ? 'error' : ''}
                        help={eventError || ''}
                      >
                        {getFieldDecorator('event', {
                          initialValue: key,
                          rules: [
                            {
                              required: true,
                              message:
                                'Please select an event from the dropdown...',
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
                          </Select>
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
                  <p className="home" style={{ marginTop: 10 }}>
                    Thank you for registering! We'll get back to you shortly.
                  </p>
                )}
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    )
  }
}

RCPracticeGroupSide.propTypes = {
  form: PropTypes.object,
}

const WrappedComponent = Form.create()(RCPracticeGroupSide)

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default WrappedComponent
