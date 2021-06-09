import React from 'react';
import { NavBar } from './NavBar';
import { TagBar } from './TagBar';

export const SideBar = () => {
  return (
    <div className="space-y-12">
      <NavBar />
      <TagBar />
    </div>
  );
};
