---
title: Static Content
cover: https://unsplash.it/400/300/?random?AngelsofMist
category: 2.The Stack
abstract: Hello world
date: 2017-12-01
tags:
    - cheese
    - other
---

# A Little Background

[GatsbyJS](https://www.gatsbyjs.org/) is a static site generator that uses [React](https://reactjs.org/) as the underlying rendering engine to scaffold out a static site. Behind the scenes GatsbyJS renders dynamic React components into static HTML content via server side rendering at build time. This allows us to derive the benefits of a static site - the ability to work without JavaScript, search engine friendliness, speedy load times, etc. without losing the dynamism and interactivity that is expected of the modern web. Once rendered to static HTML, client-site React/JavaScript can take over and add dynamism to the statically generated content.

# The markdown-to-react Library

Launch Kit uses [markdown](https://www.wikiwand.com/en/Markdown) as a source of static content.

The library is a work in progress. Nonetheless, it's ready to go and is being used in our projects. At the moment it covers the most-used elements (headings, paragraphs, links, inline-styles, images, videos and galleries). Support for more things will be added over time.

## GFM

We use [Github Flavoured Markdown](https://github.github.com/gfm/#what-is-github-flavored-markdown-) for our static content.

## What's implemented?

We've used [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) as a guide post to implement this library. Our goal is to cover everything in it. Right now the library covers:

### Headings

Headings from H1-H5 are allowed in our syntax. H1 is reserved for top-level header banner.

```md
# H1
## H2
### H3
#### H4
##### H5
```

### Inline Styles

We implement _Emphasis_ (italics) and **Strong emphasis** (bold) at the moment like so:

```md
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.
```

### Lists

Lists are a work in progress. Simple lists work at the moment.

```jsx
Shopping list: 

1. Bread
2. Eggs
3. Butter
4. Milk
```

### Links

Links are a work in progress. Simple links work at the moment.

```jsx
[Google](https://www.google.com) is a search engine.
```

### Images

Images can be embedded like so:

```jsx
![About #1](https://images.unsplash.com/photo-1483030096298-4ca126b58199?auto=format&fit=crop&w=900&h=900)

![About #2](https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?auto=format&fit=crop&w=900&h=900)
```

- If there is a single image, it is embedded as is.
- If there are two or more images, they are converted into a gallery.

Not all features are documented here because it is out of context. A separate documentation will be created for the _markdown-to-react_ library.

### Code and Syntax Highlighting

_markdown-to-react_ implements the [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter) for highlighting syntax.

### Blockquotes

Anything indented will be wrapped by a block quote.

```jsx
> This will be indented.
> This will also be indented.
> And so will this be.
```

## How the library works

This is how it works:

&nbsp; 1. GatsbyJS' [gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark) recognizes all files with Markdown extenstion (.md). For each file it creates an [abstract syntax tree](https://www.wikiwand.com/en/Abstract_syntax_tree) using the [remark-parse](https://www.npmjs.com/package/remark-parse). You can find the raw markdown file for this page [here](https://github.com/bodhi-project/launch-kit/blob/master/content/docs/static-content.md).

&nbsp; 2. This AST is passed to our library - [markdown-to-react](https://github.com/bodhi-project/markdown-to-react) which converts raw markdown into React components as per our [typographic](/docs/typography) and [UI/UX](/docs/ui-and-ux) needs, requirements and designs.

&nbsp; 3. For each markdown file a new route is created relative to the content folder. For example, the raw markdown for this file, which is placed at _/content/docs/static-content.md_, is rendered at https://launch-kit.bodhiproject.org/docs/static-content.

