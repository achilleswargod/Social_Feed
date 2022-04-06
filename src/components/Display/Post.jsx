import React, { useState } from "react";
import "./Post.css";

const TheButton = (props) => {
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
    <div className="buttons">
      <div></div>
      <button onClick={likeComment}>👍 {likeActive}</button>
      <button onClick={dislikeComment}>👎 {dislikeActive}</button>
    </div>
  );
};

export default TheButton;
