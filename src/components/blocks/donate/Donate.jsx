// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import { css } from 'glamor'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/button/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styles = css({
  marginBottom: 60,

  '& .ant-btn-primary': {
    backgroundColor: '#b43808',
    borderColor: '#ffffff',

    '& a': {
      color: '#ffffff !important',
      borderBottom: 'unset',

      '&:hover': {
        color: '#ffffff !important',
        borderBottom: 'unset',
      },
      '&:visited': {
        textDecoration: 'none',
      },
      '&:link': {
        textDecoration: 'none',
      },
      '&:active': {
        textDecoration: 'none',
      },
    },

    '&:hover': {
      backgroundColor: '#ffffff',
      borderColor: '#b43808',

      '& a': {
        color: '#b43808 !important',
      },
    },
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Donate */
class Donate extends React.Component {
  /** standard renderer */
  render() {
    return (
      <div className={styles}>
        <h1>Donate</h1>
        <p style={{ marginTop: 0 }}>
          If you’d like to make a donation to Joy Living Learning, you may do so
          below. This will link directly to the Auroville Foundation payment
          gateway page, and you will be able to receive a tax exemption.
        </p>
        <div className="mask-p">
          <Button type="primary" style={{ marginTop: 10, marginBottom: 10 }}>
            <Link to="https://www.auroville.com/donations/">Donate Now</Link>
          </Button>
        </div>
        <p>
          Please email&nbsp;
          <Link to="mailto:joylivinglearning@gmail.com" outLink>
            joylivinglearning@gmail.com
          </Link>
          &nbsp; to let us know that you have sent a donation, so that we can
          track it.
        </p>
        <p>
          Joy Living Learning is a Unit under the Auroville Foundation, which is
          a Charitable Trust under the Ministry of Human Resources (Indian
          Government). Your donation will support Joy Living Learning in its
          mission to share the principles of applied nonviolence in different
          communities and sectors, such as education, governance, and the
          corporate world.
        </p>
        <p>
          If you would like more detailed information about our projects,&nbsp;
          <Link to="/contact-us">contact us</Link>.
        </p>
      </div>
    )
  }
}

Donate.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Donate
