import tw from 'twin.macro';

import { Input, Radio } from '@/components';

// RadioGroup 컴포넌트를 만들어서 사용하면 더 좋을 것 같다.
const PrivacyRelatedQuestions = () => (
  <Container>
    <Question>
      <Typography>
        개인정보 수집 동의 (GDSC 멤버 모집 안내에 사용 후 파기됩니다)
      </Typography>
      <div tw='flex gap-6'>
        <Radio id='yes' name='privacy_policy' value='yes' text='예' />
        <Radio id='no' name='privacy_policy' value='no' text='아니오' />
      </div>
    </Question>
    <Question>
      <Typography>이름</Typography>
      <Input tw='w-48 lg:w-60' />
    </Question>
  </Container>
);

const Container = tw.div`flex flex-col gap-12`;
const Question = tw.div`flex flex-col gap-3`;
const Typography = tw.h3`text-xl lg:text-2xl`;

export default PrivacyRelatedQuestions;
