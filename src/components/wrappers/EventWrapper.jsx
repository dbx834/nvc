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
import { FacebookProvider, Like as FBLike } from 'react-facebook'
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

      '@media(max-width: 992px)': {
        marginBottom: 10,
      },
    },

    '& .abstract': {
      flex: '12 1 0%',
      paddingLeft: 15,

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
                  (inArray(tags, 'nvc') && inArray(tags, 'practice-group')) ? (
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
                <br />
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 99,
                      backgroundColor: '#f8f2e6',
                      zIndex: 10,
                      height: 20,
                      width: 'calc(100% - 96px)',
                    }}
                  />
                  <div style={{ maxWidth: 96 }} id="fb">
                    <FacebookProvider appId="218604115574634">
                      <FBLike
                        href={withUrl(route, data)}
                        colorScheme="dark"
                        showFaces
                        share
                      />
                    </FacebookProvider>
                  </div>
                </div>
              </div>
            </header>
            <hr />
            {children}
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
            />
          )}
          {!isNull(whichSide) && whichSide === 'nvc-practice-group' && (
            <NVCPracticeGroupRegistration
              data={frontmatter}
              pathContext={pathContext}
              showRegister={showRegister}
              showPay={showPay}
            />
          )}
          {!isNull(whichSide) && whichSide === 'rc-workshop' && (
            <RCWorkshopRegistration
              data={frontmatter}
              pathContext={pathContext}
              showRegister={showRegister}
              showPay={showPay}
            />
          )}
          {!isNull(whichSide) && whichSide === 'rc-workshop-featured' && (
            <RCWorkshopFeaturedRegistration
              data={frontmatter}
              pathContext={pathContext}
              showRegister={showRegister}
              showPay={showPay}
            />
          )}
          {!isNull(whichSide) && whichSide === 'nvc-workshop' && (
            <NVCWorkshopRegistration
              data={frontmatter}
              pathContext={pathContext}
              showRegister={showRegister}
              showPay={showPay}
            />
          )}
          {!isNull(whichSide) && whichSide === 'workshop' && (
            <WorkshopRegistration
              data={frontmatter}
              pathContext={pathContext}
              showRegister={showRegister}
              showPay={showPay}
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
