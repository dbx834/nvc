// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'
import { graphql } from 'gatsby'

import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import MediaQuery from 'react-responsive'
import Typekit from 'react-typekit'
import typefn from '@bodhi-project/typography/lib/methods/type'
import {
  InitializeMeta,
  UpdateTitle,
  WebsiteSchema,
  OrganisationSchema,
} from '@bodhi-project/seo'
import container from '@bodhi-project/components/lib/methods/container'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import '../../styles/index.less'
import indexImage from '../../assets/launch.jpg'
import data from '../../data/website.json'

import Header from './Header'
import Footer from './Footer'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
export const defaultImage = graphql`
  fragment defaultImage on File {
    childImageSharp {
      fluid(
        maxWidth: 2400
        quality: 80
        srcSetBreakpoints: [200, 400, 600, 800, 1000, 1200, 1600, 2000, 2400]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------- Global SEO
// ----------------------------------------------------------------------------
const websiteSchemaData = {
  url: data.websiteUrl,
  name: data.websiteName,
  description: data.websiteDescription,
  author: data.org.name,
  publisher: data.org.name,
  image: `${data.nakedWebsiteUrl}${indexImage}`,
}

const organisationSchemaData = {
  name: data.org.name,
  legalName: data.org.legalName,
  url: data.org.url,
  logo: `${data.org.url}${data.org.logo}`,
  foundingDate: moment(data.org.foundingDate).format(),
  founders: data.org.founders,
  streetAddress: data.orgLocation.streetAddress,
  addressLocality: data.orgLocation.addressLocality,
  addressRegion: data.orgLocation.addressRegion,
  postalCode: data.orgLocation.postalCode,
  addressCountry: data.orgLocation.addressCountry,
  telephone: data.orgContact.telephone,
  email: data.orgContact.email,
  sameAs: data.orgSocialMediaProfiles,
  image: `${data.nakedWebsiteUrl}${indexImage}`,
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '&#layout': {
    minHeight: '100vh',

    '@media(max-width: 992px)': {
      display: 'block',

      '& main': {
        paddingTop: '1rem',
        paddingBottom: '1rem',
      },

      '& > div': {
        boxShadow: '0 0 5px rgba(0,0,0,.20)',
        backgroundColor: '#f8f2e6',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
    },

    '@media(min-width: 992px)': {
      display: 'flex',

      '& > div': {
        flexGrow: 81,
        flexBasis: 0,
        boxShadow: '0 0 25px rgba(0,0,0,.11)',
        maxHeight: '100vh',
        overflowX: 'hidden',
        overflowY: 'scroll',
        marginTop: '1rem',
        borderTopLeftRadius: '1rem',
        backgroundColor: '#f8f2e6',
        padding: '2rem',
      },

      '& main': {
        marginBottom: '1rem',
      },
    },

    backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
  },

  '& main': {
    '& .copy': {
      maxWidth: '60rem',
    },
  },

  '& h1, h2, h3, h4, h5, h6, p, li': {
    color: '#4a4a4a',
  },

  '@media(min-width: 992px)': {
    '& .mobile-only': {
      display: 'none',
    },
  },

  '@media(max-width: 992px)': {
    '& .desktop-only': {
      display: 'none',
    },
  },

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
}).toString()

const bleedBlock = container({ bleed: true, block: true })

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Layout */
class Layout extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    const typeClass = typefn({
      kit: 'jdd4npp',
      options: {
        range: [12, 20], // Min and Max font-sizes
        paragraphSpacingFactor: 1.2, // Greater for tighter paragraph-paragraph spacing
        headingParagraphGapSpacingFactor: 0, // Greater for tighter header-paragraph spacing
        indentParagraphs: false,
      },
    })

    this.state = {
      typeClass,
      client: false,
    }
  }

  /** after mount */
  componentDidMount() {
    this.setState({ client: true })

    if (!isUndefined(document)) {
      const htmlElement = document.documentElement
      if (htmlElement.classList.contains('lk-loading')) {
        htmlElement.classList.toggle('lk-loading')
      }
      if (!htmlElement.classList.contains('lk-active')) {
        htmlElement.classList.toggle('lk-active')
      }
    }
  }

  /** on mount */
  componentDidUpdate() {
    if (!isUndefined(window)) {
      if (this.state.client === true) {
        const element = document.getElementById('layout')
        element.scrollTop = 0
      }
    }
  }

  /** standard renderer */
  render() {
    const { children, className = '' } = this.props
    const { typeClass, client } = this.state
    const classNameX = `${typeClass} ${style} ${className}`

    return (
      <Fragment>
        {client === true && (
          <Fragment>
            <br style={{ display: 'none' }} />
            <MediaQuery minWidth={992}>
              {matches => (
                <div className={classNameX} id="layout">
                  <InitializeMeta
                    data={{ titleTemplate: `%s | ${data.websiteName}` }}
                  />
                  <UpdateTitle title="Nonviolent Communication (NVC) & Restorative Circles (RC) in India (Auroville)" />
                  <WebsiteSchema data={websiteSchemaData} />
                  <OrganisationSchema data={organisationSchemaData} />
                  <Header
                    isDesktop={matches}
                    typeClass={typeClass}
                    {...this.props}
                  />
                  <div>
                    <main role="main" className={bleedBlock}>
                      {children}
                    </main>
                    <Footer isDesktop={matches} />
                  </div>
                  <Typekit kitId="jdd4npp" />
                </div>
              )}
            </MediaQuery>
            <br style={{ display: 'none' }} />
          </Fragment>
        )}
        {client === false && (
          <Fragment>
            <div className={classNameX} id="layout">
              <InitializeMeta
                data={{ titleTemplate: `%s | ${data.websiteName}` }}
              />
              <UpdateTitle title="Nonviolent Communication (NVC) & Restorative Circles (RC) in India (Auroville)" />
              <WebsiteSchema data={websiteSchemaData} />
              <OrganisationSchema data={organisationSchemaData} />
              <Header isDesktop typeClass={typeClass} {...this.props} />
              <div>
                <main role="main" className={bleedBlock}>
                  {children}
                </main>
                <Footer isDesktop />
              </div>
              <Typekit kitId="jdd4npp" />
            </div>
          </Fragment>
        )}
      </Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// ----------------------------------------------------------------------- Export
export default Layout
