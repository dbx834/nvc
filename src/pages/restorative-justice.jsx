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

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/row/style/css'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/col/style/css'

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
            <h2 className="mask-h4">"The Power of Dialogue" Video Series</h2>
            <div
              style={{
                padding: 8,
                border: '1px dotted #b43808',
                borderRadius: 8,
                background: '#feece4',
              }}
            >
              <Division>
                <div>
                  <Video url="https://www.youtube.com/watch?v=ur4OvDPkoSE" />
                </div>
                <div>
                  <p>
                    <strong>
                      3.2 Designing our Justice System Consciously
                    </strong>
                    <br />
                    L'aura shares about her experience of engaging with
                    Restorative Circles in Auroville and the importance of
                    designing a justice system consciously, otherwise we'll just
                    inherit the old ways.
                  </p>
                </div>
              </Division>
              <Division>
                <div>
                  <Video url="https://www.youtube.com/watch?v=O40ut-RDcgI" />
                </div>
                <div>
                  <p style={{ marginBottom: 0 }}>
                    <strong>4.2 The Value of RC Facilitation</strong>
                    <br />
                    Pranjal reflects on his learning journey with RC
                    facilitation, and appreciates how the skills he has acquired
                    here can provide for a strong foundation in holding space in
                    different contexts.
                  </p>
                </div>
              </Division>
            </div>
            <p style={{ marginBottom: 0 }}>
              <Link to="https://www.restorativeauroville.org/the-power-of-dialogue">
                See more ⇝
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
