// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import PageHeader from '../components/PageHeader'
import StandardPage from '../components/wrappers/StandardPage'

import DesktopEventsArchive from '../components/blocks/events-archive/DesktopEventsArchive'
import MobileEventsArchive from '../components/blocks/events-archive/MobileEventsArchive'

import nvc from '../assets/nvc.png'
import rc from '../assets/rc.png'
import seoHelper from '../methods/seoHelper'
import categoriseOldEvents from '../methods/categoriseOldEvents'

import goldStar from '../assets/goldStar.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: 'Events Archive',
  nakedPageSlug: 'events-archive',
  pageAbstract:
    'We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& hr': {
    border: 'none',
    borderTop: '3px solid #B43808',
    marginBottom: 10,

    '&:not(:first-child)': {
      marginTop: 20,
    },
  },

  '@media(max-width: 1200px)': {
    '& hr': {
      borderTop: '2.25px solid #B43808',
      marginBottom: 8,
    },
  },

  '@media(max-width: 768px)': {
    '& hr': {
      borderTop: '1.75px solid #B43808',
      marginBottom: 4,
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** EventsAndCalendar */
class EventsAndCalendar extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)
  }

  /** standard renderer */
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    const events = categoriseOldEvents(postEdges)

    const opheliaData = {
      cards: events.featuredEvents,
      components: {
        localLink: Link,
      },
      conf: {
        gutterHeight: 12,
        image: {
          rawCoverWidth: 1440,
          rawCoverHeight: 900,
        },
        columnWidth: '24.5%',
      },
      categoryMap: {
        nvc: 'Nonviolent Communication',
        rc: 'Restorative Circles',
      },
    }

    const pandoraData1 = {
      cards: events.featuredEvents,
      components: {
        localLink: Link,
      },
      tagMap: {
        nvc,
        rc,
        star: goldStar,
      },
      show: 3,
    }

    return (
      <StandardPage
        className={style}
        seoData={seoData}
        {...pick(this.props, ['location'])}
      >
        <PageHeader
          title="Events Archive"
          subTitle="Nonviolent Communication and Restorative Circle Workshops"
          stashSubTitle
          hero="We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms."
        />
        <hr />
        <DesktopEventsArchive data={opheliaData} />
        <MobileEventsArchive data={pandoraData1} style={{ padding: 0 }} />
      </StandardPage>
    )
  }
}

EventsAndCalendar.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query PastEventsQuery {
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
export default EventsAndCalendar
