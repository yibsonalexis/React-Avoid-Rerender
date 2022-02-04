import React, { memo, useMemo, useState, useCallback } from "react";
/** Try to avoid unnecessary re-renders changing the code below */

const Child = memo(({ style, plusOne }) => {
  return (
    <div>
      <p style={style}>
        child last render timestamp: {new Date().toISOString()}
      </p>
      <button onClick={() => plusOne((current) => current + 1)}>+1</button>
    </div>
  );
});

const App = () => {
  const [value, setValue] = React.useState("");
  const [count, setCount] = useState(0);
  const childStyles = useMemo(() => ({ backgroundColor: "yellow" }), []);

  const plusOne = useCallback(() => {
    setCount((current) => current + 1);
  }, []);

  return (
    <div className="App">
      <h1>React - Hooks</h1>
      <h2>Avoid unnecessary renderings!</h2>

      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>input value is: "{value}"</p>
      <p>Count: "{count}"</p>
      <Child style={childStyles} plusOne={plusOne} />
    </div>
  );
};
export default App;
