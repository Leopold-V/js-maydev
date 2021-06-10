import React from 'react';

export const DashboardStats = () => {
  return (
    <div className="flex flex-wrap">
      <div className="card m-2 md:m-4 lg:flex-grow">
        <div className="px-2 py-2 md:py-4">
          <div className="text-xl md:text-3xl font-bold">203</div>
          <div className="text-muted">Total posts reaction</div>
        </div>
      </div>
      <div className="card m-2 md:m-4 lg:flex-grow">
        <div className="px-2 py-2 md:py-4">
          <div className="text-xl md:text-3xl font-bold">1523</div>
          <div className="text-muted">Total posts views</div>
        </div>
      </div>
      <div className="card m-2 md:m-4 lg:flex-grow">
        <div className="px-2 py-2 md:py-4">
          <div className="text-xl md:text-3xl font-bold">12</div>
          <div className="text-muted">Total help points</div>
        </div>
      </div>
      <div className="card m-2 md:m-4 lg:flex-grow">
        <div className="px-2 py-2 md:py-4">
          <div className="text-xl md:text-3xl font-bold">6</div>
          <div className="text-muted">Total help received</div>
        </div>
      </div>
    </div>
  );
};
