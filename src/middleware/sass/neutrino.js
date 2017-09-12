module.exports = (neutrino, options = {}) => {
  const isProd = neutrino.options.env.NODE_ENV === 'production'
  // prettier-ignore
  neutrino.config.module
    .rule('sass-style')
      .test(/\.s[ac]ss$/)
      .when(isProd, rule => rule
        .use('extract-css')
          .loader(require.resolve('extract-text-webpack-plugin/loader'))
          .options({
            omit: 1,
            remove: true,
          })
      )
      .use('style')
        .loader(require.resolve('style-loader'))
      .when(options.style, use => use.options(options.style))
        .end()
      .use('css')
        .loader(require.resolve('css-loader'))
        .options(Object.assign(
          {
            minimize: isProd,
            sourceMap: isProd,
          },
          options.css
        ))
        .end()
      .use('sass')
        .loader(require.resolve('sass-loader'))
        .options(Object.assign(
          {
            sourceMap: isProd,
          },
          options.sass
        ))
}
