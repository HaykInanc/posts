import React from 'react';
import Comment from '../Comment';
import CommentForm from '../CommentForm';

export default function CommentContainer({comments, add_comment, post_id}) {
  return (
    <div>
        {comments.map(comment => <Comment key={comment.id} {...comment}/>)}
        <CommentForm add_comment={add_comment} post_id={post_id}/>
    </div>
  )
}
