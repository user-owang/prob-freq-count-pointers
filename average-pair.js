// add whatever parameters you deem necessary
function averagePair(numArray, average) {
  let left = 0;
  let right = numArray.length - 1;
  while (left < right) {
    let pairAvg = (numArray[left] + numArray[right]) / 2;
    if (pairAvg === average) {
      return true;
    } else if (pairAvg > average) {
      right--;
    } else if (pairAvg < average) {
      left++;
    }
  }
  return false;
}
