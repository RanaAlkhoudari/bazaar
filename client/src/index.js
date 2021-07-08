import React from 'react';
import { render } from 'react-dom';
import Homepage from './components/Homepage';
import './styles/variables.css';
import './styles/normalize.css';
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root');
  if (el) {
    render(
      <div>
        <Homepage />
      </div>,
      el
    );
  }
  console.log('app loaded!!!');
});
