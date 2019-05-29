// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

// import map from "lodash/map";
// import isUndefined from "lodash/isUndefined";
import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { graphql } from 'gatsby'

import Img from 'gatsby-image'
import Gallery from '@bodhi-project/components/lib/gatsby/Gallery'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Copy from '../components/Copy'
import PageHeader from '../components/PageHeader'
import StandardDiv from '../components/StandardDiv'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

const pageData = {
  pageTitle: "L'aura Joy",
  nakedPageSlug: 'laura-joy',
  pageAbstract:
    'L’aura Joy is a Certified Trainer in Nonviolent Communication (CNVC, USA), and since 2007 she has been working in the fields of communication, conflict resolution, peace and justice, healing, and decision-making and leadership.',
  pageBanner: '/content-assets/laura-joy/laura4_900X600.jpeg',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    img00001: file(relativePath: { eq: "laura/img00001.jpeg" }) {
      ...defaultImage
    }
    img00002: file(relativePath: { eq: "laura/img00002.jpeg" }) {
      ...defaultImage
    }
    img00003: file(relativePath: { eq: "laura/img00003.jpeg" }) {
      ...defaultImage
    }
    img00004: file(relativePath: { eq: "laura/img00004.jpeg" }) {
      ...defaultImage
    }
  }
`

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  '@media(min-width: 992px)': {
    '& .gatsby-image-wrapper': {
      '&:nth-child(3)': {
        display: 'none',
      },
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** NVCPage */
class NVCPage extends React.PureComponent {
  /** standard renderer */
  render() {
    return (
      <StandardPage
        className={pageStyle}
        seoData={seoData}
        {...pick(this.props, ['location'])}
      >
        <PageHeader
          title="L'aura Joy"
          subTitle="L’aura Joy is a Certified Trainer in Nonviolent Communication (CNVC, USA)"
          stashSubTitle
          hero="L’aura Joy is a Certified Trainer in Nonviolent Communication (CNVC, USA), and since 2007 she has been working in the fields of communication, conflict resolution, peace and justice, healing, and decision-making and leadership."
        />
        <StandardDiv>
          <Copy>
            <p>
              L’aura Joy is a Certified Trainer in Nonviolent Communication
              (CNVC, USA), and since 2007 she has been working in the fields of
              communication, conflict resolution, peace and justice, healing,
              and decision-making and leadership.
            </p>
            <p>
              Having grown up in Auroville, an international intentional
              community in Tamil Nadu, India, L'aura is passionate about
              exploring how we can live our lives in empowered and co-creative
              ways. Nonviolent Communication (NVC) offers such a clear, yet
              deeply powerful and transformative framework within which to
              explore both our inner realities as well as outer relationships.
              In addition to NVC, L'aura is also trained in Restorative Circles
              and Sociocracy, and she applies these approaches to her work with
              justice and governance in Auroville.
            </p>
            <p>
              L’aura has travelled and shared in different countries and
              contexts, ranging from the corporate sector, to schools, to NGOs
              working with women and street children, exploring NVC as a means
              to transformation and sustainable change. Most of her work has
              been in India, although she has also worked in Sri Lanka, Nepal,
              Canada, USA, UK and Switzerland.
            </p>
            <p>
              L'aura has been a pioneer in bringing NVC to India and has
              supported an ever-growing community to emerge. She has hosted and
              organized several large-scale international events here, and has
              published NVC books and teaching material.
            </p>
            <p>
              At the beginning of her career, L'aura was a high-school teacher,
              and she taught in both Canada and Auroville. Her main subjects
              were English and French as second languages, plus introductory
              courses to Sociology, Anthropology and Psychology. She specialized
              in the International Baccalaureate (IB) Program (an
              internationally accredited program) and taught senior IB students.
              She organized several extra-curricular programs for the students,
              including international travel programs, cultural outings, camping
              and trekking trips, and cross-country running.
            </p>
            <p>
              L'aura's personal interests lie in making deep connections with
              people, living a meaningful and sustainable life, contributing to
              community, and practicing yoga and being physically active.
            </p>
          </Copy>
          <Copy>
            <p style={{ marginBottom: 10 }}>
              <strong>In Action...</strong>
            </p>
            <Gallery
              data={this.props.data}
              lookup="img"
              columns={{ min: 2, max: 1 }}
              Img={Img}
            />
          </Copy>
        </StandardDiv>
      </StandardPage>
    )
  }
}

NVCPage.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default NVCPage
