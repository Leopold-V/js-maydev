import React from 'react';
import { ButtonLike, ButtonRead } from '../Button';

export const QuestionsItemButtonGroup = ({ id }: { id: string }) => {
  return (
    <div className="flex space-x-2">
      <ButtonRead id={id} />
      <ButtonLike id={id} />
    </div>
  );
};
