import React from 'react';
import ReactDOM from 'react-dom';
import PicGallery from './PicGallery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PicGallery />, div);
  ReactDOM.unmountComponentAtNode(div);
});
