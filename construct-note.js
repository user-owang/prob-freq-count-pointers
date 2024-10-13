// add whatever parameters you deem necessary
function constructNote(msg, chars) {
  const freq = (str) => {
    let obj;
    for (let ltr of str) {
      obj[ltr] ? obj[ltr]++ : (obj[ltr] = 1);
    }
    return obj;
  };
  let charFreq = freq(chars);
  for (let ltr of msg) {
    if (!charFreq[ltr] || charFreq[ltr] === 0) {
      return false;
    }
    charFreq[ltr]--;
  }
  return true;
}
