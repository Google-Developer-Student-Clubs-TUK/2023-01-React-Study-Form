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
                    <Title>해당하는 학년을 선택해주세요</Title>
                    <Wrapper>
                        <Radio id="grade_1" name="grade" value="1" text="1" />
                        <Radio id="grade_2" name="grade" value="2" text="2" />
                        <Radio id="grade_3" name="grade" value="3" text="3" />
                        <Radio id="grade_4" name="grade" value="4" text="4" />
                    </Wrapper>
                </Question>
                <Question>
                    <Title>스터디 희망분야</Title>
                    <Wrapper>
                        <CheckBox id="react_language" name="subject" value="react" text="react" />
                        <CheckBox
                            id="flutter_language"
                            name="subject"
                            value="flutter"
                            text="flutter"
                        />
                        <CheckBox
                            id="python_language"
                            name="subject"
                            value="python"
                            text="Python"
                        />
                        <CheckBox
                            id="javascript_language"
                            name="subject"
                            value="javascript"
                            text="Javascript"
                        />
                        <CheckBox id="php_language" name="subject" value="php" text="PHP" />
                        <CheckBox id="java_language" name="subject" value="java" text="Java" />
                    </Wrapper>
                </Question>
            </Container>
        </>
    );
};

export default TechForm;
