const explain = `

  - only have these methods : get , set , has , delete .
  - key must be and object .
  - unlike Map when its key get cleared , the key value in weakmap gets cleared too .
    example :

    let key = { id: 1 };
    const weakmap = new WeakMap();
    const map = new Map();
    weakmap.set(key, "salam");
    map.set(key, "salam");
    key = null;
    
    // weakmap is empty now
    // map.size = 1 and it still has key in itself

    - use case : Caching :

    let cache = new WeakMap();

    // calculate and remember the result
    function process(obj) {
      if (!cache.has(obj)) {
        let result = /* calculate the result for */ obj;

        cache.set(obj, result);
        return result;
      }

      return cache.get(obj);
    }

    // 📁 main.js
    let obj = {/* some object */};

    let result1 = process(obj);
    let result2 = process(obj);

    // ...later, when the object is not needed any more:
    obj = null;

    // Can't get cache.size, as it's a WeakMap,
    // but it's 0 or soon be 0
    // When obj gets garbage collected, cached data will be removed as well
`;
