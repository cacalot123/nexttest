const withSass = require('@zeit/next-sass');
module.exports = withSass({
  webpack: (config, {dev}) => {
    return config;
  },
  useFileSystemPublicRoutes: false
});

