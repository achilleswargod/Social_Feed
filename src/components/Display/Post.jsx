import React, { useState } from "react";
import "./Post.css";

const TheButton = (props) => {
  const [likeActive, setLikeActive] = useState("inactive");
  const [dislikeActive, setDisLikeActive] = useState("inactive");

  function likeComment() {
    if (likeActive === "inactive") {
      setLikeActive("active");
    } else {
      setLikeActive("inactive");
    }
  }

  function dislikeComment() {
    if (dislikeActive === "inactive") {
      setDisLikeActive("active");
    } else {
      setDisLikeActive("inactive");
    }
  }

  return (
    <div className="buttons">
      <div></div>
      <button className={likeActive} onClick={likeComment}>
        👍
      </button>
      <button className={dislikeActive} onClick={dislikeComment}>
        👎
      </button>
    </div>
  );
};

export default TheButton;
