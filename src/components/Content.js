import React from "react";
import styled from "styled-components";
import UserItem from "./UserItem";

const ContentTitle = styled.div`
  background-color: #eee;
  font-size: 1em;
  font-weight: 600;
  color: #999;
  padding: 10px;
  margin-top: 10px;
`;

export default function() {
  return (
    <>
      <ContentTitle>MORNING (7AM - 12PM)</ContentTitle>
      {[
        {
          pp: "user-avatar-1.jpg",
          username: "Samantha",
          address: "3549 W Siren Way Irvin"
        },
        {
          pp: "user-avatar-2.jpg",
          username: "Furkan",
          address: "3549 W Siren Way Irvin"
        },
        {
          pp: "user-avatar-1.jpg",
          username: "Samantha",
          address: "3549 W Siren Way Irvin"
        },
        {
          pp: "user-avatar-2.jpg",
          username: "Furkan",
          address: "3549 W Siren Way Irvin"
        },
        {
          pp: "user-avatar-1.jpg",
          username: "Samantha",
          address: "3549 W Siren Way Irvin"
        },
        {
          pp: "user-avatar-2.jpg",
          username: "Furkan",
          address: "3549 W Siren Way Irvin"
        }
      ].map(item => (
        <UserItem user={item} />
      ))}
    </>
  );
}
