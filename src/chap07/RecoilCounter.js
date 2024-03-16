import { useRecoilState } from 'recoil';
import { counterAtom } from '../store/atom';

export default function RecoilCounter() {
  const [count, setCount] = useRecoilState(counterAtom);
  const handleClick = () => setCount(c => c + 1);

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}
