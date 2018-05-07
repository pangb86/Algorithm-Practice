// https://www.codewars.com/kata/52de553ebb55d1fca3000371

function findMissing(list) {
  let largestDifference = list[1] - list[0];
  let smallestDifference = list[1] - list[0];
  let missingIdxLower = 0;

  for (let i = 0; i < list.length - 1; i++) {
    let difference = list[i + 1] - list[i];
    
  if (Math.abs(difference) < Math.abs(smallestDifference)) {
      smallestDifference = difference;
    }

    if (Math.abs(difference) > Math.abs(largestDifference)) {
      largestDifference = difference;
      missingIdxLower = i;
    }
  }

  return list[missingIdxLower] + smallestDifference;
}
