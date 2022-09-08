import React from 'react'
import Post from '../Post'
import s from './style.module.sass'

export default function PostContainer({posts, change_like, add_comment}) {
  return (
    <div className={s.container}>
        {posts.map(post => <Post key={post.id} {...post} change_like={change_like} add_comment={add_comment}/>)}
    </div>
  )
}
