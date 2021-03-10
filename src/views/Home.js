import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Home = () => {
  return (
      <Wrapper>
      <Banner/>
      </Wrapper>
  );
};

export default Home;