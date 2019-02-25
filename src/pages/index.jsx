// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import HomePage from '../components/wrappers/HomePage'
import Copy from '../components/Copy'
import PageHeader from '../components/PageHeader'
import StandardDiv from '../components/StandardDiv'

import LearnMore from '../components/blocks/LearnMore'

import VisionMissionEtc from '../components/blocks/homepage/VisionMissionEtc'
import Slider from '../components/blocks/homepage/Slider'
import About from '../components/blocks/homepage/About'
import Quotes from '../components/blocks/homepage/Quotes'
import FacebookWall from '../components/blocks/homepage/FacebookWall'

import UpcomingEvents from '../components/blocks/homepage/UpcomingEvents'
import NVCEvents from '../components/blocks/homepage/NVCEvents'
import RCEvents from '../components/blocks/homepage/RCEvents'

import categoriseEvents from '../methods/categoriseEvents'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

const pageData = {
  pageTitle:
    'Nonviolent Communication (NVC) & Restorative Circles (RC) in India (Auroville)',
  nakedPageSlug: '',
  pageAbstract:
    'NVC and RC in India - We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation support.',
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const learnMoreData = [
  {
    linkTo: '/writings/nonviolent-communication-and-restorative-circles',
    title: 'Nonviolent Communication & Restorative Circles',
    image:
      '/content-assets/covers/nonviolent-communication-and-restorative-circles.jpg',
  },
  {
    linkTo: '/writings/embracing-interdependence-with-nonviolent-communication',
    title: 'Embracing Interdependence with Nonviolent Communication',
    image:
      '/content-assets/covers/embracing-interdependence-with-nonviolent-communication.jpg',
  },
  {
    linkTo: '/writings/our-justice-system',
    title: 'Our Justice System',
    image: '/content-assets/covers/our-justice-system.jpg',
  },
  {
    linkTo: '/writings/cross-cultural-dialogue',
    title: 'Cross-Cultural Dialogue',
    image: '/content-assets/covers/cross-cultural-dialogue.jpg',
  },
  {
    linkTo: '/writings/passivity-on-the-plane',
    title: 'Passivity on the Plane',
    image:
      'https://images.unsplash.com/photo-1453825517242-1a1527bf0a39?ixlib=rb-0.3.5&s=c97b93f170796ae2e043e971633901f1&auto=format&fit=crop&w=1440&h=900',
  },
  {
    linkTo: '/writings/ego',
    title: 'ego',
    image: '/content-assets/covers/ego.jpg',
  },
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& h1': {
    textTransform: 'uppercase',
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** IndexPage */
const IndexPage = props => {
  const { data } = props
  const postEdges = data.allMarkdownRemark.edges
  const events = categoriseEvents(postEdges, 3, 1)

  return (
    <HomePage
      className={style}
      pageData={pageData}
      {...pick(props, ['location'])}
    >
      <PageHeader
        title="Joy Living Learning"
        subTitle="Nonviolent Communication (NVC) & Restorative Circles (RC) in India (Auroville)"
        hero="We offer learning opportunities through workshops and practicegroups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation support."
        home
      />
      <StandardDiv>
        <Copy>
          <VisionMissionEtc />
          <Slider />
          <LearnMore data={learnMoreData} className="desktop-only" />
        </Copy>
        <Copy>
          <About />
          <UpcomingEvents data={events.featuredEvents} />
          <NVCEvents data={events.NVCEvents} />
          <RCEvents data={events.RCEvents} />
          <Quotes />
          <FacebookWall />
          <div className="mobile-only">
            <hr />
            <LearnMore data={learnMoreData} />
          </div>
        </Copy>
      </StandardDiv>
    </HomePage>
  )
}

// IndexPage.propTypes = {}

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 365
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { type: { eq: "event" } } }
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
            subTitle
            cover
            date
            startDate
            finishDate
            fromTime
            toTime
            category
            tags
            type
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
export default IndexPage
