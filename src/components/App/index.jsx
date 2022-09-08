import { useState } from 'react';
import { data } from '../../data/posts';
import PostContainer from '../PostContainer';

function App() {
  const [posts, setPosts] = useState(data);

  const change_like = id => {
    const target = posts.find(post => post.id === id);
    target.like = !target.like;
    setPosts([...posts]);
  };

  const add_comment = (id, text) => {
    const comment = {
      id: Date.now(),
      text
    };
    const target = posts.find(post => post.id === id);
    target.comments.push(comment);
    setPosts([...posts]);
  }

  return (
    <div className="App">
      <PostContainer change_like={change_like} add_comment={add_comment} posts={posts}/>
    </div>
  );
}

export default App;
