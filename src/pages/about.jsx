// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react';
// import PropTypes from 'prop-types';
import _ from 'lodash';
import { css } from 'glamor';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from 'gatsby-link';
import { Row, Col, Modal } from 'antd';
import {
  Image,
  OutLink,
  HexaGrid as HexaGridX,
} from '@bodhi-project/components';
import { Elements } from '@bodhi-project/typography';
import {
  Page,
  // Section,
  Article,
  Header,
  Footer,
} from '@bodhi-project/semantic-webflow';
import {
  // --------------- Basic
  UpdateTitle,
  GeneralMeta,
  // --------------- Twitter
  TwitterSummaryCard,
  // --------------- Open Graph
  OpenGraphSummary,
  // --------------- Schema.org JSON-LD
  WebpageSchema,
  BreadcrumbSchema,
} from '@bodhi-project/seo';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import docbrij from './assets/docbrij.jpg';
import mangal from './assets/mangal.jpg';
import pranav from './assets/pranav.jpg';
import website from '../layouts/assets/website.png';
import twitter from '../layouts/assets/twitter.png';
import ogX from './assets/ogX.jpg';
import twitterSummaryX from './assets/twitterSummaryX.jpg';
import packageJson from '../../package.json';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { H2, Paragraph } = Elements;
const { HexaGrid, Hex } = HexaGridX;
const { data } = packageJson;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageTitle = 'About Us';
const pageSlug = 'about';
const pageAbstract =
  "Digital Media Initiatives has a small, close-knit and formidable team with expertise in the domains of technology, design, teaching, marketing, finance, management and core banking. Our passion for quality, aesthetics and social transformation informs what we do every day, whether it's building innovative technology tools, connecting with communities, or dreaming up new things.";

const generalMetaData = {
  description: pageAbstract,
  keywords: data.websiteKeywords,
  image: ogX,
};

const twitterSummaryCardData = {
  site: data.websiteName,
  creator: data.org.name,
  title: pageTitle,
  description: pageAbstract,
  image: twitterSummaryX,
};

const openGraphSummaryData = {
  siteName: data.websiteName,
  url: `${data.websiteUrl}${pageSlug}`,
  title: pageTitle,
  description: pageAbstract,
  image: ogX,
};

const webpageSchemaData = {
  url: `${data.websiteUrl}${pageSlug}`,
  name: pageTitle,
  description: pageAbstract,
  author: data.org.name,
  publisher: data.org.name,
  image: ogX,
};

