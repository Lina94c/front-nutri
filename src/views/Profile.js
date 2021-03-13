import React from 'react';
import styled from "styled-components";
import ProfileUp from "../components/ProfileUp";

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


const Alimentos = () => {
  return (
      <Wrapper>
      <ProfileUp/>
      </Wrapper>
  );
};

export default Alimentos;