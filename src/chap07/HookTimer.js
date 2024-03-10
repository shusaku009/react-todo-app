import { useEffect, useState } from 'react';
import './ookTimer.css';

export default function HookTimer({ init }) {
  const [count, setCount] = useState(init);

  useEffect(() => {
    // タイマーを準備
    const t = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    // コンポーネント破棄時にタイマーも破棄
    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <div className={count < 0 ? 'warn' : ''}>
      現在のカウント：{count}
    </div>
  );
}
