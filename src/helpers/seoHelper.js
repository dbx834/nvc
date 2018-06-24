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
  let pageBannerX = undefined;

  if (!isUndefined(pageBanner)) {
    pageBannerX = withUrl(pageBanner, data);
  }

  const returnObject = {
    pageTitle: pageData.pageTitle,
    twitterSummaryX: isUndefined(twitterSummaryY) ? ogY : pageBannerX,
    generalMetaData: {
      description: pageData.pageAbstract,
      keywords: data.websiteKeywords,
      image: isUndefined(pageBanner) ? ogY : pageBannerX,
    },
    twitterSummaryCardData: {
      site: data.websiteName,
      creator: data.org.name,
      title: pageData.pageTitle,
      description: pageData.pageAbstract,
      image: isUndefined(pageBanner) ? twitterSummaryY : pageBannerX,
    },
    openGraphSummaryData: {
      siteName: data.websiteName,
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      title: pageData.pageTitle,
      description: pageData.pageAbstract,
      image: isUndefined(ogY) ? twitterSummaryY : pageBannerX,
    },
    webpageSchemaData: {
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      name: pageData.pageTitle,
      description: pageData.pageAbstract,
      author: data.org.name,
      publisher: data.org.name,
      image: isUndefined(ogY) ? twitterSummaryY : pageBannerX,
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
