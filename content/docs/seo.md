---
title: SEO
cover: https://unsplash.it/400/300/?random?AngelsofMist
category: 2.The Stack
abstract: Launch Kit implements robots.txt, Sitemap, schema.org JSON-LD, OpenGraph and Twitter Tags. All these features are baked-in into the kit.
date: 2017-12-01
tags:
    - cheese
    - other
---

# SEO Library

[@bodhi-project/seo](https://github.com/bodhi-project/seo) is a library that implements [react-helmet](https://github.com/nfl/react-helmet). This library is meant to handle SEO needs of all our projects.

## Getting Started

This package is installed and ready to go. To start using these features import the tags into any React component.

```jsx
// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
  ...

  import {
    // --------------- Basic
    UpdateTitle,
    GeneralMeta,
    // --------------- Twitter
    TwitterSummaryCard,
    // --------------- Open Graph
    OpenGraphSummary,
    // --------------- Schema.org JSON-LD
    WebsiteSchema,
    WebpageSchema,
    BreadcrumbSchema,
    OrganisationSchema,
  } from '@bodhi-project/seo';

  ...
```

## Initializing
```jsx
<InitializeMeta data={{ titleTemplate: '%s | Launch Kit' }} />
```

## Updating Title

```jsx
<UpdateTitle title="Some title" />
```

## Basic Metadata

```jsx
const generalMetaData = {
  description: 'Implements general meta tags, schema.org\'s and Google\'s JSON-LD, Twitter\'s summary and video cards and Facebook\'s Open Graph Protocol ',
  keywords: 'seo, open-graph, schema.org, twitter cards',
  image: openGraphBanner,
};

<GeneralMeta data={generalMetaData} />
```

## Twitter Cards

### Summmary Card

Implements [Twitter's Summary Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary).

```jsx
const twitterSummaryCardData = {
  title: 'SEO Library',
  description: 'Implements general meta tags, schema.org\'s and Google\'s JSON-LD, Twitter\'s summary and video cards and Facebook\'s Open Graph Protocol ',
  image: twitterBanner,
  imageAlt: 'The logo of the Bodhi Project. The image has a blue background with two concentric circles occupying the center of the image. The circles are white in color. The outer circle is hollow and the inner circle is solid.',
};

<TwitterSummaryCard data={twitterSummaryCardData} />
```

### Video Card

Implements [Twitter's Video Card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/player-card).

```jsx
// Note "yQCHZGTPZz8" is the YouTube video id, it can be found in the URL.
const twitterVideoCardData = {
  title: 'SEO Library',
  description: 'Implements general meta tags, schema.org\'s and Google\'s JSON-LD, Twitter\'s summary and video cards and Facebook\'s Open Graph Protocol ',
  player: 'https://www.youtube.com/embed/yQCHZGTPZz8',
  image: 'http://img.youtube.com/vi/yQCHZGTPZz8/maxresdefault.jpg',
  imageAlt: 'The logo of the Bodhi Project. The image has a blue background with two concentric circles occupying the center of the image. The circles are white in color. The outer circle is hollow and the inner circle is solid.',
};

<TwitterVideoCard data={twitterVideoCardData} />
```

## OpenGraph

Implements the [Open Graph protocol](http://ogp.me/).

```jsx
const openGraphSummaryData = {
  siteName: 'Bodhi Project',
  url: 'https://bodhiproject.org',
  title: 'SEO Library by Bodhi Project',
  description: 'Implements general meta tags, schema.org\'s and Google\'s JSON-LD, Twitter\'s summary and video cards and Facebook\'s Open Graph Protocol ',
  image: openGraphBanner,
};

<OpenGraphSummary data={openGraphSummaryData} />
```

## Schema.org

The following components implement some of [schema.org's](http://schema.org/) [schemas](http://schema.org/docs/schemas.html) that are meant for the web.

By using these tags a [JSON-LD](https://json-ld.org/) script is added into the _head_ element of the document. Google understands JSON-LD well and [recommends](https://developers.google.com/search/docs/guides/intro-structured-data) it for SEO and to describe what a page is about.

## Website

Implements the [website schema](http://schema.org/WebSite).

```jsx
const websiteSchemaData = {
  url: 'https://bodhiproject.org',
  name: 'SEO Library by Bodhi Project',
  description: 'Implements general meta tags, schema.org\'s and Google\'s JSON-LD, Twitter\'s summary and video cards and Facebook\'s Open Graph Protocol ',
  author: 'Pranav Kumar',
  publisher: 'Bodhi Project',
  image: openGraphBanner,
};

<WebsiteSchema data={websiteSchemaData} />
```

### Webpage

Implements the [webpage schema](http://schema.org/WebPage).

```jsx
const webpageSchemaData = {
  url: 'https://bodhiproject.org',
  name: 'SEO Library by Bodhi Project',
  description: 'Implements general meta tags, schema.org\'s and Google\'s JSON-LD, Twitter\'s summary and video cards and Facebook\'s Open Graph Protocol ',
  author: 'Pranav Kumar',
  publisher: 'Bodhi Project',
  image: openGraphBanner,
};

<WebpageSchema data={webpageSchemaData} />
```

### Organisation

Implements the [organisation schema](http://schema.org/Organization).

```jsx
const organisationSchemaData = {
  name: 'Bodhi Project',
  legalName: 'Bodhi Project Inc.',
  url: 'https://www.bodhiproject.org',
  logo: '',
  foundingDate: '2017',
  founders: ['Pranav Kumar', 'Brijesh Kumar', 'Mangal Varshney'],
  streetAddress: '#123, Street ABC.',
  addressLocality: 'Kotagiri',
  addressRegion: 'Tamil Nadu',
  postalCode: '123456',
  addressCountry: 'India',
  telephone: ['+918105700880'],
  email: 'hello@bodhiproject.org',
  sameAs: ['https://www.instagram.com/bodhi.systems/'],
  image: openGraphBanner,
};

<OrganisationSchema data={organisationSchemaData} />
```

### Breadcrumb

Implements the [breadcrumb schema](http://schema.org/breadcrumb).

```jsx
const breadcrumbSchemaData = {
  breadcrumbs: [
    { name: 'Home', url: 'https://www.bodhiproject.org' },
    { name: 'Products', url: 'https://www.bodhiproject.org/products' },
  ],
};

<BreadcrumbSchema data={breadcrumbSchemaData} />
```

# Further Resources

Use [Google's Structured Data Tool](https://search.google.com/structured-data/testing-tool/u/0/) to debug schema.org's JSON-LD scripts.
