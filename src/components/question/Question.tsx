import tw from 'twin.macro';

type QuestionProps = {
  title: string;
  contents: JSX.Element;
};

const Question = ({ title, contents }: QuestionProps) => (
  <Container>
    <Typography>{title}</Typography>
    {contents}
  </Container>
);

const Container = tw.div`flex flex-col gap-3`;
const Typography = tw.h3`text-xl lg:text-2xl`;

export default Question;
