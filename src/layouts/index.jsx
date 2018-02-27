// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import moment from 'moment';
import _ from 'lodash';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
import { Row, Col, Icon } from 'antd';
import {
  CompositeHeader,
  Container,
  OutLink,
  Image,
} from '@bodhi-project/components';
import { Elements, Type, applyRhythm } from '@bodhi-project/typography';
import {
  Header as SemanticHeader,
  Footer as SemanticFooter,
} from '@bodhi-project/semantic-webflow';
import {
  InitializeMeta,
  UpdateTitle,
  WebsiteSchema,
  OrganisationSchema,
} from '@bodhi-project/seo';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import '../styles/index.less';
import mobileLogo from './assets/mobileLogo.png';
import mobileBurger from './assets/mobileBurger.png';
import mobileCross from './assets/mobileCross.png';
import indexImage from '../pages/assets/launch.jpg';
import packageJson from '../../package.json';
import waves from './assets/waves.png';
import boat from './assets/boat.png';
import facebook from './assets/facebook.png';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const {
  ResponsiveHeader,
  DesktopHeader,
  MobileMenu,
  MobileHeader,
} = CompositeHeader;
// const { Fragment } = React;
const { H1, Paragraph, Ul } = Elements;
const { data } = packageJson;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------- Global SEO
// ----------------------------------------------------------------------------
const websiteSchemaData = {
  url: data.websiteUrl,
  name: data.websiteName,
  description: data.websiteDescription,
  author: data.org.name,
  publisher: data.org.name,
  image: indexImage,
};

