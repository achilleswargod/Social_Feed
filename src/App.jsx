import React, { useState, useEffect } from "react";
import NamePresenter from "./components/DispayPosts";

function App() {
  const [entries, setEntries] = useState([{weight: 175, date:}]);
  return (
    <div>
      Hello World!
      <NamePresenter />
    </div>
  );
}

export default App;
