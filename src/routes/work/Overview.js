import React from 'react'
import { Editable } from 'tux'
import Hero from '../../components/Hero'
import Page from '../../components/Page'
import CaseStudyPreview from '../../components/CaseStudyPreview'
import tempSprotarImg from './sprotarnir-placeholder.png'
import tempDschoolImg from './dschool-placeholder.jpg'
import heroImg from '../../assets/Aranja00165.jpg'

const Overview = ({ content, casestudies }) => {
  const heroUrl = casestudies.items[0] &&
    casestudies.items[0].fields.heroImage &&
    casestudies.items[0].fields.heroImage.fields.file.url

  const temp = [{
    title: 'Kolibri.is',
    description: 'We worked with Kolibri\'s in-house designers and developed their new website',
    year: '2016',
    image: heroUrl,
    url: '/work/kolibri'
  },
  {
    title: 'Sprotarnir',
    description: 'Educational app for kids that we made for Landsbankinn. Won awards including Best Development.',
    year: '2016 - 2017',
    image: tempSprotarImg,
    url: '/work/sprotarnir',
  },
  {
    title: 'd.school',
    description: 'In collaboration with Upperquad we developed the new website for Stanford\'s d.school project.',
    year: '2016 - 2017',
    image: tempDschoolImg,
    url: '/work/dschool',
  }]

  return <Editable model={content}>
      <Page name="Our Work">
        <Hero intro="Our work" img={heroImg} title="Our latest work" />
        {temp.map((study, index) =>
          <CaseStudyPreview key={study.title} title={study.title} description={study.description} year={study.year} img={study.image} url={study.url} alignment={index % 2 === 0 ? 'left' : 'right'}/>
        )}
      </Page>
    </Editable>
}
export default Overview
