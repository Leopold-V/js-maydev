import React from 'react';
import { Leaderboard } from './Leaderboard';

export const InfosBar = () => {
  return (
    <div className="text-center py-2">
      <h2 className="text-lg font-bold py-1">Leaderboard</h2>
      <Leaderboard />
    </div>
  );
};
