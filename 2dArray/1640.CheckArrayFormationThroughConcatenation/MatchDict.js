/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
/*
Matching-Dict Problem
1step: traverse pieces, check if arr include pieces[i][0] first element in inner pieces
2step: if not, return false; if yes, find position in arr; and check this inner pieces, if not remaining elements return false
*/
var canFormArray = function (arr, pieces) {
  for (let i = 0; i < pieces.length; i++) {
    if (arr.includes(pieces[i][0])) {
      let pos = arr.indexOf(pieces[i][0]);
      for (let j = 0; j < pieces[i].length; j++) {
        if (pieces[i][j] != arr[pos]) {
          return false;
        }
        pos++;
      }
    } else {
      return false;
    }
  }
  return true;
};
