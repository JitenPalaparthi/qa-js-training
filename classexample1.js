class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    ShowDetails(lastName) {
        this.lastName= lastName; // A new field is added to the object
        console.log("Full Name:", this.name+" "+lastName, "Age:", this.age, "Email:", this.email);
    }
}

let p= new Person("Jiten","JitenP@Outlook.Com",37);
p.ShowDetails("Palaparthi");
console.log(p.lastName);

var names=["Jiten","Rahim","John","Bob"] // an array but actually it is an object
let data = JSON.stringify(names); // object to convert as string
console.log(typeof data);
var p1 = '{"name":"Jiten","id":101}';

var p2 = JSON.parse(p1) // string as converted to object

console.log(typeof p2);

var m = new Map(); // a map but actually it is an object
m.set("ref",101);
m.set("address","London,UK");

console.log(typeof m);





