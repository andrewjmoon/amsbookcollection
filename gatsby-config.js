require("dotenv").config()
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: "appZLHFnG8ZaT6F9X",
            tableName: "Collection",
          },
          {
            baseId: "appZLHFnG8ZaT6F9X",
            tableName: "Collection2",
          },
          {
            baseId: "appZLHFnG8ZaT6F9X",
            tableName: "Collection3",
          },
          {
            baseId: "appZLHFnG8ZaT6F9X",
            tableName: "Audiobooks",
          },
        ],
      },
    },
    `gatsby-theme-material-ui`,
  ],
}
