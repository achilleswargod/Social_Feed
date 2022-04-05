import React, { useState } from "react";

const Post = (props) => {
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDisLikeActive] = useState(true);

  function likeComment() {
    if (!likeActive) {
      setLikeActive(true);
      setDisLikeActive(false);
    }
  }

  function dislikeComment() {
    if (!dislikeActive) {
      setDisLikeActive(true);
      setLikeActive(false);
    }
  }

  return (
    <div className="App">
      <div></div>
      <button onClick={likeComment}>like {likeActive}</button>
      <button onClick={dislikeComment}>dislike {dislikeActive}</button>
    </div>
  );
};

export default Post;
