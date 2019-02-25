// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import map from 'lodash/map'
import startsWith from 'lodash/startsWith'
import isUndefined from 'lodash/isUndefined'
import split from 'lodash/split'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Container from '@bodhi-project/components/lib/Container'
import Image from '@bodhi-project/components/lib/Image'

import { Type } from '@bodhi-project/typography'

import Popover from 'antd/lib/popover'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/popover/style/css'

import Modal from 'antd/lib/modal'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/modal/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'
import keygen from '../../methods/keygen'
import websiteMenu from '../../data/menu.json'

import ContactForm from '../blocks/contact/ContactForm'
import NewsletterForm from '../blocks/newsletter/NewsletterForm'
import Donate from '../blocks/donate/Donate'
import PayFee from '../blocks/pay-fee/PayFee'

import logo from '../../assets/logo.png'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// const style = css({
//   padding: 0,
//   maxHeight: '100vh',
//   overflowY: 'scroll',
//   overflowX: 'hidden',

//   '& ul': {
//     listStyle: 'none',
//     paddingLeft: 40,

//     '& li': {
//       fontFamily: 'futura-pt, sans-serif !important',
//       marginBottom: '0px !important',
//     },

//     '& li.header': {
//       fontWeight: '500 !important',
//       color: '#b43808 !important',

//       '& span': {
//         fontSize: '90%',
//         letterSpacing: '-0.08775ex',
//       },
//     },

//     '& li.header:not(:first-child)': {
//       marginTop: 20,
//     },

//     '& a': {
//       color: '#4a4a4a',
//       borderBottom: '1.625px solid transparent',
//       transition: '0.125s',
//       textTransform: 'uppercase',
//       letterSpacing: '0.14625ex',

//       '& span': {
//         fontSize: '66%',
//       },

//       '&:hover': {
//         color: '#4a4a4a',
//         borderBottom: '1.625px solid #4a4a4a',
//       },
//     },

//     '& a.active': {
//       color: '#BA6B02',
//     },
//   },
// }).toString()

const modalStyle = css({
  '& h1': {
    fontFamily: 'futura-pt, sans-serif !important',
    fontWeight: 700,
    marginTop: 0,
  },
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopNav */
class DesktopNav extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false,
      modalRoute: null,
    }

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  /** showModal */
  showModal(e, modalRoute) {
    if (!isUndefined(e)) {
      e.preventDefault()
    }
    this.setState({
      modalVisible: true,
      modalRoute,
    })
  }

  /** hideModal */
  hideModal(e) {
    if (!isUndefined(e)) {
      e.preventDefault()
    }
    this.setState({
      modalVisible: false,
    })
  }

  /** standard renderer */
  render() {
    const {
      location: { pathname },
    } = this.props
    const { modalRoute } = this.state

    return (
      <header className="desktop-only desktop-nav">
        <Container bleed block>
          <h1 style={{ fontSize: 0, marginBottom: 0 }}>
            <Link to="/" style={{ display: 'block' }}>
              <Image
                src={logo}
                rawWidth={842}
                rawHeight={936}
                style={{
                  height: 156,
                  width: 140,
                  border: 'unset',
                  background: 'unset',
                  marginLeft: 40,
                  marginBottom: 26,
                  marginTop: 26,
                }}
                loader="gradient"
                alt="NVC India"
              />
            </Link>
            Joy Living Learning
          </h1>
          <nav>
            <ul>
              {map(websiteMenu, topLevel => {
                const { title, menu } = topLevel
                return (
                  <Fragment key={keygen()}>
                    <li className="header">
                      <span>{title}</span>
                    </li>
                    {map(menu, subMenu => {
                      const subTitle = subMenu.title
                      const popMenu = subMenu.menu
                      const { link } = subMenu
                      const { menuPopoverLocation, renderInModal } = subMenu
                      const isOutLink = startsWith(link, 'http')
                      const asModal = renderInModal === true
                      const active =
                        pathname === split(link, '?', 1)[0] ? 'active' : ''

                      return (
                        <Fragment key={keygen()}>
                          {isUndefined(popMenu) && (
                            <li>
                              {asModal === true ? (
                                <Link
                                  to={link}
                                  onClick={e => {
                                    this.showModal(e, link)
                                  }}
                                  className={active}
                                >
                                  <span>{subTitle}</span>
                                </Link>
                              ) : (
                                <Link to={link} className={active}>
                                  <span>{subTitle}</span>
                                </Link>
                              )}
                            </li>
                          )}
                          {!isUndefined(popMenu) && (
                            <li>
                              <Popover
                                placement={menuPopoverLocation}
                                content={
                                  <div className="menu-tip">
                                    <ul>
                                      {map(popMenu, popMenuItem => {
                                        const itemTitle = popMenuItem.title
                                        const itemLink = popMenuItem.link
                                        const itemActive =
                                          pathname ===
                                          split(itemLink, '?', 1)[0]
                                            ? 'active'
                                            : ''

                                        return (
                                          <li key={keygen()}>
                                            <Link
                                              to={itemLink}
                                              className={itemActive}
                                            >
                                              <span>{itemTitle}</span>
                                            </Link>
                                          </li>
                                        )
                                      })}
                                    </ul>
                                  </div>
                                }
                              >
                                <Link to={link} className={active}>
                                  <span>{subTitle}</span>
                                  {!isOutLink && (
                                    <span style={{ fontSize: '88%' }}>
                                      &nbsp;»
                                    </span>
                                  )}
                                </Link>
                              </Popover>
                            </li>
                          )}
                        </Fragment>
                      )
                    })}
                  </Fragment>
                )
              })}
            </ul>
          </nav>
          <Modal
            visible={this.state.modalVisible}
            bodyStyle={{
              minWidth: '640px',
              minHeight: '480px',
              padding: 0,
            }}
            style={{
              minWidth: '640px',
              minHeight: '480px',
              top: 30,
              padding: 0,
              borderRadius: 8,
            }}
            title={null}
            closable={false}
            footer={[null, null]}
          >
            <Type
              kit="dkc2ilk"
              style={{
                minWidth: '640px',
                minHeight: '480px',
              }}
              className={modalStyle}
              options={{
                range: [15, 21], // Min and Max font-sizes
                paragraphSpacingFactor: 1.2, // Greater for tighter paragraph-paragraph spacing
                headingParagraphGapSpacingFactor: 0.95, // Greater for tighter header-paragraph spacing
                indentParagraphs: false,
              }}
            >
              <main
                style={{
                  minWidth: '640px',
                  minHeight: '480px',
                  padding: '1.5rem',
                  backgroundColor: '#f8f2e6',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    display: 'inline-block',
                    top: 30,
                    right: '1.5rem',
                    zIndex: 10,
                    marginBottom: 0,
                  }}
                  className="mask-p"
                >
                  <a
                    href="#"
                    onClick={e => {
                      this.hideModal(e)
                    }}
                  >
                    Close
                  </a>
                </div>
                {modalRoute === '/contact-us' && <ContactForm />}
                {modalRoute === '/newsletter' && <NewsletterForm />}
                {modalRoute === '/pay-fee' && <PayFee />}
                {modalRoute === '/donate' && <Donate />}
              </main>
            </Type>
          </Modal>
        </Container>
      </header>
    )
  }
}

DesktopNav.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
}

// --------------------------------------------------------------------- Export
export default DesktopNav
