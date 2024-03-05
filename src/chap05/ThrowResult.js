import wrapPromise from "./wrapPromise";

const info = getInfo();

function ThroResult() {
  const result = info.get();
  return <p>{result}</p>
}

function getInfo() {
  return wrapPromise(new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Succeeded!');
      } else {
        reject('Failed!')
      }
    }, 2000);
  }));
}

export default ThroResult;
