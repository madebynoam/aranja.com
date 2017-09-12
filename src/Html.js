import React from 'react'
import Document, { Html, Head, Body, App, Footer } from 'react-document'
import TypeKit from 'react-typekit'
import favicon from './assets/favicon.png'
/**
 * This component is a template for the HTML file. You can add webfonts, meta tags,
 * or analytics to this file.
 *
 * To begin the development, run `npm start`.
 * To create a static bundle, use `npm run build`.
 * To create a server bundle, use `npm run build-server`.
 *
 * IMPORTANT: This file is compiled and used differently from other modules.
 *
 * -   In development and in static builds, this code is run at build time. It
 *     only receives asset metadata as a prop. Nothing else.
 *
 * -   In server builds, this code evaluates for every request. It may receive
 *     additional route specific props, e.g. a serialized store and meta tags.
 */

export default class extends Document {
  render() {
    // TODO: Remove when headProps is gone.
    let helmet =
      this.props.helmet || (this.props.headProps && this.props.headProps.helmet)
    return (
      <Html lang="en">
        <Head>
          {helmet && [
            helmet.title.toComponent(),
            helmet.meta.toComponent(),
            helmet.link.toComponent()
          ]}
          <TypeKit kitId="kee6nkk" />
          <meta property="og:url" content="http://aranja.com/" />
          <meta property="og:title" content="Aranja" />
          <meta
            property="og:description"
            content="We build interactive websites."
          />
          <link rel="shortcut icon" href={favicon} />
          <link rel="manifest" href="/static/manifest.json" />
          <script src="https://cdn.polyfill.io/v2/polyfill.js?features=IntersectionObserver"></script>
        </Head>
        <Body>
          <App />
          <Footer />
          <script
            dangerouslySetInnerHTML={{
              __html: `
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create', 'UA-49724456-1', 'aranja.com');
          ga('send', 'pageview');`
            }}
          />
        </Body>
      </Html>
    )
  }
}
