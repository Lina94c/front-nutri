import React from 'react';
import styled from "styled-components";
import AllAlimentos from '../components/alimentos/AllAlimentos copy';

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


const Alimentos = () => {
  return (
      <Wrapper>
      <AllAlimentos/>
      </Wrapper>
  );
};

export default Alimentos;