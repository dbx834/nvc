// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import intersection from 'lodash/intersection'
import keys from 'lodash/keys'
import filter from 'lodash/filter'
import trim from 'lodash/trim'
import replace from 'lodash/replace'
import lowerCase from 'lodash/lowerCase'
import split from 'lodash/split'
import uniq from 'lodash/uniq'
import last from 'lodash/last'
import kebabCase from 'lodash/kebabCase'
import toLower from 'lodash/toLower'
import map from 'lodash/map'
import isUndefined from 'lodash/isUndefined'
import join from 'lodash/join'
import noop from 'lodash/noop'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import StackGrid from 'react-stack-grid'

import Image from '@bodhi-project/components/lib/Image'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const filterF = filter
const { CheckableTag } = Tag

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
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
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopListing */
class DesktopListing extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    const { preFilter } = this.props
    const filterSelector = {
      'Nonviolent Communication': 'nvc',
      'Restorative Circles': 'rc',
      Testimonials: 'testimonials',
      Journal: 'journal',
    }
    let thisPreFilter = filterSelector[preFilter]
    thisPreFilter = isUndefined(thisPreFilter) ? 'all' : thisPreFilter

    this.state = {
      filter: thisPreFilter,
      alreadyRendered: false,
    }

    this.grid = undefined

    this.applyFilter = this.applyFilter.bind(this)
    this.reRender = this.reRender.bind(this)
  }

  /** applyFilter */
  applyFilter(f) {
    this.setState({ filter: f })
  }

  /** reRender */
  reRender() {
    const { alreadyRendered } = this.state
    if (alreadyRendered === false) {
      this.setState({ alreadyRendered: true })
      setTimeout(() => {
        this.grid.updateLayout()
        this.setState({ alreadyRendered: false })
      }, 50)
    }
  }

  /** standard renderer */
  render() {
    const { data } = this.props
    const { alreadyRendered } = this.state
    const fx = this.state.filter
    const categoryMap = {
      NVC: 'Nonviolent Communication',
      RC: 'Restorative Circles',
    }
    const columnWidth = '30%'
    let accessibleCategories = []
    let allCategories = []
    let filteredData = null

    filteredData = filterF(data, card => {
      let displayThis = false
      const cat = replace(lowerCase(split(card.category, '.')[1]), ' ', '-')

      allCategories.push(card.category)

      if (fx === 'all') {
        displayThis = true
        accessibleCategories.push(card.category)
      } else if (fx === cat) {
        displayThis = true
        accessibleCategories.push(card.category)
      }

      return displayThis
    })

    accessibleCategories = uniq(accessibleCategories)

    allCategories = uniq(allCategories)
    const sortedCategories = allCategories.sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    })

    return (
      <div className={join([style, 'desktop-only'], ' ')}>
        {fx === 'all' ? (
          <CheckableTag
            checked
            onClick={() => this.applyFilter('all')}
            style={{ marginBottom: 10 }}
          >
            All Posts
          </CheckableTag>
        ) : (
          <Tag
            onClick={() => this.applyFilter('all')}
            style={{ marginBottom: 10 }}
          >
            All Posts
          </Tag>
        )}
        {map(sortedCategories, category => {
          let displayAs = trim(last(split(category, '.')))
          const tagKey = kebabCase(toLower(displayAs))
          const getIx = intersection(keys(categoryMap), [displayAs])[0]
          displayAs = !isUndefined(getIx) ? categoryMap[getIx] : displayAs

          return (
            <Fragment key={tagKey}>
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
          )
        })}

        <StackGrid
          columnWidth={columnWidth}
          duration={360}
          gutterWidth={20}
          gutterHeight={21}
          monitorImagesLoaded={false}
          gridRef={grid => (this.grid = grid)}
          onLayout={alreadyRendered === false ? this.reRender : noop()}
        >
          {map(filteredData, datum => {
            const { route, abstract, title, cover, humanDate } = datum

            return (
              <div className="oa-card" key={route}>
                <Link to={`/${route}`}>
                  <div className="oa-card-figure">
                    <Image
                      src={cover}
                      rawWidth={1440}
                      rawHeight={900}
                      style={{
                        border: 0,
                        background: 'transparent',
                      }}
                    />
                  </div>
                  <div className="oa-card-details">
                    <p>
                      <strong>{title}</strong>
                      <br />
                      <small style={{ fontSize: '90%' }}>
                        <i>{humanDate}</i>
                      </small>
                    </p>
                    <p>{abstract}</p>
                    <p style={{ marginBottom: 0, color: '#6C7FA6' }}>
                      <span>Read more...</span>
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </StackGrid>
      </div>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default DesktopListing
