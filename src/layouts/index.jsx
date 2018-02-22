// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import moment from 'moment';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
import { Icon } from 'antd';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
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

  '& #content': {
    ...applyRhythm({ padding: '4.8X 3X' }),
    marginLeft: 0,
  },

  '& #footer': {
    ...applyRhythm({ padding: '0X 3X 4.8X 3X' }),

    '& hr': {
      height: 1,
      border: 0,
      backgroundImage:
        'linear-gradient(to right, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)',
      backgroundPosition: 'bottom',
      backgroundSize: '5px 1px',
      backgroundRepeat: 'repeat-x',
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
      display: 'block',
      fontSize: '150%',
      marginBottom: '1em',
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
      ...applyRhythm({ marginBottom: '0.075X' }),
    },

    '& li.header': {
      fontWeight: 700,

      '& span': {
        fontSize: '90%',
        letterSpacing: '-0.08775ex',
      },
    },

    '& li.header:not(:first-child)': {
      ...applyRhythm({ marginTop: '1X' }),
    },

    '& a': {
      color: '#4a4a4a',
      borderBottom: '1.625px solid transparent',
      transition: '0.125s',
      textTransform: 'uppercase',
      letterSpacing: '0.14625ex',

      '& span': {
        fontSize: '68%',
      },

      '&:hover': {
        color: '#4a4a4a',
        borderBottom: '1.625px solid #4a4a4a',
      },
    },
  },
});
const desktopHeaderStyleClass = desktopHeaderStyle.toString();

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
        <div style={{ display: 'flex' }}>
          <div
            style={{
              flexGrow: '22',
              flexBasis: 0,
              background: '#fafafa',
              height: '100vh',
            }}
          >
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
                  <Link to="/">Portfolio »</Link>
                  <Link to="/products-and-solutions">
                    Products & Solutions »
                  </Link>
                  <Link to="/about">About »</Link>
                  <Link to="/contact">Contact »</Link>
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
                          <Link to="/nonviolent-communication">
                            <span>Nonviolent Communication</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/restorative-circles">
                            <span>Restorative Circles</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/internal-family-systems">
                            <span>Internal Family Systems</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/sociocracy">
                            <span>Sociocracy</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/laura-joy">
                            <span>Laur'a Joy</span>
                          </Link>
                        </li>
                        <li className="header">
                          <span>Learn</span>
                        </li>
                        <li>
                          <Link to="/events">
                            <span>Upcoming Events</span>
                          </Link>
                        </li>
                        <li className="header">
                          <span>Facilitation</span>
                        </li>
                        <li>
                          <Link to="/mediated-restorative-circles">
                            <span>Restorative Circles</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/mediation">
                            <span>Mediation</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/meeting-and-group-processes">
                            <span>Meeting & group processes</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/individual-coaching">
                            <span>Individual coaching</span>
                          </Link>
                        </li>
                        <li className="header">
                          <span>More</span>
                        </li>
                        <li>
                          <Link to="/writings">
                            <span>Blog</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact">
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
          <div
            style={{
              flexGrow: '78',
              flexBasis: 0,
              maxHeight: '100vh',
              overflow: 'scroll',
            }}
          >
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
            <Container noFade block id="content">
              {this.props.children()}
            </Container>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer */}
            <SemanticFooter>
              <Container bleed noFade block id="footer">
                <hr />
                <br />
                <br />
                <Paragraph>
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
                  <br />
                  {data.copyright}
                </Paragraph>
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
