import React from 'react';
import tw, { styled } from 'twin.macro';

import { useForwardRef } from '@/hooks';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ value, onChange, ...others }, ref) => {
  const textareaRef = useForwardRef<HTMLTextAreaElement>(ref);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight + 3}px`;
  };

  return (
    <StyledTextarea
      ref={textareaRef}
      onChange={handleChange}
      rows={1}
      value={value}
      {...others}
    />
  );
});

const StyledTextarea = styled.textarea(() => ({
  ...tw`w-full border-b-[3px] border-black focus-visible:outline-none text-lg lg:text-xl leading-none resize-none min-h-[24px]`,
}));

export default Textarea;
