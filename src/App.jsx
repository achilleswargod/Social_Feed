import React, { useState } from "react";
import DisplayPosts from "./components/Display/DispayPosts";
import CreatePost from "./components/Create/CreatePost";
import NavBar from "./components/Display/NavBar.jsx";
import "./components/Display/NavBar.css";

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
      <DisplayPosts parentPosts={post} />
      <CreatePost addNewPost={addNewPost} />
    </div>
  );
}

export default App;
