export default function reverse(obj: object) {
  const keys = [];
  let curr = obj;
  // collect keys
  while(typeof curr === 'object') {
    // only care the first key situation
    const firstKey = Object.keys(curr)[0];
    keys.push(firstKey);
    curr = curr[firstKey];
  }
  keys.push(curr);
  // generate the result
  const result = keys.reduce((prev, curr) => {
    return {[curr]: prev};
  });
  return result;
}