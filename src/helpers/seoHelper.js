// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries

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
  // console.log(ogX);
  const returnObject = {
    pageTitle: pageData.pageTitle,
    twitterSummaryX: twitterSummaryY,
    generalMetaData: {
      description: pageData.pageAbstract,
      keywords: data.websiteKeywords,
      image: ogY,
    },
    twitterSummaryCardData: {
      site: data.websiteName,
      creator: data.org.name,
      title: pageData.pageTitle,
      description: pageData.pageAbstract,
      image: twitterSummaryY,
    },
    openGraphSummaryData: {
      siteName: data.websiteName,
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      title: pageData.pageTitle,
      description: pageData.pageAbstract,
      image: ogY,
    },
    webpageSchemaData: {
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      name: pageData.pageTitle,
      description: pageData.pageAbstract,
      author: data.org.name,
      publisher: data.org.name,
      image: ogY,
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
