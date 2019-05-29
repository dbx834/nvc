// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types';
// import _ from 'lodash';
import { css } from 'glamor'
import pick from 'lodash/pick'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from '../components/Link';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Copy from '../components/Copy'
import PageHeader from '../components/PageHeader'
import StandardDiv from '../components/StandardDiv'
import StandardPage from '../components/wrappers/StandardPage'
import Donate from '../components/blocks/donate/Donate'
import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: 'Donate',
  nakedPageSlug: 'donate',
  pageAbstract:
    'Joy Living Learning is a Unit under the Auroville Foundation, which is a Charitable Trust under the Ministry of Human Resources (Indian Government). Your donation will support Joy Living Learning in its mission to share the principles of applied nonviolence in different communities and sectors, such as education, governance, and the corporate world.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const pageStyle = css({
  '& .ant-form-item': {
    width: '100% !important',
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
class Page extends React.Component {
  /** standard renderer */
  render() {
    return (
      <StandardPage
        className={pageStyle}
        seoData={seoData}
        {...pick(this.props, ['location'])}
      >
        <PageHeader title="Donate" />
        <StandardDiv>
          <Copy>
            <Donate />
          </Copy>
        </StandardDiv>
      </StandardPage>
    )
  }
}

Page.propTypes = {}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
