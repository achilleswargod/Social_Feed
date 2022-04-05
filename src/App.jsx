import React, { useEffect, useState } from "react";
import DisplayPosts from "./components/Display/DispayPosts";
import CreatePost from "./components/Create/CreatePost";
import NavBar from "./components/Display/NavBar.jsx";
import Post from "./components/Post";
import "./components/Display/NavBar.css";
import "./components/Create/CreatePost.css";

function App() {
  const [post, setPost] = useState([
    {
      name: "Dre Vargas",
      post: "I love trying to recreate social media!",
      like: false,
      dislike: false,
    },
    {
      name: "Wayne Gretsky",
      post: "You miss 100% of the shots you don't take",
      like: false,
      dislike: false,
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
      <Post />
    </div>
  );
}

export default App;
