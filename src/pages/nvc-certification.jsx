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
// import Link from "gatsby-link";
// import ContainerDimensions from "react-container-dimensions";

import Image from '@bodhi-project/components/lib/Image'
// import OutLink from "@bodhi-project/components/lib/OutLink";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import Copy from '../components/Copy'
import PageHeader from '../components/PageHeader'
import StandardDiv from '../components/StandardDiv'
import StandardPage from '../components/wrappers/StandardPage'
import RightVideoBlock from '../components/RightVideoBlock'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

const pageData = {
  pageTitle: 'Nonviolent Communication Certification',
  nakedPageSlug: 'nvc-certification',
  pageAbstract:
    'The Certification Process is a community-based process, where Candidates, Assessors, local Certified Trainers and NVC Practitioners come together to support and witness each Candidate’s journey.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({}).toString()

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
          title="Nonviolent Communication Certification"
          hero="The Certification Process is a community-based process, where Candidates, Assessors, local Certified Trainers and NVC Practitioners come together to support and witness each Candidate’s journey."
        />
        <StandardDiv>
          <Copy>
            <p>
              It’s a celebration that we have several Certification Candidates
              in India, preparing themselves to become Certified NVC Trainers.
              The Certification Process is a community-based process, where
              Candidates, Assessors, local Certified Trainers and NVC
              Practitioners come together to support and witness each
              Candidate’s journey.
            </p>
            <p>
              For the complete process and its requirements, please see the{' '}
              <Link to="https://www.cnvc.org/certification/process">
                Center for Nonviolent Communication’s page
              </Link>
              .
            </p>
          </Copy>
          <Copy>
            <RightVideoBlock
              title="Certification: An Invitation to Self-Inquiry"
              line={false}
              url="https://www.youtube.com/watch?v=YoGKAJqMCBk"
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
