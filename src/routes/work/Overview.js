import React from 'react'
import { Editable } from 'tux'
import Page from '../../components/Page'
import CaseStudyPreview from '../../components/CaseStudyPreview'

const Overview = ({ content, hero, casestudies }) =>
  <Editable model={content}>
    <Page name="Our Work">
      {casestudies.items.map((study, index) =>
        <CaseStudyPreview key={study.fields.projectName} title={study.fields.projectName} description={study.fields.projectDescription} slug={study.fields.slug} img={study.fields.heroImage.fields.file.url} url={`/work/${study.fields.slug}`} alignment={index % 2 === 0 ? 'left' : 'right'}/>
      )}
    </Page>
  </Editable>

  export default Overview
