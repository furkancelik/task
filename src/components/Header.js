import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 1.2em;
  padding: 1em 1.5em;
`;

export default function() {
  return (
    <HeaderStyle>
      <Button>
        <FontAwesomeIcon icon={"bars"} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={"comments"} />
      </Button>
    </HeaderStyle>
  );
}
