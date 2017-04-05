var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

var loaders = utils.cssLoaders({
    sourceMap: isProduction
        ? config.build.productionSourceMap
        : config.dev.cssSourceMap,
    extract: isProduction
});

loaders['js'] = 'babel-loader?presets[]=es2015&presets[]=stage-2';

module.exports = {
  loaders: loaders
};
