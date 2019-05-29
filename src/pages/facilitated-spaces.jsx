// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import map from 'lodash/map'
import isUndefined from 'lodash/isUndefined'
import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'
import Video from '@bodhi-project/components/lib/Video'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Copy from '../components/Copy'
import PageHeader from '../components/PageHeader'
import StandardDiv from '../components/StandardDiv'
import StandardPage from '../components/wrappers/StandardPage'

import Link from '../components/Link'

import seoHelper from '../methods/seoHelper'

import groupFacilitation from '../assets/groupFacilitation.png'
import individualCoaching from '../assets/individualCoaching.png'
import mediation from '../assets/mediation.png'
import restorativeCircles from '../assets/restorativeCircles.png'

import ogXFacilitated from '../assets/covers/ogXFacilitated.jpg'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

const pageData = {
  pageTitle: 'Facilitated Spaces',
  nakedPageSlug: 'facilitated-spaces',
  pageAbstract:
    'We facilitate meetings and hold space based primarily on the principles of Nonviolent Communication and Restorative Circles. In addition, we use practices from Sociocracy (shared-power governance) and Internal Family Systems (learning to recognize our inner parts and their messages), both of which offer powerful modalities for group and inner work.',
  pageBanner: ogXFacilitated,
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const offeringsData = [
  {
    image: mediation,
    title1: 'Mediation',
    lead:
      'Are you seeking support to dialogue with a friend, colleague or family member? If so, you might consider asking for a mediation or facilitated conversation, where we hold space for both parties to express themselves and to hear the other, and where we end with mutually beneficial agreements that support forward movement.',
  },
  {
    image: groupFacilitation,
    title1: 'Group',
    title2: 'Facilitation',
    lead:
      "Is your team struggling with internal dynamics, such that it's getting in the way of being able to fulfil your group's purpose? Would you like support to reconnect to your project's vision and to clarify next steps as a team?",
  },
  {
    image: individualCoaching,
    title1: 'Individual',
    title2: 'Coaching',
    lead:
      'Are you struggling with internal challenges? Would you like support to work through the stress or confusion, and to gain more self-understanding? If so, a coaching session may offer you the space to reconnect with yourself, and to make choices that feel more in alignment with your present needs.',
  },
  {
    image: restorativeCircles,
    title1: 'Restorative',
    title2: 'Circle',
    lead: (
      <Fragment>
        Are you impacted by an issue that involves several people from different
        parts of your community or network? You could initiate a{' '}
        <Link to="https://www.restorativeauroville.org/restorative-circles">
          Restorative Circle
        </Link>
        , which is a process designed to hold space for conflict within the
        context of community.
      </Fragment>
    ),
  },
]

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
          title="Facilitated Spaces"
          subTitle="We facilitate meetings and hold space based primarily on the principles of Nonviolent Communication and Restorative Circles."
          stashSubTitle
          hero="We facilitate meetings and hold space based primarily on the principles of Nonviolent Communication and Restorative Circles. In addition, we use practices from Sociocracy (shared-power governance) and Internal Family Systems (learning to recognize our inner parts and their messages), both of which offer powerful modalities for group and inner work."
        />
        <StandardDiv>
          <Copy>
            <p>
              We facilitate meetings and hold space based primarily on the
              principles of Nonviolent Communication and Restorative Circles. In
              addition, we use practices from&nbsp;
              <Link to="https://www.wikiwand.com/en/Sociocracy">
                Sociocracy
              </Link>
              &nbsp;(shared-power governance) and&nbsp;
              <Link to="https://selfleadership.org/">
                Internal Family Systems
              </Link>
              &nbsp;(learning to recognize our inner parts and their messages),
              both of which offer powerful modalities for group and inner work.
            </p>
            {map(offeringsData, (dataBit, index) => {
              const { image, title1, title2, lead, linkText, link } = dataBit

              return (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 50,
                  }}
                  key={`bit-${index}`}
                >
                  <div
                    style={{
                      flexGrow: 10,
                      flexBasis: 0,
                      paddingRight: '1.5em',
                    }}
                  >
                    <Image
                      src={image}
                      rawWidth={900}
                      rawHeight={900}
                      style={{
                        width: 55,
                        height: 55,
                        border: 0,
                        background: 'transparent',
                        display: 'block',
                        marginBottom: 10,
                      }}
                    />
                    <h2 className="mask-p" style={{ marginBottom: 0 }}>
                      {!isUndefined(title1) && <Fragment>{title1}</Fragment>}
                      {!isUndefined(title2) && (
                        <Fragment>
                          <br />
                          {title2}
                        </Fragment>
                      )}
                    </h2>
                  </div>
                  <p style={{ flexGrow: 80, flexBasis: 0, marginBottom: 0 }}>
                    {lead}&nbsp;
                    {!isUndefined(linkText) && (
                      <Fragment>
                        <Link to={link}>{linkText}</Link>.
                      </Fragment>
                    )}
                  </p>
                </div>
              )
            })}
          </Copy>
          <Copy>
            <h2 className="mask-p" style={{ marginBottom: 10 }}>
              Surya On Her Experience...
            </h2>
            <Video
              url="https://www.youtube.com/watch?v=uIyY6TDbnSQ"
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
            <h2 className="mask-p" style={{ marginBottom: 5 }}>
              A Participant Shares...
            </h2>
            <p
              style={{
                fontFamily: 'futura-pt, sans-serif',
                fontWeight: 200,
                marginBottom: 17,
                marginTop: 0,
              }}
            >
              <span style={{ fontSize: '125%' }}>
                <i>
                  “I contacted L’aura to hold a safe space for truth. I was
                  moved by her ability to catch our hidden needs, by the way she
                  connected us to our true, vulnerable and honest expression,
                  and the beauty of our needs and intention. She has the NVC
                  gift, the gift of unveiling our real essence: translating our
                  wounded expression into its true message of care, love and
                  peace, for ourselves and for others!”
                </i>{' '}
                <br />~ <strong>Michelle, 2015</strong>
              </span>
            </p>
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
                    to="/writings/celebrations-and-gratitude"
                  >
                    More Celebrations & Gratitude ⇝
                  </Link>
                </small>
              </p>
            </div>

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
                  "The training was very insightful. It helped us to bond as a
                  group, to understand the issues we face working as a team, and
                  how we can use NVC to resolve our issues. L'aura has a way of
                  creating an environment where we feel very comfortable to
                  share, to look within ourselves and participate from the
                  heart.
                </i>
                <br />~ <strong>Kesang, 2010</strong>
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
}

NVCPage.propTypes = {
  data: PropTypes.object,
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default NVCPage
