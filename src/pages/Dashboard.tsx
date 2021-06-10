import React from 'react';
import { DashboardPosts } from '../components/DashboardPosts';
import { DashboardStats } from '../components/DashboardStats';

export const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="font-bold md:text-4xl text-center md:text-left md:px-0 text-2xl">Dashboard</h1>
      <DashboardStats />
      <DashboardPosts />
    </div>
  );
};
