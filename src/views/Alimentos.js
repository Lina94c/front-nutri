import React from 'react';
import AlimentoForm from '../components/alimentos/AlimentoForm';
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


const Alimentos = () => {
  return (
      <Wrapper>
      <AlimentoForm/>
      </Wrapper>
  );
};

export default Alimentos;