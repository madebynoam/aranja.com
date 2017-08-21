import createContentfulAdapter from 'tux-adapter-contentful'
import routes from './routes'
import router from './middleware/router'
import tux from './middleware/tux'
import history from 'react-chain-history'
import helmet from 'react-chain-helmet'
import createReactChain from 'react-chain'

import './reset.css'
import './index.css'

const publicUrl = process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL
  : process.env.SERVER ? 'https://localhost:3000' : `${location.protocol}//${location.host}/`

// Get your Contentful clientId (application Uid) from https://app.contentful.com/account/profile/developers/applications
const adapter = createContentfulAdapter({
  space: process.env.TUX_CONTENTFUL_SPACE_ID || 't6yv7dzsds8q',
  accessToken: process.env.TUX_CONTENTFUL_ACCESS_TOKEN || '133097eb0ef94d6baf01360cb3e2b486df5242dff5c95dc47c88f37bbe36845e',
  clientId: process.env.TUX_CONTENTFUL_CLIENT_ID || '6cf8644efff9a74b658c07467f072a8345ea5716bfa3d82b02fa5ddc1b117430',
  redirectUri: publicUrl,
})

export default createReactChain()
  .chain(history())
  .chain(tux({ adapter }))
  .chain(helmet())
  .chain(router(routes))
