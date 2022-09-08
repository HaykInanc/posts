import React from 'react';
import s from './style.module.sass';
import CommentContainer from '../CommentContainer'

export default function Post({id, title, text, like, comments, change_like, add_comment}) {
  const like_classes = [s.like, like ? s.like_ok : '']

  return (
    <div className={s.post}>
        <h2>{title}</h2>
        <p>{text}</p>
        <p 
            onClick={()=>change_like(id)} 
            className={like_classes.join(' ')}>
                {like ? 'Лайк!': 'Лайк?'}
        </p>
        <CommentContainer comments={comments} add_comment={add_comment} post_id={id}/>
    </div>
  )
}
