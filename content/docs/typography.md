---
title: Typography
cover: https://unsplash.it/400/300/?random?AngelsofMist
category: 2.The Stack
abstract: Hello world
date: 2017-12-01
tags:
    - cheese
    - other
---

# The Typography Library

The [typography](https://www.npmjs.com/package/@bodhi-project/typography) is a toolkit that allows for aesthetic web type. The library essentially generates hundreds of related style definitions that describe how the type will look. It is meant to work with [Adobe's Typekit](https://typekit.com/). It takes care of:

- Creating a harmonious type system, and,
- Asynchronously loading font files

## Imports

The library exports two elements and one function.

```jsx
import { Type, Elements, typeComposite } from '@bodhi-project/typography';
```

## Type

Use the <Type /\> element to wrap the entire website. It requires an _id_ that must be the same as a Typekit Kit ID, using this _id_ the element will fetch fonts asynchronously.

```jsx
...
<Type kit="ltb1ekq" style={{ minHeight: '100vh' }} className="some-class">
  ...
</Type>
...

```

You can control styles by adding a _class_ to the wrapper.

## typeComposite

The _typeComposite_ function exposes the underlying style definitions. Use it like so:

```jsx
const { getType } = typeComposite;
const type = getType('eih3wnu');
const { kit, modularScale } = type;
```

_kit_ and _modularScale_ contain all the variable that have been used to generate styles for a particular typekit. You can use these to modify styles or build your own type system.

## Elements

Desugar _Elements_ to use individual elements.

```jsx
const { H1, H2, H3, H4, H5, H6, Paragraph, Ul, Ol } = Elements;
```

Each individual element can also be controlled in other ways through _props_ but this is not documented here. In-depth documentation for the Typography library will follow soon.

# Further Resources

[Pracitcal Typography](https://practicaltypography.com/) has been an inspiration for this package.

[Typography.js](http://kyleamathews.github.io/typography.js/) is a library similar to this one.

[Modular Scale](http://www.modularscale.com/?20&px&1.125) is a good resource to think how type can scale across different semantic elements, devices and use-cases.

Articles on [CSS Tricks](https://css-tricks.com/) on Typography such as [this one on letter spacing](https://css-tricks.com/keeping-track-letter-spacing-guidelines/) can serve as a good guidepost while designing a typeset for a project.

Explore the [Awwwards Collection on Typography in Web Design](https://www.awwwards.com/awwwards/collections/typography-in-web-design/) for inspiration.

Typography can be an artform and many years can be spent studying it! [Here](https://uxplanet.org/gestalt-theory-for-ux-design-principle-of-proximity-e56b136d52d1) is an article talking about [Gestalt theory](http://graphicdesign.spokanefalls.edu/tutorials/process/gestaltprinciples/gestaltprinc.htm) and Typography.
