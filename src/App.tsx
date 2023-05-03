import styled from 'styled-components';
import Header from './component/Header';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 235, 248);
`;

function App() {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>
    </>
  );
}

export default App;
