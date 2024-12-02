import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  position: relative;
`;

const Ellipse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 900px; /* 크기 줄임 */
  height: 450px; /* 크기 줄임 */
  border: 1px dashed #0077ff;
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(-30deg);
`;

const Circle = styled.div`
  position: absolute;
  width: 15px; /* 크기 줄임 */
  height: 15px; /* 크기 줄임 */
  background-color: #fff;
  border: 1px solid #0077ff;
  border-radius: 50%;
`;

function MainCircleAni() {
  const [theta1, setTheta1] = useState(0);
  const [theta2, setTheta2] = useState(180);

  // 타원의 반지름 값 조정
  const a = 450; // 가로 반지름 줄임
  const b = 225; // 세로 반지름 줄임
  const rotationAngle = -30;

  const toRadians = (angle) => (angle * Math.PI) / 180;
  const cosAngle = Math.cos(toRadians(rotationAngle));
  const sinAngle = Math.sin(toRadians(rotationAngle));

  const transformEllipse = (x, y) => {
    const newX = x * cosAngle - y * sinAngle;
    const newY = x * sinAngle + y * cosAngle;
    return { x: newX, y: newY };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTheta1((prev) => (prev + 1) % 360);
      setTheta2((prev) => (prev + 1) % 360);
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Ellipse />
        {/* 작은 원 1 */}
        <Circle
          style={{
            top: `calc(50% + ${
              transformEllipse(
                a * Math.cos(toRadians(theta1)),
                b * Math.sin(toRadians(theta1))
              ).y
            }px)`,
            left: `calc(50% + ${
              transformEllipse(
                a * Math.cos(toRadians(theta1)),
                b * Math.sin(toRadians(theta1))
              ).x
            }px)`,
          }}
        />
        {/* 작은 원 2 */}
        <Circle
          style={{
            top: `calc(50% + ${
              transformEllipse(
                a * Math.cos(toRadians(theta2)),
                b * Math.sin(toRadians(theta2))
              ).y
            }px)`,
            left: `calc(50% + ${
              transformEllipse(
                a * Math.cos(toRadians(theta2)),
                b * Math.sin(toRadians(theta2))
              ).x
            }px)`,
            backgroundColor: "#0077ff",
            border: "1px solid #fff",
          }}
        />
      </Container>
    </>
  );
}

export default MainCircleAni;
