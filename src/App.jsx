import React, { useState } from "react";
import DisplayPosts from "./components/Display/DispayPosts";
import CreatePost from "./components/Create/CreatePost";
import NavBar from "./components/Display/NavBar.jsx";
import "./components/Display/NavBar.css";
import "./components/Create/CreatePost.css";

function App() {
  const [post, setPost] = useState([
    {
      name: "Dre Vargas",
      post: "I love trying to recreate social media!",
    },
  ]);

  function addNewPost(newPost) {
    let tempPost = [...post, newPost];
    setPost(tempPost);
  }

  return (
    <div>
      <NavBar NavBar={NavBar} />
      <CreatePost addNewPost={addNewPost} />
      <DisplayPosts parentPosts={post} />
    </div>
  );
}

export default App;
