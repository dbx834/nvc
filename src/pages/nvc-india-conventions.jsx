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
// import Video from '@bodhi-project/components/lib/Video'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import FacebookGroup from '../components/FacebookGroup'

import Copy from '../components/Copy'
import PageHeader from '../components/PageHeader'
import StandardDiv from '../components/StandardDiv'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

const pageData = {
  pageTitle: 'NVC India Conventions',
  nakedPageSlug: 'nvc-india-conventions',
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
        <PageHeader
          title="NVC India Conventions"
          subTitle="NVC India Convention"
          stashSubTitle
        />
        <StandardDiv rightLine={false}>
          <Copy>
            <p>
              In collaboration with the “Institute of Nonviolent Communication
              in India (INVCI),” L’aura and Joy Living Learning hosted the first
              several NVC India Conventions:
            </p>
            <ul
              className="mask-p"
              style={{ paddingLeft: 0, listStyle: 'none' }}
            >
              <li>
                <strong>2010</strong>: Rishikesh
              </li>
              <li>
                <strong>2011</strong>: Pondicherry
              </li>
              <li>
                <strong>2012</strong>: Orissa
              </li>
              <li>
                <strong>2013</strong>: Kochi (in collaboration with Lifelong
                Learning Foundation, Kochi)
              </li>
            </ul>
            <p>See some videos here:</p>
            <p>
              <Link to="https://www.youtube.com/playlist?list=PLQbEiEQu-L1aAVLwNAso3Ip3aoq8EL-O5">
                <Icon type="youtube" /> 2010 Rishikesh
              </Link>
            </p>
            <p>
              <Link to="https://www.youtube.com/user/infoinvci/videos">
                <Icon type="youtube" /> 2011 Pondicherry & 2012 Orissa
              </Link>
            </p>
            <p>
              From 2014 onwards, the NVC India Conventions have been organized
              by the “Prep Team,” a group of NVC India Practitioners.
            </p>
          </Copy>
          <Copy>
            <FacebookGroup
              groupUrl="https://www.facebook.com/groups/nvc.india/"
              title="NVC India group on Facebook"
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
