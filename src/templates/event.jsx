// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

import isNull from 'lodash/isNull'
import join from 'lodash/join'
import startsWith from 'lodash/startsWith'
import trim from 'lodash/trim'
import split from 'lodash/split'
import last from 'lodash/last'
import findIndex from 'lodash/findIndex'
import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { withPrefix } from 'gatsby'
import { Article } from '@bodhi-project/semantic-webflow'
import { treeParser } from '@bodhi-project/markdown-to-react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import EventWrapper from '../components/wrappers/EventWrapper'

import data from '../data/website.json'

import markdownStylesClass from '../styles/markdownStyles'

import seoHelper from '../methods/seoHelper'
import inArray from '../methods/inArray'

import lauraPhoto from '../assets/rx/laura-joy-nvc-trainer-india.jpeg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** EventTemplate */
class EventTemplate extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)
  }

  /** standard renderer */
  render() {
    const { pathContext } = this.props
    const { frontmatter } = pathContext
    const {
      fromTime,
      toTime,
      tags,
      date,
      startDate,
      finishDate,
      cover,
    } = frontmatter
    const { markdownAst, next, prev } = pathContext
    const { route, humanDate } = pathContext
    const checkedRoute = startsWith(route, '/') ? route : `/${route}`
    const nakedRoute = checkedRoute.substr(1)

    // Date stuff
    const begins = moment(!isNull(startDate) ? startDate : date)
    const ends = moment(
      !isNull(finishDate) ? finishDate : begins.clone().add(23, 'hours')
    )

    const { orgLocation } = data

    let catString = trim(last(split(frontmatter.category, '.')))
    if (catString === 'NVC') {
      catString = 'Nonviolent Communication'
    }
    if (catString === 'RC') {
      catString = 'Restorative Circles'
    }

    let whichSide = null
    if (inArray(tags, 'rc') && inArray(tags, 'practice-group')) {
      whichSide = 'rc-practice-group'
    }
    if (inArray(tags, 'nvc') && inArray(tags, 'practice-group')) {
      whichSide = 'nvc-practice-group'
    }
    if (inArray(tags, 'rc') && inArray(tags, 'workshop')) {
      if (inArray(tags, 'featured')) {
        whichSide = 'rc-workshop-featured'
      } else {
        whichSide = 'rc-workshop'
      }
    }
    if (inArray(tags, 'nvc') && inArray(tags, 'workshop')) {
      whichSide = 'nvc-workshop'
    }
    if (
      inArray(tags, 'workshop') &&
      !inArray(tags, 'nvc') &&
      !inArray(tags, 'rc')
    ) {
      whichSide = 'workshop'
    }

    let showRegister = true
    if (inArray(tags, 'unregister')) {
      showRegister = false
      tags.splice(findIndex(tags, 'unregister'), 0, null)
    }

    let showPay = true
    if (inArray(tags, 'unpay')) {
      showPay = false
      tags.splice(findIndex(tags, 'unpay'), 0, null)
    }

    // Make banner
    let eventBanner = null
    if (cover === 'fallback') {
      const coverHint = join(tags, '-')
      eventBanner = withPrefix(
        `/content-assets/event-fallbacks/${coverHint}.jpg`
      )
    } else {
      eventBanner = withPrefix(cover)
    }

    const eventSchemaData = {
      name: frontmatter.title,
      url: `${data.websiteUrl}${route}`,
      description: `${frontmatter.abstract} On ${humanDate}.`,
      startDate: begins,
      endDate: ends,
      locationName: orgLocation.locationName,
      locationUrl: orgLocation.locationUrl,
      streetAddress: orgLocation.streetAddress,
      addressLocality: orgLocation.addressLocality,
      addressRegion: orgLocation.addressRegion,
      postalCode: orgLocation.postalCode,
      addressCountry: orgLocation.addressCountry,
      image: `${data.nakedWebsiteUrl}${eventBanner}`,
      performer: {
        name: data.org.founders[0],
        image: `${data.nakedWebsiteUrl}${lauraPhoto}`,
        sameAs: data.orgSocialMediaProfiles,
      },
      offers: {
        price: frontmatter.cost,
        priceCurrency: 'INR',
        url: `${data.websiteUrl}${route}`,
      },
    }

    const pageData = {
      pageTitle: frontmatter.title,
      nakedPageSlug: nakedRoute,
      pageAbstract: `${frontmatter.abstract} On ${humanDate}.`,
      pageBanner: eventBanner,
      eventBanner,
      eventSchemaData,
      showRegister,
      showPay,
      next,
      prev,
      whichSide,
      frontmatter,
      tags,
      fromTime,
      toTime,
      humanDate,
      pathContext,
    }

    const seoData = seoHelper(pageData)

    return (
      <EventWrapper
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
      </EventWrapper>
    )
  }
}

EventTemplate.propTypes = {
  pathContext: PropTypes.object,
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default EventTemplate
