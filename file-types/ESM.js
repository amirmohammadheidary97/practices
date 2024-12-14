`
ESM

ESM stands for ES Modules. It is Javascript's proposal to implement a standard module system. I am sure many of you have seen this:

--------------------------
import React from 'react';
Other sightings in the wild:

import {foo, bar} from './myLib';

...

export default function() {
  // your Function
};
export const function1() {...};
export const function2() {...};

------------------------------

Works in many modern browsers
It has the best of both worlds: CJS-like simple syntax and AMD's async
Tree-shakeable, due to ES6's static module structure
ESM allows bundlers like Rollup to remove unnecessary code, allowing sites to ship less codes to get faster load.
Can be called in HTML, just do:

-----------------------
<script type="module">
  import {func1} from 'my-lib';

  func1();
</script>
-----------------------

This may not work 100% in all browsers yet (source).
`;
