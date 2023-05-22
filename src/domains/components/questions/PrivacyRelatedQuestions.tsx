import { useFormContext } from 'react-hook-form';
import tw from 'twin.macro';

import { Input, Question, Radio } from '@/components';

const PrivacyRelatedQuestions = () => {
  const { register } = useFormContext();

  return (
    <Container>
      <Question
        title='개인정보 수집 동의 (GDSC 멤버 모집 안내에 사용 후 파기됩니다)'
        contents={
          <div tw='flex gap-6'>
            <Radio
              id='yes'
              value='yes'
              text='예'
              {...register('privacyPolicy')}
            />
            <Radio
              id='no'
              value='no'
              text='아니오'
              {...register('privacyPolicy')}
            />
          </div>
        }
      />
      <Question
        title='이름'
        contents={<Input tw='w-48 lg:w-60' {...register('name')} />}
      />
      <Question
        title='전공'
        contents={<Input tw='w-48 lg:w-60' {...register('major')} />}
      />
      <Question
        title='재학 상태'
        contents={
          <div tw='flex gap-6'>
            <Radio
              id='attending'
              value='yes'
              text='재학 중'
              {...register('studentStatus')}
            />
            <Radio
              id='on_leave_of_absence'
              value='no'
              text='휴학 중'
              {...register('studentStatus')}
            />
          </div>
        }
      />
      <Question
        title='학년(휴학생은 복학할 학년을 선택해 주세요)'
        contents={
          <div tw='flex flex-col gap-3'>
            <Radio id='1' value='1' text='1학년' {...register('grade')} />
            <Radio
              id='2'
              value='2'
              text='2학년'
              {...register('studentStatus')}
            />
            <Radio
              id='3'
              value='3'
              text='3학년'
              {...register('studentStatus')}
            />
            <Radio
              id='4'
              value='4'
              text='4학년'
              {...register('studentStatus')}
            />
          </div>
        }
      />
      <Question
        title='전화번호'
        contents={<Input tw='w-48 lg:w-60' {...register('phone')} />}
      />
      <Question
        title='이메일'
        contents={<Input tw='w-48 lg:w-60' {...register('email')} />}
      />
    </Container>
  );
};

const Container = tw.div`flex flex-col gap-16`;

export default PrivacyRelatedQuestions;
