const array = [1,2,3];

function getMaxNumber(arr){
  var obj = {
    myarray: [4,5,6],
    max: function(){
      var maxi = 0;
      for (var i=1;i<this.myarray.length;i++){
        if (this.myarray[maxi] < this.myarray[i] ) {maxi = i;}
      }
      return this.myarray[maxi];
    },
    getsecond: function(){return this.myarray[1]},
    l: function(){return this.myarray.length}
  };
  var obj2 = {
    myarray: arr
  };
  return obj.max.apply(obj2);
}

console.log(getMaxNumber(array));