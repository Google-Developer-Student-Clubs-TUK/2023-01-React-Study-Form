import tw, { styled } from 'twin.macro';

const Button = styled.button(() => ({
  ...tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[84px] disabled:bg-gray-400`,
}));

export default Button;
