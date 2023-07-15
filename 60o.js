function compareObjects (a,b) {
  for (const [key, value] of Object.entries(a)) {
    if (value != b[key]) return false;
  }
  return true;
}

var user1= {name:"nerd", org: "dev"};
var user2= {name:"nerd", org: "dev"};
var eq = user1 == user2;
var eqd = compareObjects(user1,user2)
console.log(eq,eqd)