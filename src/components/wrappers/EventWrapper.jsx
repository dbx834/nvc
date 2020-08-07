// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import isNull from 'lodash/isNull'
import startsWith from 'lodash/startsWith'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import {
  // --------------- Basic
  UpdateTitle,
  GeneralMeta,
  // --------------- Twitter
  TwitterSummaryCard,
  // --------------- Open Graph
  OpenGraphSummary,
  // --------------- Schema.org JSON-LD
  WebpageSchema,
  BreadcrumbSchema,
  EventSchema,
} from '@bodhi-project/seo'

import Image from '@bodhi-project/components/lib/Image'
import ContainerDimensions from 'react-container-dimensions'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Layout from '../layout/Layout'
import PreviousNext from '../PreviousNext'
import Copy from '../Copy'
import StandardDiv from '../StandardDiv'

import NVCPracticeGroupRegistration from '../forms/NVCPracticeGroupRegistration'
import NVCWorkshopRegistration from '../forms/NVCWorkshopRegistration'
import RCPracticeGroupRegistration from '../forms/RCPracticeGroupRegistration'
import RCWorkshopRegistration from '../forms/RCWorkshopRegistration'
import RCWorkshopFeaturedRegistration from '../forms/RCWorkshopFeaturedRegistration'
import WorkshopRegistration from '../forms/WorkshopRegistration'

import inArray from '../../methods/inArray'
import withUrl from '../../methods/withUrl'

