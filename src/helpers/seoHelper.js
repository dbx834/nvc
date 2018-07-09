// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import isUndefined from "lodash/isUndefined";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import ogX from "../assets/ogX.jpg";
import twitterSummaryX from "../assets/twitterSummaryX.jpg";
import packageJson from "../../package.json";
import withUrl from "./withUrl";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { data } = packageJson;

const ogY = withUrl(ogX, data);
const twitterSummaryY = withUrl(twitterSummaryX, data);

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
/** seoHelper */
const seoHelper = pageData => {
  const { pageBanner } = pageData;
  let image = null;

  if (isUndefined(pageBanner)) {
    image = ogY;
  } else {
    image = withUrl(pageBanner, data);
  }

  const returnObject = {
    pageTitle: pageData.pageTitle,
    twitterSummaryX: twitterSummaryY,
    generalMetaData: {
      description: pageData.pageAbstract,
      keywords: data.websiteKeywords,
      image,
    },
    twitterSummaryCardData: {
      site: data.websiteName,
      creator: data.org.name,
      title: pageData.pageTitle,
      description: pageData.pageAbstract,
      image,
    },
    openGraphSummaryData: {
      siteName: data.websiteName,
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      title: pageData.pageTitle,
      description: pageData.pageAbstract,
      image,
    },
    webpageSchemaData: {
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      name: pageData.pageTitle,
      description: pageData.pageAbstract,
      author: data.org.name,
      publisher: data.org.name,
      image,
    },
    breadcrumbSchemaData: {
      breadcrumbs: [
        { name: "Home", url: `${data.websiteUrl}` },
        {
          name: pageData.pageTitle,
          url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
        },
      ],
    },
  };

  return returnObject;
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default seoHelper;
