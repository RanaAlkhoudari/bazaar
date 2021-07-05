import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';

import './styles/variables.css';
import './styles/normalize.css';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root');

  if (el) {
    render(
      <div>
        <Header />
      </div>,
      el,
    );
  }

  console.log('app loaded!!!');
});
