import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

const Parent = styled.div`
  position: relative;
  background-color: ${({ bc }) => bc};
`;

const FakeHeroImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  z-index: -1; 

  & > img {
    object-fit: cover;
    object-position: 0% 0%;
    /* font-family: "object-fit: cover !important; object-position: 0% 0% !important;"; */
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  color: white;  
`;

const HeroImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  overlayColor,
  children,
  className,
}) => (
  <Parent bc={overlayColor}>
    <FakeHeroImage
      fluid={fluid}
      title={title}
      height={height}
      mobileHeight={mobileHeight}
    />
    <Content className={className}>{children}</Content>
  </Parent>
);
HeroImage.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
HeroImage.defaultProps = {
  height: null,
  mobileHeight: null,
  overlayColor: "transparent",
  children: null,
  className: null,
};

export default HeroImage;