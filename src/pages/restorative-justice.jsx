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
// import ContainerDimensions from "react-container-dimensions";
import FacebookWall from '../components/FacebookWall'

import Image from '@bodhi-project/components/lib/Image'
import Video from '@bodhi-project/components/lib/Video'
// import OutLink from "@bodhi-project/components/lib/OutLink";

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
  pageTitle: 'Restorative Justice',
  nakedPageSlug: 'restorative-justice',
  pageAbstract: 'Restorative Justice',
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
          title="Restorative Justice"
          subTitle="An alternative justice system based on the principles that underlie NVC-consciousness"
          stashSubTitle
          hero="The Restorative Justice movement has been gaining more and more attention around the world as a credible and powerful response to conflict."
        />
        <StandardDiv rightLine={false}>
          <Copy>
            <p>
              The Restorative Justice movement has been gaining more and more
              attention around the world as a credible and powerful response to
              conflict. And in our own little way, we are working towards
              building an alternative justice system in Auroville based on the
              principles that underlie NVC-consciousness.
            </p>
            <div className="margin-p">
              <Link
                to="https://www.restorativeauroville.org/"
                style={{ display: 'block' }}
              >
                <Image
                  src="/assets/rc-banner.png"
                  rawWidth={1440}
                  rawHeight={900}
                  style={{
                    border: 'none',
                    background: 'none',
                  }}
                />
              </Link>
            </div>
            <p>
              Our project,{' '}
              <Link to="https://www.restorativeauroville.org/">
                Restorative Auroville
              </Link>
              , aims to bring the practice of Restorative Circles, a holistic,
              community-based form of conflict resolution, to Auroville, and to
              explore what a consciously designed justice system could look like
              here – one that reflects our ideals, but that is also effective
              and has the power to bring about constructive change, both on the
              individual and community levels.
            </p>
            <h2 className="mask-h3">
              "The Power of Dialogue": The Restorative System
            </h2>
            <p>
              L'aura shares about her experience of engaging with Restorative
              Circles in Auroville and the importance of designing a justice
              system consciously, otherwise we'll just inherit the old ways.
            </p>
            <div style={{ maxWidth: 640 }} className="mask-p">
              <Video url="https://www.youtube.com/watch?v=ur4OvDPkoSE" />
            </div>
            <p>
              <Link to="https://www.restorativeauroville.org/the-power-of-dialogue">
                See our Video Series: "The Power of Dialogue" ⇝
              </Link>
            </p>
          </Copy>
          <Copy>
            <FacebookWall
              wallUrl="https://www.facebook.com/RestorativeAuroville/"
              title="Restorative Auroville on Facebook"
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
