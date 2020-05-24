const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const paths = require('react-scripts/config/paths');

module.exports = function override(config, env) {
    const purgecssPlugin = new PurgecssPlugin({
        // paths: ['./public/index.html', ...glob.sync(`./src/*`)],
        paths: [paths.appHtml, ...glob.sync(`${paths.appSrc}/**/*`, { nodir: true })],
    });

    if (env !== 'development') {
        config.plugins = [...config.plugins, purgecssPlugin];
    }

    return config;
};