const breadcrumbSchemaData = {
  breadcrumbs: [
    { name: 'Home', url: `${data.websiteUrl}` },
    { name: pageTitle, url: `${data.websiteUrl}${pageSlug}` },
  ],
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageWrapper = css({
  '& .hex': {
    padding: 0,
    boxShadow: 'none',
    border: 0,
  },
  '& ul': {
    listStyle: 'none',
    paddingLeft: 0,
    '& li': {
      marginLeft: -16,
    },
    '& li:before': {
      fontStyle: 'normal',
      content: `'›'`,
      paddingRight: 10,
    },
  },
});
const pageWrapperClass = pageWrapper.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * IndexPage
 */
class IndexPage extends React.Component {
  /**
   * constructor - Just a standard constructor.
   */
  constructor(props) {
    super(props);

    const heading1 = [
      'Books',
      'Publications',
      'Titles',
      'Tomes',
      'Volumes',
      'Treatise',
      'Works',
      'Opuses',
    ];
    const heading2 = [
      'dealt with',
      'managed',
      'tackled',
      'taken care of',
      'contended with',
      'given attention to',
      'seen to',
      'taken stock of',
      'handled',
      'confronted',
      'addressed',
      'grappled with',
    ];
    const heading = `${heading1[Math.floor(Math.random() * heading1.length)]} ${
      heading2[Math.floor(Math.random() * heading2.length)]
    } as of`;

    /**
     * state - Track token-check mutation, send-verification-mail mutation, and when to redirect.
     */
    this.state = {
      visible: false,
      personData: false,
      initCount: 23782500, // Count of pages as on 20'th Sept 2017 -- prevent FOFT
      totalBooks: 67950,
      oldCount: null,
      updatedCount: null,
      heading,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.update = this.update.bind(this);
    this.getToday = this.getToday.bind(this);
    this.daysSince = this.daysSince.bind(this);
    this.update = this.update.bind(this);
  }

  showModal(e, person) {
    e.preventDefault();
    if (person === 'docbrij') {
      this.setState({
        visible: true,
        personData: {
          photo: docbrij,
          name: 'Brijesh Kumar, Ph.D.',
          bio:
            'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
          website: false,
          twitter: 'https://twitter.com/_dmi_systems',
        },
      });
    }

    if (person === 'mangal') {
      this.setState({
        visible: true,
        personData: {
          photo: mangal,
          name: 'Mangal',
          bio:
            'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
          website: false,
          twitter: false,
        },
      });
    }

    if (person === 'pranav') {
      this.setState({
        visible: true,
        personData: {
          photo: pranav,
          name: 'Pranav',
          bio:
            'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
          website: 'https://xn--kla-1oa.com/',
          twitter: false,
        },
      });
    }
  }

  hideModal(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  /**
   * componentDidMount - Invoked immediately after a component is mounted
   */
  componentDidMount() {
    this.update(true);
    setInterval(() => {
      this.update();
    }, 3000);
  }

  /**
   * daysSince
   */
  getToday() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    today = `${mm}/${dd}/${yyyy}`;
    return today;
  }

  /**
   * daysSince
   */
  daysSince(date1, date2) {
    const dateA = new Date(date1);
    const dateB = new Date(date2);
    const timeDiff = Math.abs(dateB.getTime() - dateA.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }

  /**
   * update
   */
  update(isInit) {
    if (isInit) {
      // How many pages have we converted?
      const daysSinceStart = this.daysSince('01/01/2000', this.getToday()); // We started on 1'st of Jan
      const avgWorkingDays = Math.round(daysSinceStart * 0.7); // We've worked about 70% of the time
      const avgBooksPerDay = 15; // We convert about 15 books a day
      const avgPapersPerBook = 350; // There are about 350 pages in a book
      const totalBooks = avgWorkingDays * avgBooksPerDay; // Total books
      const totalPages = totalBooks * avgPapersPerBook; // Total pages
      this.setState({ initCount: totalPages, totalBooks });
    } else {
      const addPages = 15 * 350 / 8400; // We convert about 5,250 pages a day (15 books * 350 pages). We work for about 7 hours a day(25200 seconds). Because we update the count every 3 seconds there are (25200/3 = 8400 ticks).
      const updatedCount =
        (_.isNull(this.state.updatedCount)
          ? this.state.initCount
          : this.state.updatedCount) + addPages;
      this.setState({
        oldCount: _.isNull(this.state.updatedCount)
          ? this.state.initCount
          : this.state.updatedCount,
        updatedCount,
      });
    }
  }

  render() {
    const datetime = new Date().toLocaleString('en-US', {
      hour12: false,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    return (
      <Fragment>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title={pageTitle} />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <Page className={pageWrapperClass}>
          <Paragraph className="text-center">
            a tiny <strong>company</strong> with a <strong>mighty</strong>{' '}
            character
          </Paragraph>
          <H2 className="mask-h3">Company</H2>
          <Paragraph>
            Founded in 2005, Digital Media Initiatives has grown to become a
            leading digital-publishing company. A small team of <i>five</i>{' '}
            engineers has consistently outperformed large software companies and
            won clients, from Fortune 500 companies to celebrity authors over
            the last 15 years.
          </Paragraph>
          <Paragraph>
            Expertise, care to detail and professionalism matter deeply to us
            and our clients recognise it in us. That is why 9 out of 10 people
            come back to us with more work. Select clients —
          </Paragraph>
          <Row className="mask-p" style={{ fontSize: 'unset' }}>
            <Col md={12}>
              <ul className="mask-p">
                <li>
                  <OutLink to="http://www.penguinrandomhouse.com/">
                    Penguin Random House
                  </OutLink>
                </li>
                <li>
                  <OutLink to="https://www.innertraditions.com/">
                    Inner Traditions
                  </OutLink>
                </li>
                <li>
                  <OutLink to="http://magentapress.in/">
                    Magenta Press & Publications
                  </OutLink>
                </li>
                <li>
                  <OutLink to="https://www.barcelonapublishers.com/">
                    Barcelona Publishers
                  </OutLink>
                </li>
                <li>
                  <OutLink to="http://www.ucl-ioe-press.com/">
                    University College London
                  </OutLink>
                </li>
              </ul>
            </Col>
            <Col md={12}>
              <ul className="mask-p">
                <li>
                  <OutLink to="https://www.studiesweekly.com/">
                    Studies Weekly
                  </OutLink>
                </li>
                <li>
                  <OutLink to="https://www.perfectionlearning.com/">
                    Perfection Learning
                  </OutLink>
                </li>
                <li>
                  <OutLink to="http://cpm.org/">
                    CPM Educational Program
                  </OutLink>
                </li>
                <li>
                  <OutLink to="https://ctexplored.org/">
                    Connecticut Explored
                  </OutLink>
                </li>
                <li>
                  <OutLink to="https://www.davisart.com/">
                    Davis Publications
                  </OutLink>
                </li>
              </ul>
            </Col>
          </Row>
          <H2 className="mask-h3">People</H2>
          <Paragraph>
            Digital Media Initiatives has a small, close-knit and formidable
            team with expertise in the domains of technology, design, teaching,
            marketing, finance, management and core banking. Our passion for
            quality, aesthetics and social transformation informs what we do
            every day, whether it's building innovative technology tools,
            connecting with communities, or dreaming up new things.
          </Paragraph>
          <HexaGrid className="mask-p">
            <Hex className="hex">
              <a href="#">
                <Image
                  src={docbrij}
                  rawWidth={500}
                  rawHeight={621}
                  style={{
                    border: 'none',
                    background: 'none',
                    height: 300,
                    width: 'auto',
                    marginRight: 30,
                  }}
                />
                <strong>Brijesh</strong>
                <br />Leadership
              </a>
            </Hex>
            <Hex className="hex">
              <a href="#">
                <Image
                  src={mangal}
                  rawWidth={500}
                  rawHeight={621}
                  style={{
                    border: 'none',
                    background: 'none',
                    height: 300,
                    width: 'auto',
                    marginRight: 30,
                  }}
                />
                <strong>Mangal</strong>
                <br />Technology
              </a>
            </Hex>
            <Hex className="hex">
              {/* onClick={(e) => this.showModal(e, 'pranav')} */}
              <a href="#">
                <Image
                  src={pranav}
                  rawWidth={500}
                  rawHeight={621}
                  style={{
                    border: 'none',
                    background: 'none',
                    height: 300,
                    width: 'auto',
                    marginRight: 30,
                  }}
                />
                <strong>Pranav</strong>
                <br />Design
              </a>
            </Hex>
          </HexaGrid>
          <Modal
            footer={null}
            visible={this.state.visible}
            onCancel={this.hideModal}
          >
            {this.state.personData && (
              <div className={pageWrapperClass}>
                <Image
                  src={this.state.personData.photo}
                  rawWidth={500}
                  rawHeight={621}
                  style={{
                    border: 'none',
                    background: 'none',
                    height: 300,
                    width: 'auto',
                  }}
                />
                <H2 className="text-center">{this.state.personData.name}</H2>
                <Paragraph>{this.state.personData.bio}</Paragraph>
                <div>
                  {this.state.personData.website && (
                    <OutLink to={this.state.personData.website}>
                      <Image
                        src={website}
                        rawWidth={450}
                        rawHeight={450}
                        style={{
                          display: 'inline-block',
                          border: 'none',
                          background: 'none',
                          height: 45,
                          width: 45,
                          marginLeft: 15,
                        }}
                      />
                    </OutLink>
                  )}
                  {this.state.personData.twitter && (
                    <OutLink to={this.state.personData.twitter}>
                      <Image
                        src={twitter}
                        rawWidth={450}
                        rawHeight={450}
                        style={{
                          display: 'inline-block',
                          border: 'none',
                          background: 'none',
                          height: 45,
                          width: 45,
                          marginLeft: 15,
                        }}
                      />
                    </OutLink>
                  )}
                </div>
              </div>
            )}
          </Modal>

          <H2 className="mask-h3">Philosophy</H2>
          <Paragraph>
            The contemporary world faces a radical crisis today. Inequality,
            poverty, environmental degradation, human rights abuse, global
            warming, unsustainable resource depletion, illiteracy, lack of
            access to education, woefully inadequate health care and brutal
            conflicts continue to plague the world in undiminished ways.
          </Paragraph>
          <Paragraph>
            Human suffering and ecological damage have reached unprecedented and
            terrifying levels.{' '}
            <i>This is the world that our children will inherit from us</i>. It
            is in such times and circumstances that something new must come.
          </Paragraph>
          <Paragraph>
            Our present crisis is a calling and it is for each one of us to
            respond. We urgently need a new story and a new way to live. We must
            stand up to existing paradigms and champion new approaches to life.
            Most of all we need a new way to do business that is based upon our
            shared human values, our inter-dependence and unity. We are such a
            business and our mission is to better humanity through technology
            and contribute towards a socially and economically just world.
          </Paragraph>
        </Page>
      </Fragment>
    );
  }
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default IndexPage;
