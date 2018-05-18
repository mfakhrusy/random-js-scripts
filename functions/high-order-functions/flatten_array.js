let arrays = [[1, 2, 8], [4, 5], [6, 9, 10, 11, 12]];

// flatten it, use reduce/concat

const concat = (arr) => {
  let temp = arr.reduce((acc, curr) => {
    console.log(acc, curr);
    return acc.concat(curr);
  }, []);
  return temp;
}

const concatedArr = concat(arrays);

console.log(concatedArr);