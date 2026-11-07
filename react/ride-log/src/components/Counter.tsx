import { useState } from "react";

function Counter() {
  const [n, setN] = useState(0);

  function handleClick() {
    setN(n + 1);
    setN(n + 1);
    setN(n + 1);
    console.log(n);
  }

  return (
    <>
      <button onClick={handleClick}>hi</button>
    </>
  );
}

export default Counter;
