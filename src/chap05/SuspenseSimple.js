import { Suspense } from "react";
import ThrowPromise from './ThrowPromise';
import ThrowResult from './ThrowResult';

function SuspenseSimple() {
  return (
    <Suspense fallback={<p>Now Loading...</p>}>
      <ThrowResult />
    </Suspense>
  )
}

export default SuspenseSimple;
