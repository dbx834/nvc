// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'
import map from 'lodash/map'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import ContainerDimensions from 'react-container-dimensions'

import Image from '@bodhi-project/components/lib/Image'

import Carousel from 'antd/lib/carousel'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/carousel/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import keygen from '../../../methods/keygen'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const data = [
  {
    image: '/assets/homepage/slider/slide1.jpg',
    text:
      'L’aura sharing her passion and giraffe ears with a youth program in Auroville, as they explored the applications of nonviolence in community (2018).',
  },
  {
    image: '/assets/homepage/slider/slide2.jpg',
    text:
      'L’aura teaching during an NVC Leadership Program in Mumbai, where participants journey through an intense 4-month program together (2014).',
  },
  {
    image: '/assets/homepage/slider/slide3.jpg',
    text:
      'An array of feelings and needs cards, as we deepen into our body’s wisdom and hear its message.',
  },
  {
    image: '/assets/homepage/slider/slide4.jpg',
    text:
      'A moment of connection after having explored our dream response to conflict and the principles and practice behind Restorative Circles, in Auroville (2017).',
  },
  {
    image: '/assets/homepage/slider/slide5.jpg',
    text:
      'Preparing for our Cross-Cultural Dialogue on Discrimination, in Auroville (2018).',
  },
]

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({}).toString()

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Locals
// ----------------------------------------------------------------------------
/** Carousel next arrow */
const NextArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <span style={{ fontSize: '250%' }}>
        <Icon
          type="right"
          style={{
            height: 'inherit',
            width: 'inherit',
            color: '#b43808',
            fontWeight: 700,
          }}
        />
      </span>
    </div>
  )
}

/** Carousel prev arrow */
const PrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <span style={{ fontSize: '250%' }}>
        <Icon
          type="left"
          style={{
            height: 'inherit',
            width: 'inherit',
            color: '#b43808',
            fontWeight: 700,
          }}
        />
      </span>
    </div>
  )
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * [description]
 * @return {[type]} [description]
 */
const StandardDiv = ({ children }) => {
  return (
    <div
      style={{
        display: 'block',
        width: '100%',
        marginBottom: 10,
      }}
    >
      <ContainerDimensions>
        {({ width }) => {
          const carouselWidth = width
          const carouselHeight = width * 0.625
          return (
            <div
              style={{
                width: carouselWidth,
                height: 'auto',
              }}
            >
              <Carousel
                autoplay
                arrows
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
              >
                {map(data, datum => {
                  const { image, text } = datum

                  return (
                    <div key={keygen()}>
                      <Image
                        src={image}
                        rawWidth={1440}
                        rawHeight={900}
                        style={{
                          width: carouselWidth,
                          height: carouselHeight,
                          border: 0,
                          background: 'transparent',
                          marginBottom: 20,
                        }}
                        loader="gradient"
                        alt={text}
                      />
                      <p>{text}</p>
                    </div>
                  )
                })}
              </Carousel>
            </div>
          )
        }}
      </ContainerDimensions>
    </div>
  )
}

// StandardDiv.propTypes = {}

// --------------------------------------------------------------------- Export
export default StandardDiv
