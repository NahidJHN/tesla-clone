import React from "react";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Section = (props) => {
  const { backgroundImage, text, description, leftButton, rightButton } = props;

  return (
    <Wrap bgImage={backgroundImage}>
      <Zoom>
        <ItemText>
          <h1>{text}</h1>
          <p>{description}</p>
        </ItemText>
      </Zoom>
      <Fade bottom >
        <ButtonGroup>
          <LeftButton>{leftButton}</LeftButton>
          {rightButton &&
            <RightButton>{rightButton}</RightButton>}
        </ButtonGroup>

      </Fade>

      <ArrowIcon src="images/down-arrow.svg" />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;
const ItemText = styled.div`
  padding-top: 20vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40vh;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  margin: 0.5rem;

`;

const RightButton = styled(LeftButton)`
  color: rgba(23, 26, 32, 1);
  background: #fff;
`;

const ArrowIcon = styled.img`
  height: 35px;
  margin-bottom: 10px;
  animation: arrowAni infinite 1.5s;
`;

export default Section;
