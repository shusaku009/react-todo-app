let flag = false;

function ThrowPromise() {
  if (flag) {
    return <p>正しく表示されました。</p>;
  }
  throw new Promise((resolve, reject) => {
    setTimeout(() => {
      flag = true;
      resolve('Success!!');
    }, 3000)
  });
}

export default ThrowPromise;
