import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

const ProfilePicture = styled.img`
  display: flex;
  width: 64px;
  height: 64px;
  border-radius: 25px;
  margin: 0 5px;
`;

const Username = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  color: #1b1b1b;
`;

const Address = styled.div`
  color: #999;
  font-size: 1em;
`;

const MapButton = styled.button`
  font-size: 2em;
  color: #333;
`;

export default function({ user: { pp, username, address } }) {
  return (
    <User>
      <ProfilePicture src={`/images/${pp}`} />

      <div style={{ flex: 1, marginLeft: 8 }}>
        <Username>{username}</Username>
        <Address>{address}</Address>
      </div>

      <MapButton>
        <FontAwesomeIcon icon={"map-marker"} />
      </MapButton>
    </User>
  );
}
