import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";
import kebabCase from "lodash/kebabCase";
import endsWith from "lodash/endsWith";

/** globalWithMediaQueries */
const globalWithMediaQueries = (selector, styles, appendImportant = false) => {
  const plainStyles = {};
  const postPush = [];

  Object.keys(styles).forEach(key => {
    if (key.indexOf("@media") === 0) {
      const mediaStyle = styles[key];
      let styleString = "";

      map(mediaStyle, (style, prop) => {
        styleString += `${kebabCase(prop)}:${style}${
          appendImportant === true ? " !important" : ""
        };`;
      });

      postPush.push(`${key}{ ${selector} { ${styleString} }}`);
    } else {
      plainStyles[key] = `${styles[key]}${
        !endsWith(styles[key], "!important") && appendImportant === true
          ? " !important"
          : ""
      }`;
    }
  });

  // For specificity
  css.global(selector, plainStyles);
  map(postPush, item => {
    css.insert(item);
  });
};

export default globalWithMediaQueries;
