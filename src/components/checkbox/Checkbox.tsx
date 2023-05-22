import React from 'react';
import tw, { styled } from 'twin.macro';

type CheckboxProps = {
  id: string;
  name: string;
  value: string;
  text: string;
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, name, value, text }, ref) => (
    <Label htmlFor={id}>
      <Input type='checkbox' id={id} name={name} value={value} ref={ref} />
      <Text>{text}</Text>
    </Label>
  ),
);

const Label = styled.label({
  ...tw`text-lg lg:text-xl cursor-pointer inline-block w-fit`,
});

const Input = styled.input`
  ${tw`mr-2 cursor-pointer `}

  &[type=checkbox] {
    vertical-align: middle;
    width: 1.25em;
    height: 1.25em;
  }

  &[type='checkbox']:checked {
    ${tw`border-blue-600`}
  }
`;

const Text = styled.span({
  verticalAlign: 'middle',
});

export default Checkbox;
