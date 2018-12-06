import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Michael" timeAgo="Today at 4:30pm"/>
      <CommentDetail author="Jimmy" timeAgo="Today at 2:30pm"/>
      <CommentDetail author="Samantha" timeAgo="Yesterday at 1:20pm"/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
