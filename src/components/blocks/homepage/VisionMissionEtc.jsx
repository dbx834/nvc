// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import keygen from '../../../methods/keygen'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const data = [
  {
    image: '/assets/homepage/vision-mission-etc/sun.jpg',
    title: 'Vision',
    lead:
      'We envision a world where everyone’s needs matter, where we live in a consciousness of trust and abundance, knowing that each one of us inherently belongs, and that together we are more powerful than apart.',
  },
  {
    image: '/assets/homepage/vision-mission-etc/plant.jpg',
    title: 'Mission',
    lead:
      'Our mission is to live and share the principles of Nonviolence, not only in terms of an individual practice and way of life, but also in its application to social structures, such as in our families, schools, and organizations.',
  },
  {
    image: '/assets/homepage/vision-mission-etc/flower.jpg',
    title: 'Aims',
    lead:
      'We offer learning opportunities through workshops and practice groups on Nonviolent Communication and Restorative Circles. We are also available for individual coaching and mediation, and we are happy to consult with community-based projects that are seeking to shift paradigms.',
  },
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 30,

  '& > div': {
    flexGrow: 10,
    flexBasis: 0,
    paddingRight: '1.5em',

    '& h2': {
      marginBottom: '0px !important',
      fontWeight: '700 !important',
    },
  },

  '& > p': {
    flexGrow: 80,
    flexBasis: 0,
    marginBottom: '0px !important',
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * [description]
 * @return {[type]} [description]
 */
const VisionMissionEtc = () => {
  return (
    <Fragment>
      {map(data, datum => {
        const { image, title, lead } = datum

        return (
          <div className={style} key={keygen()}>
            <div>
              <Image
                src={image}
                rawWidth={900}
                rawHeight={900}
                style={{
                  width: 53,
                  height: 53,
                  border: 0,
                  background: 'transparent',
                  display: 'block',
                  marginBottom: 10,
                }}
                alt={`${title} - ${lead}`}
              />
              <h2 className="mask-p">{title}</h2>
            </div>
            <p>{lead}</p>
          </div>
        )
      })}
    </Fragment>
  )
}

// VisionMissionEtc.propTypes = {}

// --------------------------------------------------------------------- Export
export default VisionMissionEtc
