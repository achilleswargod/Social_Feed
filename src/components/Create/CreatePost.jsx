import React, { useState } from "react";

const CreatePost = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(formEvent) {
    formEvent.preventDefault();
    let newPost = {
      name: name,
      post: post,
    };
    console.log(newPost);
    props.addNewPost(newPost);
  }

  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <div className="form-group">
        <label>Name</label>
        <input
          type="string"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Post</label>
        <input
          type="string"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
      </div>
      <button classname="subButton" type="submit">
        Create
      </button>
    </form>
  );
};

export default CreatePost;
