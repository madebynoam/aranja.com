module.exports = {
  use: [
    [
      'neutrino-preset-tux',
      {
        html: {
          document: 'src/Html',
        },
      },
    ],
    neutrino => neutrino.config.entry('vendor').add('react').add('react-dom'),
    // Fix svg imports: https://github.com/mozilla-neutrino/neutrino-dev/issues/272
    neutrino => {
      neutrino.config.output.publicPath('/')
      neutrino.config.module
        .rule('svg')
        .use('url')
        .loader(require.resolve('file-loader'))
        .options({ limit: 8192 })
    },
  ],
}
