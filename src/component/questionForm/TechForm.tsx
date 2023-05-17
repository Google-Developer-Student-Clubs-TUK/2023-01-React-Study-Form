import styled from 'styled-components';

import { CheckBox, Radio } from '../../component';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const Question = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background-color: whitesmoke;
    border: 5px solid gray;
`;

const Title = styled.h3`
    font-size: 1.5rem;
    line-height: 2rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

const TechForm = () => {
    return (
        <>
            <Container>
                <Question>
                    <Title>사용가능한 언어를 선택해주세요.</Title>
                    <Wrapper>
                        <Radio id="c_language" name="language" value="c" text="C" />
                        <Radio
                            id="flutter_language"
                            name="language"
                            value="flutter"
                            text="flutter"
                        />
                        <Radio id="python_language" name="language" value="python" text="Python" />
                        <Radio
                            id="javascript_language"
                            name="language"
                            value="javascript"
                            text="Javascript"
                        />
                        <Radio id="react_language" name="language" value="react" text="react" />
                        <Radio id="php_language" name="language" value="php" text="PHP" />
                        <Radio id="java_language" name="language" value="java" text="Java" />
                    </Wrapper>
                </Question>
            </Container>
        </>
    );
};

export default TechForm;
