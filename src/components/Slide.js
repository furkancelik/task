import React from "react";
import styled from "styled-components";

const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15% 0;
  background: url(${props => props.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2em;
  padding: 0;
  margin: 0;
`;

const SubTitle = styled.h3`
  font-size: 1em;
  padding: 0;
  margin: 0;
  color: #666;
`;

export default function() {
  return (
    <div>
      <Image src={"/images/slide-bg.jpg"}>
        <Title>$120.000</Title>
        <SubTitle>EXPECTED EARINING</SubTitle>
      </Image>
    </div>
  );
}
