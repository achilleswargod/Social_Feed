import React, { useState } from "react";

const CreatePost = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      name: name,
      date: date,
      post: post,
    };
    console.log(newPost);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="string"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <label>Post</label>
      <input
        type="string"
        value={post}
        onChange={(event) => setPost(event.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default AddEntryForm;
