import React, { ReactNode } from 'react';
import { InfosBar } from './InfosBar';
import { SideBar } from './SideBar';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid sm:grid-cols-8 lg:grid-cols-10 gap-x-4">
      <div className="hidden sm:block col-span-2">
        <SideBar />
      </div>
      <div className="col-span-6">{children}</div>
      <div className="hidden lg:block col-span-2">
        <InfosBar />
      </div>
    </div>
  );
};
