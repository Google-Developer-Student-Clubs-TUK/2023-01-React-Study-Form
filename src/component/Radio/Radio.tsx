import styled from 'styled-components';
import React, { useState } from 'react';

//타입스크립트 지정
interface RadioProps {
    id: string;
    name: string;
    value: string;
    text: string;
}

const Label = styled.label`
    font-size: 1.25rem;
    line-height: 1.75rem;
    display: inline-block;
    cursor: pointer;
`;

const Input = styled.input`
    vertical-align: middle;
    appearance: none;
    border: max(2px, 0.1em) solid gray;
    border-radius: 50%;
    width: 1.25em;
    height: 1.25em;
    cursor: pointer;
`;

const Text = styled.span`
    vertical-align: middle;
`;

const Radio = ({ id, name, value, text }: RadioProps) => {
    const [check, setChecked] = useState('C');

    return (
        <Label htmlFor={id}>
            <Input type="radio" id={id} name={name} value={value} />
            <Text>{text}</Text>
        </Label>
    );
};

export default Radio;
