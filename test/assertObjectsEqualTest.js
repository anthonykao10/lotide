const assertObjectsEqual = require('../assertObjectsEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

// assertObjectsEqual(ab, ab);
// assertObjectsEqual(ab, ba);
// assertObjectsEqual(ab, abc); // will fail

// console.log('\n===================================\n');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

// assertObjectsEqual(cd, dc);
// assertObjectsEqual(dc, dc);
// assertObjectsEqual(cd, cd2); // will fail