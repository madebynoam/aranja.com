import React, { Component } from 'react'
import { Body2, H2 } from '../../typography'
import Link from '../Link'
import github from './github.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import './styles.css'

const data = [
  {
    title: 'Email us',
    content: 'hello@aranja.com',
    link: 'mailto:hello@aranja.com'
  },
  { title: 'Talk to us', content: '(+354) 696-8666', link: 'tel:+3546968666' }
]

class Footer extends Component {
  // Todo: https://github.com/aranja/new-aranja/issues/27

  render() {
    return (
      <section
        className="Footer"
        ref={ref => {
          this.ref = ref
        }}
      >
        <H2 className="Footer-title" bottom="small">
          Get in touch
        </H2>

        {data.map(data =>
          <div className="Footer-column" key={data.title}>
            <h1 className="Footer-legend">
              {data.title}
            </h1>
            <Body2>
              <Link noStyle href={data.link}>
                {data.content}
              </Link>
            </Body2>
          </div>
        )}

        <div className="Footer-column">
          <h1 className="Footer-legend">Follow us</h1>
          <div className="Footer-social">
            <Link noStyle
              href="https://twitter.com/aranjastudio"
              className="Footer-socialIcon"
            >
              <img src={twitter} alt="Aranja on Twitter" />
            </Link>
            <Link noStyle
              href="https://facebook.com/aranja.is"
              className="Footer-socialIcon"
            >
              <img src={facebook} alt="Aranja on Facebook" />
            </Link>
            <Link noStyle href="https://github.com/aranja" className="Footer-socialIcon">
              <img src={github} alt="Aranja on Github" />
            </Link>
          </div>
        </div>
      </section>
    )
  }
}
export default Footer
