// To create an object 

person = {};

console.log(person);

person.name ="Jiten"
person.age=37
person.isMarried=true;

// person.children=[{"name":"Aadya","age":3.3,"gender":"Girl"},{"name":"Karthi","age":3.3,"Gender":"Boy"}]
// person.children.push({"first-name":"Aadya","last-name":"Pala","age":3.3,"gender":"Girl"});
// person.children.push({"first-name":"Karthi","last-name":"Pala","age":3.3,"Gender":"Boy"});
person.children=[]
child1 = {}

child1.first_name="Aadya";
child1.last_name="Pala";
child1.age=3.3;
child1.gender="Girl";
child1.fullName=function(){return this.first_name+" "+this.last_name};
person.children.push(child1);

child2 = new Object();

child2.first_name="Karthi";
child2.last_name="Pala";
child2.age=3.3;
child2.gender="Boy";
child2.fullName=function(){return this.first_name+" "+this.last_name};
person.children.push(child2);

console.log("Person details",person);

console.log("Full name of Child-1",person.children[0].fullName());
console.log("Full name of Child-2",person.children[1].fullName());

