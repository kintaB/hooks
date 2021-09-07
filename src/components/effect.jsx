import React, { useState, useEffect } from "react";

const App = () => {
  const [type, setType] = useState("users");

  useEffect(() => {
    console.log("render");
  });

  return (
    <div>
      <h1>Ресурс: {type}</h1>
      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todo")}>Todo</button>
      <button onClick={() => setType("posts")}>Посты</button>
    </div>
  );
};

export default App;
