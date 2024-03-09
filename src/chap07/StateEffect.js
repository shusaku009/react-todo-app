import { useState, useEffect } from "react";

export default function StateEffect({ init }) {
  const [count, setCount] = useState(init);
  const [hoge, setHoge] = useState("hoge");
  useEffect(() => {
    console.log(`count is ${count}.`);
  }, [count]);
  return (
    <>
      <button onClick={() => setHoge(Date.now())}>Hoge ({hoge})</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}
