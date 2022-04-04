import React, { useState } from "react";
import DisplayPosts from "./components/DispayPosts";

function App() {
  const [entries, setEntries] = useState([
    {
      name: "Dre Vargas",
      date: "04-04-2022",
      post: "I love trying to recreate social media!",
    },
  ]);

  return (
    <div>
      <DisplayPosts entries={entries} />
    </div>
  );
}

export default App;
