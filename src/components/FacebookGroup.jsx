// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { FacebookProvider, Group } from 'react-facebook'
import ContainerDimensions from 'react-container-dimensions'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * [description]
 * @return {[type]} [description]
 */
const About = ({
  groupUrl = 'https://www.facebook.com/JoyLivingLearning',
  title = 'Find us on Facebook',
}) => {
  return (
    <Fragment>
      <hr />
      <h2 className="mask-p" style={{ marginBottom: 13 }}>
        {title}
      </h2>
      <ContainerDimensions>
        {({ width }) => {
          const roundedWidth = Math.round(width - 1)
          return (
            <div style={{ width: roundedWidth }}>
              <FacebookProvider appId="218604115574634">
                <Group
                  href={groupUrl}
                  width={`${roundedWidth}px`}
                  showSocialContext={true}
                  showMetaData={true}
                  skin="dark"
                />
              </FacebookProvider>
            </div>
          )
        }}
      </ContainerDimensions>
    </Fragment>
  )
}

// About.propTypes = {}

// --------------------------------------------------------------------- Export
export default About
