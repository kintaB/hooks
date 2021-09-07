import React, { useState, useEffect, useRef, useMemo } from "react";

const complexCompute = (num) => {
  console.log("complex Comp");
  let i = 0;
  while (i < 100000000) i++;
  return num * 2;
};

const App = () => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? "darkred" : "black",
    }),
    [colored]
  );

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("styles");
  }, [styles]);
  return (
    <div>
      <div>
        <h1 style={styles}>Ресурс: {computed}</h1>
        <button onClick={() => setNumber((prev) => prev + 1)}>Добавить</button>
        <button onClick={() => setNumber((prev) => prev - 1)}>Убрать</button>
        <button onClick={() => setColored((prev) => !prev)}>
          Изменить цвет
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default App;
