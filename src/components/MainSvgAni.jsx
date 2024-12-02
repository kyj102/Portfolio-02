import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  overflow: hidden;
  perspective: 1000px;
  position: relative;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: ${(props) => props.top || "50%"};
  left: ${(props) => props.left || "50%"};
  transform: translate(-50%, -50%);
`;

const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  transition: transform 0.1s ease-out;
  transform-origin: center;
  &:hover {
    cursor: pointer;
  }
`;

const MainSvgAni = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState(0);

  const [hoveredImage, setHoveredImage] = useState(null);

  const maxTilt = 30;
  const maxDistance = 200;

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (!hoveredImage) return;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;


      const centerX = windowWidth / 2;
      const centerY = windowHeight / 2;

 
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

   
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      if (distance > maxDistance) {
        setTilt({ x: 0, y: 0 });
        return;
      }

    
      const speed =
        Math.sqrt(
          (e.clientX - lastMousePos.x) ** 2 +
            (e.clientY - lastMousePos.y) ** 2
        ) / 10;
      setMouseSpeed(speed);

      setLastMousePos({ x: e.clientX, y: e.clientY });

      const tiltX = (deltaY / windowHeight) * maxTilt;
      const tiltY = (deltaX / windowWidth) * maxTilt;

      setTilt({ x: tiltX, y: tiltY });
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      handleMouseMove(lastMousePos);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [lastMousePos, hoveredImage]);

  return (
    <Container>
      {/* 첫 번째 이미지 위치 지정 */}
      <ImageWrapper top="30%" left="20%">
        <StyledImage
          src="/img/cir.svg" 
          alt="CircleImage"
          onMouseEnter={() => setHoveredImage("image1")}
          onMouseLeave={() => setHoveredImage(null)}
          style={{
            transform: `
              perspective(1000px) 
              rotateX(${tilt.x}deg) 
              rotateY(${tilt.y}deg) 
              scale(${1 + mouseSpeed / 50}) 
              skew(${tilt.x}deg, ${tilt.y}deg) 
            `,
          }}
        />
      </ImageWrapper>

      {/* 두 번째 이미지 위치 지정 */}
      <ImageWrapper top="50%" left="80%">
        <StyledImage
          src="/img/3dStar.svg"
          alt="3dStarImage"
          onMouseEnter={() => setHoveredImage("image2")} 
          onMouseLeave={() => setHoveredImage(null)}
          style={{
            transform: `
              perspective(1000px) 
              rotateX(${tilt.x}deg) 
              rotateY(${tilt.y}deg) 
              scale(${1 + mouseSpeed / 50}) 
              skew(${tilt.x}deg, ${tilt.y}deg)
            `,
          }}
        />
      </ImageWrapper>

      {/* 세 번째 이미지 위치 지정 */}
      <ImageWrapper top="70%" left="50%">
        <StyledImage
          src="/img/rec.svg"
          alt="RectangleImage"
          onMouseEnter={() => setHoveredImage("image3")} 
          onMouseLeave={() => setHoveredImage(null)} 
          style={{
            transform: `
              perspective(1000px) 
              rotateX(${tilt.x}deg) 
              rotateY(${tilt.y}deg) 
              scale(${1 + mouseSpeed / 50}) 
              skew(${tilt.x}deg, ${tilt.y}deg)
            `,
          }}
        />
      </ImageWrapper>
    </Container>
  );
};

export default MainSvgAni;
