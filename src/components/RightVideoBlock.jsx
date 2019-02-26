// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'

// import startsWith from 'lodash/startsWith'
// import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Video from '@bodhi-project/components/lib/Video'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  '& h2.mask-p': {
    fontWeight: '700 !important',
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** RightBlock */
const RightBlock = ({
  children,
  line = true,
  title = 'A Video',
  url,
  ...props
}) => {
  return (
    <div className={style} {...props}>
      {line === true && <hr />}
      <h2 className="mask-p" style={{ marginBottom: 10 }}>
        {title}
      </h2>
      <Video url={url} className="mask-p" style={{ marginTop: 0 }} />
    </div>
  )
}

// --------------------------------------------------------------------- Export
export default RightBlock
