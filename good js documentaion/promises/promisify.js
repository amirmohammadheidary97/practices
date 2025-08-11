//
function promisify(f) {
  return function (...args) {
    return new Promise((res, rej) => {
      const callback = function (result, error) {
        if (result) {
          res(result);
        } else {
          rej(error);
        }
      };
      args.push(callback);
      f.call(this, ...args);
      // f(...args); // does not work if f be a method of an object .
    });
  };
}

const loader = {
  name: "amir",
  loadScript: function (src, callback) {
    console.log(src);
    console.log(this.name);

    setTimeout(() => {
      callback("ok");
    }, 2000);
  },
};

loader.loadScriptAsync = promisify(loader.loadScript);

(async () => {
  loader.loadScriptAsync("salam").then((v) => {
    console.log(v);
  });
})();
