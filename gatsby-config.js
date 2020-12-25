module.exports = {
  siteMetadata: {
    title: `qrn.la`,
    author: {
      name: `D. Morita`,
      summary: `Null`,
    },
    description: `Null`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: '9ed5f06c-ca53-47b9-858d-23011966d6d0',
        serviceId: 'laprn',
        apis: [{
          endpoint: 'blog',
        }],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `qrn.la`,
        short_name: `qrn.la`,
        start_url: `/`,
        background_color: `#222b40`,
        theme_color: `#222B40`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
