import React, { ReactNode } from 'react';
import { HeaderBar } from './HeaderBar';

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-background text-primary">
      <HeaderBar />
      <div className="sm:w-11/12 lg:w-10/12 mx-auto min-h-screen py-4">{children}</div>
    </div>
  );
};
