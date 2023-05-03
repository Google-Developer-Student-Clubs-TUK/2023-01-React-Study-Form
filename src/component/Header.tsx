import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #dadce0;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 24px;
    padding-top: 22px;
    position: relative;
    width: 640px;
    height: 198px;
    border-radius: 10px;
`

const Title = styled.div`
    position: absolute;
    font-weight: 400;
    font-size: 32px;
`;


const Header = () => {

    return (
        <Wrapper>
            <Title>
                GDSC TUK APPLICATION FORM
            </Title>
        </Wrapper>
    )

}


export default Header;