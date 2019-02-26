// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from "prop-types";
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import intersection from 'lodash/intersection'
import keys from 'lodash/keys'
import filter from 'lodash/filter'
import uniq from 'lodash/uniq'
import kebabCase from 'lodash/kebabCase'
import toLower from 'lodash/toLower'
import map from 'lodash/map'
import isUndefined from 'lodash/isUndefined'
import reverse from 'lodash/reverse'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import StackGrid from 'react-stack-grid'

import Image from '@bodhi-project/components/lib/Image'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const filterF = filter
const { CheckableTag } = Tag
const loReverse = reverse

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const blockStyle = css({
  '& .ant-tag': {
    color: '#b43808 !important',
    background: '#fdf2ed !important',
    borderColor: '#b43808 !important',
  },

  '& .ant-tag-checkable-checked': {
    color: '#ffffff !important',
    background: '#b43808 !important',
    borderColor: '#ffffff !important',
  },

  '& div.oa-card': {
    '& a': {
      display: 'block',
      border: '2px solid transparent',
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      transition: 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',

      '&:hover': {
        border: '2px solid #C14737',
      },

      '& .oa-card-details': {
        color: '#241F20',
        padding: 6,
      },
    },
  },

  '& .oa-card': {
    '& .oa-card-details': {
      '& p:last-child': {
        '& span': {
          color: '#b43808',
          borderBottom: '1.625px solid transparent',
          transition: 'all .3s',

          '&:hover': {
            color: '#BA6B02',
            borderBottom: '1.625px solid #BA6B02',
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
      },
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
      filter: 'all',
    }

    this.applyFilter = this.applyFilter.bind(this)
  }

  /** applyFilter */
  applyFilter(f) {
    this.setState({ filter: f })
  }

  /** standard renderer */
  render() {
    const { data, fallback, reverse = false } = this.props
    const { cards, components, conf, categoryMap } = data
    const gutterWidth = !isUndefined(conf.gutterWidth)
      ? conf.gutterWidth
      : fallback.conf.gutterWidth
    const gutterHeight = !isUndefined(conf.gutterHeight)
      ? conf.gutterHeight
      : fallback.conf.gutterHeight
    const columnWidth = !isUndefined(conf.columnWidth)
      ? conf.columnWidth
      : fallback.conf.columnWidth

    let accessibleCategories = []
    let allCategories = []
    let filteredData = null
    const fx = this.state.filter

    filteredData = filterF(cards, card => {
      let displayThis = false
      map(card.tags, tag => {
        allCategories.push(tag)

        if (fx === 'all' && displayThis !== true) {
          displayThis = true
          accessibleCategories.push(tag)
        } else if (fx === tag && displayThis !== true) {
          displayThis = true
          accessibleCategories.push(tag)
        }
      })

      return displayThis
    })

    accessibleCategories = uniq(accessibleCategories)

    allCategories = uniq(allCategories)
    const sortedCategories = allCategories.sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    })

    if (reverse === true) {
      filteredData = loReverse(filteredData)
    }

    return (
      <div className={`${blockStyleClass} desktop-only`}>
        {fx === 'all' ? (
          <CheckableTag
            checked
            onClick={() => this.applyFilter('all')}
            style={{ marginBottom: 10 }}
          >
            All Events
          </CheckableTag>
        ) : (
          <Tag
            onClick={() => this.applyFilter('all')}
            style={{ marginBottom: 10 }}
          >
            All Events
          </Tag>
        )}
        {map(sortedCategories, category => {
          let displayAs = category
          const tagKey = kebabCase(toLower(displayAs))
          const getIx = intersection(keys(categoryMap), [displayAs])[0]
          displayAs = !isUndefined(getIx) ? categoryMap[getIx] : displayAs

          return (
            <Fragment key={tagKey}>
              {!isUndefined(getIx) ? (
                <Fragment>
                  {fx === tagKey ? (
                    <CheckableTag
                      checked
                      onClick={() => this.applyFilter(tagKey)}
                      style={{ marginBottom: 10 }}
                    >
                      {displayAs}
                    </CheckableTag>
                  ) : (
                    <Tag
                      onClick={() => this.applyFilter(tagKey)}
                      style={{ marginBottom: 10 }}
                    >
                      {displayAs}
                    </Tag>
                  )}
                </Fragment>
              ) : null}
            </Fragment>
          )
        })}

        <StackGrid
          columnWidth={columnWidth}
          duration={360}
          gutterWidth={gutterWidth}
          gutterHeight={gutterHeight}
          monitorImagesLoaded={true}
        >
          {map(filteredData, (card, index) => {
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

            return (
              <div className="oa-card" key={route}>
                <components.localLink to={`/${route}`}>
                  <div className="oa-card-figure">
                    <Image
                      src={cover}
                      rawWidth={conf.image.rawCoverWidth}
                      rawHeight={conf.image.rawCoverHeight}
                      style={{
                        border: 0,
                        background: 'transparent',
                      }}
                    />
                  </div>
                  <div className="oa-card-details">
                    <h3 className="mask-p">
                      <strong>{title}</strong>
                      <span className="stash">; </span>
                      <br />
                      <small style={{ fontSize: '90%' }}>
                        <i>
                          {humanDate}
                          <br />
                          <span className="stash">: </span>
                          {fromTime} - {toTime}
                        </i>
                      </small>
                    </h3>
                    <p>{abstract}</p>
                    <p style={{ marginBottom: 10, color: '#6C7FA6' }}>
                      <span>Read more…</span>
                    </p>
                  </div>
                </components.localLink>
              </div>
            )
          })}
        </StackGrid>
      </div>
    )
  }
}

Block.propTypes = {}

Block.defaultProps = {
  fallback: {
    conf: {
      gutterWidth: 20,
      gutterHeight: 12,
      image: {
        rawCoverWidth: 1440,
        rawCoverHeight: 900,
      },
      columnWidth: '30%',
      cards: 'even',
    },
  },
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Block
