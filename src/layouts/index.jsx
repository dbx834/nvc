// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { css } from 'glamor';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
import { Icon } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import {
  CompositeHeader,
  Container,
  Image,
  OutLink,
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Styles
import '../style/index.less';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
import headerBanner from './assets/header.png';
import burgerMenu from './assets/burger_menu.png';
import burgerCross from './assets/burger_menu.png';
import logo from './assets/logo.png';
import indexImage from '../pages/assets/index.jpg';
import giraffes from './assets/giraffes.png';
import waves from './assets/waves.png';
import boat from './assets/boat.png';
import creativeCommons from './assets/creative-commons.svg';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
const {
  ResponsiveHeader,
  DesktopHeader,
  MobileMenu,
  MobileHeader,
} = CompositeHeader;
const { Paragraph, H1, H2, H3, H4, H5, H6 } = Elements;

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------- Global SEO
// ------------------------------------------------------------------------------
const websiteSchemaData = {
  url: 'https://www.nimas.pub/',
  name: 'Launch Kit',
  description: 'Launch Kit is an opionated GatsbyJS Starter kit.',
  author: 'Bodhi Project',
  publisher: 'Bodhi Project',
  image: indexImage,
};

const organisationSchemaData = {
  name: 'Bodhi Project',
  legalName: 'Bodhi Project',
  url: 'https://www.bodhiproject.org/',
  logo:
    'https://d33wubrfki0l68.cloudfront.net/2226b7992d5cabd99e7363d4ca031cad3b25fff6/5c67d/static/logoalpha.edbd60a8.png',
  foundingDate: '2017',
  founders: ['Pranav Kumar', 'Mangal Varshney', 'Dr. Brijesh Kumar'],
  streetAddress: 'Kotagiri',
  addressLocality: 'Kotagiri',
  addressRegion: 'Tamil Nadu',
  postalCode: '643217',
  addressCountry: 'India',
  telephone: ['na'],
  email: 'hello@bodhiproject.org',
  sameAs: [
    'http://instagram.com/bodhisystems',
    'https://twitter.com/_dmi_systems',
  ],
  image: indexImage,
};

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Wrapper
const wrapperStyles = css({
  margin: 30,
  background: '#F8F2E6',
  position: 'relative',

  '& h1, h2, h3, h4, h5, h6, p, li': {
    color: '#4a4a4a',
  },

  '& h6': {
    position: 'relative',
  },

  '& h6:before': {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    ...applyRhythm({ height: '0.234X' }),
    ...applyRhythm({ width: '0.675X' }),
    background: '#4a4a4a',
    content: `' '`,
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

  '& hr': {
    border: '2px solid #4a4a4a',
  },
});
const wrapperStylesClass = wrapperStyles.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile Header
const mobileHeaderStyle = css({
  height: '110px',
});

const mobileHeaderStyleClass = mobileHeaderStyle.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile Menu
const mobileMenuStyle = css({
  '& ul': {
    margin: 0,
    padding: 0,
  },

  '& ul li': {
    display: 'block',
    paddingTop: '27px',
    paddingBottom: '27px',

    '& a': {
      color: '#081359',
    },
  },
});
const mobileMenuStyleClass = mobileMenuStyle.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop Header
const desktopHeaderStyle = css({
  '& h1': {
    '& a': {
      color: '#4a4a4a',
      borderBottom: 'none',
      transition: '0.125s',

      '&:hover': {
        color: '#0000FF',
        borderBottom: 'none',
      },
    },
  },

  '& .nav': {
    ...applyRhythm({ padding: '0X 0X 0.625X 0X' }),
  },
});
const desktopHeaderStyleClass = desktopHeaderStyle.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer
const footerStyle = css({
  '& .abstract': {
    ...applyRhythm({ marginTop: '1X' }),
    ...applyRhythm({ marginBottom: '1X' }),
    padding: 0,
    '& .one': {
      borderTop: '1px solid #4a4a4a',
      textAlign: 'center',
      ...applyRhythm({ marginBottom: '2X' }),
      '&:after': {
        content: `'☉'`,
        display: 'inline-block',
        position: 'relative',
        top: -14,
        padding: '0 10px',
        background: '#ffffff',
        color: '#4a4a4a',
        fontSize: '18px',
        transform: 'rotate(60deg)',
      },
    },
    '& .two': {
      borderTop: '1px solid #4a4a4a',
      textAlign: 'center',
      ...applyRhythm({ marginTop: '3.2X' }),
      '&:after': {
        content: `'☉'`,
        display: 'inline-block',
        position: 'relative',
        top: -14,
        padding: '0 10px',
        background: '#ffffff',
        color: '#4a4a4a',
        fontSize: '18px',
        transform: 'rotate(60deg)',
      },
    },
  },
  '& .double': {
    ...applyRhythm({ marginTop: '2X' }),
  },
  '& .cr': {
    ...applyRhythm({ padding: '2X 0X' }),
  },
  '& .cp': {
    position: 'absolute',
    ...applyRhythm({ padding: '0.5X 0X' }),
  },
});
const footerStyleClass = footerStyle.toString();

// ----------------------------------------------------------------------- Component
/**
 * Indexpage
 */
class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Type
        kit="ltb1ekq"
        style={{ minHeight: '100vh' }}
        className={wrapperStylesClass}
      >
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <InitializeMeta data={{ titleTemplate: '%s | Joy Living Learning' }} />
        <UpdateTitle title="NVC and Restorative Circles in India" />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Header */}
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Header */}
        <SemanticHeader>
          <ResponsiveHeader path={this.props.location}>
            <MobileHeader className={mobileHeaderStyleClass}>
              <img
                id="logo"
                src={headerBanner}
                style={{ height: 100, width: 'auto' }}
              />
              <img
                id="menu"
                src={burgerMenu}
                style={{ height: 48, width: 48, top: 26, right: 0 }}
              />
              <img
                id="cross"
                src={burgerCross}
                style={{ height: 37, width: 37 }}
              />
            </MobileHeader>
            <MobileMenu className={mobileMenuStyleClass}>
              <ul>
                <li>
                  <Link to="/">Features »</Link>
                </li>
                <li>
                  <Link to="/">Docs »</Link>
                </li>
              </ul>
            </MobileMenu>
            <DesktopHeader className={desktopHeaderStyleClass}>
              <Container threeQuarters block noFade>
                <div
                  style={{
                    display: 'flex',
                    ...applyRhythm({ padding: '4X 0X 0.5X 0X' }),
                  }}
                >
                  <div
                    style={{
                      flexGrow: 15,
                      flexBasis: 0,
                      paddingRight: 40,
                    }}
                  >
                    <div
                      style={{
                        background: 'blue',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                  <div style={{ flexGrow: 75, flexBasis: 0, marginRight: 40 }}>
                    <H1
                      style={{ marginTop: 0, marginBottom: 10 }}
                      scale="1.25X"
                    >
                      <Link to="/">
                        <i>Joy Living Learning</i>
                      </Link>
                    </H1>
                    <Paragraph scale="1.25X">
                      NVC and Restorative Circles in India… blah blah blah blah
                      blah blah tagline ends.
                    </Paragraph>
                  </div>
                  <div style={{ flexGrow: 15, flexBasis: 0, paddingLeft: 20 }}>
                    <ul style={{ padding: 0, listStyle: 'none' }}>
                      <li>
                        <Link to="/">Calendar</Link>
                      </li>
                      <li>
                        <Link to="/">Writings</Link>
                      </li>
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to="/">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <hr />
              </Container>
            </DesktopHeader>
          </ResponsiveHeader>
        </SemanticHeader>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <div style={{ minHeight: '100vh' }}>{this.props.children()}</div>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer */}
        <SemanticFooter className={footerStyleClass}>
          <Container
            threeQuarters
            block
            noFade
            className="cr"
            style={{ position: 'relative' }}
          >
            <Image
              src={waves}
              style={{
                height: 7,
                width: '100%',
                background: 'transparent',
                border: 0,
                display: 'block',
                ...applyRhythm({ marginBottom: '1X' }),
                zIndex: 2,
              }}
            />
            <Image
              src={boat}
              style={{
                height: 150,
                width: 150,
                background: 'transparent',
                border: 0,
                position: 'absolute',
                right: 0,
                zIndex: 1,
                top: -101,
              }}
            />
            <H4 style={{ ...applyRhythm({ marginBottom: '2X' }) }}>
              Notes & Further Resources
            </H4>
            <div style={{ display: 'flex' }}>
              <div style={{ flexGrow: 30, flexBasis: 0, paddingRight: 40 }}>
                <H6
                  caps
                  scale="0.825X"
                  style={{ ...applyRhythm({ marginBottom: '0.74X' }) }}
                >
                  Helpful Links
                </H6>
                <ul style={{ padding: 0 }}>
                  <li>
                    <Link to="/">Link 1</Link>
                  </li>
                  <li>
                    <Link to="/">Link 2</Link>
                  </li>
                  <li>
                    <Link to="/">Link 3</Link>
                  </li>
                </ul>
              </div>
              <div style={{ flexGrow: 48, flexBasis: 0, paddingRight: 40 }}>
                <H6
                  caps
                  scale="0.825X"
                  style={{ ...applyRhythm({ marginBottom: '0.74X' }) }}
                >
                  About
                </H6>
                <Paragraph>
                  Joy Living Learning is a blah blah blah blah blah blah blah
                  blah blah blah blah blah blah.
                </Paragraph>
                <Paragraph>
                  blah blah blah blah blah blah blah blah blah blah blah blah.
                </Paragraph>
              </div>
              <div style={{ flexGrow: 48, flexBasis: 0, paddingRight: 40 }}>
                <H6 caps scale="0.825X" style={{ visibility: 'hidden' }}>
                  Legal
                </H6>
                <Image
                  src={creativeCommons}
                  style={{
                    height: 25,
                    width: 'auto',
                    background: 'transparent',
                    border: 0,
                    display: 'block',
                    ...applyRhythm({ marginBottom: '1X' }),
                  }}
                />
                <Paragraph>
                  This work is licensed under a{' '}
                  <OutLink to="https://creativecommons.org/licenses/by-sa/2.0/uk/">
                    Creative Commons License
                  </OutLink>.
                </Paragraph>
                <Paragraph>
                  <Link to="/legal-notice">Legal Notice</Link>
                </Paragraph>
              </div>
            </div>
          </Container>
          <Container bleed block noFade className="cp">
            <Paragraph className="text-center">
              Made with&nbsp;
              <Icon
                type="heart"
                style={{ color: '#D34025', fontSize: '80%' }}
              />&nbsp;by&nbsp;
              <OutLink to="https://www.bodhiproject.org/">
                Bodhi Project
              </OutLink>
            </Paragraph>
            <Paragraph className="text-center">
              © 2018 Laura Joy and Joy Living Learning
            </Paragraph>
          </Container>
        </SemanticFooter>
      </Type>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

// ----------------------------------------------------------------------- Export
export default TemplateWrapper;
