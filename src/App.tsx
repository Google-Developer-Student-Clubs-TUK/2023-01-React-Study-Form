import styled from 'styled-components';
import Header from './component/Header';
import React from 'react';
import MainPage from './pages/MainPage';

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
                <MainPage />
            </Wrapper>
        </>
    );
}

export default App;
