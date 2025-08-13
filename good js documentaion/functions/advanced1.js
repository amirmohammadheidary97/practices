const ex = `
Decorator
`;

let worker = {
  m: 1,
  slow(min, max) {
    console.log(this);
    console.log(`Called with ${min},${max}`);
    return min + max;
  },
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }
    console.log(this); // {m: 1, slow: ...}
    // if we dont pass this at here , it would consider it as undefined (in strict mode)
    // because javascript considers func as a function not a method
    let result = func.call(this, ...arguments); // or func.bind(this, arguments)

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + "," + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);
console.log(worker.slow(3, 5)); // works
console.log("Again " + worker.slow(3, 5)); // same (cached)
