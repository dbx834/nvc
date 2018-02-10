---
title: Getting Started
cover: https://unsplash.it/400/300/?random?AngelsofMist
category: 1.Quick Start
abstract: Launch Kit is an opionated GatsbyJS Starter kit built for Netlify. Getting started is easy and takes 5 minutes.
date: 2018-01-01
tags:
  - gatsbyjs
---

# Getting these files

```jsx
cd to/your/directory
git clone https://github.com/bodhi-project/web-template
shopt -s dotglob nullglob
mv -vn web-template/* .
rm -rf web-template
npm install 
npm run develop 
```

# Upgrading package dependencies

```jsx
npm-upgrade
npm install --save
```

See [npm-upgrade](https://www.npmjs.com/package/npm-upgrade) for more details.

# Checking for unused dependecies

```jsx
depcheck --ignore-dirs=content,data,node_modules,public,static
```

See [depcheck](https://github.com/depcheck/depcheck) for more details.

# Deploying

Any project built using Launch Kit can be deployed on [Netlify](https://www.netlify.com) within 5 minutes. To deploy to Netlify push your code to a Github repo and follow the wizard on the [Netlify app](https://app.netlify.com/).

Study the [Netlify Docs](https://www.netlify.com/docs/) for more details.