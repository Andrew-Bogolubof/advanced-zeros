module.exports = function getZerosCount(number, base) {
  let count = 1; let maxPrime;
  let result =  [];
  let zeroFind = [];

  for (let i = 2; i <= base && base != 1; i++) {
    if ( !( base % i) ) {
      result.push(i);
      base /= i;
      i--;
      continue;
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] == result[i + 1]) {
      count++;
      continue;
    }
    zeroFind.push(findingZeros(result[i], count)); 
    count = 1;
  }
  
  return Math.min(...zeroFind);

  function findingZeros (maxPrime, count) {
    let i = 1; let countZeros = 0;
    while ( Math.pow(maxPrime, i) < number ) {
      countZeros += Math.floor( number / Math.pow( maxPrime, i) );
      i++;
    }
    return Math.floor(countZeros / count);
  }
}