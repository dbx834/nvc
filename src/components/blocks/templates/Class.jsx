// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Collapse from 'antd/lib/collapse'
import '@bodhi-project/antrd/lib/bookcode/3.13.0/collapse/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const { Panel } = Collapse

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const componentStyle = css({
  minHeight: '600px',
  height: 'calc(100vh - 144px)',
  position: 'relative',
  background: '#A6DAFF',
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Banner */
class Banner extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      current: 0,
    }

    this.update = this.update.bind(this)
  }

  /** update */
  update(current) {
    this.setState({
      current,
    })
  }

  /** standard renderer */
  render() {
    const { current } = this.state

    return (
      <div className={componentStyle}>
        <div
          className="hg-cover"
          style={{
            background: 'url(/coverBg.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            zIndex: 10,
            position: 'absolute',
            minHeight: '600px',
            height: 'calc(100vh - 144px)',
            width: '100%',
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            zIndex: 11,
            width: '38vw',
            top: 100,
            left: 100,
            position: 'absolute',
          }}
        >
          <Collapse defaultActiveKey={['1']} accordion bordered={false}>
            <Panel
              header={
                <div>
                  <h1 className="mask-h2">
                    <span>Modern Accessibility Services</span>
                  </h1>
                </div>
              }
              key="1"
              showArrow={false}
            >
              <p>
                <span className="hero">
                  Evaluate accessibility needs, determine priorities, and chart
                  a path to meet your goals…
                </span>
              </p>
              <ul className="mask-p">
                <li>
                  <span className="hero">Assess compliance needs</span>
                </li>
                <li>
                  <span className="hero">
                    Conduct accessibility gap analysis
                  </span>
                </li>
                <li>
                  <span className="hero">Identify accessibility issues</span>
                </li>
                <li>
                  <span className="hero">
                    Get recommendations on how to fix accessibility issues
                  </span>
                </li>
                <li>
                  <span className="hero">Chart a path to meet your goals</span>
                </li>
              </ul>
              <span className="left" />
            </Panel>
          </Collapse>
        </div>
      </div>
    )
  }
}

Banner.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
}

// --------------------------------------------------------------------- Export
export default Banner
