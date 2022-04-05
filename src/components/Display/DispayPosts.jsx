import React from "react";
import "./DisplayPost.css";

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
              </div>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayPosts;
