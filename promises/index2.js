export const sleep = (time = 1000) =>
  new Promise((res, rej) => setTimeout(() => res(), time));

// (async () => {
//   console.log("start2");
//   await sleep(5000);
//   console.log("end2");
// })();
