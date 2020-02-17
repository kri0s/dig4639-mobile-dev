function Sum (a, b) {
  let result = undefined;
  if (typeof a == 'number' && typeof b == 'number') {
    result = a + b
  } 
  return result
}

function AddList (array) {
  let result = undefined
  if (array.length > 0){
    result = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] != 'number'){
        result = undefined;
        break;
     }
     result = result + array[i];
    }
  }
  return result
}

function DivideBy (x, y) {
  let result = undefined
  if ((y != 0) && (typeof x == 'number' && typeof y == 'number')){
    result = x / y
  }
  return result
}

function ContainsString (str, substr) {
  let result = false
  if (typeof str == 'string' && typeof substr == 'string'){
    if (str.includes(substr))
    result = true
  }
  return result
}

function ReSortedNumbers (array) {
  
}

//console.log(Sum(-10,0));

export { Sum, AddList, DivideBy, ContainsString, ReSortedNumbers };