import React from 'react'
import Observer from 'react-intersection-observer'
import { Body2, H2 } from '../../typography'
import Link from '../Link'
import github from './github.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import './styles.scss'

const data = [
  {
    title: 'Email us',
    content: 'hello@aranja.com',
    link: 'mailto:hello@aranja.com'
  },
  { title: 'Talk to us', content: '(+354) 696-8666', link: 'tel:+3546968666' }
]

class Footer extends React.Component {
  constructor(...args) {
    super(...args)

    this.viewHeight = 0
    this.pageHeight = 0
    this.footerHeight = 0

    this.onLayout = this.onLayout.bind(this)
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onLayout)
    this.onLayout()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onLayout)
  }

  onScroll() {
    if (!this.inView) {
      return
    }

    const scroll = window.pageYOffset
    const footerBegin = this.pageHeight - this.viewHeight
    const ratio = Math.max(0, (scroll - footerBegin) / this.footerHeight)
    this.footer.style.setProperty('--footer', ratio)
  }

  onLayout(inView) {
    this.inView = inView
    const bodyHeight = document.body.offsetHeight
    this.footerHeight = this.footer.offsetHeight
    this.pageHeight = bodyHeight - this.footerHeight
    this.viewHeight = window.innerHeight
    this.onScroll()
  }

  render() {
    return (
      <Observer onChange={this.onLayout}>
        <section
          className="Footer"
          ref={footer => {
            this.footer = footer
          }}
        >
          <div className="Footer-inner">
            <H2 className="Footer-title">Get in touch</H2>
            {data.map(data => (
              <div className="Footer-column" key={data.title}>
                <h1 className="Footer-legend">{data.title}</h1>
                <Body2>
                  <Link noStyle href={data.link}>
                    {data.content}
                  </Link>
                </Body2>
              </div>
            ))}
            <div className="Footer-column">
              <h1 className="Footer-legend">Follow us</h1>
              <div className="Footer-social">
                <Link
                  noStyle
                  href="https://twitter.com/aranjastudio"
                  className="Footer-socialIcon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="Aranja on Twitter" />
                </Link>
                <Link
                  noStyle
                  href="https://facebook.com/aranja.is"
                  className="Footer-socialIcon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="Aranja on Facebook" />
                </Link>
                <Link
                  noStyle
                  href="https://github.com/aranja"
                  className="Footer-socialIcon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Aranja on Github" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Observer>
    )
  }
}
export default Footer
