import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';
import MainCircleAni from '../components/MainCircleAni';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    letter-spacing: -0.8px;
    font-family: "Archivo", sans-serif;
  }
`;

const MainAll = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
  gap: 10px;
  h2 {
    font-size: 80px;
    font-weight: 200;
    letter-spacing: -1.3px;
    span {
      font-weight: bold;
      color: #0077FF;
    }
    span:nth-of-type(2) {
      color: #000;
    }
  }
  p {
    font-weight: 100;
    padding: 8px 0;
  }
`;

const MainCircleAniWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
`;

const MainNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 40px;
    border: 1px solid #0077FF;
    border-radius: 30px;
    transition: background-color 0.3s;
    position: relative;
  }
  div:hover {
    background-color: #0077FF;
    color: white;
  }
`;

const StyledArrow = styled(FontAwesomeIcon)`
  position: absolute;
  right: 5px;
`;

const drawArrowAnimation = keyframes`
  0% {
    stroke-dashoffset: 500;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const AnimatedArrowWrapper = styled.div`
  position: absolute;
  top: 53%;
  left: 59%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 15px;
  z-index: 10;
`;

const AnimatedArrow = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;

  line {
    stroke: #0077FF;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: ${drawArrowAnimation} 2s ease-out forwards;
  }

  polygon {
    fill: #0077FF;
    opacity: 0;
    animation: fadeIn 0.5s ease-out 2s forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;



const Main = () => {
  return (
    <>
      <GlobalStyle />
      <MainAll>
        <MainTitle>
          <h2>
            <span>Coding</span> a Better
            <br />
            <span>World</span> Today
          </h2>
          <p>Creating clean and intuitive web experiences with a focus on user-centered design.</p>
        </MainTitle>

        {/* Animated Arrow */}
        <AnimatedArrowWrapper>
        <AnimatedArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 20">
          <line x1="0" y1="10" x2="380" y2="10" />
          <polygon points="380,5 395,10 380,15" />
          </AnimatedArrow>
        </AnimatedArrowWrapper>

        <MainNav>
          <div>
            VIEW WORKS
            <StyledArrow icon={faArrowRight} />
          </div>
          <div>
            CONTACT
            <StyledArrow icon={faArrowRight} />
          </div>
        </MainNav>
      </MainAll>
      <MainCircleAniWrapper>
        <MainCircleAni />
      </MainCircleAniWrapper>
    </>
  );
};

export default Main;
