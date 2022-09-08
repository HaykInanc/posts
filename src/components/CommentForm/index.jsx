import React from 'react'

export default function CommentForm({post_id, add_comment}) {
  const submit = event => {
    event.preventDefault();
    const {text} = event.target;
    add_comment(post_id, text.value);
    text.value = '';

  };
  
  return (
    <form onSubmit={submit}>
        <input placeholder='Комментарий...' type="text" name='text'/>
        <button>Добавить</button>
    </form>
  )
}
