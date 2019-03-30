// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { css } from 'glamor'
import map from 'lodash/map'
import startsWith from 'lodash/startsWith'
import isUndefined from 'lodash/isUndefined'
import split from 'lodash/split'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Image from '@bodhi-project/components/lib/Image'

import Drawer from 'antd/lib/drawer'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/drawer/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/button/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import keygen from '../../methods/keygen'

import Link from '../Link'
import websiteMenu from '../../data/menu.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  padding: '2rem',
}).toString()

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** MobileNav */
class MobileNav extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }

    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  /** onClose */
  onClose() {
    this.setState({
      visible: false,
    })
  }

  /** showDrawer */
  showDrawer() {
    this.setState({
      visible: true,
    })
  }

  /** standard renderer */
  render() {
    const { visible } = this.state
    // const { pathname } = this.props.location
    const pathname = {}
    const className = `${style} mobile-only`

    return (
      <aside id="mobile-nav" className={className}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <p
            style={{
              display: 'inline-block',
              // lineHeight: '60px',
              marginBottom: 0,
            }}
            className="mask-h1"
          >
            <Link
              to="/"
              style={{
                display: 'block',
                border: 'unset',
                marginBottom: 0,
              }}
            >
              Joy Living Learning
            </Link>
          </p>
          <div style={{ paddingTop: 7 }}>
            <Button type="primary" onClick={this.showDrawer}>
              <Icon type="menu-fold" theme="outlined" />
            </Button>
          </div>
        </div>
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={visible}
          style={{
            padding: 0,
          }}
        >
          <nav style={{ height: '100%' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {map(websiteMenu, topLevel => {
                const { title, menu } = topLevel
                return (
                  <Fragment key={keygen()}>
                    <li
                      className="header"
                      key={title}
                      style={{ marginTop: 10 }}
                    >
                      <span>{title}</span>
                    </li>
                    {map(menu, subMenu => {
                      const subTitle = subMenu.title
                      const popMenu = subMenu.menu
                      const { link } = subMenu
                      const isOutLink = startsWith(link, 'http')
                      const active =
                        pathname === split(link, '?', 1)[0] ? 'active' : ''

                      return (
                        <Fragment key={keygen()}>
                          {isUndefined(popMenu) && (
                            <li key={link}>
                              <Link to={link} className={active}>
                                <span>{subTitle}</span>
                              </Link>
                            </li>
                          )}
                          {!isUndefined(popMenu) && (
                            <li key={subTitle}>
                              <Link to={link} className={active}>
                                <span>{subTitle}</span>
                                {!isOutLink && (
                                  <span style={{ fontSize: '88%' }}>
                                    &nbsp;»
                                  </span>
                                )}
                              </Link>
                              <ul>
                                {map(popMenu, popMenuItem => {
                                  const itemTitle = popMenuItem.title
                                  const itemLink = popMenuItem.link
                                  const itemActive =
                                    pathname === split(itemLink, '?', 1)[0]
                                      ? 'active'
                                      : ''
                                  return (
                                    <li key={itemLink} key={keygen()}>
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
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </Drawer>
      </aside>
    )
  }
}

MobileNav.propTypes = {}

// --------------------------------------------------------------------- Export
export default MobileNav
