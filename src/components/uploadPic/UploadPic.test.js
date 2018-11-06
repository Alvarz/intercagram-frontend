import React from 'react';
import ReactDOM from 'react-dom';
import UploadPic from './UploadPic';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UploadPic />, div);
  ReactDOM.unmountComponentAtNode(div);
});
