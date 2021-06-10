import React from 'react';
import { Link } from 'react-router-dom';

export const ButtonSignup = () => {
  return (
    <Link to="/signup" className="btn-white text-gray font-light">
      Signup
    </Link>
  );
};
