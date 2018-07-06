import React from "react";
import { Helmet } from "react-helmet";
import { Editable } from "tux";
import Intro from "../../components/Intro";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import CaseStudyPreview from "../../components/CaseStudyPreview";

const Overview = ({ content, hero, casestudies }) => (
  <Editable model={content}>
    <Helmet>
      <title>Aranja Studio – Work</title>
    </Helmet>
    <Section noPadding top="large" bottom="large">
      <Intro
        text="We've been busy"
        description="Check out our project highlights."
      />
    </Section>
    <Hero hero={hero} parallax />
    {casestudies.items.map((study, index) => (
      <CaseStudyPreview
        key={study.fields.projectName}
        title={study.fields.projectName}
        duration={study.fields.projectDuration}
        description={study.fields.projectDescription}
        slug={study.fields.slug}
        image={study.fields.heroImage}
        url={`/work/${study.fields.slug}`}
        alignment={index % 2 === 0 ? "left" : "right"}
      />
    ))}
  </Editable>
);

export default Overview;
