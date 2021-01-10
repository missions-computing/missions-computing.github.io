// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Taylor Center for Missions Computing",
  siteDescription: "Home page for the TCMC",
  siteUrl: "https://missions-computing.org",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/**/*.md",
        remark: {
          // remark options
        },
      },
    },
  ],
};