const organisationSchemaData = {
  name: data.org.name,
  legalName: data.org.legalName,
  url: data.org.url,
  logo: `${data.org.url}${data.org.logo}`,
  foundingDate: moment(data.org.foundingDate).format(),
  founders: data.org.founders,
  streetAddress: data.orgLocation.streetAddress,
  addressLocality: data.orgLocation.addressLocality,
  addressRegion: data.orgLocation.addressRegion,
  postalCode: data.orgLocation.postalCode,
  addressCountry: data.orgLocation.addressCountry,
  telephone: data.orgContact.telephone,
  email: data.orgContact.email,
  sameAs: data.orgSocialMediaProfiles,
  image: indexImage,
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const wrapperStyles = css({
  // margin: 30,
  background: 'transparent',
  position: 'relative',

  '& h1, h2, h3, h4, h5, h6, p, li': {
    color: '#4a4a4a',
  },

  '& a': {
    color: '#0000FF',
    borderBottom: '1.625px solid transparent',

    '&:hover': {
      color: '#6D00FF',
      borderBottom: '1.625px solid #6D00FF',
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

  '& #content': _.merge(
    {
      marginLeft: 0,
    },
    ...applyRhythm({ padding: '4.8X 3X' }),
  ),

  '& #appWrapper': {
    display: 'block',
    '@media(min-width: 768px)': {
      display: 'flex',

      '& #menuWrapper': {
        flexGrow: '22',
        flexBasis: 0,
        background: '#fafafa',
        height: '100vh',
      },

      '& #contentWrapper': {
        flexGrow: '78',
        flexBasis: 0,
        maxHeight: '100vh',
        overflow: 'scroll',
      },
    },
  },
});
const wrapperStylesClass = wrapperStyles.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile
const mobileHeader = css({
  paddingBottom: 20,
});
const mobileHeaderClass = mobileHeader.toString();

const mobileMenu = css({
  backgroundColor: '#fcfcfc',
  '& .bm-item-list': {
    padding: '1em',

    '& a': {
      fontFamily: 'futura-pt, sans-serif !important',
      color: '#4a4a4a',
      borderBottom: '1.625px solid transparent',
      transition: '0.125s',
      textTransform: 'uppercase',
      letterSpacing: '0.08775ex',
      display: 'block',
      marginBottom: '0.9em',
      fontSize: '115%',

      '&:hover': {
        color: '#4a4a4a',
        borderBottom: '1.625px solid transparent',
      },
    },

    '& a.active': {
      color: '#0000FF',
    },

    '& span.header': {
      display: 'block',
      fontWeight: 700,
      fontSize: '95%',
      letterSpacing: '-0.08775ex',
      textTransform: 'uppercase',
      marginTop: '2.7em',
      marginBottom: '0.9em',
    },

    '& span.header:first-child': {
      marginTop: '1.3em',
    },
  },
});
const mobileMenuClass = mobileMenu.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop Header
const desktopHeaderStyle = css({
  '& ul': {
    listStyle: 'none',
    paddingLeft: 40,

    '& li': {
      fontFamily: 'futura-pt, sans-serif !important',
      marginBottom: '0px !important',
    },

    '& li.header': {
      fontWeight: 700,

      '& span': {
        fontSize: '82%',
        letterSpacing: '-0.08775ex',
      },
    },

    '& li.header:not(:first-child)': {
      ...applyRhythm({ marginTop: '0.75X' }),
    },

    '& a': {
      color: '#4a4a4a',
      borderBottom: '1.625px solid transparent',
      transition: '0.125s',
      textTransform: 'uppercase',
      letterSpacing: '0.08775ex',

      '& span': {
        fontSize: '65%',
      },

      '&:hover': {
        color: '#4a4a4a',
        borderBottom: '1.625px solid #4a4a4a',
      },
    },

    '& a.active': {
      color: '#0000FF',
    },
  },
});
const desktopHeaderStyleClass = desktopHeaderStyle.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer
const footerStyle = css({
  ...applyRhythm({ padding: '0X 3X 4.8X 3X' }),

  '& .waves': {
    ...applyRhythm({ marginBottom: '1X' }),
  },

  '& .boat': {
    background: 'transparent !important',
    border: 'none !important',
    position: 'absolute',
    height: '90px !important',
    width: '90px !important',
    right: 14,
    zIndex: 1,
    top: -82,

    '@media(min-width: 768px)': {
      height: '120px !important',
      width: '120px !important',
      right: 54,
      zIndex: 1,
      top: -118,
    },
  },
});
const footerStyleClass = footerStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Indexpage */
class TemplateWrapper extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    const { pathname } = this.props.location;
    console.log(
      _.merge(
        {
          marginLeft: 0,
        },
        ...applyRhythm({ padding: '4.8X 3X' }),
      ),
    );
    return (
      <Type
        kit="dkc2ilk"
        style={{ minHeight: '100vh' }}
        className={wrapperStylesClass}
      >
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <InitializeMeta data={{ titleTemplate: '%s | Joy Living Learning' }} />
        <UpdateTitle title="Loading..." />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />
        <div id="appWrapper">
          <div id="menuWrapper">
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Header */}
            <SemanticHeader>
              <ResponsiveHeader path={this.props.location}>
                <MobileHeader className={mobileHeaderClass}>
                  <img
                    id="logo"
                    src={mobileLogo}
                    style={{
                      height: 55,
                      width: 'auto',
                      marginTop: 20,
                    }}
                  />
                  <img
                    id="menu"
                    src={mobileBurger}
                    style={{ height: 55, width: 55, top: 13, right: 3 }}
                  />
                  <img
                    id="cross"
                    src={mobileCross}
                    style={{ height: 37, width: 37 }}
                  />
                </MobileHeader>
                <MobileMenu className={mobileMenuClass}>
                  <span className="header">About</span>
                  <Link to="/" className={pathname === '/' ? 'active' : ''}>
                    <span>Joy Living Learning</span>
                  </Link>
                  <Link
                    to="/nonviolent-communication"
                    className={
                      pathname === '/nonviolent-communication' ? 'active' : ''
                    }
                  >
                    <span>Nonviolent Communication</span>
                  </Link>
                  <Link
                    to="/restorative-circles"
                    className={
                      pathname === '/restorative-circles' ? 'active' : ''
                    }
                  >
                    <span>Restorative Circles</span>
                  </Link>
                  <Link
                    to="/laura-joy"
                    className={pathname === '/laura-joy' ? 'active' : ''}
                  >
                    <span>L'aura Joy</span>
                  </Link>
                  <span className="header">Learn</span>
                  <Link
                    to="/events"
                    className={pathname === '/events' ? 'active' : ''}
                  >
                    <span>Upcoming Events</span>
                  </Link>
                  <span className="header">Facilitation</span>
                  <Link
                    to="/mediated-restorative-circles"
                    className={
                      pathname === '/mediated-restorative-circles'
                        ? 'active'
                        : ''
                    }
                  >
                    <span>Restorative Circles</span>
                  </Link>
                  <Link
                    to="/mediation"
                    className={pathname === '/mediation' ? 'active' : ''}
                  >
                    <span>Mediation</span>
                  </Link>
                  <Link
                    to="/meeting-and-group-processes"
                    className={
                      pathname === '/meeting-and-group-processes'
                        ? 'active'
                        : ''
                    }
                  >
                    <span>Meeting & group processes</span>
                  </Link>
                  <Link
                    to="/individual-coaching"
                    className={
                      pathname === '/individual-coaching' ? 'active' : ''
                    }
                  >
                    <span>Individual coaching</span>
                  </Link>
                  <span className="header">More</span>
                  <Link
                    to="/internal-family-systems"
                    className={
                      pathname === '/internal-family-systems' ? 'active' : ''
                    }
                  >
                    <span>Internal Family Systems</span>
                  </Link>
                  <Link
                    to="/sociocracy"
                    className={pathname === '/sociocracy' ? 'active' : ''}
                  >
                    <span>Sociocracy</span>
                  </Link>
                  <Link
                    to="/writings"
                    className={pathname === '/writings' ? 'active' : ''}
                  >
                    <span>Blog</span>
                  </Link>
                  <Link
                    to="/gallery"
                    className={pathname === '/gallery' ? 'active' : ''}
                  >
                    <span>Gallery</span>
                  </Link>
                  <Link
                    to="/newsletter"
                    className={pathname === '/newsletter' ? 'active' : ''}
                  >
                    <span>Newsletter</span>
                  </Link>
                  <Link
                    to="/contact"
                    className={pathname === '/contact' ? 'active' : ''}
                  >
                    <span>Contact Us</span>
                  </Link>
                </MobileMenu>
                <DesktopHeader className={desktopHeaderStyleClass}>
                  <Container bleed block noFade style={{ padding: 0 }}>
                    <Image
                      src={''}
                      style={{
                        height: 80,
                        width: 128,
                        border: 0,
                        background: '#4a4a4a',
                        marginLeft: 40,
                        marginBottom: 26,
                        marginTop: 26,
                      }}
                      loader="gradient"
                    />
                    <nav>
                      <Ul>
                        <li className="header">
                          <span>About</span>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className={pathname === '/' ? 'active' : ''}
                          >
                            <span>Joy Living Learning</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/nonviolent-communication"
                            className={
                              pathname === '/nonviolent-communication'
                                ? 'active'
                                : ''
                            }
                          >
                            <span>Nonviolent Communication</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/restorative-circles"
                            className={
                              pathname === '/restorative-circles'
                                ? 'active'
                                : ''
                            }
                          >
                            <span>Restorative Circles</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/laura-joy"
                            className={
                              pathname === '/laura-joy' ? 'active' : ''
                            }
                          >
                            <span>L'aura Joy</span>
                          </Link>
                        </li>
                        <li className="header">
                          <span>Learn</span>
                        </li>
                        <li>
                          <Link
                            to="/events"
                            className={pathname === '/events' ? 'active' : ''}
                          >
                            <span>Upcoming Events</span>
                          </Link>
                        </li>
                        <li className="header">
                          <span>Facilitation</span>
                        </li>
                        <li>
                          <Link
                            to="/mediated-restorative-circles"
                            className={
                              pathname === '/mediated-restorative-circles'
                                ? 'active'
                                : ''
                            }
                          >
                            <span>Restorative Circles</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/mediation"
                            className={
                              pathname === '/mediation' ? 'active' : ''
                            }
                          >
                            <span>Mediation</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/meeting-and-group-processes"
                            className={
                              pathname === '/meeting-and-group-processes'
                                ? 'active'
                                : ''
                            }
                          >
                            <span>Meeting & group processes</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/individual-coaching"
                            className={
                              pathname === '/individual-coaching'
                                ? 'active'
                                : ''
                            }
                          >
                            <span>Individual coaching</span>
                          </Link>
                        </li>
                        <li className="header">
                          <span>More</span>
                        </li>
                        <li>
                          <Link
                            to="/internal-family-systems"
                            className={
                              pathname === '/internal-family-systems'
                                ? 'active'
                                : ''
                            }
                          >
                            <span>Internal Family Systems</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/sociocracy"
                            className={
                              pathname === '/sociocracy' ? 'active' : ''
                            }
                          >
                            <span>Sociocracy</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/writings"
                            className={pathname === '/writings' ? 'active' : ''}
                          >
                            <span>Blog</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/gallery"
                            className={pathname === '/gallery' ? 'active' : ''}
                          >
                            <span>Gallery</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/newsletter"
                            className={
                              pathname === '/newsletter' ? 'active' : ''
                            }
                          >
                            <span>Newsletter</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            className={pathname === '/contact' ? 'active' : ''}
                          >
                            <span>Contact Us</span>
                          </Link>
                        </li>
                      </Ul>
                    </nav>
                  </Container>
                </DesktopHeader>
              </ResponsiveHeader>
            </SemanticHeader>
          </div>
          <div id="contentWrapper">
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
            <Container noFade block id="content">
              {this.props.children()}
            </Container>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer */}
            <SemanticFooter className={footerStyleClass}>
              <Container bleed noFade block id="footer">
                <Image
                  src={waves}
                  className="waves"
                  style={{
                    height: 7,
                    width: '100%',
                    background: 'transparent',
                    border: 0,
                    display: 'block',
                    zIndex: 2,
                  }}
                />
                <Image src={boat} className="boat" />
                <Row type="flex">
                  <Col xs={23} sm={23} md={20} lg={17} xl={15}>
                    <Paragraph scale="1.375X">
                      <br />
                      <strong>
                        Nonviolent Communication & Restorative Circles in India
                      </strong>
                      <br />
                      <br />
                      blah blah blah blah blah blah blah blah blah blah blah
                      blah blah blah blah blah blah blah blah blah blah blah
                      blah blah blah blah blah blah blah blah blah blah blah
                      blah blah blah.
                      <br />
                      <br />
                    </Paragraph>
                    <div className="mask-p hidden-sm">
                      <OutLink to="https://www.facebook.com/JoyLivingLearning/">
                        <Image
                          src={facebook}
                          rawWidth={450}
                          rawHeight={450}
                          style={{
                            display: 'inline-block',
                            border: 'none',
                            background: 'none',
                            height: 47,
                            width: 47,
                          }}
                        />
                      </OutLink>
                    </div>
                    <Paragraph>
                      <br />
                      Made with{' '}
                      <Icon
                        type="heart"
                        style={{ color: '#D34025', fontSize: '80%' }}
                      />{' '}
                      by{' '}
                      <OutLink to="https://www.bodhiproject.org/">
                        Bodhi Project
                      </OutLink>.
                      <br />
                      {data.copyright}
                    </Paragraph>
                  </Col>
                </Row>
              </Container>
            </SemanticFooter>
          </div>
        </div>
      </Type>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

// ----------------------------------------------------------------------- Export
export default TemplateWrapper;
