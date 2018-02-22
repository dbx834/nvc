// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
import { css } from 'glamor';

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Style for Markdown
const markdownStyles = css({
  '& p + p': {
    textIndent: '0px !important',
  },

  '& h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child, p.md-cat:first-child': {
    marginTop: '0 !important',
  },
  '& .md-pages > li:last-child': {
    // marginBottom: `${modularScale.base.px * 0.375 / 4}em`,
  },
  '& .md-pages': {
    paddingLeft: '1.5em',
    listStyle: 'none',
  },
  '& .md-page-active > span': {
    marginLeft: '-28.2px !important',
  },
  '& .md-headings': {
    listStyle: 'none',
    paddingLeft: '1.25em',

    '& li': {
      fontSize: 'inherit',
      position: 'relative',

      '&:first-child': {
        marginTop: 20,
      },

      '&:before': {
        content: `""`,
        display: 'block',
        borderTop: '1px solid #363636',
        borderLeft: '1px solid #363636',
        height: '100%',
        width: '0.475em',
        position: 'absolute',
        bottom: '-0.625em',
        left: '-0.863em',
      },

      '&:after': {
        content: `""`,
        display: 'block',
        borderLeft: '1px solid #363636',
        height: '100%',
        width: '0.475em',
        position: 'absolute',
        bottom: '0.475em',
        left: '-0.863em',
      },

      '&:last-child:before': {
        borderLeft: 'none',
      },
    },
  },
});
const markdownStylesClass = markdownStyles.toString();

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default markdownStylesClass;

