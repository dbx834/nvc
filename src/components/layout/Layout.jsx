// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import moment from 'moment'

import pick from 'lodash/pick'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { SizesProvider } from 'react-sizes'
import { Type } from '@bodhi-project/typography'
import {
  InitializeMeta,
  UpdateTitle,
  WebsiteSchema,
  OrganisationSchema,
} from '@bodhi-project/seo'

import Container from '@bodhi-project/components/lib/Container'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import '../../styles/index.less'
import indexImage from '../../assets/launch.jpg'
import data from '../../data/website.json'

import DesktopNav from './DesktopNav'
import DesktopFooter from './DesktopFooter'
import MobileNav from './MobileNav'
import MobileFooter from './MobileFooter'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const sizesConfig = {
  fallbackWidth: 1280,
  fallbackHeight: 700,
}

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

const pageStyle = css({
  '&#appWrapper': {
    position: 'relative',

    '& h1, h2, h3, h4, h5, h6, p, li': {
      color: '#4a4a4a',
    },

    '& #content': {
      marginLeft: 0,
      padding: '2rem 0.5rem 2rem 2rem',

      '@media(min-width: 992px)': {
        padding: '2rem 2rem 7.5rem 2rem',
      },
    },

    display: 'block',
    backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',

    '& #contentWrapper': {
      backgroundColor: '#f8f2e6',
      background: '#f8f2e6',
      minHeight: '100vh',
    },

    '@media(min-width: 992px)': {
      display: 'flex',

      '& #menuWrapper': {
        flexGrow: '19',
        flexBasis: 0,
        height: '100vh',
      },

      '& #contentWrapper': {
        boxShadow: '0 0 25px rgba(0,0,0,.11)',
        flexGrow: '81',
        flexBasis: 0,
        maxHeight: '100vh',
        overflowX: 'hidden',
        overflowY: 'scroll',
        marginTop: 16,
        borderTopLeftRadius: 16,
      },
    },
  },

  '& #menuWrapper': {
    zIndex: 1000,
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
})
const pageStyles = pageStyle.toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Layout */
class Layout extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)
  }

  /** after mount */
  componentDidMount() {
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
      const element = document.getElementById('contentWrapper')
      element.scrollTop = 0
    }
  }

  /** standard renderer */
  render() {
    const { children } = this.props

    return (
      <SizesProvider config={sizesConfig}>
        <Type
          kit="jdd4npp"
          style={{ minHeight: '100vh' }}
          className={pageStyles}
          options={{
            range: [15, 21], // Min and Max font-sizes
            paragraphSpacingFactor: 1.2, // Greater for tighter paragraph-paragraph spacing
            headingParagraphGapSpacingFactor: 0.95, // Greater for tighter header-paragraph spacing
            indentParagraphs: false,
          }}
          id="appWrapper"
        >
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
          <InitializeMeta
            data={{ titleTemplate: `%s | ${data.websiteName}` }}
          />
          <UpdateTitle title="Loading..." />
          <WebsiteSchema data={websiteSchemaData} />
          <OrganisationSchema data={organisationSchemaData} />
          <div id="menuWrapper">
            <DesktopNav {...pick(this.props, ['location'])} />
            <MobileNav />
          </div>
          <div id="contentWrapper">
            <Container block id="content">
              {children}
            </Container>
            <DesktopFooter />
            <MobileFooter />
          </div>
        </Type>
      </SizesProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// ----------------------------------------------------------------------- Export
export default Layout
