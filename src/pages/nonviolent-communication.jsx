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

import nvcTreeOfLife from '../assets/covers/nvcTreeOfLife.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const furtherLinksData = [
  {
    linkTo: '/writings/embracing-interdependence-with-nonviolent-communication',
    title: 'Embracing Interdependence with Nonviolent Communication',
    image:
      '/content-assets/covers/embracing-interdependence-with-nonviolent-communication.jpg',
  },
  {
    linkTo: '/writings/what-does-nvc-mean-to-you',
    title: 'Embracing Interdependence with Nonviolent Communication',
    image:
      'https://images.unsplash.com/photo-1518983498539-c6e66c62f6b3?ixlib=rb-0.3.5&s=580f065422952f086541ba61e8ae5304&auto=format&fit=crop&w=1440&h=900',
  },
]

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: 'Nonviolent Communication',
  nakedPageSlug: 'nonviolent-communication',
  pageAbstract:
    'Nonviolent Communication (NVC) contains nothing new. It is based on historical principles of nonviolence – the natural state of compassion when no violence is present in the heart. NVC reminds us what we already instinctively know about how good it feels to authentically connect to another human being.',
  pageBanner: nvcTreeOfLife,
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
const NVCPage = props => {
  return (
    <StandardPage
      className={pageStyle}
      seoData={seoData}
      {...pick(props, ['location'])}
    >
      <PageHeader
        title="Nonviolent Communication"
        subTitle="Nonviolent Communication is based on historical principles of nonviolence - the natural state of compassion when no violence is present in the heart"
        stashSubTitle
        hero="Nonviolent Communication (NVC) contains nothing new. It is based on historical principles of nonviolence – the natural state of compassion when no violence is present in the heart. NVC reminds us what we already instinctively know about how good it feels to authentically connect to another human being."
      />
      <StandardDiv>
        <Copy>
          <p>
            Nonviolent Communication (NVC) contains nothing new. It is based on
            historical principles of nonviolence – the natural state of
            compassion when no violence is present in the heart. NVC reminds us
            what we already instinctively know about how good it feels to
            authentically connect to another human being.
          </p>
          <p>
            With NVC we learn to hear our own deeper needs and those of others.
            Through its emphasis on deep listening to ourselves as well as
            others, NVC helps us discover the depth of our own compassion. This
            language reveals the awareness that all human beings are only trying
            to honor universal values and needs, every minute, every day.
          </p>
          <p>
            NVC can be seen as both a spiritual practice that helps us see our
            common humanity, using our power in a way that honors everyone’s
            needs, and a concrete set of skills which help us create
            life-serving families and communities.
          </p>
          <p>The form is simple, yet powerfully transformative.</p>
          <Image
            src={nvcTreeOfLife}
            rawWidth={1100}
            rawHeight={1424}
            style={{
              width: '80%',
              height: 'auto',
              border: 0,
              background: 'transparent',
              display: 'block',
            }}
            className="mask-p"
          />
          <p>
            Through the practice of NVC, we can learn to clarify what we are
            observing, what emotions we are feeling, what values we want to live
            by, and what we want to ask of ourselves and others. We will no
            longer need to use the language of blame, judgment or domination. We
            can experience the deep pleasure of contributing to each other’s
            well being.
          </p>
          <p>
            NVC creates a path for healing and reconciliation in its many
            applications, ranging from intimate relationships, work settings,
            health care, social services, police, prison staff and inmates, to
            governments, schools and social change organizations.
          </p>
          <p style={{ marginBottom: 40 }}>
            [Source:&nbsp;
            <Link to="http://www.cnvc.org/">Marshall Rosenberg and CNVC</Link>]
          </p>
          <FurtherLinks
            data={furtherLinksData}
            className="desktop-only"
            title="Further Links"
            titleClass="mask-h3"
          />
        </Copy>
        <Copy>
          <h2 className="mask-p" style={{ marginBottom: 11 }}>
            Why Learn NVC?
          </h2>
          <Video
            url="https://www.youtube.com/watch?v=w0xrRihEK6A"
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
                "All that has been integrated into NVC has been known for
                centuries about consciousness, language, communication skills,
                and use of power that enable us to maintain a perspective of
                empathy for ourselves and others, even under trying conditions."
              </i>
              <br />~ <strong>Marshall B. Rosenberg, Phd</strong>
            </span>
          </p>
          <hr />
          <h2 className="mask-p" style={{ marginBottom: 11 }}>
            Jonas shares about his experience with NVC…
          </h2>
          <Video
            url="https://www.youtube.com/watch?v=Kler8yy4OUc"
            style={{
              marginBottom: 17,
            }}
          />
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
                "… Thank you for all you have done and all that you are --
                grounded, free flowing, demanding, accepting, caring, patient,
                happy, unhappy, an expert, a learner and super fun!"
              </i>
              <br />~ <strong>Sonali, 2014</strong>
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
          </div>
        </Copy>
      </StandardDiv>
    </StandardPage>
  )
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default NVCPage
