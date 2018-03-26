import { css } from "glamor";
import _ from "lodash";

/** globalWithMediaQueries */
const globalWithMediaQueries = (selector, styles, appendImportant = false) => {
  const plainStyles = {};
  const postPush = [];

  Object.keys(styles).forEach(key => {
    if (key.indexOf("@media") === 0) {
      const mediaStyle = styles[key];
      let styleString = "";

      _.map(mediaStyle, (style, prop) => {
        styleString += `${_.kebabCase(prop)}:${style}${
          appendImportant === true ? " !important" : ""
        };`;
      });

      postPush.push(`${key}{ ${selector} { ${styleString} }}`);
    } else {
      plainStyles[key] = `${styles[key]}${
        !_.endsWith(styles[key], "!important") && appendImportant === true
          ? " !important"
          : ""
      }`;
    }
  });

  // For specificity
  css.global(selector, plainStyles);
  _.map(postPush, item => {
    css.insert(item);
  });
};

export default globalWithMediaQueries;
