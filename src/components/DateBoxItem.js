import React from "react";
import styled from "styled-components";

const DateBox = styled.div`
  display: flex;
  flex: 1;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
  background-color: ${props => (props.active ? "#85bff3" : "#fff")};
`;
const Title = styled.div`
  font-size: 0.8em;
  font-weight: 600;
  color: ${props => (props.active ? "#fff" : "#999")};
`;

const Day = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 1.3em;
  color: ${props => (props.active ? "#fff" : "#666")};
`;

export default function({ active, item: { title, day } }) {
  return (
    <DateBox active={active}>
      <Title active={active}>{active ? "TODAY" : title}</Title>
      <Day active={active}>{day}</Day>
    </DateBox>
  );
}
