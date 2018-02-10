---
title: Semantics
cover: https://unsplash.it/400/300/?random?AngelsofMist
category: 2.The Stack
abstract: HTML5 introduces a number of sectioning elements that can be used to mark up web pages. Using these elements gives more semantic meaning to the pages, allowing computer programs to better understand the content. This information is extremely useful to applications like screen readers.
date: 2017-12-01
tags:
    - cheese
    - other
---

# Webflow Library

[@bodhi-project/semantic-webflow](https://github.com/bodhi-project/semantic-webflow) is a library that intends to direct you to think about the structure of your writing.

This library just exports a number of elements that are there in HTML5 anyways. The rationale behind this library is to consciously think about the structure of the document by adding an extra step.

Using these sectioning elements has the benefit of making us, the developers, think more about the structure of our web pages. Selecting which element to use for a piece of content isn’t always very obvious, but it raises important questions about the **purpose of the content**, where it fits in into the strucutre of a page, what meaning it's trying to convey, and whether it belongs on the page at all.

This is an example of where web standards are not only helping to improve the quality of our markup, but the quality of our web pages as a whole.

Additionally, not all screen readers currently support these semantic elements. [ARIA roles](http://alistapart.com/article/aria-and-progressive-enhancement/) are added to each element.

## Getting Started

This package is installed and ready to go. To start using these features import the elements into any React component.

```jsx
// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
  ...

  import {
    Page,
    Section,
    Article,
    Header,
    Nav,
    Aside,
    Footer,
    Address,
  } from '@bodhi-project/semantic-webflow';

  ...
```

## The Page Element

The <Page /\> element should contain the **main content** for the web page.

All of this **content should be unique** to the individual page, and should not appear elsewhere on the site.

```jsx
<body>
  <Page>
    {/* The page header */}
    <Header>
      <h1>Guitars</h1>
      <p>The greatest guitars ever built.</p>
    </Header>

    <Article>
      {/* The header for article #1 */}
      <Header>
        <h2>Gibson SG</h2>
      </Header>
      <p>...</p>
    </Article>

    <Article>
      {/* The header for article #2 */}
      <Header>
        <h2>Fender Telecaster</h2>
      </Header>
      <p>...</p>
    </Article>
  </Page>
</body>
```

Any content that is repeated on multiple pages (logos, search boxes, footer links, etc.) should not be placed within the <Page /\> element.

The <Page /\> element should be used **only once on a page**. And, it shouldn’t be placed within an <Article /\>, <Aside /\>, <Header /\>, <Footer /\>, or <Nav /\> element.

## The Article Element

The <Article /\> element should contain a piece of self-contained **content that could be distributed outside the context of the page**. This includes things like news articles, blog posts, or user comments.

```jsx
<body>
  <Page>
    {/* An article */}
    <Article>
      <Header>
        <h2>Title...</h2>
        <p>Posted on December 31, 2017</p>
      </Header>
      <p>Content...</p>
    </Article>
  </Page>
</body>
```
## The Section Element

The <Section /\> element is used to represent **a group of related content**.

This is similar to the purpose of an <Article /\> element with the main difference being that the content within a <Section /\> element doesn’t necessarily need to make sense out of the context of the page.

# The Nav Element

The <Nav /\> element is used to mark up a collection of links to external pages or sections within the current page. As well as being used for the main website navigation, the <Nav /\> element is also good for things like a table of contents, or a blogroll.

```jsx
<Nav>
  <ul>
    <li><a href="#chapter-one">Chapter One</a>
    <li><a href="#chapter-two">Chapter Two</a>
    <li><a href="#chapter-three">Chapter Three</a>
  </ul>
</Nav>
```

Marking up hyper-links within a list will often make the navigation easier to use, however this is not a requirement when using the <Nav /\> element.

## The Aside Element

The <Aside /\> element is used to represent **content that is tangibly related** to the content surrounding it, but could be considered separate. This includes things like sidebars (like those you might find in a book), groups of <Nav /\> elements, figures and pull quotes.

```jsx
<body>
  <Page>
    <Article>
      <Header>
        <h1>Some Book...</h1>
        <p>This is the best book you will ever read, this book is about...</p>
      </Header>
      
      <p>...</p>
      <p>...</p>

      <Aside>
        <Nav>
          <ul>
            <li><a href="#chapter-one">Chapter One</a>
            <li><a href="#chapter-two">Chapter Two</a>
            <li><a href="#chapter-three">Chapter Three</a>
          </ul>
        </Nav>
      </Aside>
    </Article>
  </Page>
</body>
```

## The Header Element

The <Header /\> element is used to represent the **introductory content** to an article or web page. This will usually contain a heading element as well as some metadata that’s relevant to the content, such as the post date of a news article for example. It could also contain a table of contents (within a <Nav /\> element) for a longer document.

```jsx
<body>
  <Page>
  {/* Page header */}
  <Header>
    <h1>Best books in the world</h1>
    <p>This website has the best books in the world...</p>
  </Header>

    <Article>
      {/* Article header */}
      <Header>
        <h1>Some Book...</h1>
        <p>This is the best book you will ever read, this book is about...</p>
      </Header>

      ...
    </Article>
  </Page>
</body>
```

A <Header /\> element will be associated with the nearest sectioning element, usually it’s direct parent in the page structure.

## The Footer Element

The <Footer /\> element is used to represent information about a section such as the author, copyright information, or links to related web pages.

```jsx
<body>
  <Page>
    <Article>
      {/* Article footer */}
      <Footer>
        <p>This article was written by Mangal The Wise.</p>
      </Footer>

      ...
    </Article>

    {/* Page footer */}
    <Footer>
      <p>Copyright Mr. Mangal Varshney 2018.</p>
    </Footer>
  </Page>
</body>
```

As with <Header /\>, the <Footer /\> element is associated with the nearest sectioning element.

## The Address Element

The <Address /\> element is a misunderstood HTML element. This element is not for marking up postal address, but rather for representing the contact information for an article or web page. This could be a link to the author’s website or their email address.

```jsx
<Address>
  Contact <a href="mailto:mangal@bodhiproject.org">Mangal The Wise</a>
</Address>
```

This element is often used within the <Footer /\>.

```jsx
<body>
  <Page>
    <Article>
      {/* Article footer */}
      <Footer>
        <p>This article was written by Mangal The Wise.</p>
      </Footer>

      ...
    </Article>

    {/* Page footer */}
    <Footer>
      <p>Copyright Mr. Mangal Varshney 2018.</p>
      <br />
      <Address>
        Contact <a href="mailto:mangal@bodhiproject.org">Mangal The Wise</a>
      </Address>
    </Footer>
  </Page>
</body>
```

# Further Resources

[A brief overview of HTML5 Semantics](https://codepen.io/mi-lee/post/an-overview-of-html5-semantics).

[A very comprehensive article on semantics](http://diveintohtml5.info/semantics.html), and [here](http://diveintohtml5.info/semantics.html#new-elements) is the part that talks about semantic elements in HTML5. The package is based on this series of articles.

