// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import keys from 'lodash/keys'
import intersection from 'lodash/intersection'
import isUndefined from 'lodash/isUndefined'
import isNull from 'lodash/isNull'
import slice from 'lodash/slice'
import filter from 'lodash/filter'
import startsWith from 'lodash/startsWith'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Section } from '@bodhi-project/semantic-webflow'
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from '@bodhi-project/components/lib/Image'
// import OutLink from "@bodhi-project/components/lib/OutLink";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import List from 'antd/lib/list'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/list/style/css'

import Spin from 'antd/lib/spin'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/spin/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/button/style/css'

import Select from 'antd/lib/select'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/select/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const m = moment
const { Option } = Select
const filterF = filter

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const blockStyle = css({
  padding: '14.625vh 0vh',

  '& .ant-list-item': {
    background: 'transparent',

    '& p': {
      color: 'inherit',
      marginBottom: '0px !important',
    },
  },

  '& .ant-select-selection': {
    backgroundColor: 'transparent',
    border: 'none',
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

    /** Calendar bounds -- allow only this and the next year in the dropdown */
    const thisYear = m().startOf('year')
    const nextYear = thisYear
      .clone()
      .add('1', 'years')
      .endOf('year')
    const thisYearS = thisYear.format('YYYY')
    const nextYearS = nextYear.format('YYYY')

    /** Month bound */
    const thisMonth = moment().format('MM')
    const thisMonthDisplay = moment().format('MMM')

    this.state = {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      currentIndex: 0,
      show: 5,
      data: [],
      filtered: [],
      canSlice: true,
      yearFilters: [thisYearS, nextYearS],
      yearFilter: thisYearS,
      monthFilters: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ],
      monthFiltersDisplay: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      monthFilter: thisMonth,
      monthFilterDisplay: thisMonthDisplay,
    }

    this.initData = this.initData.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.yearChanged = this.yearChanged.bind(this)
    this.monthChanged = this.monthChanged.bind(this)
  }

  /** on mount */
  componentDidMount() {
    this.initData()
  }

  /** initData */
  initData(resetIndex = false) {
    this.setState({
      loadingMore: true,
    })

    // Mock some delay
    setTimeout(() => {
      const { yearFilter, monthFilter } = this.state
      const show = !isUndefined(this.props.data.show)
        ? this.props.data.show
        : this.props.fallback.show
      const startIndex = resetIndex === true ? 0 : this.state.currentIndex
      const nextIndex = startIndex + show
      const filtered = filterF(this.props.data.cards, o =>
        startsWith(o.date, `${yearFilter}-${monthFilter}`)
      )
      const canSlice = filtered.length > nextIndex
      const sliced = canSlice
        ? slice(filtered, startIndex, nextIndex)
        : filtered

      this.setState({
        loadingMore: false,
        loading: false,
        data: sliced,
        currentIndex: nextIndex,
        show,
        canSlice,
        filtered,
      })
    }, 700)
  }

  /** loadMore */
  loadMore() {
    this.setState({
      loadingMore: true,
    })

    // Mock some delay
    setTimeout(() => {
      const { currentIndex, show, filtered } = this.state
      const nextIndex = currentIndex + show
      const canSlice = filtered.length > nextIndex
      const sliced = canSlice
        ? slice(filtered, this.state.currentIndex, nextIndex)
        : slice(filtered, this.state.currentIndex)
      const data = this.state.data.concat(sliced)
      this.setState({
        loadingMore: false,
        data,
        currentIndex: nextIndex,
        canSlice,
      })
    }, 700)
  }

  /** yearChanged */
  yearChanged(year) {
    this.setState({
      yearFilter: year,
    })
    this.initData(true)
  }

  /** monthChanged */
  monthChanged(month) {
    this.setState({
      monthFilter: month,
    })
    this.initData(true)
  }

  /** standard renderer */
  render() {
    const { data } = this.props
    const { components, tagMap } = data
    const { yearFilters, yearFilter } = this.state
    const { monthFilters, monthFiltersDisplay } = this.state
    const { monthFilterDisplay } = this.state
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
      <Section
        className={`${blockStyleClass} block-halley-alt mobile-only`}
        style={{ ...this.props.style }}
      >
        <div style={{ marginLeft: 'calc(100% - 148px)' }}>
          {/* ----------------------------------------- Year Filter */}
          <Select
            defaultValue={yearFilter}
            style={{ width: 75, marginRight: 5 }}
            onChange={this.yearChanged}
          >
            <Option value={yearFilters[0]}>{yearFilters[0]}</Option>
            <Option value={yearFilters[1]}>{yearFilters[1]}</Option>
          </Select>

          {/* ---------------------------------------- Month Filter */}
          <Select
            defaultValue={monthFilterDisplay}
            style={{ width: 68 }}
            onChange={this.monthChanged}
          >
            <Option value={monthFilters[0]}>{monthFiltersDisplay[0]}</Option>
            <Option value={monthFilters[1]}>{monthFiltersDisplay[1]}</Option>
            <Option value={monthFilters[2]}>{monthFiltersDisplay[2]}</Option>
            <Option value={monthFilters[3]}>{monthFiltersDisplay[3]}</Option>
            <Option value={monthFilters[4]}>{monthFiltersDisplay[4]}</Option>
            <Option value={monthFilters[5]}>{monthFiltersDisplay[5]}</Option>
            <Option value={monthFilters[6]}>{monthFiltersDisplay[6]}</Option>
            <Option value={monthFilters[7]}>{monthFiltersDisplay[7]}</Option>
            <Option value={monthFilters[8]}>{monthFiltersDisplay[8]}</Option>
            <Option value={monthFilters[9]}>{monthFiltersDisplay[9]}</Option>
            <Option value={monthFilters[10]}>{monthFiltersDisplay[10]}</Option>
            <Option value={monthFilters[11]}>{monthFiltersDisplay[11]}</Option>
          </Select>
        </div>

        {/* ---------------------------------------------- Events */}
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
                    <components.localLink to={`/${route}`}>
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
      </Section>
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
