// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types';
// import _ from 'lodash';
import { css } from 'glamor'

import pick from 'lodash/pick'

import { graphql } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'

import MultiCarousel from '@bodhi-project/components/lib/gatsby/MultiCarousel'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/carousel/style/css'

import Video from '@bodhi-project/components/lib/Video'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// import Link from '../components/Link';
import Copy from '../components/Copy'
import PageHeader from '../components/PageHeader'
import StandardPage from '../components/wrappers/StandardPage'
import StandardDiv from '../components/StandardDiv'
import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: 'Clients',
  nakedPageSlug: 'clients',
  pageAbstract:
    'We have worked with several organizations, ranging from the social sector, to schools, to the corporate world. Some of our past and present clients.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    client00001: file(relativePath: { eq: "clients/client00001.jpg" }) {
      ...defaultImage
    }
    client00002: file(relativePath: { eq: "clients/client00002.jpg" }) {
      ...defaultImage
    }
    client00003: file(relativePath: { eq: "clients/client00003.jpg" }) {
      ...defaultImage
    }
    client00004: file(relativePath: { eq: "clients/client00004.jpg" }) {
      ...defaultImage
    }
    client00005: file(relativePath: { eq: "clients/client00005.jpg" }) {
      ...defaultImage
    }
    client00006: file(relativePath: { eq: "clients/client00006.jpg" }) {
      ...defaultImage
    }
    client00007: file(relativePath: { eq: "clients/client00007.jpg" }) {
      ...defaultImage
    }
    client00008: file(relativePath: { eq: "clients/client00008.jpg" }) {
      ...defaultImage
    }
    client00009: file(relativePath: { eq: "clients/client00009.jpg" }) {
      ...defaultImage
    }
    client00010: file(relativePath: { eq: "clients/client00010.jpg" }) {
      ...defaultImage
    }
    client00011: file(relativePath: { eq: "clients/client00011.jpg" }) {
      ...defaultImage
    }
    client00012: file(relativePath: { eq: "clients/client00012.jpg" }) {
      ...defaultImage
    }
    client00013: file(relativePath: { eq: "clients/client00013.jpg" }) {
      ...defaultImage
    }
    client00014: file(relativePath: { eq: "clients/client00014.jpg" }) {
      ...defaultImage
    }
    client00015: file(relativePath: { eq: "clients/client00015.jpg" }) {
      ...defaultImage
    }
    client00016: file(relativePath: { eq: "clients/client00016.jpg" }) {
      ...defaultImage
    }
    client00017: file(relativePath: { eq: "clients/client00017.jpg" }) {
      ...defaultImage
    }
    client00018: file(relativePath: { eq: "clients/client00018.jpg" }) {
      ...defaultImage
    }
    client00019: file(relativePath: { eq: "clients/client00019.jpg" }) {
      ...defaultImage
    }
    client00020: file(relativePath: { eq: "clients/client00020.jpg" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  '& .slick-slider': {
    background: '#fff',
    paddingBottom: '6px !important',
    borderColor: '#B43808 !important',
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
class Page extends React.Component {
  /** standard renderer */
  render() {
    const data = [
      {
        title: 'Mahindra College',
        cover: this.props.data.client00001.childImageSharp.fluid,
        abstract: 'Mahindra College',
      },
      {
        title: 'Bharat Petroleum',
        cover: this.props.data.client00007.childImageSharp.fluid,
        abstract: 'Bharat Petroleum',
      },
      {
        title: 'Aikiyam School',
        cover: this.props.data.client00002.childImageSharp.fluid,
        abstract: 'Aikiyam School',
      },
      {
        title: 'Paradigms Unlimited',
        cover: this.props.data.client00008.childImageSharp.fluid,
        abstract: 'Paradigms Unlimited',
      },
      {
        title: 'Decathalon',
        cover: this.props.data.client00003.childImageSharp.fluid,
        abstract: 'Decathalon',
      },
      {
        title: 'Auroville',
        cover: this.props.data.client00010.childImageSharp.fluid,
        abstract: 'Auroville',
      },
      {
        title: 'Royal Enfield',
        cover: this.props.data.client00004.childImageSharp.fluid,
        abstract: 'Royal Enfield',
      },
      {
        title: 'ISABS',
        cover: this.props.data.client00009.childImageSharp.fluid,
        abstract: 'ISABS',
      },
      {
        title: 'SKF',
        cover: this.props.data.client00005.childImageSharp.fluid,
        abstract: 'SKF',
      },
      {
        title: 'Solidarity For Developing Communities',
        cover: this.props.data.client00018.childImageSharp.fluid,
        abstract: 'Solidarity For Developing Communities',
      },
      {
        title: 'Mastek',
        cover: this.props.data.client00006.childImageSharp.fluid,
        abstract: 'Mastek',
      },
      {
        title: 'Lifelong Learning Foundation',
        cover: this.props.data.client00011.childImageSharp.fluid,
        abstract: 'Lifelong Learning Foundation',
      },
      {
        title: 'Sharana',
        cover: this.props.data.client00012.childImageSharp.fluid,
        abstract: 'Sharana',
      },
      {
        title: 'Center for Communication Learning',
        cover: this.props.data.client00013.childImageSharp.fluid,
        abstract: 'Center for Communication Learning',
      },
      {
        title: 'Connext',
        cover: this.props.data.client00015.childImageSharp.fluid,
        abstract: 'Connext',
      },
      {
        title: 'Casa Poma',
        cover: this.props.data.client00014.childImageSharp.fluid,
        abstract: 'Casa Poma',
      },
      {
        title: 'Ashoka University',
        cover: this.props.data.client00016.childImageSharp.fluid,
        abstract: 'Ashoka University',
      },
      {
        title: 'Restorative Auroville',
        cover: this.props.data.client00020.childImageSharp.fluid,
        abstract: 'Restorative Auroville',
      },
      {
        title: 'Talash',
        cover: this.props.data.client00017.childImageSharp.fluid,
        abstract: 'Talash',
      },
      {
        title: 'Creating Safe Spaces',
        cover: this.props.data.client00019.childImageSharp.fluid,
        abstract: 'Creating Safe Spaces',
      },
    ]

    return (
      <StandardPage
        className={pageStyle}
        seoData={seoData}
        {...pick(this.props, ['location'])}
      >
        <PageHeader
          title="Clients"
          subTitle="We have worked with several organizations, ranging from the social sector, to schools, to the corporate world. Some of our past and present clients."
          stashSubTitle
          hero="We have worked with several organizations, ranging from the social sector, to schools, to the corporate world. Some of our past and present clients."
        />
        <StandardDiv bigGolden>
          <Copy>
            <p>
              We have worked with several organizations, ranging from the social
              sector, to schools, to the corporate world. Here are some of our
              past and present clients.
            </p>
            <div className="mask-p">
              <MultiCarousel data={data} Img={Img} />
            </div>
          </Copy>
          <Copy>
            <h2 className="mask-p" style={{ marginBottom: 11 }}>
              Nonviolent Communication Presentation at Decathlon
            </h2>
            <Video
              url="https://www.youtube.com/watch?v=ABSqrsXK1HI"
              style={{
                marginBottom: 17,
              }}
            />
            <hr />
            <h2 className="mask-p" style={{ marginBottom: 11 }}>
              Restorative Circles Workshop with ISABS (Delhi)
            </h2>
            <Video
              url="https://www.youtube.com/watch?v=B7sO2a5_KV8"
              style={{
                marginBottom: 17,
              }}
            />
          </Copy>
        </StandardDiv>
      </StandardPage>
    )
  }
}

Page.propTypes = {}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
