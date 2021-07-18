import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonCreateQuestion = () => {
  return (
    <Link to="/new" className="btn-primary hover:opacity-80 text-gray font-light">
      New question
    </Link>
  );
};
