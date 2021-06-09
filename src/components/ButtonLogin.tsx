import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonLogin = () => {
  return (
    <Link to="/login" className="btn-primary text-gray">
      Login
    </Link>
  );
};
