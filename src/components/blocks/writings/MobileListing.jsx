// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import map from 'lodash/map'
import keys from 'lodash/keys'
import intersection from 'lodash/intersection'
import isUndefined from 'lodash/isUndefined'
import isNull from 'lodash/isNull'
import slice from 'lodash/slice'
import join from 'lodash/join'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'

import Collapse from 'antd/lib/collapse'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/collapse/style/css'

import Spin from 'antd/lib/spin'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/spin/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/button/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Panel } = Collapse

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& .ant-collapse-borderless': {
    background: 'transparent',

    '& .ant-collapse-item': {
      '& .ant-collapse-header': {
        padding: '10px 0px 0px 0px !important',
        marginBottom: '10px',

        '& h3': {
          marginTop: 2,
          marginBottom: 10,
          letterSpacing: '1.125px',
          color: '#C14737',
        },

        '& p': {
          color: '#241F20',
          marginBottom: '0px !important',

          '& span': {
            color: '#6C7FA6',
          },
        },
      },
    },

    '& .ant-collapse-item-active': {
      borderBottom: 'none !important',

      '& .ant-collapse-content': {
        borderTop: '1px solid #C14737',

        '& .ant-collapse-content-box': {
          padding: 0,
          paddingTop: 5,
        },
      },
    },
  },

  '& .ant-btn-primary, .ant-btn': {
    backgroundColor: '#ffffff !important',
    borderColor: '#ffffff !important',
    color: '#b43808 !important',

    '& a': {
      color: '#ffffff !important',
      borderBottom: 'unset',

      '&:hover': {
        color: '#ffffff !important',
        borderBottom: 'unset',
      },
      '&:visited': {
        textDecoration: 'none',
      },
      '&:link': {
        textDecoration: 'none',
      },
      '&:active': {
        textDecoration: 'none',
      },
    },

    '&:hover': {
      backgroundColor: '#ffffff',
      borderColor: '#b43808',

      '& a': {
        color: '#b43808 !important',
      },
    },

    '&:not(:last-child)': {
      marginRight: '10px',
    },

    '& span': {
      fontSize: '90%',
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** MobileListing */
class MobileListing extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      currentIndex: 0,
      show: 5,
      data: [],
      canSlice: true,
    }

    this.loadMore = this.loadMore.bind(this)
  }

  /** on mount */
  componentDidMount() {
    const { show, currentIndex } = this.state
    const { data } = this.props
    const nextIndex = currentIndex + show
    const canSlice = data.length > nextIndex
    const sliced = canSlice ? slice(data, currentIndex, nextIndex) : data

    this.setState({
      loading: false,
      data: sliced,
      currentIndex: nextIndex,
      canSlice,
    })
  }

  /** loadMore */
  loadMore() {
    this.setState({
      loadingMore: true,
    })

    // Mock some delay
    setTimeout(() => {
      const { currentIndex, show } = this.state
      const { data } = this.props
      const nextIndex = currentIndex + show
      const canSlice = data.length > nextIndex
      const sliced = canSlice
        ? slice(data, currentIndex, nextIndex)
        : slice(data, currentIndex)
      const newData = data.concat(sliced)
      console.log(newData)

      this.setState({
        loadingMore: false,
        data: newData,
        currentIndex: nextIndex,
        canSlice,
      })
    }, 700)
  }

  /** standard renderer */
  render() {
    const { data } = this.props
    const tagMap = {
      nvc: '/assets/homepage/events/nvc.png',
      rc: '/assets/homepage/events/rc.png',
    }
    const {
      data: xData,
      loading,
      loadingMore,
      showLoadingMore,
      canSlice,
    } = this.state

    const loadMore =
      canSlice && showLoadingMore ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          {loadingMore && <Spin />}
          {!loadingMore && <Button onClick={this.loadMore}>Load more</Button>}
        </div>
      ) : null

    return (
      <div className={join([style, 'mobile-only'], ' ')}>
        <Collapse accordion bordered={false} onChange={this.updateKey}>
          {map(xData, card => {
            const { route, humanDate, abstract, title, cover, tags } = card

            const whichImage = intersection(keys(tagMap), tags)[0]
            const thisImage = isUndefined(whichImage)
              ? null
              : tagMap[whichImage]

            return (
              <Panel
                header={
                  <div style={{ display: 'flex' }}>
                    {!isNull(thisImage) && (
                      <div>
                        <Image
                          src={thisImage}
                          rawWidth={900}
                          rawHeight={900}
                          style={{
                            height: 50,
                            width: 50,
                            border: 0,
                            background: 'transparent',
                          }}
                        />
                      </div>
                    )}
                    <div
                      style={{
                        paddingLeft: isNull(thisImage) ? 0 : 20,
                        width: '100%',
                      }}
                    >
                      <p>
                        {title}
                        <br />
                        <small style={{ fontSize: '90%' }}>
                          <i>{humanDate}</i>
                        </small>
                      </p>
                    </div>
                  </div>
                }
                key={route}
                showArrow={false}
              >
                <div>
                  <Image
                    src={cover}
                    rawWidth={1440}
                    rawHeight={900}
                    style={{
                      height: 'auto',
                      width: '100%',
                      border: 0,
                      background: 'transparent',
                    }}
                  />
                  <p>{abstract}</p>
                  <p style={{ marginBottom: 10 }}>
                    <Link to={`/${route}`}>Read more…</Link>
                  </p>
                </div>
              </Panel>
            )
          })}
        </Collapse>
        {loadMore}
      </div>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default MobileListing
