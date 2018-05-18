const every = (arr, test) => {
  const newArr = arr.filter(item => test(item));
  return JSON.stringify(arr) === JSON.stringify(newArr);
}

console.log(every([1, 2, 3, 44], n => n <= 44));