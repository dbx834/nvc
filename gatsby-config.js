// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
const packageJson = require("./package.json");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { data } = packageJson;
const themeColor = "#FFD801";
const backgroundColor = "#FFD801";

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
module.exports = {
  pathPrefix: data.pathPrefix,
  siteMetadata: {
    siteUrl: data.websiteUrl,
    rssMetadata: {
      site_url: data.websiteUrl,
      feed_url: `${data.nakedWebsiteUrl}${data.rssUrl}`,
      title: data.websiteName,
      description: data.websiteDescription,
      image_url: `${data.nakedWebsiteUrl}/android-chrome-384x384.png`,
      author: data.org.name,
      copyright: data.copyright,
    },
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyzer",
    //   options: {
    //     analyzerPort: 3000,
    //     production: true,
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-less",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: data.googleAnalyticsID,
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: themeColor,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: data.websiteName,
        short_name: data.websiteName,
        description: data.websiteDescription,
        start_url: data.pathPrefix,
        background_color: backgroundColor,
        theme_color: themeColor,
        display: "standalone",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = "GatsbyJS Material Starter";
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                author
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMarkdownRemark.edges.map(edge => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.frontmatter.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                author: rssMetadata.author,
                url: rssMetadata.site_url + edge.node.fields.route,
                guid: rssMetadata.site_url + edge.node.fields.route,
                custom_elements: [{ "content:encoded": edge.node.html }],
              }));
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields { route }
                    frontmatter {
                      title
                      cover
                      date
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: data.rssUrl,
          },
        ],
      },
    },
  ],
};
