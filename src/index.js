import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Michael" timeAgo="Today at 4:30pm" commentText="IDK seems fishy" avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Jimmy" timeAgo="Today at 2:30pm" commentText="Insightful post" avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="Samantha" timeAgo="Yesterday at 1:20pm" commentText="Cool blog post" avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
