import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../Button";
import Link from "../Link";
import { H2 } from "../../typography";
import { withReveal } from "../../hoc/withReveal";
import "./styles.scss";
import SmartImage from "../SmartImage";

function sortNumber(a, b) {
  if (!a.fields.order) {
    return -1;
  }
  return a.fields.order - b.fields.order;
}

const CaseStudyGrid = ({ caseStudies, button, padding, isVisible }) => (
  <div
    className={classNames(
      "CaseStudyGrid",
      isVisible && "is-visible",
      padding && "withPadding"
    )}
  >
    <div className="CaseStudyGrid-items">
      {caseStudies.items.sort(sortNumber).map(item => (
        <Link
          noStyle
          className="CaseStudyGrid-item"
          href={`/work/${item.fields.slug}`}
          key={item.fields.slug}
          style={{
            gridRowEnd:
              (item.fields.order === 1 || item.fields.order === 3) && "span 2"
          }}
        >
          <H2 className="CaseStudyGrid-itemTitle">{item.fields.projectName}</H2>
          <div className="CaseStudyGrid-imageWrap">
            <SmartImage image={item.fields.heroImage}>
              {imageUrl => (
                <div
                  className="CaseStudyGrid-image"
                  style={{
                    backgroundImage: `url(${imageUrl})`
                  }}
                />
              )}
            </SmartImage>
          </div>
        </Link>
      ))}
    </div>
    {button && (
      <div className="CaseStudyGrid-button">
        <Button to="/work">{button}</Button>
      </div>
    )}
  </div>
);

CaseStudyGrid.propTypes = {
  caseStudies: PropTypes.any,
  padding: PropTypes.bool,
  button: PropTypes.string
};

export default withReveal(CaseStudyGrid);