import data from '../../data/website.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyles = css({
  display: 'block',
  position: 'relative',

  '& #fb': {
    '& > div': {
      '& > div': {
        '& > span': {
          width: '96px !important',
          overflow: 'hidden !important',

          '& > iframe': {
            width: '96px !important',
            overflow: 'hidden !important',
          },
        },
      },
    },
  },

  '& .headings': {
    '@media(max-width: 992px)': {
      display: 'block',
    },

    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    marginBottom: 20,

    '& .banner': {
      flex: '7 1 0%',

      // Mobile
      '@media(max-width: 992px)': {
        maxWidth: 600,
        marginBottom: 10,
      },
    },

    '& .abstract': {
      flex: '12 1 0%',

      // Mobile
      '@media(max-width: 992px)': {},

      // Desktop
      '@media(min-width: 992px)': {
        paddingLeft: 15,
      },

      '& h3': {
        marginTop: 0,
        marginBottom: 5,
      },
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** EventWrapper */
const EventWrapper = props => {
  const { className, seoData, pageData, children } = props
  const {
    pageTitle,
    generalMetaData,
    twitterSummaryCardData,
    openGraphSummaryData,
    webpageSchemaData,
    breadcrumbSchemaData,
  } = seoData

  const {
    nakedPageSlug: route,
    eventSchemaData,
    showRegister,
    showPay,
    next,
    prev,
    whichSide,
    frontmatter,
    eventBanner,
    tags,
    fromTime,
    toTime,
    humanDate,
    pathContext,
  } = pageData

  const nextData = isNull(next)
    ? undefined
    : { nakedPageSlug: next.fields.route }
  const prevData = isNull(prev)
    ? undefined
    : { nakedPageSlug: prev.fields.route }

  const prevNext = isNull(next)
    ? isNull(prev)
      ? undefined
      : prev.fields.route
    : next.fields.route

  let title = 'More events'

  if (startsWith(prevNext, 'events/featured')) {
    title = 'More Workshops'
  } else if (startsWith(prevNext, 'events/nvc-practice-groups')) {
    title = 'More NVC Practice Groups'
  } else if (startsWith(prevNext, 'events/rc-practice-groups')) {
    title = 'More RC Practice Groups'
  }

  return (
    <Layout {...props} className={`${pageStyles} ${className}`}>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
      <UpdateTitle title={pageTitle} />
      <GeneralMeta data={generalMetaData} />
      <TwitterSummaryCard data={twitterSummaryCardData} />
      <OpenGraphSummary data={openGraphSummaryData} />
      <WebpageSchema data={webpageSchemaData} />
      <BreadcrumbSchema data={breadcrumbSchemaData} />
      <EventSchema data={eventSchemaData} />

      <StandardDiv leftLine={false}>
        <Copy>
          <article>
            <div className="notice-container">
              <header className="headings">
                <div className="banner">
                  <Image
                    src={eventBanner}
                    rawWidth={1440}
                    rawHeight={900}
                    loader="gradient"
                    style={{ border: 0 }}
                  />
                </div>
                <div className="abstract">
                  <h1
                    className="mask-h3"
                    style={{ marginBottom: 14, lineHeight: 1.2 }}
                  >
                    {frontmatter.title}
                  </h1>
                  <p style={{ marginTop: 0, marginBottom: 0 }}>
                    {(inArray(tags, 'rc') && inArray(tags, 'practice-group')) ||
                    (inArray(tags, 'nvc') &&
                      inArray(tags, 'practice-group')) ? (
                      <Fragment>
                        <strong>
                          {frontmatter.subTitle}
                          &nbsp; • &nbsp;
                          {fromTime}
                          &nbsp;–&nbsp;
                          {toTime}
                        </strong>
                        <br />
                        <br />
                      </Fragment>
                    ) : (
                      <Fragment>
                        {frontmatter.subTitle !== 'na' && (
                          <Fragment>
                            <strong>{frontmatter.subTitle}</strong>
                            <br />
                            <br />
                          </Fragment>
                        )}
                      </Fragment>
                    )}
                    <i>{humanDate}</i>
                    <br />
                    <i>
                      {fromTime}
                      &nbsp;-&nbsp;
                      {toTime}
                    </i>
                  </p>
                </div>
              </header>
              <hr />
              {children}
              <ContainerDimensions>
                {({ width, height }) => {
                  return (
                    <svg
                      width={width}
                      height={height}
                      viewBox={`0 0 ${width} ${height}`}
                      className="notice-overlay"
                    >
                      <rect
                        x="10"
                        y="10"
                        width={width - 20}
                        height={height - 20}
                        style={{
                          stroke: '#ff3434',
                          strokeWidth: 10,
                          fill: 'none',
                        }}
                        rx={20}
                        ry={20}
                      />
                      <line
                        id="line"
                        x1="17.5"
                        y1="17.5"
                        x2={width - 17.5}
                        y2={height - 17.5}
                        stroke="#ff3434"
                        strokeWidth="20"
                      />
                      <g>
                        <circle
                          cx={width / 2}
                          cy={height / 2}
                          r={80}
                          style={{ fill: '#ff3434' }}
                        />
                        <text
                          x="50%"
                          y="50%"
                          textAnchor="middle"
                          fill="#fff"
                          dy={-8}
                        >
                          <tspan dx={5}>Paused until</tspan>
                          <tspan dy={18} dx={-72}>
                            further notice...
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  )
                }}
              </ContainerDimensions>
            </div>
            <aside>
              <h1 className="mask-h4">{title}</h1>
              <PreviousNext prev={prevData} next={nextData} />
            </aside>
          </article>
        </Copy>
        <Copy>
          {!isNull(whichSide) && whichSide === 'rc-practice-group' && (
            <RCPracticeGroupRegistration
              data={frontmatter}
              pathContext={pathContext}
              showRegister={showRegister}
              showPay={showPay}
              tags={tags}
            />
          )}
          {!isNull(whichSide) && whichSide === 'nvc-practice-group' && (
            <NVCPracticeGroupRegistration
              data={frontmatter}
              pathContext={pathContext}
              showRegister={showRegister}
              showPay={showPay}
              tags={tags}
            />
          )}
          {!isNull(whichSide) && whichSide === 'rc-workshop' && (
            <RCWorkshopRegistration
              data={frontmatter}
              pathContext={pathContext}
              showRegister={showRegister}
              showPay={showPay}
              tags={tags}
            />
          )}
          {!isNull(whichSide) && whichSide === 'rc-workshop-featured' && (
            <RCWorkshopFeaturedRegistration
              data={frontmatter}
              pathContext={pathContext}
              showRegister={showRegister}
              showPay={showPay}
              tags={tags}
            />
          )}
          {!isNull(whichSide) && whichSide === 'nvc-workshop' && (
            <NVCWorkshopRegistration
              data={frontmatter}
              pathContext={pathContext}
              showRegister={showRegister}
              showPay={showPay}
              tags={tags}
            />
          )}
          {!isNull(whichSide) && whichSide === 'workshop' && (
            <WorkshopRegistration
              data={frontmatter}
              pathContext={pathContext}
              showRegister={showRegister}
              showPay={showPay}
              tags={tags}
            />
          )}
        </Copy>
      </StandardDiv>
    </Layout>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default EventWrapper
