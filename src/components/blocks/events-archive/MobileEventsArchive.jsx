// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const blockStyle = css({
  '& .ant-list-item': {
    background: 'transparent',

    '& p': {
      color: 'inherit',
      marginBottom: '0px !important',
    },
  },
})
const blockStyleClass = blockStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Block */
class Block extends React.Component {
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
    const show = !isUndefined(this.props.data.show)
      ? this.props.data.show
      : this.props.fallback.show
    const nextIndex = this.state.currentIndex + show
    const canSlice = this.props.data.cards.length > nextIndex
    const sliced = canSlice
      ? slice(this.props.data.cards, this.state.currentIndex, nextIndex)
      : this.props.data.cards

    this.setState({
      loading: false,
      data: sliced,
      currentIndex: nextIndex,
      show,
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
      const nextIndex = currentIndex + show
      const canSlice = this.props.data.cards.length > nextIndex
      const sliced = canSlice
        ? slice(this.props.data.cards, this.state.currentIndex, nextIndex)
        : slice(this.props.data.cards, this.state.currentIndex)
      const data = this.state.data.concat(sliced)
      this.setState({
        loadingMore: false,
        data,
        currentIndex: nextIndex,
        canSlice,
      })
    }, 700)
  }

  /** standard renderer */
  render() {
    const { data } = this.props
    const { components, tagMap } = data
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
      <div
        className={`${blockStyleClass} block-pandora mobile-only`}
        style={{ ...this.props.style }}
      >
        <List
          itemLayout="horizontal"
          dataSource={xData}
          loadMore={loadMore}
          loading={loading}
          renderItem={card => {
            const {
              route,
              humanDate,
              elapsed,
              abstract,
              title,
              subTitle,
              cover,
              date,
              startDate,
              finishDate,
              fromTime,
              toTime,
              category,
              tags,
              type,
            } = card

            const whichImage = intersection(keys(tagMap), tags)[0]
            const thisImage = isUndefined(whichImage)
              ? null
              : tagMap[whichImage]

            return (
              <List.Item>
                <List.Item.Meta
                  description={
                    <components.localLink to={route}>
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
                          <p>
                            {title}
                            <br />
                            <small style={{ fontSize: '90%' }}>
                              <i>
                                {humanDate}; {fromTime} - {toTime}
                              </i>
                            </small>
                          </p>
                        </div>
                      </div>
                    </components.localLink>
                  }
                />
              </List.Item>
            )
          }}
        />
      </div>
    )
  }
}

Block.propTypes = {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Specific props
  show: PropTypes.number,
  data: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/no-unused-prop-types

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Generic props
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/no-unused-prop-types

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Fallback props
  fallback: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/no-unused-prop-types
}

Block.defaultProps = {
  fallback: {
    show: 5,
  },
  style: {},
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Block
