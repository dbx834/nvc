// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import indexOf from 'lodash/indexOf'
import map from 'lodash/map'
import join from 'lodash/join'
import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { withPrefix } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import Copy from '../components/Copy'
import PageHeader from '../components/PageHeader'
import StandardDiv from '../components/StandardDiv'
import RightBlock from '../components/RightBlock'
import StandardPage from '../components/wrappers/StandardPage'

import DesktopCalendar from '../components/blocks/calendar/DesktopCalendar'
import MobileCalendar from '../components/blocks/calendar/MobileCalendar'

import seoHelper from '../methods/seoHelper'
import globalWithMediaQueries from '../methods/globalWithMediaQueries'

import nvc from '../assets/nvc.png'
import rc from '../assets/rc.png'
import goldStar from '../assets/goldStar.png'

import start from '../assets/start.png'
import middle from '../assets/middle.png'
import end from '../assets/end.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// globalWithMediaQueries(
//   '.ant-popover-inner-content .phoebe-popcontent',
//   { ...applyType('dkc2ilk', { range: [12, 21] }) },
//   true
// )

globalWithMediaQueries(
  '.ant-popover-inner-content',
  {
    padding: 0,
  },
  true
)

globalWithMediaQueries(
  '.ant-popover-inner-content p',
  {
    margin: 0,
  },
  true
)

// globalWithMediaQueries(
//   ".ant-popover-inner-content .phoebe-popcontent a:hover",
//   {
//     color: "#6D00FF",
//     borderBottom: "1.625px solid #6D00FF",
//   },
//   true,
// );

// globalWithMediaQueries(
//   ".ant-popover-inner-content .phoebe-popcontent a:visited",
//   {
//     textDecoration: "none",
//   },
//   true,
// );

// globalWithMediaQueries(
//   ".ant-popover-inner-content .phoebe-popcontent a:link",
//   {
//     textDecoration: "none",
//   },
//   true,
// );

// globalWithMediaQueries(
//   ".ant-popover-inner-content .phoebe-popcontent a:active",
//   {
//     textDecoration: "none",
//   },
//   true,
// );

/** inArray */
const inArray = (array, value) => {
  let rx = false
  if (indexOf(array, value) >= 0) {
    rx = true
  }
  return rx
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: 'Calendar Of Events',
  nakedPageSlug: 'calendar',
  pageAbstract:
    'We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& main': {
    display: 'block',
    position: 'relative',

    '& .ant-btn': {
      backgroundColor: '#ffffff !important',
      borderColor: '#ffffff !important',
      color: '#b43808 !important',
    },

    '& .ant-fullcalendar-header': {
      paddingTop: '0px !important',
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Calendar */
const Calendar = props => {
  const postEdges = props.data.allMarkdownRemark.edges
  const events = []

  map(postEdges, ({ node }) => {
    // Make banner
    let eventBanner = null
    if (node.frontmatter.cover === 'fallback') {
      const coverHint = join(node.frontmatter.tags, '-')
      eventBanner = withPrefix(
        `/content-assets/event-fallbacks/${coverHint}.jpg`
      )
    } else {
      eventBanner = withPrefix(node.frontmatter.cover)
    }

    events.push({
      route: node.fields.route,
      humanDate: node.fields.humanDate,
      elapsed: node.fields.elapsed,
      beginDateInt: node.fields.beginDateInt,
      diff: node.fields.diff,
      abstract: inArray(node.frontmatter.tags, 'practice-group')
        ? null
        : node.frontmatter.abstract,
      title: node.frontmatter.title,
      subTitle: node.frontmatter.subTitle,
      cover: eventBanner,
      date: node.frontmatter.date,
      startDate: node.frontmatter.startDate,
      finishDate: node.frontmatter.finishDate,
      fromTime: node.frontmatter.fromTime,
      toTime: node.frontmatter.toTime,
      category: node.frontmatter.category,
      tags: node.frontmatter.tags,
      type: node.frontmatter.type,
    })
  })

  const phoebeData = {
    events,
    components: {
      localLink: Link,
    },
    conf: {
      multiDay: {
        start,
        middle,
        end,
      },
    },
    tagMap: {
      nvc,
      rc,
    },
    nullTag: goldStar,
    categoryMap: {
      nvc: 'Nonviolent Communication',
      rc: 'Restorative Circles',
      practiceGroup: 'Practice Group',
    },
  }

  const altHalleyData = {
    cards: events,
    components: {
      localLink: Link,
    },
    show: 4,
    tagMap: {
      nvc,
      rc,
      star: goldStar,
    },
  }

  return (
    <StandardPage
      className={style}
      seoData={seoData}
      {...pick(props, ['location'])}
    >
      <PageHeader
        title="Calendar"
        subTitle="Nonviolent Communication and Restorative Circle Workshops"
        stashSubTitle
        hero="We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms."
      />
      <StandardDiv>
        <Copy>
          <DesktopCalendar data={phoebeData} />
          <MobileCalendar data={altHalleyData} style={{ padding: 0 }} />
        </Copy>
        <Copy>
          <RightBlock line={false}>
            <p>
              <strong>How Joy Living Learning came to be...</strong>
            </p>
            <p>
              In the winter of 2008-09, L'aura along with Jason Stewart had a
              dream of hosting a 3-week international NVC Camp in her garden. In
              order to fundraise and sponsor 3 Ladakhi participants, plus a
              young man from Koot Road village (near Auroville) who was
              volunteering with them, they needed to set up a financial entity –
              and that was the birth of Joy Living Learning.
            </p>
            <p>
              That Camp was a wild success, with over 200 participants and 12
              international trainers, and non-stop events staggered over the 3
              weeks.
            </p>
            <p>
              A short while later, L'aura joined Saleem Ebrahim and Aniruddha
              Gadankush in setting up the Charitable Trust, "Institute of
              Nonviolent Communication (in India)," and together they hosted the
              first few&nbsp;
              <Link to="/nvc-india-conventions">
                annual International NVC Conventions in India
              </Link>
              .
            </p>
            <p>
              In addition, Joy Living Learning has organized many other events
              with international trainers, such as <i>NVC Mediation</i> with Kay
              Rung and Liv Larsson, <i>NVC & Aikido</i> with Saleem Ebrahim,{' '}
              <i>Compassionate Living (Embodied Spirituality of NVC)</i> with
              Robert Gonzales, <i>NVC & Internal Family Systems (IFS)</i> with
              Caroline Ader-Lamy and Saleem Ebrahim,&nbsp;
              <Link to="/nvc-certification">
                <i>NVC Certification Mentoring & Assessment</i> with Katherine
                Singer and Gina Lawrie
              </Link>
              , an <i>International Intensive Training (IIT)</i>, and more...
            </p>
            <p>
              <strong>Today...</strong>
            </p>
            <p>
              Joy Living Learning continues to offer regular NVC and RC
              workshops in Auroville and other cities in the country, plus
              weekly practice groups in Auroville.
            </p>
            <p>
              Joy Living Learning has also incorporated RC into Auroville's
              conflict resolution policy and is working towards building
              an&nbsp;
              <Link to="https://www.restorativeauroville.org/">
                alternative justice system in Auroville
              </Link>
              &nbsp;based on the principles that underlie the NVC movement.
            </p>
          </RightBlock>
        </Copy>
      </StandardDiv>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query UpcomingEventsQuery {
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
            beginDateInt
            diff
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
export default Calendar
