const customLoop = (val, testFunc, updateFunc, bodyFunc) => {
  // generate range
  let tmp = val;
  while(testFunc(tmp)) {
    bodyFunc(tmp);
    tmp = updateFunc(tmp);
  }
}

customLoop(1, n => n < 20, n => n + 1, n => { 
  console.log(`${n}^2: ${Math.pow(n, 2)}`); 
});