// next.config.js

const webpack = require("webpack")
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssModules: true,
  webpack: (config, { dev}) => {
    config.node = {fs: "empty", net: 'empty', tls: 'empty'}
    config.module.rules.push({
      test: [
        /\.gif$/,
        /\.jpe?g$/,
        /\.png$/,
        /\.svg$/
      ],
      use: {
        loader: 'file-loader',
        options: {}  
      }
    });
    return config
  }
})


// Update these to match your package scope name.
/*const internalNodeModulesRegExp = /src(?!\/(?!.*js))/
const externalNodeModulesRegExp = /node_modules(?!\/@zeit(?!.*node_modules))/

module.exports = withCSS({
  useFileSystemPublicRoutes: true,
  cssModules: true,
  webpack: (config, { dev, isServer, defaultLoaders }) => {
    config.resolve.symlinks = true
    config.node = {fs: "empty", net: 'empty', tls: 'empty'}
    config.externals = config.externals.map(external => {
      if (typeof external !== "function") return external
      return (ctx, req, cb) => (internalNodeModulesRegExp.test(req) ? cb() : external(ctx, req, cb))
    })
    config.module.rules.push({
      test: [
        /\.gif$/,
        /\.jpe?g$/,
        /\.png$/,
        /\.svg$/
      ],
      use: {
        loader: 'file-loader',
        options: {}  
      }
    });
    defaultLoaders.babel.options.plugins.push("transform-decorators-legacy")
    defaultLoaders.babel.options.plugins.push("transform-class-properties")
    //console.log(defaultLoaders);
    config.module.rules.push({
      test: /\.+(js|jsx)$/,
      use: defaultLoaders.babel,
      include: [internalNodeModulesRegExp],
    })
    return config
  },
  webpackDevMiddleware: config => {
    const ignored = [config.watchOptions.ignored[0], externalNodeModulesRegExp]
    config.watchOptions.ignored = ignored
    config.stats = {
      warnings: false,
    };
    return config
  },
  distDir: 'next_build'
});*/
