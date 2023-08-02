function sumArrayIntegers(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input is not an array');
    }
  
    let sum = 0;
    for (const num of arr) {
      if (Number.isInteger(num)) {
        sum += num;
      } else {
        throw new Error('Array contains non-integer elements');
      }
    }
  
    return sum;
  }
  
  
  const inputArray = [1, 2, 3, 4, 5];
  const result = sumArrayIntegers(inputArray);
  console.log(result);