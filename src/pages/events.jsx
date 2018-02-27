// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { css } from 'glamor';
import moment from 'moment';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
import { LocaleProvider, Calendar, Tooltip, Popover, Badge } from 'antd';
import en_GB from 'antd/lib/locale-provider/en_GB';
import {
  Page,
  // Section,
  Article,
  // Header,
  // Footer,
} from '@bodhi-project/semantic-webflow';
import { Image, HexaGrid as HexaGridX } from '@bodhi-project/components';
import { Elements, applyRhythm, applyType } from '@bodhi-project/typography';
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
  EventSchema,
} from '@bodhi-project/seo';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import ogX from './assets/ogX.jpg';
import twitterSummaryX from './assets/twitterSummaryX.jpg';
import packageJson from '../../package.json';

import deepening from './assets/deepening.png';
import introduction from './assets/introduction.png';
import practiceGroup from './assets/practiceGroup.png';
import webinar from './assets/webinar.png';
import workshop from './assets/workshop.png';
import nvc from './assets/nvc.png';
import rc from './assets/rc.png';
import dummy1 from './assets/dummy1.jpg';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { data } = packageJson;
const { Fragment } = React;
const { H1, H2, Paragraph } = Elements;
const { HexaGrid, Hex } = HexaGridX;
const enGB = en_GB;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageTitle = 'Events';
const pageSlug = 'events';
const pageAbstract = 'Events abstract...';

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
const pageStyle = css({
  ...applyRhythm({ maxWidth: '40X' }),
  '& .hex': {
    padding: 0,
    border: '1px solid #4a4a4a !important',
    borderRadius: 8,
    background: '#f6f2f8',
    marginBottom: 30,

    '@media (min-width: 768px)': {
      flex: '0 0 32.333%',
      maxWidth: '32.333%',
      WebkitFlex: '0 0 32.333%',
      marginRight: '1%',
      marginBottom: '1%',
    },

    '& .abstract': {
      padding: '9px 12px',
      marginBottom: 0,

      '& .title': {
        fontFamily: 'futura-pt, sans-serif !important',
        fontWeight: 700,
        letterSpacing: '-0.08775ex',
      },

      '& .date': {
        fontFamily: 'futura-pt, sans-serif !important',
      },
    },
  },
  '& .blank': {
    visibility: 'hidden',
  },

  '& .cover': {
    zIndex: -1,
  },

  '& ul.event-icons': {
    listStyle: 'none',
    padding: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,

    '& li': {
      margin: '0 !important',
      display: 'inline-block',

      '& .icon': {
        border: 0,
        marginTop: 2,
        marginRight: 2,
      },
    },
  },

  '& .ant-fullcalendar-fullscreen': {
    '& .ant-fullcalendar-header': {
      width: 90 * 7,
      padding: '11px 0px',
    },

    '& .ant-fullcalendar-year-select': {
      ...applyType('ltb1ekq'),
      '& .ant-select-selection': {
        fontSize: '80%',
        backgroundColor: 'transparent',
        border: 'none',
      },
    },

    '& .ant-fullcalendar-month-select': {
      ...applyType('ltb1ekq'),
      '& .ant-select-selection': {
        fontSize: '80%',
        backgroundColor: 'transparent',
        border: 'none',
      },
    },

    '& .ant-radio-group': {
      display: 'none',
    },
  },

  '& .ant-fullcalendar': {
    ...applyType('ltb1ekq'),

    '& .ant-fullcalendar-calendar-body': {
      padding: 0,
      width: 'fit-content',
      maxWidth: 'fit-content',

      '& table': {
        '& thead': {
          borderTop: '1px solid #4a4a4a',
          borderBottom: '1px solid #4a4a4a',

          '& .ant-fullcalendar-column-header': {
            textAlign: 'left',
            paddingTop: 6,
            paddingBottom: 6,
            '& span': {
              fontWeight: 700,
              fontStyle: 'italic',
            },
          },
        },
      },
    },

    '& table': {
      width: 'unset',
      maxWidth: 'unset',
    },

    '& tbody': {
      '& .ant-fullcalendar-cell': {
        position: 'relative',
        width: 90,
        height: 90,
      },

      '& div.date-block': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 89,
        height: 89,
        WebkitTransition: 'all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',
        transition: 'all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',

        '&:hover': {
          backgroundColor: '#FFDA9A',
        },

        '& > span': {
          display: 'block',
          width: 88,
          height: 89,
        },

        '& .ant-badge': {
          fontFamily: 'inherit',
          fontSize: 'inherit',
          '& .ant-badge-dot': {
            top: 4,
            height: 8,
            width: 8,
            transform: 'translateX(-10%)',
          },
        },

        '& a': {
          display: 'block',
          height: 89,
          width: 89,

          '&:hover': {
            color: '#6D00FF',
            borderBottom: '1.625px solid transparent',
          },
        },
      },

      '& div.this-month': {
        backgroundColor: '#fff5cd',
      },

      '& div.that-month': {
        backgroundColor: '#F6F4FE',
      },

      '& tr': {
        '& td': {
          '& div.date-block': {
            backgroundImage:
              'linear-gradient(to right, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%), linear-gradient(to bottom, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)',
            backgroundPosition: 'bottom, right',
            backgroundSize: '4.45px 1px, 1px 4.45px',
            backgroundRepeat: 'repeat-x, repeat-y',
          },
        },

        '& td:last-child': {
          '& div.date-block': {
            backgroundImage:
              'linear-gradient(to right, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)',
            backgroundPosition: 'bottom',
            backgroundSize: '4.45px 1px',
            backgroundRepeat: 'repeat-x',
          },
        },
      },

      '& tr:last-child': {
        '& td': {
          '& div.date-block': {
            backgroundImage:
              'linear-gradient(to bottom, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)',
            backgroundPosition: 'right',
            backgroundSize: '1px 4.45px',
            backgroundRepeat: 'repeat-y',
          },
        },

        '& td:last-child': {
          '& div.date-block': {
            backgroundImage: 'none',
          },
        },
      },
    },
  },
});
const pageStyleClass = pageStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** inArray */
const inArray = (array, value) => {
  let rx = false;
  if (_.indexOf(array, value) >= 0) {
    rx = true;
  }
  return rx;
};

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** EventsAndCalendar */
class EventsAndCalendar extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  /** componentDidMount - set current date */
  componentDidMount() {
    const today = moment();
    this.setState({ selectedDate: today });
  }

  /** logs date */
  onSelect(value, mode) {
    this.setState({ selectedDate: value });
  }

  /** standard renderer */
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    // get only events
    const eventNodes = [];
    _.map(postEdges, ({ node }) => {
      if (_.startsWith(_.trim(node.fields.route), 'events') === true) {
        eventNodes.push({ node });
      }
    });

    const todayInt = parseInt(moment().format('YYYYMMDD'), 10);
    const selectedMonth =
      !_.isNull(this.state.selectedDate) && this.state.selectedDate.format('M');

    /** renders each date */
    const dateFullCellRender = value => {
      // console.log(value);
      const day = value.format('D');
      const thisMonth = value.format('M');
      const thisDate = parseInt(value.format('YYYYMMDD'), 10);
      let classNames = 'date-block';
      if (selectedMonth === thisMonth) {
        classNames += ' this-month';
      } else {
        classNames += ' that-month';
      }
      let frag = <div className={classNames}>{day}</div>;

      _.map(postEdges, ({ node }) => {
        const { frontmatter } = node;
        const { fields } = node;
        const { title } = frontmatter;
        const mDate = moment(frontmatter.date);
        const xDate = parseInt(mDate.format('YYYYMMDD'), 10);
        const humanDate = mDate.format('dddd, MMMM Do YYYY');
        let badgeStatus = null;
        // const when = moment(mDate).fromNow();
        const { route } = fields;
        const { tags } = frontmatter;

        if (thisDate === xDate) {
          if (todayInt > xDate) {
            classNames += ' past-event';
            badgeStatus = 'default';
          } else if (todayInt < xDate) {
            classNames += ' planned-event';
            badgeStatus = 'warning';
          } else {
            classNames += ' happening-event';
            badgeStatus = 'success';
          }

          const content = (
            <div>
              <Paragraph style={{ marginBottom: 0, padding: '9px 6px' }}>
                <span className="title" style={{ fontSize: '110%' }}>
                  {title}
                </span>
                <br />
                <small className="date">
                  <i>{humanDate}</i>
                </small>
                <br />
                <br />
                {frontmatter.abstract}
              </Paragraph>
            </div>
          );

          frag = (
            <div className={classNames}>
              <Popover content={content} title={false}>
                <Link to={route}>
                  <Badge status={badgeStatus}>{day}</Badge>
                  <br />
                  {inArray(tags, 'nvc') && (
                    <Image
                      src={nvc}
                      rawHeight={450}
                      rawWidth={450}
                      className="icon"
                      style={{
                        height: 60,
                        width: 60,
                        background: 'transparent',
                        border: 0,
                        left: 15,
                        top: -5,
                      }}
                    />
                  )}
                  {inArray(tags, 'rc') && (
                    <Image
                      src={rc}
                      rawHeight={450}
                      rawWidth={450}
                      className="icon"
                      style={{
                        height: 60,
                        width: 60,
                        background: 'transparent',
                        border: 0,
                        left: 15,
                        top: -5,
                      }}
                    />
                  )}
                </Link>
              </Popover>
            </div>
          );
        }
      });
      return frag;
    };

    let totalEvents = 0;

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
        <Page className={pageStyleClass}>
          <H1>Event Calendar</H1>
          <LocaleProvider locale={enGB}>
            <Calendar
              dateFullCellRender={dateFullCellRender}
              onSelect={this.onSelect}
              defaultValue={this.state.selectedDate}
            />
          </LocaleProvider>
          <br />
          <br />
          <H1>Upcoming Events</H1>
          <HexaGrid id="events-grid">
            {_.map(eventNodes, ({ node }, index) => {
              const { frontmatter } = node;
              const mDate = moment(frontmatter.date);
              const humanDate = mDate.format('dddd, MMMM Do YYYY');
              const { tags } = frontmatter;
              const when = moment(mDate).fromNow();
              const { fields } = node;
              const { route } = fields;
              const xDate = parseInt(mDate.format('YYYYMMDD'), 10);

              if (todayInt <= xDate) {
                totalEvents += 1;
                return (
                  <Hex className="hex" key={humanDate}>
                    <Article>
                      <ul className="event-icons">
                        {inArray(tags, 'nvc') && (
                          <li>
                            <Tooltip title="Nonviolent Communication">
                              <div>
                                <Image
                                  src={nvc}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                        {inArray(tags, 'rc') && (
                          <li>
                            <Tooltip title="Restorative Circle">
                              <div>
                                <Image
                                  src={rc}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                        {inArray(tags, 'introduction') && (
                          <li>
                            <Tooltip title="Introduction">
                              <div>
                                <Image
                                  src={introduction}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                        {inArray(tags, 'deepening') && (
                          <li>
                            <Tooltip title="Deepening">
                              <div>
                                <Image
                                  src={deepening}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                        {inArray(tags, 'workshop') && (
                          <li>
                            <Tooltip title="Workshop">
                              <div>
                                <Image
                                  src={workshop}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                        {inArray(tags, 'practice group') && (
                          <li>
                            <Tooltip title="Practice group">
                              <div>
                                <Image
                                  src={practiceGroup}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                        {inArray(tags, 'webinar') && (
                          <li>
                            <Tooltip title="Webinar">
                              <div>
                                <Image
                                  src={webinar}
                                  rawHeight={450}
                                  rawWidth={450}
                                  className="icon"
                                  style={{
                                    height: 30,
                                    width: 30,
                                    background: 'transparent',
                                  }}
                                />
                              </div>
                            </Tooltip>
                          </li>
                        )}
                      </ul>
                      <Image
                        src={dummy1}
                        rawHeight={1400}
                        rawWidth={2100}
                        className="cover"
                        style={{
                          height: 'auto',
                          width: '100%',
                          border: 0,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        }}
                        loader="gradient"
                      />
                      <Paragraph className="abstract">
                        <Tooltip title={when} placement="topLeft">
                          <span className="title" style={{ fontSize: '110%' }}>
                            {frontmatter.title}
                          </span>
                          <br />
                          <small className="date">
                            <i>{humanDate}</i>
                          </small>
                        </Tooltip>
                        <br />
                        <br />
                        {frontmatter.abstract}
                        <br />
                        <br />
                        <small className="readmore">
                          <Link to={route}>Read more ⇾</Link>
                        </small>
                      </Paragraph>
                    </Article>
                  </Hex>
                );
              }
            })}
            {_.map(_.times(3 - totalEvents % 3, String), x => {
              return (
                <Hex className="hex blank" key={x}>
                  <div>&nbsp;</div>
                </Hex>
              );
            })}
          </HexaGrid>
        </Page>
      </Fragment>
    );
  }
}

EventsAndCalendar.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query EventsQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          fields {
            route
          }
          frontmatter {
            abstract
            title
            cover
            date
            category
            tags
          }
        }
      }
    }
  }
`;
/* eslint-enable no-undef */

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default EventsAndCalendar;
