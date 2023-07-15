const array = [1,2,3];

function getMaxNumber(arr){
  var obj = {
    max: function(){
      var maxi = 0;
      for (var i=1;i<this.arr.length;i++){
        if (this.arr[maxi] < this.arr[i] ) {maxi = i;}
      }
      return this.arr[maxi];
    }};
  return obj.max.apply({arr});
}

console.log(getMaxNumber(array));