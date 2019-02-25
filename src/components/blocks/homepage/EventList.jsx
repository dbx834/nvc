// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

import keys from 'lodash/keys'
import intersection from 'lodash/intersection'
import isUndefined from 'lodash/isUndefined'
import isNull from 'lodash/isNull'
import slice from 'lodash/slice'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'

import List from 'antd/lib/list'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/list/style/css'

import Spin from 'antd/lib/spin'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/spin/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/button/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& .ant-list-item': {
    marginTop: -5,

    '& p': {
      color: 'inherit',
      marginBottom: '0px !important',
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** EventList */
class EventList extends React.Component {
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
      <List
        className={style}
        itemLayout="horizontal"
        dataSource={xData}
        loadMore={loadMore}
        loading={loading}
        locale={{
          emptyText: (
            <p style={{ marginBottom: 0, color: '#989898' }}>
              <small>
                <i>Please check back later.</i>
              </small>
            </p>
          ),
        }}
        renderItem={card => {
          const { route, humanDate, title, fromTime, toTime, tags } = card

          const whichImage = intersection(keys(tagMap), tags)[0]
          const thisImage = isUndefined(whichImage) ? null : tagMap[whichImage]

          return (
            <List.Item>
              <List.Item.Meta
                description={
                  <Link to={`/${route}`}>
                    <div style={{ display: 'flex' }}>
                      {!isNull(thisImage) && (
                        <div>
                          <Image
                            src={thisImage}
                            rawWidth={900}
                            rawHeight={900}
                            style={{
                              height: 30,
                              width: 30,
                              border: 0,
                              background: 'transparent',
                            }}
                          />
                        </div>
                      )}
                      <div
                        style={{
                          paddingLeft: isNull(thisImage) ? 0 : 5,
                          width: '100%',
                        }}
                      >
                        <h3 className="mask-p" style={{ marginBottom: 0 }}>
                          {title}
                          <span style={{ display: 'none' }}>&nbsp;-&nbsp;</span>
                          <br />
                          <small style={{ fontSize: '90%' }}>
                            <i>
                              {humanDate}; {fromTime} - {toTime}
                            </i>
                          </small>
                        </h3>
                      </div>
                    </div>
                  </Link>
                }
              />
            </List.Item>
          )
        }}
      />
    )
  }
}

// EventList.propTypes = {}

// --------------------------------------------------------------------- Export
export default EventList
