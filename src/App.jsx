import React, { useState } from "react";
import DisplayPosts from "./components/Display/DispayPosts";
import CreatePost from "./components/Create/CreatePost";

function App() {
  const [post, setPost] = useState([
    {
      name: "Dre Vargas",
      date: "04-04-2022",
      post: "I love trying to recreate social media!",
    },
  ]);

  function addNewPost(newPost) {
    let tempPost = [...post, newPost];
    setPost(tempPost);
  }

  return (
    <div>
      <DisplayPosts parentPosts={post} />
      <CreatePost addNewPost={addNewPost} />
    </div>
  );
}

export default App;
