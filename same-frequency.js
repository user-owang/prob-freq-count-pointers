// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
  const freq = {};
  for (let digit of `${int1}`) {
    freq[digit] = freq[digit] + 1 || 1;
  }
  for (let digit of `${int2}`) {
    if (!freq[digit] || freq[digit] === 0) {
      return false;
    }
    freq[digit]--;
  }
  return true;
}
