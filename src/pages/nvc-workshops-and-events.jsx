// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Tag from 'antd/lib/tag'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/tag/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Copy from '../components/Copy'
import PageHeader from '../components/PageHeader'
import StandardDiv from '../components/StandardDiv'
import StandardPage from '../components/wrappers/StandardPage'

import DesktopEventsArchive from '../components/blocks/events-archive/DesktopEventsArchive'
import MobileEventsArchive from '../components/blocks/events-archive/MobileEventsArchive'

import NVCEvents from '../components/blocks/homepage/NVCEvents'
import RCEvents from '../components/blocks/homepage/RCEvents'

import Link from '../components/Link'
import nvc from '../assets/nvc.png'
import rc from '../assets/rc.png'
import seoHelper from '../methods/seoHelper'
import categoriseEvents from '../methods/categoriseEvents'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: 'Workshops & Events',
  nakedPageSlug: 'nvc-workshops-and-events',
  pageAbstract:
    'We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& .ant-btn': {
    backgroundColor: '#ffffff !important',
    borderColor: '#ffffff !important',
    color: '#b43808 !important',
  },

  '& .top-link': {
    position: 'relative',
    display: 'block',

    '@media(min-width: 992px)': {
      display: 'inline-block',
      marginBottom: 0,
      position: 'absolute',
      // top: 30,
      right: 10,
    },

    '& .ant-tag': {
      background: '#fdf2ed !important',
      borderColor: '#b43808 !important',

      '& a': {
        color: '#b43808 !important',
        borderBottom: 'unset',

        '&:hover': {
          color: '#b43808 !important',
          borderBottom: 'unset',
        },
        '&:visited': {
          textDecoration: 'none',
        },
        '&:link': {
          textDecoration: 'none',
        },
        '&:active': {
          textDecoration: 'none',
        },
      },
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
    const events = categoriseEvents(postEdges)

    const opheliaData = {
      cards: events.featuredEvents,
      components: {
        localLink: Link,
      },
      conf: {
        gutterHeight: 5,
        image: {
          rawCoverWidth: 1440,
          rawCoverHeight: 900,
        },
        columnWidth: '49%',
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
          title="Workshops & Events"
          subTitle="Nonviolent Communication and Restorative Circle Workshops and Events"
          stashSubTitle
          hero="We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms."
        />
        <StandardDiv rightLine={false}>
          <Copy>
            <p style={{ marginTop: 0 }}>
              Below you’ll find a listing of our upcoming NVC Workshops and RC
              Workshops, as well as any other special events we host, in
              Auroville and in other cities across India. Please register now if
              you’d like to attend any of these events, or{' '}
              <Link to="/contact-us">contact us</Link> to organize an event in
              your city.
            </p>
            <div style={{ position: 'relative' }}>
              <div className="mask-p top-link">
                <Tag>
                  <Link to="/events-archive">Events Archive</Link>
                </Tag>
              </div>
              <DesktopEventsArchive data={opheliaData} />
              <MobileEventsArchive data={pandoraData1} style={{ padding: 0 }} />
            </div>
            {events.featuredEvents.length === 0 && (
              <Fragment>
                <br />
                <p
                  style={{
                    marginBottom: 0,
                    color: '#989898',
                    textAlign: 'left',
                  }}
                >
                  <small>
                    <i>Please check back later.</i>
                  </small>
                </p>
              </Fragment>
            )}
          </Copy>
          <Copy>
            <NVCEvents data={events.NVCEvents} />
            <RCEvents data={events.RCEvents} />
          </Copy>
        </StandardDiv>
      </StandardPage>
    )
  }
}

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query FeaturedEventsQuery {
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
