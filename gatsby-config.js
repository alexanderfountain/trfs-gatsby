const postType = {
  id: 1,
  name: "String",
  published: true,
  object: { a: 1, b: "2", c: false },
  array: [{ a: 1, b: "2", c: false }],
}
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "internal__",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://api.simplyrets.com/properties`,

        method: "get",

        allowCache: true,
        // if allowCache is true, then the cache will be purged after the
        // specified amount of time
        maxCacheDurationSeconds: 60 * 60 * 24,

        headers: {
          "Content-Type": "application/json",
        },

        // Request body
        data: {},

        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `posts`,

        // Nested level of entities in response object, example: `data.posts`
        // entityLevel: `data.posts`,

        // Define schemaType to normalize blank values
        // example:
        // const postType = {
        //   id: 1,
        //   name: 'String',
        //   published: true,
        //   object: {a: 1, b: '2', c: false},
        //   array: [{a: 1, b: '2', c: false}]
        // }
        schemaType: postType,

        // Request parameters
        // Only available from version 2.1.0
        params: {
          per_page: 1,
        },

        // Simple authentication, optional
        auth: {
          username: "simplyrets",
          password: "simplyrets",
        },

        //  Required folder path where the data should be saved if using localSave option
        //  This folder must already exist
        path: `${__dirname}/src/data/auth/`,

        // Optionally include some output when building
        // Default is false
        verboseOutput: true, // For debugging purposes
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return true
        },
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
          if (doc.type === "page") {
            return "/" + doc.uid
          }
          // Homepage route fallback
          return "/"
        },
        // PrismJS highlighting for labels and slices
        repositoryName: `trfs-gatsby`,
        accessToken: `MC5ZRktJd3hBQUFDRUFDeEVV.WwPvv73vv73vv70G77-9Cu-_ve-_ve-_vS3vv71c77-9RO-_vR9Kewp4ewJ077-977-9X1jvv70pHg`,
        schemas: {
          page: require("./src/schemas/page.json"),
        },
        prismicToolbar: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
