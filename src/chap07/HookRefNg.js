import { useState } from 'react';

export default function HookRefNg({ init }) {
  let id = null
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (id === null) {
      id = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);
    }
  }

  const handleEnd = () => {
    clearInterval(id);
    id = null;
  }

  return (
    <>
      <button onClick={handleStart}>開始</button>
      <button onClick={handleEnd}>停止</button>
      <p>{count}回クリックされました。</p>
    </>
  )
}
