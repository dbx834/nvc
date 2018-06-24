// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";
import indexOf from "lodash/indexOf";
import isNull from "lodash/isNull";
import join from "lodash/join";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { withPrefix } from "gatsby-link";

// ----------------------------------------------------------------------------
// ------------------------------------------------------------ Local Functions
// ----------------------------------------------------------------------------
/** inArray */
const inArray = (array, value) => {
  let rx = false;
  if (indexOf(array, value) >= 0) {
    rx = true;
  }
  return rx;
};

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------- Function
// ----------------------------------------------------------------------------
/** categoriseEvents */
const categoriseEvents = (
  postEdges,
  totalFeaturedEvents = 16,
  totalPracticeGroups = 4,
) => {
  const featuredEvents = [];
  const NVCEvents = [];
  const RCEvents = [];
  const todayInt = parseInt(moment().format("YYYYMMDD"), 10);
  let filteredFeaturedRecords = 1;
  let filteredNVCRecords = 1;
  let filteredRCRecords = 1;

  map(postEdges, ({ node }) => {
    const { date, startDate } = node.frontmatter;
    const mDate = moment(!isNull(date) ? date : startDate);
    const xDate = parseInt(mDate.format("YYYYMMDD"), 10);
    const inTheFuture = todayInt <= xDate;

    const belowFeaturedMax = totalFeaturedEvents >= filteredFeaturedRecords;
    const isFeatured = inArray(node.frontmatter.tags, "featured");

    // Make banner
    let eventBanner = null;
    if (node.frontmatter.cover === "fallback") {
      const coverHint = join(node.frontmatter.tags, "-");
      eventBanner = withPrefix(
        `/content-assets/event-fallbacks/${coverHint}.jpg`,
      );
    } else {
      eventBanner = withPrefix(node.frontmatter.cover);
    }

    if (inTheFuture && belowFeaturedMax && isFeatured) {
      featuredEvents.push({
        route: node.fields.route,
        humanDate: node.fields.humanDate,
        elapsed: node.fields.elapsed,
        abstract: node.frontmatter.abstract,
        title: node.frontmatter.title,
        subTitle: node.frontmatter.subTitle,
        cover: eventBanner,
        date: node.frontmatter.date,
        startDate: node.frontmatter.startDate,
        finishDate: node.frontmatter.finishDate,
        fromTime: node.frontmatter.fromTime,
        toTime: node.frontmatter.toTime,
        category: node.frontmatter.category,
        tags: node.frontmatter.tags,
        type: node.frontmatter.type,
      });
      filteredFeaturedRecords += 1;
    } else {
      const belowNVCMax = totalPracticeGroups >= filteredNVCRecords;
      const isNVCPracticeGroup =
        inArray(node.frontmatter.tags, "nvc") &&
        inArray(node.frontmatter.tags, "practice-group");

      const belowRCMax = totalPracticeGroups >= filteredRCRecords;
      const isRCPracticeGroup =
        inArray(node.frontmatter.tags, "rc") &&
        inArray(node.frontmatter.tags, "practice-group");

      if (inTheFuture && belowNVCMax && isNVCPracticeGroup) {
        NVCEvents.push({
          route: node.fields.route,
          humanDate: node.fields.humanDate,
          elapsed: node.fields.elapsed,
          abstract: node.frontmatter.abstract,
          title: node.frontmatter.title,
          subTitle: node.frontmatter.subTitle,
          cover: eventBanner,
          date: node.frontmatter.date,
          startDate: node.frontmatter.startDate,
          finishDate: node.frontmatter.finishDate,
          fromTime: node.frontmatter.fromTime,
          toTime: node.frontmatter.toTime,
          category: node.frontmatter.category,
          tags: node.frontmatter.tags,
          type: node.frontmatter.type,
        });
        filteredNVCRecords += 1;
      }

      if (inTheFuture && belowRCMax && isRCPracticeGroup) {
        RCEvents.push({
          route: node.fields.route,
          humanDate: node.fields.humanDate,
          elapsed: node.fields.elapsed,
          abstract: node.frontmatter.abstract,
          title: node.frontmatter.title,
          subTitle: node.frontmatter.subTitle,
          cover: eventBanner,
          date: node.frontmatter.date,
          startDate: node.frontmatter.startDate,
          finishDate: node.frontmatter.finishDate,
          fromTime: node.frontmatter.fromTime,
          toTime: node.frontmatter.toTime,
          category: node.frontmatter.category,
          tags: node.frontmatter.tags,
          type: node.frontmatter.type,
        });
        filteredRCRecords += 1;
      }
    }
  });

  return {
    featuredEvents,
    NVCEvents,
    RCEvents,
  };
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default categoriseEvents;
