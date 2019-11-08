// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from "prop-types";
import { css } from 'glamor'
import moment from 'moment'
import 'moment/locale/en-gb'

import indexOf from 'lodash/indexOf'
import keys from 'lodash/keys'
import isNull from 'lodash/isNull'
import filter from 'lodash/filter'
import isUndefined from 'lodash/isUndefined'
import map from 'lodash/map'
import intersection from 'lodash/intersection'
import kebabCase from 'lodash/kebabCase'
import toLower from 'lodash/toLower'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'

import LocaleProvider from 'antd/lib/locale-provider'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/locale-provider/style/css'

import Calendar from 'antd/lib/calendar'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/calendar/style/css'

import Popover from 'antd/lib/popover'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/popover/style/css'

import en_GB from 'antd/lib/locale-provider/en_GB'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const enGB = en_GB
// const { CheckableTag } = Tag;
const filterF = filter
const m = moment
const { CheckableTag } = Tag

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** inArray */
const inArray = (array, value) => {
  let rx = false
  if (indexOf(array, value) >= 0) {
    rx = true
  }
  return rx
}

/** parseQueryString */
const getClass = (calMonth, thisMonth, todayInt, beginDateInt, thisDate) => {
  let classNames = 'date-block'

  if (calMonth === thisMonth) {
    classNames += ' this-month'
  } else {
    classNames += ' that-month'
  }

  if (!isUndefined(todayInt) && !isUndefined(beginDateInt)) {
    if (todayInt > beginDateInt) {
      classNames += ' past-event'
    } else if (todayInt < beginDateInt) {
      classNames += ' planned-event'
    } else {
      classNames += ' happening-event'
    }

    if (!isUndefined(thisDate)) {
      if (todayInt === thisDate) {
        classNames += ' today'
      }
    }
  }

  return classNames
}

/** popContent */
const popContent = (standardData, components, conf) => {
  const {
    title,
    humanDate,
    fromTime,
    toTime,
    abstract,
    route,
    elapsed,
  } = standardData

  return (
    <div
      style={{ maxWidth: 300, padding: '0.5em' }}
      className="phoebe-popcontent"
    >
      <p>
        <strong>{title}</strong>
        <br />
        <small style={{ fontSize: '90%' }}>
          <i>
            {humanDate}
            <br />
            {fromTime} - {toTime}
          </i>
        </small>
      </p>
      {!isNull(abstract) && <p>{abstract}</p>}
      <p>
        <components.localLink to={`/${route}`}>
          Read more...
        </components.localLink>
      </p>
    </div>
  )
}

/** makeFrag */
const makeFrag = (
  { record, todayInt, thisDate, selectedMonth, thisMonth, day, multiDay },
  components,
  conf,
  tagMap,
  nullTag
) => {
  const { tags, route, beginDateInt } = record
  const classNames = getClass(
    selectedMonth,
    thisMonth,
    todayInt,
    beginDateInt,
    thisDate
  )
  const content = popContent(record, components, conf)
  const whichImage = intersection(keys(tagMap), tags)[0]
  let thisImage = isUndefined(whichImage) ? null : tagMap[whichImage]
  thisImage = isNull(thisImage) ? nullTag : thisImage

  const frag = (
    <div className={classNames}>
      <Popover content={content} title={false}>
        <components.localLink to={`/${route}`}>
          {day}
          <br />
          {!isNull(thisImage) && (
            <Image
              src={thisImage}
              rawHeight={450}
              rawWidth={450}
              className="icon"
              style={{
                height: 28,
                width: 28,
                position: 'absolute',
                background: 'transparent',
                border: 0,
                right: 31,
                top: 31,
                zIndex: 2,
              }}
            />
          )}
          {multiDay === true && (
            <Image
              src={conf.multiDay.start}
              rawHeight={450}
              rawWidth={450}
              className="icon"
              style={{
                height: '100%',
                width: 'auto',
                position: 'absolute',
                background: 'transparent',
                border: 0,
                right: 0,
                top: 0,
                zIndex: 1,
              }}
            />
          )}
        </components.localLink>
      </Popover>
    </div>
  )

  return frag
}

