// ----------------------------------------------------------------------- Imports
const path = require("path");
const _ = require("lodash");
const unified = require("unified");
const markdown = require("remark-parse");
// const webpackLodashPlugin = require("lodash-webpack-plugin");

// console.log(unified().use(markdown).parse(testMd));

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** gets last page */
const getPrev = (index, edges, thisEdge) => {
  const sliced = _.slice(edges, 0, index);
  let returnNode = null;

  _.map(_.reverse(sliced), edge => {
    if (_.isNull(returnNode)) {
      const type = _.split(_.trim(edge.node.fields.route), "/", 1)[0];
      const thisType = _.split(_.trim(thisEdge.node.fields.route), "/", 1)[0];
      if (type === thisType) {
        returnNode = edge.node;
      }
    }
  });

  return returnNode;
};

/** gets next page */
const getNext = (index, edges, thisEdge) => {
  const sliced = _.slice(edges, index + 1);
  let returnNode = null;

  _.map(sliced, edge => {
    if (_.isNull(returnNode)) {
      const type = _.split(_.trim(edge.node.fields.route), "/", 1)[0];
      const thisType = _.split(_.trim(thisEdge.node.fields.route), "/", 1)[0];
      if (type === thisType) {
        returnNode = edge.node;
      }
    }
  });

  return returnNode;
};

// ----------------------------------------------------------------------- Create Nodes
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let route;
  // Where will createPages attach the component? ...
  // Get raw markdown ...
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    route = `${parsedFilePath.dir === "" ? "" : parsedFilePath.dir}/${
      parsedFilePath.name
    }`;
    createNodeField({ node, name: "route", value: route }); // ...createPages will attach the component at this route
    createNodeField({ node, name: "rawContent", value: node.internal.content }); // ...createPages will attach the component at this route
    // console.log(node.internal.content);
  }
};

// ----------------------------------------------------------------------- Create Pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    // const doc = path.resolve("src/templates/doc.jsx");
    const event = path.resolve("src/templates/event.jsx");
    // const faq = path.resolve("src/templates/faq.jsx");
    const page = path.resolve("src/templates/page.jsx");
    const post = path.resolve("src/templates/post.jsx");
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    category
                    title
                    subTitle
                    cover
                    date
                    startDate
                    finishDate
                    fromTime
                    toTime
                    category
                    tags
                    cost
                    abstract
                  }
                  headings {
                    depth
                    value
                  }
                  fields {
                    route
                    rawContent
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        const { edges } = result.data.allMarkdownRemark;

        edges.sort((a, b) => {
          const aNode = a.node.frontmatter;
          const bNode = b.node.frontmatter;
          const A = !_.isNull(aNode.startDate) ? aNode.startDate : aNode.date;
          const B = !_.isNull(bNode.startDate) ? bNode.startDate : bNode.date;
          const dateA = new Date(A);
          const dateB = new Date(B);
          return dateA - dateB;
        });

        // Loop through markdown nodes
        edges.forEach((edge, i) => {
          const trimmedRoute = _.trim(edge.node.fields.route);
          const prev = i === 0 ? null : getPrev(i, edges, edge);
          const next = i === edges.length - 1 ? null : getNext(i, edges, edge);

          const context = {
            frontmatter: edge.node.frontmatter,
            headings: edge.node.headings,
            route: edge.node.fields.route,
            markdownAst: unified()
              .use(markdown)
              .parse(edge.node.fields.rawContent),
            prev,
            next,
          };
          const pathX = edge.node.fields.route;

          if (_.startsWith(trimmedRoute, "events")) {
            createPage({
              path: pathX,
              component: event,
              context,
            });
          } else if (_.startsWith(trimmedRoute, "writings")) {
            createPage({
              path: pathX,
              component: post,
              context,
            });
          } else {
            createPage({
              path: pathX,
              component: page,
              context,
            });
          }
        });
      }),
    );
  });
};
