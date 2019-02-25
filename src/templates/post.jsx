// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'
import moment from 'moment'

import trim from 'lodash/trim'
import last from 'lodash/last'
import split from 'lodash/split'
import startsWith from 'lodash/startsWith'
import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Article } from '@bodhi-project/semantic-webflow'

import { treeParser } from '@bodhi-project/markdown-to-react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import BlogPostWrapper from '../components/wrappers/BlogPostWrapper'
import seoHelper from '../methods/seoHelper'
import data from '../data/website.json'
import markdownStylesClass from '../styles/markdownStyles'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** BlogPostTemplate */
class BlogPostTemplate extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)
  }

  /** standard renderer */
  render() {
    const { pathContext } = this.props
    const { frontmatter } = pathContext
    const { markdownAst, next, prev } = pathContext
    const { route, humanDate, elapsed } = pathContext
    const checkedRoute = startsWith(route, '/') ? route : `/${route}`
    const nakedRoute = checkedRoute.substr(1)

    // Date stuff
    const mDate = moment(frontmatter.date)
    const isoDate = mDate.format()

    const dateStr = moment(mDate).format('ddd, MMMM D, YYYY')
    const when = moment(mDate).fromNow()

    let catString = trim(last(split(frontmatter.category, '.')))
    if (catString === 'NVC') {
      catString = 'Nonviolent Communication'
    }
    if (catString === 'RC') {
      catString = 'Restorative Circles'
    }

    const blogPageSchemaData = {
      headline: frontmatter.title,
      image: `${data.nakedWebsiteUrl}${frontmatter.cover}`,
      url: `${data.websiteUrl}${route}`,
      datePublished: isoDate,
      dateModified: isoDate,
      description: frontmatter.abstract,
      publisher: data.org.name,
      author: data.org.founders[0],
      publisherLogo: {
        url: `${data.nakedWebsiteUrl}${data.org.logo}`,
        height: 900,
        width: 900,
      },
    }

    const pageData = {
      pageTitle: frontmatter.title,
      nakedPageSlug: nakedRoute,
      pageAbstract: frontmatter.abstract,
      pageBanner: frontmatter.cover,
      dateStr,
      when,
      catString,
      humanDate,
      next,
      prev,
      pathContext,
      elapsed,
      blogPageSchemaData,
      frontmatter,
    }

    const seoData = seoHelper(pageData)

    return (
      <BlogPostWrapper
        className={style}
        seoData={seoData}
        pageData={pageData}
        {...pick(this.props, ['location'])}
      >
        <Article className={markdownStylesClass}>
          {treeParser(
            markdownAst,
            {
              localLink: Link,
              linkHeaders: false,
              trackHeaders: false,
              nestHeaders: false,
            },
            {}
          )}
        </Article>
      </BlogPostWrapper>
    )
  }
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default BlogPostTemplate
