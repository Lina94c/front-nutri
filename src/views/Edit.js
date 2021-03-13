import React from 'react';
import EditForm from '../components/alimentos/EditForm';
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


const Alimentos = () => {
  return (
      <Wrapper>
      <EditForm/>
      </Wrapper>
  );
};

export default Alimentos;