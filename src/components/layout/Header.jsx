// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'

import map from 'lodash/map'
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Container from '@bodhi-project/components/lib/Container'
import Image from '@bodhi-project/components/lib/Image'
import keygen from '@bodhi-project/components/lib/methods/keygen'

import Menu from 'antd/lib/menu'
import '@bodhi-project/antrd/lib/restorative-auroville/3.10.0/menu/style/css'

import Drawer from 'antd/lib/drawer'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/drawer/style/css'

import Button from 'antd/lib/button'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/button/style/css'

import Icon from 'antd/lib/icon'
import '@bodhi-project/antrd/lib/joy-living-learning/3.13.5/icon/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../Link'
import websiteMenu from '../../data/menu.json'

import logo from '../../assets/logo.png'
import mobileLogo from '../../assets/mobileLogo.webp'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { SubMenu } = Menu

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const styleX = css({
  '&#header': {
    // Mobile
    '@media(max-width: 992px)': {
      paddingTop: '1rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',

      '& div.spaced': {
        display: 'flex',
        justifyContent: 'space-between',
      },

      '& a.title': {
        // padding: '30px 0px 5px 0px',
        display: 'flex',
        height: 'auto',
        justifyContent: 'space-between',
        borderBottom: 'unset',

        '& h1': {
          height: 65,
          marginBottom: 0,
          flexBasis: 'auto',
          textIndent: '-9999em',
          backgroundRepeat: 'no-repeat',

          // iPhone
          width: 200,
          paddingLeft: 45,
          backgroundSize: '200px 45px',
          backgroundPosition: '0% 10px',

          // iPhone +
          '@media(min-width: 340px)': {
            width: 263,
            paddingLeft: 60,
            backgroundSize: '263px 60px',
            backgroundPosition: '0% 0%',
          },
        },

        '&:hover': {
          borderBottom: 'unset',
        },
      },
    },

    // Desktop
    '@media(min-width: 992px)': {
      flexGrow: 19,
      flexBasis: 0,
      padding: 0,
      maxHeight: '100vh',
      overflowY: 'scroll',
      overflowX: 'hidden',
    },

    '& .top-logo': {
      border: 'unset',
      background: 'unset',
      marginLeft: 40,
      marginTop: 26,
      marginBottom: 11,
      height: '100px !important',
      width: '90px !important',

      '@media(min-width: 1200px)': {
        marginBottom: 17,
        height: '120px !important',
        width: '108px !important',
      },

      '@media(min-width: 1500px)': {
        marginBottom: 26,
        height: '150px !important',
        width: '135px !important',
      },
    },
  },

  // Both
  '& nav': {
    '& .ant-menu': {
      background: 'unset !important',
      padding: 'unset !important',
      textTransform: 'unset !important',
    },

    '& #fix.ant-menu-root > .ant-menu-item': {
      '@media(max-width: 992px)': {
        '&:first-child': {
          lineHeight: '19px !important',
          height: '19px !important',
          margin: '0px',
          fontSize: 'inherit !important',
          fontWeight: '500 !important',
          color: '#b43808 !important',
          textTransform: 'unset !important',
        },
      },

      '@media(min-width: 1200px)': {
        '&:first-child': {
          lineHeight: '21px !important',
          height: '21px !important',
        },
      },

      '@media(min-width: 1500px)': {
        '&:first-child': {
          lineHeight: '24px !important',
          height: '24px !important',
        },
      },
    },

    '& .ant-menu-submenu': {
      ':not(:first-child)': {
        '@media(max-width: 992px)': {
          marginTop: 4,
        },
        '@media(min-width: 992px)': {
          marginTop: 8,
        },
        '@media(min-width: 1200px)': {
          marginTop: 12,
        },
        '@media(min-width: 1500px)': {
          marginTop: 16,
        },
      },
    },

    '& .ant-menu-submenu-title': {
      cursor: 'default !important',
      lineHeight: '19px !important',
      height: '19px !important',
      margin: '0px',
      fontSize: 'inherit !important',
      fontWeight: '500 !important',
      color: '#b43808 !important',

      '@media(min-width: 1200px)': {
        lineHeight: '21px !important',
        height: '21px !important',
      },

      '@media(min-width: 1500px)': {
        lineHeight: '24px !important',
        height: '24px !important',
      },

      '@media(min-width: 992px)': {
        paddingLeft: '40px !important',
        paddingRight: '40px !important',

        '& span': {
          fontSize: '90%',
        },
      },

      '& span': {
        letterSpacing: '-0.08775ex',
      },

      '& .ant-menu-submenu-arrow': {
        display: 'none !important',
      },

      '& a': {
        fontWeight: '500 !important',
        color: '#b43808 !important',

        '&:hover': {
          color: '#b43808 !important',
        },
      },
    },

    '& .ant-menu-item': {
      lineHeight: '19px !important',
      height: '19px !important',
      margin: '0px !important',

      '@media(min-width: 1192px)': {
        lineHeight: '21px !important',
        height: '21px !important',
      },

      '@media(min-width: 1392px)': {
        lineHeight: '24px !important',
        height: '24px !important',
      },

      '& a': {
        color: '#4a4a4a',
        transition: '0.125s',
        textTransform: 'uppercase',
        letterSpacing: '0.14625ex',
        overflow: 'hidden',
        textOverflow: 'ellipsis',

        '& span': {
          fontSize: '88%',
        },

        '@media(min-width: 992px)': {
          '& span': {
            fontSize: '62%',
          },
        },

        '&:hover': {
          color: '#BA6B02',
        },
      },
    },

    '& .ant-menu-sub': {
      '& .ant-menu-item': {
        '@media(min-width: 992px)': {
          paddingLeft: '40px !important',
          paddingRight: '40px !important',
        },
      },
    },
  },

  '& .ant-drawer-content-wrapper': {
    maxWidth: '400px !important',
    width: '90% !important',

    '& .ant-drawer-body': {
      paddingLeft: '1rem !important',
      paddingRight: '1rem !important',
      paddingTop: '20px !important',
      paddingBottom: '20px !important',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',

      '& nav': {
        flexGrow: 1,
        flexBasis: 0,
      },

      '& .ant-menu-inline': {
        border: 'unset !important',
      },

      '& .ant-menu-sub.ant-menu-inline > .ant-menu-item': {
        paddingLeft: '36px !important',
        lineHeight: '19px !important',
        height: '19px !important',

        '@media(max-width: 1192px)': {
          lineHeight: '21px !important',
          height: '21px !important',
        },

        '@media(max-width: 1392px)': {
          lineHeight: '24px !important',
          height: '24px !important',
        },
        margin: '0px',
      },

      '& .ant-menu-sub': {
        marginTop: 0,

        '& .ant-menu-item': {
          '&:last-child': {
            marginBottom: 5,
          },
        },
      },
    },
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
      visible: false,
    }

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.showDrawer = this.showDrawer.bind(this)
    this.onClose = this.onClose.bind(this)
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
    const { mode, isDesktop, typeClass, location } = this.props
    const { pathname } = location
    const { modalRoute, visible } = this.state

    return (
      <header className={`${styleX}`} id="header">
        {isDesktop === true && (
          <Container bleed block>
            <Link to="/" style={{ display: 'block' }}>
              <h1 style={{ fontSize: 0, marginBottom: 0 }}>
                <Image
                  src={logo}
                  rawWidth={842}
                  rawHeight={936}
                  className="top-logo"
                  loader="gradient"
                  alt="NVC India"
                />
                Joy Living Learning
              </h1>
            </Link>
            <nav>
              <Menu
                mode="inline"
                onClick={this.handleClick}
                // selectedKeys={[current]}
                forceSubMenuRender
                defaultOpenKeys={[
                  'About',
                  'Workshops & Facilitation',
                  'Learn',
                  'More',
                ]}
                id="fix"
              >
                {map(websiteMenu, topLevel => {
                  const { title, menu, link, mobileOnly } = topLevel
                  let returnObj = <Fragment key={keygen()} />
                  if (mobileOnly === false) {
                    if (isUndefined(link)) {
                      returnObj = (
                        <SubMenu title={<span>{title}</span>} key={title}>
                          {map(menu, subMenu => {
                            const { title: subTitle, link: thisLink } = subMenu
                            return (
                              <Menu.Item key={keygen()}>
                                <Link to={thisLink} title={subTitle}>
                                  <span>{subTitle}</span>
                                </Link>
                              </Menu.Item>
                            )
                          })}
                        </SubMenu>
                      )
                    } else {
                      returnObj = (
                        <Menu.Item key={keygen()}>
                          <Link to={link} title={title}>
                            <span>{title}</span>
                          </Link>
                        </Menu.Item>
                      )
                    }
                  }

                  return returnObj
                })}
              </Menu>
            </nav>
          </Container>
        )}
        {isDesktop === false && (
          <Fragment>
            <div className="spaced">
              <Link to="/" className="title">
                <h1
                  style={{
                    backgroundImage: `url(${mobileLogo})`,
                  }}
                >
                  <span>Joy Living Learning</span>
                </h1>
              </Link>
              <div style={{ paddingTop: 14 }}>
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
              width="50%"
              className={`${typeClass} ${styleX}`}
            >
              <nav>
                <Menu
                  mode="inline"
                  onClick={this.handleClick}
                  // selectedKeys={[current]}
                  forceSubMenuRender
                  defaultOpenKeys={[
                    'About',
                    'Workshops & Facilitation',
                    'Learn',
                    'More',
                  ]}
                >
                  {map(websiteMenu, topLevel => {
                    const { title, menu, link } = topLevel
                    let returnObj = <Fragment key={keygen()} />
                    if (isUndefined(link)) {
                      returnObj = (
                        <SubMenu
                          title={
                            <Link to="#">
                              <span>{title}</span>
                            </Link>
                          }
                          key={title}
                          disabled
                        >
                          {map(menu, subMenu => {
                            const { title: subTitle, link: thisLink } = subMenu
                            return (
                              <Menu.Item key={keygen()}>
                                <Link to={thisLink}>
                                  <span>{subTitle}</span>
                                </Link>
                              </Menu.Item>
                            )
                          })}
                        </SubMenu>
                      )
                    } else {
                      returnObj = (
                        <Menu.Item key={keygen()}>
                          <Link to={link}>
                            <span>{title}</span>
                          </Link>
                        </Menu.Item>
                      )
                    }

                    return returnObj
                  })}
                </Menu>
              </nav>
            </Drawer>
          </Fragment>
        )}
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
