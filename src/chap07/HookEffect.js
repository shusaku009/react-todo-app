import { useEffect, useState } from 'react';

// delay秒だけ処理を休止するsleep関数
const sleep = delay => {
  const start = Date.now();
  while (true) {
    if (Date.now() - start > 1000) { break; }
  }
}

export default function HookEffect({ init }) {
  const [count, setCount] = useState(0);

  //2000ミリ秒後にState(count)を設定
  useEffect(() => {
    sleep(2000);
    setCount(init);
  }, []);

  const handleClick = () => {
    setCount(c => c + 1);
  }

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回クリックされました。</p>
    </>
  )
}
