import tw, { styled } from 'twin.macro';

const Input = styled.input(() => ({
  ...tw`w-full border-b-[3px] border-black focus-visible:outline-none text-lg lg:text-xl leading-none `,
}));

export default Input;
