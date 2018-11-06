import React from 'react';
import ReactDOM from 'react-dom';
import FollowList from './FollowList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FollowList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
