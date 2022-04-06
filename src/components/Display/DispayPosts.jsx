import React from "react";
import "./DisplayPost.css";
import TheButton from "./Post.jsx";
import theButton from "./Post.jsx";

const DisplayPosts = (props) => {
  return (
    <table className="displayPost">
      <tbody>
        {props.parentPosts.map((post, index) => {
          return (
            <tr key={index}>
              <div className="border-box">
                <td>{post.name}</td>
                <td>{post.post}</td>
                <TheButton buttons={theButton} />
              </div>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayPosts;
