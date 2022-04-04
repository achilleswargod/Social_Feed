import React from "react";

const DisplayPosts = ({ entries }) => {
  return (
    <ul>
      {entries.map((entry, i) => (
        <li>listItem</li>
      ))}
    </ul>
  );
};

export default DisplayPosts;
