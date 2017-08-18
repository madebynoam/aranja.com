import React from 'react'
import { Editable } from 'tux'
import Hero from '../../components/Hero'
import Page from '../../components/Page'
import NextUp from '../../components/NextUp'
import CaseStudyPreview from '../../components/CaseStudyPreview'
import tempSprotarImg from './sprotarnir.png'

const Overview = ({ content, casestudies }) => {

  const temp = [{
    title: 'Kolibri.is',
    description: 'We worked with Kolibri\'s in-house designers and developed their new website',
    year: '2016',
    image: casestudies.items[0].fields.heroImage.asset.file.url,
    url: '/work/kolibri'
  },
  {
    title: 'Sprotarnir',
    description: 'Educational app for kids that we made for Landsbankinn. Won awards including Best Development.',
    year: '2016 - 2017',
    image: tempSprotarImg,
    url: '/work/sprotarnir',
  }]
  
  const study = casestudies.items[0].fields
  const {
    company,
    heroImage,
    sections = [],
  } = study
  return <Editable model={content}>
      <Page name="Our Work">
        <Hero intro="Our work" img={heroImage.asset.file.url} title="Teamwork is the name of the game" />      
        {temp.map((study, index) =>
          <CaseStudyPreview key={study.title} title={study.title} description={study.description} year={study.year} img={study.image} url={study.url} alignment={index % 2 === 0 ? 'left' : 'right'}/>
        )}
      </Page>
    </Editable>
}
export default Overview
