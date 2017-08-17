import React from 'react'
import { Editable } from 'tux'
import Hero from '../../components/Hero'
import Page from '../../components/Page'
import NextUp from '../../components/NextUp'
import CaseStudyGrid from '../../components/CaseStudyGrid'

const Overview = ({ content, casestudies }) => {
  const study = casestudies.items[0].fields
  const {
    company,
    heroImage,
    sections = [],
  } = study
  return <Editable model={content}>
      <Page name="Our Work">
        <Hero intro="Our Work" img={heroImage.asset.file.url} title="Teamwork is the name of the game" />
        <CaseStudyGrid />
        <NextUp nextPage="Something" url="/" />
      </Page>
    </Editable>
}
export default Overview
