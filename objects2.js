// another way to create an object
person1 = new Object();

console.log(person1);

person1.name ="Jiten"
person1.age=37
person1.isMarried=true;

//person.children=[{"name":"Aadya","age":3.3,"gender":"Girl"},{"name":"Karthi","age":3.3,"Gender":"Boy"}]
person1.children=[]
person1.children.push({"first-name":"Aadya","last-name":"Pala","age":3.3,"gender":"Girl"});
person1.children.push({"first-name":"Karthi","last-name":"Pala","age":3.3,"Gender":"Boy"});

console.log(person1);

var person2 = null

if(person2===null || person2===undefined){
    person2=person1 //shallow copy hence only the reference is copied.
    // any changes to person2 impacts person1 as well
}

console.log(person2);

person2.name="John"
console.log(person1.name,person2.name);