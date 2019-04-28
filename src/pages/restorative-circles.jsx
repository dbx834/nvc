// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'
import Video from '@bodhi-project/components/lib/Video'
import FurtherLinks from '@bodhi-project/components/lib/FurtherLinks'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Copy from '../components/Copy'
import PageHeader from '../components/PageHeader'
import StandardDiv from '../components/StandardDiv'
import StandardPage from '../components/wrappers/StandardPage'

import Link from '../components/Link'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

const pageData = {
  pageTitle: 'Restorative Circles',
  nakedPageSlug: 'restorative-circles',
  pageAbstract:
    'A Restorative Circle (RC) is a community process designed to hold space for those in conflict. It brings together the three parties in a conflict – those who acted, those directly impacted, and the wider community – within an intentional systemic context, to dialogue as equals. Participants invite each other and attend voluntarily.',
  pageBanner: '/content-assets/restorative-circles/rc_800X561.png',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const furtherLinksData = [
  {
    linkTo: '/writings/restorative-circles-in-auroville',
    title: 'Restorative Circles in Auroville',
    image: '/content-assets/covers/restorative-circles-in-auroville.jpg',
  },
  {
    linkTo: '/writings/la-responsabilite-de-tous',
    title: 'La responsabilité de tous',
    image: '/content-assets/covers/la-responsabilite-de-tous.jpg',
  },
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** RCPage */
const RCPage = props => {
  return (
    <StandardPage
      className={pageStyle}
      seoData={seoData}
      {...pick(props, ['location'])}
    >
      <PageHeader
        title="Restorative Circles"
        subTitle="A Restorative Circle (RC) is a community process designed to hold space for those in conflict."
        stashSubTitle
        hero="A Restorative Circle (RC) is a community process designed to hold space for those in conflict. It brings together the three parties in a conflict – those who acted, those directly impacted, and the wider community – within an intentional systemic context, to dialogue as equals."
      />
      <StandardDiv>
        <Copy>
          <p>
            A Restorative Circle (RC) is a community process designed to hold
            space for those in conflict. It brings together the three parties in
            a conflict – those who acted, those directly impacted, and the wider
            community – within an intentional systemic context, to dialogue as
            equals. Participants invite each other and attend voluntarily. The
            dialogue process used is shared openly with all participants, and
            facilitated by a community member. The process ends when actions
            have been found that bring mutual benefit and nurture the inherent
            integrity of all those involved in the conflict.
          </p>
          <p>
            Restorative Circles are facilitated in 3 stages, and are designed to
            identify the key factors in the conflict, reach agreements on next
            steps, and evaluate the results. As Circles form, they invite shared
            power, mutual understanding, self-responsibility and effective
            action within the community.
          </p>
          <p>
            Restorative Circles are a specific restorative practice whose
            development began with the work of Dominic Barker in the favelas in
            Rio de Janeiro in the mid 1990s and continues with a growing
            community both in Brazil and internationally.
          </p>
          <p>
            [Source:&nbsp;
            <Link
              to="http://www.restorativecircles.org/"
              style={{ marginBottom: 10 }}
            >
              Dominic Barter and Restorative Circles
            </Link>
            ]
          </p>
          <Image
            className="mask-p"
            src="/content-assets/restorative-circles/rc_800X561.png"
            rawWidth={800}
            rawHeight={561}
            style={{
              width: '100%',
              height: 'auto',
              border: 0,
              background: 'transparent',
              display: 'block',
              paddingTop: 20,
            }}
          />

          <FurtherLinks
            data={furtherLinksData}
            className="desktop-only"
            title="Further Links"
            titleClass="mask-h3"
          />
        </Copy>
        <Copy>
          <h2 className="mask-p" style={{ marginBottom: 10 }}>
            On Justice In Auroville
          </h2>
          <Video
            url="https://www.youtube.com/watch?v=kqBM5Xr5VfI"
            style={{
              marginBottom: 10,
            }}
          />
          <div style={{ width: '100%', height: 18, marginBottom: 16 }}>
            <p
              style={{
                margin: 0,
              }}
            >
              <small>
                <Link
                  style={{
                    display: 'inline-block',
                    float: 'right',
                  }}
                  to="https://www.youtube.com/user/laurajoyful/videos"
                >
                  More Videos ⇝
                </Link>
              </small>
            </p>
          </div>

          <hr />
          <p
            style={{
              fontFamily: 'futura-pt, sans-serif',
              fontWeight: 200,
              marginBottom: 17,
            }}
          >
            <span style={{ fontSize: '125%' }}>
              <i>
                "Conflict is not a problem that needs solving, but a phenomenon
                that needs understanding."
              </i>
              <br />~ <strong>Dominic Barter</strong>
            </span>
          </p>

          <hr />
          <p
            style={{
              fontFamily: 'futura-pt, sans-serif',
              fontWeight: 200,
              marginBottom: 17,
            }}
          >
            <span style={{ fontSize: '125%' }}>
              <i>
                "Power without love is reckless and abusive, and love without
                power is sentimental and anemic. Power at its best is love
                implementing the demands of justice, and justice at its best is
                power correcting everything that stands against love."
              </i>
              <br />~ <strong>Martin Luther King Jr.</strong>
            </span>
          </p>

          <hr />
          <h2 className="mask-p" style={{ marginBottom: 5 }}>
            A Participant Shares...
          </h2>
          <p
            style={{
              fontFamily: 'futura-pt, sans-serif',
              fontWeight: 200,
              marginBottom: 20,
              marginTop: 0,
            }}
          >
            <span style={{ fontSize: '125%' }}>
              <i>
                "Recently I attended a workshop with L'aura. It was an amazing
                eye-opener, because it showed the possibility of how the whole
                community can get involved and learn to hold conflict, and to
                take responsibility for one's actions, without being crucified
                for one's so-called 'mistakes.'"
              </i>
              <br />~ <strong>Vikram, 2015</strong>
            </span>
          </p>
          <div style={{ width: '100%', height: 18, marginBottom: 30 }}>
            <p
              style={{
                margin: 0,
              }}
            >
              <small>
                <Link
                  style={{
                    display: 'inline-block',
                    float: 'right',
                  }}
                  to="/writings/celebrations-and-gratitude"
                >
                  More Celebrations & Gratitude ⇝
                </Link>
              </small>
            </p>
            {/*
                <hr />
            <FurtherLinks
              data={furtherLinksData}
              className="mobile-only"
              title="Further Links"
              titleClass="mask-h3"
            />
              */}
          </div>
        </Copy>
      </StandardDiv>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default RCPage
