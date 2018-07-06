import React, { Component } from "react";
import classNames from "classnames";
import { H2, Body1 } from "../../typography";
import Section from "../Section";
import Link from "../Link";
import { withReveal } from "../../hoc/withReveal";
import AnimatedText from "../AnimatedText";
import "./styles.scss";
import SmartImage from "../SmartImage";

class CaseStudyPreview extends Component {
  render() {
    const {
      title,
      duration,
      description,
      image,
      alignment,
      url,
      isVisible
    } = this.props;
    return (
      <Section top="large" bottom="large">
        <Link
          noStyle
          href={url}
          className={classNames(
            "CaseStudyPreview",
            alignment === "right" && "is-alignedRight",
            isVisible && "is-visible"
          )}
        >
          <div className="CaseStudyPreview-content">
            <p className="CaseStudyPreview-date">
              <AnimatedText uncontrolled shouldAnimate={isVisible}>
                {duration}
              </AnimatedText>
            </p>
            <div className="CaseStudyPreview-title">
              <H2>
                <AnimatedText uncontrolled shouldAnimate={isVisible}>
                  {title}
                </AnimatedText>
              </H2>
            </div>
            <div className="CaseStudyPreview-description">
              <Body1>
                <AnimatedText uncontrolled shouldAnimate={isVisible}>
                  {description}
                </AnimatedText>
              </Body1>
            </div>
          </div>
          <div className="CaseStudyPreview-imageWrap">
            <SmartImage image={image}>
              {imageUrl => (
                <div
                  className="CaseStudyPreview-image"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
              )}
            </SmartImage>
          </div>
        </Link>
      </Section>
    );
  }
}

export default withReveal(CaseStudyPreview);
