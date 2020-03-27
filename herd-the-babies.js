/*****************************************************************************************
 * ASCII values:
 * -- A = 65
 * -- a = 97
 ****************************************************************************************/
const herdTheBabies = str => {
  const strCopy = [...str];
  strCopy.sort((a, b) => {
    const A = a.toUpperCase();
    const B = b.toUpperCase();
    if (A === B) return a < b ? -1 : 1;
    else return A < B ? -1 : 1;
  });
  return strCopy.join("");
};

module.exports = herdTheBabies;
