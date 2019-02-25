// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import isUndefined from 'lodash/isUndefined'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import ogX from '../assets/ogX.jpg'
import twitterSummaryX from '../assets/twitterSummaryX.jpg'
import withUrl from './withUrl'
import data from '../data/website.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const ogY = withUrl(ogX, data)
const twitterSummaryY = withUrl(twitterSummaryX, data)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
/** seoHelper */
const seoHelper = pageData => {
  const twitterCover = isUndefined(pageData.cover)
    ? twitterSummaryY
    : withUrl(pageData.cover, data)
  const ogCover = isUndefined(pageData.cover)
    ? ogY
    : withUrl(pageData.cover, data)

  const returnObject = {
    pageTitle: pageData.pageTitle,
    twitterSummaryX: twitterCover,
    generalMetaData: {
      description: pageData.pageAbstract,
      keywords: data.websiteKeywords,
      image: ogCover,
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
    },
    twitterSummaryCardData: {
      site: data.websiteName,
      creator: data.org.name,
      title: pageData.pageTitle,
      description: pageData.pageAbstract,
      image: twitterCover,
      alt: pageData.pageAbstract,
    },
    openGraphSummaryData: {
      siteName: data.websiteName,
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      title: pageData.pageTitle,
      description: pageData.pageAbstract,
      image: ogCover,
    },
    webpageSchemaData: {
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      name: pageData.pageTitle,
      description: pageData.pageAbstract,
      author: data.org.founders[0],
      publisher: data.org.name,
      image: ogCover,
    },
    breadcrumbSchemaData: {
      breadcrumbs: [
        { name: 'Home', url: `${data.websiteUrl}` },
        {
          name: pageData.pageTitle,
          url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
        },
      ],
    },
  }

  return returnObject
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default seoHelper
