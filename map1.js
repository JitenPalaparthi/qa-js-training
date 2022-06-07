var vehicles = new Map();

vehicles.set("ap101","Suzuki Baleno");
vehicles.set("ap102","BMW E3 Series");
vehicles.set("ap103","Benz E3 Series");
console.log(vehicles);

console.log(vehicles.get("ap101"));

vehicles.delete("ap103");

console.log(vehicles);

// foreach loop in a map
vehicles.forEach(function(value,key){
  console.log(key,"====>>>",value)  ;
});

for(var v of vehicles.entries()){
    console.log(v);
}