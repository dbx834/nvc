// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import pick from 'lodash/pick'
import { graphql } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'

import Image from '@bodhi-project/components/lib/Image'
import Video from '@bodhi-project/components/lib/Video'
import Division from '@bodhi-project/components/lib/Division'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import Copy from '../components/Copy'
import PageHeader from '../components/PageHeader'
import StandardDiv from '../components/StandardDiv'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

import supergirls from '../assets/supergirls.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: 'NVC India - Nonviolent Communication in India',
  nakedPageSlug: 'nvc-india',
  pageAbstract:
    'Our NVC community in India is a thriving one! We’ve had annual International NVC Conventions since 2010, plus so many other NVC events in India with trainers from all over the world.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    nvcIndiaHomepage: file(relativePath: { eq: "nvc-india-homepage.jpg" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** NVCIndia */
const NVCIndia = props => {
  return (
    <StandardPage
      className={style}
      seoData={seoData}
      {...pick(props, ['location'])}
    >
      <PageHeader
        title="Nonviolent Communication in India"
        subTitle="NVC India"
        stashSubTitle
        hero="Marshall Rosenberg first came to India in 2004, and offered an International Intensive Training (IIT) in Bangalore, and then another one in Pune in 2006. It’s incredible to see how we’ve grown and touched so many hundreds of people over the past several years."
      />
      <StandardDiv>
        <Copy>
          <div className="margin-p">
            <Division golden>
              <div>
                <Link to="https://www.nvc-india.org/">
                  <Img
                    fluid={props.data.nvcIndiaHomepage.childImageSharp.fluid}
                  />
                  <p style={{ marginBottom: 9 }}>
                    Visit&nbsp;
                    <Link to="https://www.nvc-india.org/">
                      www.nvc-india.org
                    </Link>
                    &nbsp;to know more...
                  </p>
                </Link>
              </div>
              <div>
                <p>
                  Our NVC community in India is a thriving one, and it’s
                  incredible to see how we’ve grown and how NVC has touched so
                  many hundreds of people over the past several years.
                </p>
                <p>CNVC Certified Trainers in India:</p>
                <ul className="mask-p">
                  <li>L’aura Joy</li>
                  <li>Ranjitha Jeurkar</li>
                  <li>Stefan Gebert</li>
                  <li>Sudha Shankar</li>
                </ul>
              </div>
            </Division>
          </div>
          <h2 className="mask-h3">Where It All Began...</h2>
          <p>
            Marshall Rosenberg first came to India in 2004, and offered an
            International Intensive Training (IIT) in Bangalore, and then
            another one in Pune in 2006. And since 2010 we’ve had&nbsp;
            <Link to="/nvc-india-conventions">
              annual International NVC Conventions
            </Link>
            , plus so many other events with trainers from all over the world.
          </p>
          <h2 className="mask-h3">NVC-India – an old fundraiser...</h2>
          <div style={{ maxWidth: 640 }}>
            <Video url="https://www.youtube.com/watch?v=6UqhACynw0s" />
          </div>
          <hr
            className="mobile-only"
            style={{
              marginTop: 0,
              marginBottom: 22,
              width: '100%',
              borderTop: 'unset',
            }}
          />
        </Copy>
        <Copy>
          <p
            style={{
              fontFamily: 'futura-pt, sans-serif',
              fontWeight: 200,
              marginBottom: 17,
            }}
          >
            <span style={{ fontSize: '125%' }}>
              <i>
                "This world is what we have made of it. If it is ruthless today
                it is because we have made it ruthless by our attitudes. If we
                change ourselves we can change the world, and changing ourselves
                begins with changing our language and methods of communication.
                I highly recommend reading this book and applying the Nonviolent
                Communication process it teaches. It is a significant first step
                toward changing our communication and creating a compassionate
                world."
              </i>
              <br />~ <strong>Arun Gandhi</strong>
            </span>
          </p>

          <hr />
          <h2 className="mask-p" style={{ marginBottom: 5 }}>
            Supergirls: L'aura, Sudha & Ranjitha
          </h2>
          <Image
            src={supergirls}
            rawWidth={1235}
            rawHeight={1235}
            style={{
              maxWidth: 360,
              width: '100%',
              height: 'auto',
              border: 0,
              background: 'transparent',
              display: 'block',
              marginBottom: 30,
            }}
          />
        </Copy>
      </StandardDiv>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default NVCIndia
