import React from 'react';
import { render } from 'react-dom';

import './styles/variables.css';
import './styles/normalize.css';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('root');

  if (el) {
    render(<h1>Hello Bazaar!!</h1>, el);
  }

  console.log('app loaded!!!');
});
