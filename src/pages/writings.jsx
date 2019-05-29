// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import map from 'lodash/map'
import pick from 'lodash/pick'
import replace from 'lodash/replace'
import startCase from 'lodash/startCase'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import PageHeader from '../components/PageHeader'
import StandardPage from '../components/wrappers/StandardPage'

import DesktopListing from '../components/blocks/writings/DesktopListing'
import MobileListing from '../components/blocks/writings/MobileListing'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: 'Writings',
  nakedPageSlug: 'writings',
  pageAbstract:
    'Our mission is to live and share the principles of Nonviolence, not only in terms of an individual practice and way of life, but also in its application to social structures, such as in our families, schools, and organizations.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  '& hr': {
    border: 'none',
    borderTop: '3px solid #B43808',
    marginBottom: 12,
  },

  '@media(max-width: 1200px)': {
    '& hr': {
      borderTop: '2.25px solid #B43808',
      marginBottom: 8,
    },
  },

  '@media(max-width: 992px)': {
    '& hr': {
      borderTop: '1.75px solid #B43808',
      marginBottom: 4,
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Writings */
const Writings = props => {
  const postEdges = props.data.allMarkdownRemark.edges
  const data2 = []

  map(postEdges, ({ node }) => {
    data2.push({
      route: node.fields.route,
      humanDate: node.fields.humanDate,
      elapsed: node.fields.elapsed,
      abstract: node.frontmatter.abstract,
      title: node.frontmatter.title,
      cover: node.frontmatter.cover,
      date: node.frontmatter.date,
      category: node.frontmatter.category,
    })
  })

  const {
    location: { hash },
  } = props

  const preFilter = startCase(hash)

  return (
    <StandardPage
      className={pageStyle}
      seoData={seoData}
      {...pick(props, ['location'])}
    >
      <PageHeader title="Blog" />
      <hr />
      <DesktopListing data={data2} preFilter={preFilter} />
      <MobileListing data={data2} preFilter={preFilter} />
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query WritingsQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            route
            humanDate
            elapsed
          }
          frontmatter {
            abstract
            title
            cover
            date
            category
          }
        }
      }
    }
  }
`
/* eslint-enable no-undef */

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Writings
