import { useReducer } from 'react';

function initCounter(init) {
  console.log('initCount is called');
  return {
    count: Math.floor(Math.random() * (init + 1))
  }

}

export default function HookReducerInit({ init }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'update':
          return { count: state.count + 1 };
        default:
          return state;
      }
    },
    initCounter(init)
  );
  const handleClick = () => {
    dispatch({ type: 'update' });
  }
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{state.count}回、クリックされました。</p>
    </>
  )
}
