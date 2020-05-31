module.exports = {
  siteMetadata: {
    title: "Shahbaz Portfolio",
    author: "Shahbaz Gul Khan",
    linkedInUrl: "https://www.linkedin.com/in/shahbaz-gul-khan-4a337798/",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
  ],
}

// {
//   resolve: `gatsby-transformer-remark`,
//   options: {
//     // CommonMark mode (default: true)
//     commonmark: true,
//     // Footnotes mode (default: true)
//     footnotes: true,
//     // Pedantic mode (default: true)
//     pedantic: true,
//     // GitHub Flavored Markdown mode (default: true)
//     gfm: true,
//     // Plugins configs
//     plugins: [],
//   },
// },
