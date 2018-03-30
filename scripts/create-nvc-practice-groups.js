// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
const fs = require("fs");
const moment = require("moment");
const _ = require("lodash");

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const dirName = "nvc-practice-groups";
const years = ["2018"];
const every = "Wednesday";

/** make a dir */
const makeDir = dir => {
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir);
      console.log(`Created ${dir}`);
    } catch (e) {
      console.log(`Failed creating ${dir}`);
      console.log(e);
    }
  } else {
    console.log(`${dir} already exists`);
  }
};

// define version of fs.writeFile() that will only write the file
// if the file does not already exist and will do so without
// possibility of race conditions (e.g. atomically)
/** writes a file if it doesn't exist */
fs.writeFileIfNotExist = (fname, contents, options, callback) => {
  if (typeof options === "function") {
    // it appears that it was called without the options argument
    callback = options;
    options = {};
  }
  options = options || {};
  // force wx flag so file will be created only if it does not already exist
  options.flag = "wx";
  fs.writeFile(fname, contents, options, err => {
    var existed = false;
    if (err && err.code === "EEXIST") {
      // This just means the file already existed.  We
      // will not treat that as an error, so kill the error code
      err = null;
      existed = true;
    }
    if (typeof callback === "function") {
      callback(err, existed);
    }
  });
};

const template = `
---
title: NVC Practice Group
subTitle: Every Wednesday
cover: https://unsplash.it/400/300/?random?AngelsofMist
category: 1.NVC
abstract: Page abstract.
date: %date%
fromTime: 4.30pm
toTime: 6.30pm
type: event
cost: ₹500
tags:
  - nvc
  - practice-group
---

Prerequisite: for those who have some background in Nonviolent Communication

Requirement: commitment for minimum 1-month

To confirm your attendance and for additional details like venue, etc - please register.

`;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
// 1. Create 'dirName' if does not exist...
const dir = `./content/events/${dirName}`;
makeDir(dir);

_.map(years, year => {
  const yearDir = `${dir}/${year}`;
  makeDir(yearDir);

  const startDate = moment(`${year}-01-01`);
  const endDate = startDate.clone().endOf("year");
  const duration = Math.round(
    Math.abs(
      parseFloat(moment.duration(startDate.diff(endDate)).as("days"), 10),
    ),
  );

  _.times(duration, addThis => {
    const normalize = addThis + 1;
    const thisDay = startDate.clone().add(normalize, "day");
    const day = thisDay.format("dddd");
    const thisDate = thisDay.format("YYYY-MM-DD");
    const fileName = `${yearDir}/${thisDate}.md`;
    const humanDate = thisDay.format("dddd, MMMM Do YYYY");

    let content = _.replace(template, "%date%", thisDate);
    content = _.replace(content, "%humanDate%", humanDate);
    content = _.trimStart(content);

    if (day === every) {
      fs.writeFileIfNotExist(fileName, content, (err, existed) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`created ${fileName}`);
        }
      });
    }
  });
});
