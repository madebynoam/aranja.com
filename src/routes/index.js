import home from './home'
import work from './work'
import about from './about'
import notFound from './not-found'

export default [
  {
    path: '/',
    children: [home, work, about, notFound],
  }
]
