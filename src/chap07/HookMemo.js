import { useMemo, useCallback, useState } from 'react';
import { MyButton, MyCounter } from './HookMemoChild';

// 引数delayだけ処理を休止するコード
const sleep = delay => {
  const start = Date.now();
  while (Date.now() - start < delay);
};

export default function HookMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = useCallback(() => setCount1(c => c + 1), []);
  const decrement = useCallback(() => setCount2(c => c - 1), []);

  const heavyProcess = () => {
    sleep(1000);
    return count1 + 100;
  };

  return (
    <>
      <div>
        <MyButton id="btn1" handleClick={increment}>カウントアップ</MyButton>
        <MyCounter id="c1" value={count1} />{heavyProcess()}
      </div>
      <div>
        <MyButton id="btn2" handleClick={decrement}>カウントダウン</MyButton>
        <MyCounter id="c2" value={count2} />{heavyProcess()}
      </div>
    </>
  );
}