/** makeMultiFrag */
const makeMultiFrag = (
  { record, todayInt, thisDate, selectedMonth, thisMonth, day, multiSpan },
  components,
  conf,
  tagMap,
  nullTag
) => {
  const { route, beginDateInt } = record
  const classNames = getClass(
    selectedMonth,
    thisMonth,
    todayInt,
    beginDateInt,
    thisDate
  )
  const content = popContent(record, components, conf, tagMap, nullTag)

  const frag = (
    <div className={classNames}>
      <Popover content={content} title={false}>
        <components.localLink to={`/${route}`}>
          {day}
          <br />
          {multiSpan === 2 && (
            <Image
              src={conf.multiDay.middle}
              rawHeight={450}
              rawWidth={450}
              className="icon"
              style={{
                height: '100%',
                width: 'auto',
                position: 'absolute',
                background: 'transparent',
                border: 0,
                right: 0,
                top: 0,
                zIndex: 1,
              }}
            />
          )}
          {multiSpan === 1 && (
            <Image
              src={conf.multiDay.end}
              rawHeight={450}
              rawWidth={450}
              className="icon"
              style={{
                height: '100%',
                width: 'auto',
                position: 'absolute',
                background: 'transparent',
                border: 0,
                right: 0,
                top: 0,
                zIndex: 1,
              }}
            />
          )}
        </components.localLink>
      </Popover>
    </div>
  )

  return frag
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const blockStyle = css({
  '& h1, h2': {
    fontWeight: '200 !important',
  },

  '& h2': {
    fontStyle: 'italic',
  },
})
const blockStyleClass = blockStyle.toString()

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Default style
const defaultStyles = css({
  position: 'relative',

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

  '& .ant-fullcalendar-fullscreen': {
    '& .ant-fullcalendar-header': {
      width: 90 * 7,
      padding: '11px 0px',
    },

    '& .ant-fullcalendar-year-select': {
      '& .ant-select-selection': {
        fontSize: '80%',
        backgroundColor: 'transparent',
        border: 'none',
      },
    },

    '& .ant-fullcalendar-month-select': {
      '& .ant-select-selection': {
        fontSize: '80%',
        backgroundColor: 'transparent',
        border: 'none',
      },
    },

    '& .ant-radio-group': {
      display: 'none',
    },
  },

  '& .ant-fullcalendar': {
    '& .ant-fullcalendar-today': {
      '& div.date-block': {
        backgroundColor: '#fff0b4 !important',
        color: '#B43808',
      },
    },

    '& .ant-fullcalendar-calendar-body': {
      padding: 0,
      width: '100%',
      maxWidth: '100%',

      '& table': {
        '& thead': {
          borderTop: '1px solid #4a4a4a',
          borderBottom: '1px solid #4a4a4a',

          '& .ant-fullcalendar-column-header': {
            textAlign: 'left',
            paddingTop: 6,
            paddingBottom: 6,
            '& span': {
              fontWeight: 700,
              fontStyle: 'italic',
            },
          },
        },
      },
    },

    '& table': {
      width: 'unset',
      maxWidth: 'unset',
    },

    '& tbody': {
      '& .ant-fullcalendar-cell': {
        position: 'relative',
        width: 90,
        height: 90,
      },

      '& div.date-block': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 89,
        height: 89,
        WebkitTransition: 'all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',
        transition: 'all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',

        '&:hover': {
          backgroundColor: '#FFDA9A',
        },

        '& > span': {
          display: 'block',
          width: 88,
          height: 89,
        },

        '& .ant-badge': {
          fontFamily: 'inherit',
          fontSize: 'inherit',
          '& .ant-badge-dot': {
            top: 4,
            height: 8,
            width: 8,
            transform: 'translateX(-10%)',
          },
        },

        '& a': {
          display: 'block',
          height: 89,
          width: 89,
          color: 'inherit',

          '&:hover': {
            color: 'inherit',
            borderBottom: '1.625px solid transparent',
          },
        },
      },

      '& div.this-month': {
        backgroundColor: '#fff5cd',
      },

      '& div.that-month': {
        backgroundColor: '#F6F4FE',
      },

      '& tr': {
        '& td': {
          '& div.date-block': {
            backgroundImage:
              'linear-gradient(to right, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%), linear-gradient(to bottom, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)',
            backgroundPosition: 'bottom, right',
            backgroundSize: '4.45px 1px, 1px 4.45px',
            backgroundRepeat: 'repeat-x, repeat-y',
          },
        },

        '& td:last-child': {
          '& div.date-block': {
            backgroundImage:
              'linear-gradient(to right, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)',
            backgroundPosition: 'bottom',
            backgroundSize: '4.45px 1px',
            backgroundRepeat: 'repeat-x',
          },
        },
      },

      '& tr:last-child': {
        '& td': {
          '& div.date-block': {
            backgroundImage:
              'linear-gradient(to bottom, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)',
            backgroundPosition: 'right',
            backgroundSize: '1px 4.45px',
            backgroundRepeat: 'repeat-y',
          },
        },

        '& td:last-child': {
          '& div.date-block': {
            backgroundImage: 'none',
          },
        },
      },
    },
  }, // B43808

  '& .ant-btn': {
    fontWeight: 700,
    fontStyle: 'italic',
    borderRadius: 0,
    backgroundColor: '#FFFFFF',
    borderColor: '#B43808',
    color: '#B43808 !important',
    height: 'auto',
    transition: 'all 200ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    '&:not(:last-child)': {
      marginRight: '10px',
    },

    '&:hover': {
      backgroundColor: '#B43808 !important',
      color: '#FFFFFF !important',
      borderColor: 'transparent',
      transform: 'scale(1.1)',
    },

    '& span': {
      fontSize: '90%',
    },
  },

  '& .ant-btn-primary': {
    backgroundColor: '#B43808',
    color: '#FFFFFF !important',
    borderColor: 'transparent',

    '&:hover': {
      backgroundColor: '#B43808 !important',
      transform: 'scale(1.05)',
    },
  },

  '& .ant-table': {
    '& .ant-table-thead': {
      display: 'none',
      // "& th": {
      //   backgroundColor: "#fff0b4",
      // },
    },
  },

  '& .ant-pagination-next': {
    marginBottom: '0px !important',
  },
})
const defaultStyle = defaultStyles.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Block */
class Block extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      currentMonth: null,
      filter: 'all',
    }

    this.onChange = this.onChange.bind(this)
    this.applyFilter = this.applyFilter.bind(this)
  }

  /** logs date */
  onChange(value) {
    this.setState({ currentMonth: value })
  }

  /** applyFilter */
  applyFilter(f) {
    this.setState({ filter: f })
  }

  /** standard renderer */
  render() {
    /** Calendar bounds -- allow only this and the next year in the dropdown */
    const thisYear = m().startOf('year')
    const nextYear = thisYear
      .clone()
      .add('1', 'years')
      .endOf('year')

    /** This month will be specially highlighted */
    const selectedMonth = moment().format('M')

    /** Variables to track multi-day events */
    let multiDay = false
    let multiSpan = 0
    let multiDayEvent = {}

    const { data } = this.props
    const { events, components, conf, tagMap, nullTag, categoryMap } = data

    /** We will be able to filter the calendar by tags, declaring variables to track that */
    let uniqueTags = []
    map(events, event => {
      map(event.tags, tag => {
        if (!inArray(uniqueTags, tag)) {
          uniqueTags.push(tag)
        }
      })
    })
    uniqueTags = intersection(keys(categoryMap), uniqueTags)

    const fx = this.state.filter

    /** renders each date */
    const dateFullCellRender = value => {
      const day = value.format('D')
      const thisMonth = value.format('M')
      const thisDate = parseInt(value.format('YYYYMMDD'), 10)
      const todayInt = parseInt(moment().format('YYYYMMDD'), 10)
      const classNames = getClass(selectedMonth, thisMonth)
      let frag = <div className={classNames}>{day}</div>
      let record = null

      if (multiDay === true) {
        record = multiDayEvent

        frag = makeMultiFrag(
          {
            record,
            todayInt,
            thisDate,
            selectedMonth,
            thisMonth,
            day,
            multiSpan,
          },
          components,
          conf,
          tagMap,
          nullTag
        )

        multiSpan -= 1

        if (multiSpan === 0) {
          multiDay = false
          multiDayEvent = {}
          multiDay = false
        }
      } else if (!isNull(events)) {
        record = filterF(events, { beginDateInt: thisDate })
        ;[record] = record

        if (!isUndefined(record)) {
          let displayThis = false

          if (fx === 'all') {
            displayThis = true
          } else {
            if (inArray(record.tags, fx)) {
              displayThis = true
            }
          }

          if (displayThis === true) {
            const { diff } = record

            if (diff >= 1) {
              multiDay = true
              multiSpan = diff
              multiDayEvent = record
            }

            frag = makeFrag(
              {
                record,
                todayInt,
                thisDate,
                selectedMonth,
                thisMonth,
                day,
                multiDay,
              },
              components,
              conf,
              tagMap,
              nullTag
            )
          }
        }
      }

      return frag
    }

    return (
      <div className={`${blockStyleClass} desktop-only`}>
        <LocaleProvider locale={enGB}>
          <div className={defaultStyle}>
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
            {map(uniqueTags, category => {
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
            <Calendar
              dateFullCellRender={dateFullCellRender}
              onSelect={this.onSelect}
              onPanelChange={this.onChange}
              defaultValue={this.state.selectedDate}
              validRange={[thisYear, nextYear]}
            />
          </div>
        </LocaleProvider>
      </div>
    )
  }
}

Block.propTypes = {}

Block.defaultProps = {
  givenTags: [],
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Block
