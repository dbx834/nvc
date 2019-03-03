// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'
import FurtherLinks from '@bodhi-project/components/lib/FurtherLinks'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import HomePage from '../components/wrappers/HomePage'
import Copy from '../components/Copy'
import Link from '../components/Link'
import PageHeader from '../components/PageHeader'
import StandardDiv from '../components/StandardDiv'

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
const furtherLinksData = [
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
          <FurtherLinks
            data={furtherLinksData}
            className="desktop-only"
            Link={Link}
            title="Further Links"
            titleClass="mask-h3"
          />
          <br />
          <h2 className="mask-h3" style={{ marginTop: 0 }}>
            Our Projects
          </h2>
          <div className="margin-p">
            <Link
              to="https://www.restorativeauroville.org/"
              style={{ display: 'block' }}
            >
              <Image
                src="/assets/rc-banner.png"
                rawWidth={1440}
                rawHeight={900}
                style={{
                  border: 'none',
                  background: 'none',
                }}
              />
            </Link>
          </div>
          <p>
            Our project,{' '}
            <Link to="https://www.restorativeauroville.org/">
              Restorative Auroville
            </Link>
            , aims to bring the practice of Restorative Circles, a holistic,
            community-based form of conflict resolution, to Auroville, and to
            explore what a consciously designed justice system could look like
            here – one that reflects our ideals, but that is also effective and
            has the power to bring about constructive change, both on the
            individual and community levels.
          </p>
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
            <FurtherLinks
              data={furtherLinksData}
              Link={Link}
              title="Further Links"
              titleClass="mask-h3"
            />
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
