function compareArrays(arr1, arr2) {
  let result;

 return result = (arr1.length === arr2.length) && (arr1.every((elem, index) => arr1[elem,index] === arr2[elem,index]));
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(elem => elem % 3 == 0 ).filter(elem => elem > 0).map((elem) => elem * 10);
  return resultArr; // array
}
