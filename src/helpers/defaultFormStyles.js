// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import merge from "lodash/merge";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { applyType, applyRhythm } from "@bodhi-project/typography";

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Default form style
const formStyle = css({
  display: "flex !important",
  flexWrap: "wrap !important",
  color: "inherit !important",

  "& .ant-form-item": merge(
    {
      display: "flex !important",
      width: "100%",
      flexGrow: "1",

      "& .ant-form-explain": {
        fontSize: "70%",
        marginTop: 5,
      },

      "& .ant-select": {
        fontSize: "inherit",
        fontFamily: "inherit",
        color: "#363636",
      },

      "& .ant-select-selection": {
        border: "none",
        borderBottom: "2px solid #646464",
        borderRadius: 0,
        height: "auto",
        backgroundColor: "#f8f2e6",

        "&:focus,:active": {
          border: "none",
          boxShadow: "none",
          borderBottom: "2px solid #646464",
        },
      },

      "& .ant-select-selection__rendered": {
        margin: 0,
        ...applyRhythm({ padding: "0X 0X 0.141X" }),
      },

      "& .ant-select-selection__placeholder": {
        color: "#363636",
        height: "auto",
        top: "unset",
        left: "unset",
        right: "unset",
        marginTop: "unset",
      },

      "& .ant-select-arrow": merge(
        {
          color: "#363636",
          right: 0,
          marginTop: -16,
        },
        ...applyType("ltb1ekq"),
      ),
    },
    ...applyType("ltb1ekq"),
    ...applyRhythm({ marginBottom: "1X" }),
  ),

  "& .ant-form-item-control-wrapper": {
    width: "100%",
  },

  "& .ant-input": {
    fontSize: "80%",
    fontFamily: "inherit",
    border: "none",
    borderBottom: "2px solid #646464",
    borderRadius: 0,
    height: "auto",
    color: "#363636",
    transition: "border 500ms cubic-bezier(0.215, 0.61, 0.355, 1)",
    backgroundColor: "#f8f2e6",
    ...applyRhythm({ padding: "0X 0X 0.141X" }),

    "&::-webkit-input-placeholder": {
      color: "#363636",
    },

    "&:hover::-webkit-input-placeholder": {
      color: "#0000FF",
    },

    "&:hover": {
      border: "none",
      boxShadow: "none",
      borderBottom: "2px solid #646464",
      color: "#0000FF",
    },
    "&:visited": {
      border: "none",
      boxShadow: "none",
      borderBottom: "2px solid #646464",
    },
    "&:link": {
      border: "none",
      boxShadow: "none",
      borderBottom: "2px solid #646464",
    },
    "&:active": {
      border: "none",
      boxShadow: "none",
      borderBottom: "2px solid #646464",
    },
    "&:focus": {
      border: "none",
      boxShadow: "none",
      borderBottom: "2px solid #0000FF",
      color: "#0000FF",
    },
  },

  // Submit button
  "& .ant-btn-primary": merge(
    {
      fontSize: "inherit",
      borderRadius: 0,
      backgroundColor: "#0000FF",
      borderColor: "#0000FF",

      "& span": {
        fontSize: "80%",
      },
    },
    ...applyRhythm({ height: "1X" }),
    ...applyRhythm({ padding: "0X 0.625X" }),
  ),

  "& .ant-btn-primary[disabled]": {
    color: "rgba(54, 54, 54, 0.375)",
    backgroundColor: "#FFFFFF",
    borderColor: "#363636",
    backgroundImage:
      "linear-gradient(-45deg, rgba(0, 0, 0, 0) 46%, #363636 49%, #363636 51%, rgba(0, 0, 0, 0) 10%)",
    ...applyRhythm({ backgroundSize: "0.45X 0.45X" }),
  },

  "& .has-error .ant-input:focus": {
    border: "none !important",
    boxShadow: "none !important",
    borderBottom: "3px solid #ff4d4f !important",
  },
});

const formStyleClass = formStyle.toString();

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default { formStyleClass };
