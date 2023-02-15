import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

export const AppBar = ({ pages }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <nav>
      {pages?.map((page) => (
        <button className= "mainBtn" key={page.label} onClick={() => handleNavigate(page.path)}>
          {page.label}
        </button>
      ))}
      {!!user && (
        <button className= "mainBtn" key={'logout'} onClick={logout}>
          {' '}
          Logout{' '}
        </button>
      )}
    </nav>
  );
};
