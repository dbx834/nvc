// ----------------------------------------------------------------------- Imports
const path = require('path');
const _ = require('lodash');
const unified = require('unified');
const markdown = require('remark-parse');
// const webpackLodashPlugin = require("lodash-webpack-plugin");

// console.log(unified().use(markdown).parse(testMd));

// ----------------------------------------------------------------------- Create Nodes
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let route;
  // Where will createPages attach the component? ...
  // Get raw markdown ...
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    route = `${parsedFilePath.dir === '' ? '' : parsedFilePath.dir}/${parsedFilePath.name}`;
    createNodeField({ node, name: 'route', value: route }); // ...createPages will attach the component at this route
    createNodeField({ node, name: 'rawContent', value: node.internal.content }); // ...createPages will attach the component at this route
    // console.log(node.internal.content);
  }
};

// ----------------------------------------------------------------------- Create Pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const page = path.resolve('src/templates/page.jsx');
    // const tagPage = path.resolve("src/templates/tag.jsx");
    // const categoryPage = path.resolve("src/templates/category.jsx");
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

        // // Create a set each for tag and category pages
        // const tagSet = new Set();
        // const categorySet = new Set();

        // Loop through markdown nodes
        result.data.allMarkdownRemark.edges.forEach(edge => {
          // const nestedHeadings = [];
          // let previousDepth = edge.node.headings[0].depth;

          // _.forEach(edge.node.headings, (headingObject) => {
          //   let thisNode = {children: []};
          //   if (previousDepth === headingObject.depth) { // This is a sibling node
          //     thisNode = {...thisNode, ...headingObject};
          //     nestedHeadings.push(thisNode);
          //     thisNode = {children: []};
          //   } else { // This is a child

          //   }
          // });

          // Creates a page
          createPage({
            path: edge.node.fields.route,
            component: page,
            context: {
              route: edge.node.fields.route,
              markdownAst: unified()
                .use(markdown)
                .parse(edge.node.fields.rawContent),
              toc: result.data.allMarkdownRemark.edges,
            },
          });

          // // Add the tag to the set for later
          // if (edge.node.frontmatter.tags) {
          //   edge.node.frontmatter.tags.forEach(tag => {
          //     tagSet.add(tag);
          //   });
          // }

          // // Add the cateogry to the set for later
          // if (edge.node.frontmatter.category) {
          //   categorySet.add(edge.node.frontmatter.category);
          // }
        });

        // const tagList = Array.from(tagSet);
        // tagList.forEach(tag => {
        //   createPage({
        //     path: `/tags/${_.kebabCase(tag)}/`,
        //     component: tagPage,
        //     context: {
        //       tag
        //     }
        //   });
        // });

        // const categoryList = Array.from(categorySet);
        // categoryList.forEach(category => {
        //   createPage({
        //     path: `/categories/${_.kebabCase(category)}/`,
        //     component: categoryPage,
        //     context: {
        //       category
        //     }
        //   });
        // });
      }),
    );
  });
};

// exports.modifyWebpackConfig = ({ config, stage }) => {
//   if (stage === "build-javascript") {
//     config.plugin("Lodash", webpackLodashPlugin, [{'caching': true, 'collections': true}]);
//   }
// };
