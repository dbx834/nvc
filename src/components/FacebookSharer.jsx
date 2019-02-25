// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { FacebookProvider, Like as FBLike } from 'react-facebook'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import withUrl from '../methods/withUrl'
import data from '../data/website.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** FacebookSharer */
const FacebookSharer = ({ route }) => {
  return (
    <div style={{ position: 'relative' }} className="mask-p">
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 101,
          backgroundColor: '#ffffff',
          zIndex: 10,
          height: 20,
          width: 'calc(100% - 96px)',
        }}
      />
      <div style={{ maxWidth: 96 }} id="fb">
        <FacebookProvider appId="218604115574634">
          <FBLike
            href={withUrl(route, data)}
            colorScheme="dark"
            showFaces
            share
          />
        </FacebookProvider>
      </div>
    </div>
  )
}

FacebookSharer.propTypes = {
  route: PropTypes.string,
}

// --------------------------------------------------------------------- Export
export default FacebookSharer
