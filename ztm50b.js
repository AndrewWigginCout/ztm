const array = [1,2,3];

function getMaxNumber(arr){
  o = {arr}
  console.log (o)
  return Math.max.apply(o.arr);
}

console.log(getMaxNumber(array));