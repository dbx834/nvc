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

// import Image from '@bodhi-project/components/lib/Image'
// import OutLink from "@bodhi-project/components/lib/OutLink";
import Video from '@bodhi-project/components/lib/Video'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'

import Copy from '../components/Copy'
import PageHeader from '../components/PageHeader'
import StandardDiv from '../components/StandardDiv'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

const pageData = {
  pageTitle: 'NVC India Convention',
  nakedPageSlug: 'nvc-india-convention',
  pageAbstract: 'NVC India Convention',
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
        <PageHeader title="NVC India Convention" />
        <StandardDiv>
          <Copy>
            <p>
              In collaboration with the “Institute of Nonviolent Communication
              in India (INVCI),” L’aura and Joy Living Learning hosted the first
              several NVC India Conventions:
            </p>
            <ol className="mask-p">
              <li>2010: Rishikesh</li>
              <li>2011: Pondicherry</li>
              <li>2012: Orissa</li>
              <li>
                2013: Kochi (in collaboration with Lifelong Learning Foundation,
                Kochi)
              </li>
            </ol>
            <p>See some videos here:</p>
            <p>
              <Link to="https://www.youtube.com/playlist?list=PLQbEiEQu-L1aAVLwNAso3Ip3aoq8EL-O5">
                https://www.youtube.com/playlist?list=PLQbEiEQu-L1aAVLwNAso3Ip3aoq8EL-O5
              </Link>
            </p>
            <p>
              <Link to="https://www.youtube.com/user/infoinvci/videos">
                https://www.youtube.com/user/infoinvci/videos
              </Link>
            </p>
            <p>
              From 2014 onwards, the NVC India Conventions have been organized
              by the “Prep Team,” a group of NVC India Practitioners.
            </p>
          </Copy>
          <Copy>&nbsp;</Copy>
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
