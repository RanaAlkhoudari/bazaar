import React from 'react';
import { render } from 'react-dom';
import Products from './components/homepage';
import './styles/variables.css';
import './styles/normalize.css';
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root');
  if (el) {
    render(
      <div>
        <Products />
      </div>,
      el
    );
  }
  console.log('app loaded!!!');
});
