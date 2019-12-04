// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import isNull from 'lodash/isNull'
import kebabCase from 'lodash/kebabCase'

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
  BlogPostSchema,
} from '@bodhi-project/seo'

import Image from '@bodhi-project/components/lib/Image'

import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'
import Layout from '../layout/Layout'
import PreviousNext from '../PreviousNext'

import Copy from '../Copy'
import StandardDiv from '../StandardDiv'

import Block1 from '../blocks/writings/Block1'
import Block2 from '../blocks/writings/Block2'
import Block3 from '../blocks/writings/Block3'
import Block4 from '../blocks/writings/Block4'
import Block5 from '../blocks/writings/Block5'
import Block6 from '../blocks/writings/Block6'
import Block7 from '../blocks/writings/Block7'

import data from '../../data/website.json'

import seoHelper from '../../methods/seoHelper'
import withUrl from '../../methods/withUrl'

import DisqusComments from '../DisqusComments'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
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

      '@media(min-width: 992px)': {
        paddingLeft: 15,
      },

      '& h3': {
        marginTop: 0,
        marginBottom: 5,
      },
    },
  },
})
const pageStyles = pageStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** BlogPostWrapper */
const BlogPostWrapper = ({ pageData, className, children, ...props }) => {
  const {
    nakedPageSlug: route,
    prev,
    next,
    frontmatter,
    catString,
    dateStr,
    when,
    blogPageSchemaData,
  } = pageData

  const seoData = seoHelper(pageData)

  const {
    pageTitle,
    generalMetaData,
    twitterSummaryCardData,
    openGraphSummaryData,
    webpageSchemaData,
    breadcrumbSchemaData,
  } = seoData

  const randomBlock = Math.floor(Math.random() * 7) + 1

  const nextData = isNull(next)
    ? undefined
    : { nakedPageSlug: next.fields.route }
  const prevData = isNull(prev)
    ? undefined
    : { nakedPageSlug: prev.fields.route }

  return (
    <Layout {...props} className={`${pageStyles} ${className}`}>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
      <UpdateTitle title={pageTitle} />
      <GeneralMeta data={generalMetaData} />
      <TwitterSummaryCard data={twitterSummaryCardData} />
      <OpenGraphSummary data={openGraphSummaryData} />
      <WebpageSchema data={webpageSchemaData} />
      <BreadcrumbSchema data={breadcrumbSchemaData} />
      <BlogPostSchema data={blogPageSchemaData} />
      <StandardDiv leftLine={false} rightLine={false}>
        <Copy>
          <article>
            <header className="headings">
              <div className="banner">
                <Image
                  src={frontmatter.cover}
                  rawWidth={1440}
                  rawHeight={900}
                  loader="gradient"
                  style={{ border: 0, height: 'auto !important' }}
                />
              </div>
              <div className="abstract">
                <h1
                  className="mask-h3"
                  style={{ marginBottom: 14, lineHeight: 1.2 }}
                >
                  {frontmatter.title}
                </h1>
                <Tag>
                  <Link to={`/writings#${kebabCase(catString)}`}>
                    {catString}
                  </Link>
                </Tag>
                <p style={{ marginBottom: 0 }}>
                  <small>
                    <i>
                      {dateStr}&nbsp;({when})
                    </i>
                  </small>
                  <br />
                  <br />
                  {frontmatter.abstract}
                </p>
                <br />
                <div style={{ position: 'relative' }} className="mask-p">
                  <div style={{ maxWidth: 114, overflow: 'hidden' }}>
                    <FacebookProvider appId="218604115574634">
                      <FBLike
                        href={withUrl(route, data)}
                        colorScheme="dark"
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
              <h1 className="mask-h4">More Blogs</h1>
              <PreviousNext prev={prevData} next={nextData} />
            </aside>
            <hr />
            <br />
            <br />
            <DisqusComments pageData={pageData} collapsible={false} />
            <hr
              className="mobile-only"
              style={{
                marginTop: 0,
                marginBottom: 22,
                width: '100%',
                borderTop: 'unset',
              }}
            />
          </article>
        </Copy>
        <Copy>
          {randomBlock === 1 && <Block1 />}
          {randomBlock === 2 && <Block2 />}
          {randomBlock === 3 && <Block3 />}
          {randomBlock === 4 && <Block4 />}
          {randomBlock === 5 && <Block5 />}
          {randomBlock === 6 && <Block6 />}
          {randomBlock === 7 && <Block7 />}
        </Copy>
      </StandardDiv>
    </Layout>
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default BlogPostWrapper
