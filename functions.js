function Display() {
    console.log("Hello World");
}

Display();

function DisplayStr(str) {
    console.log(str);
}

DisplayStr("Hello World")

function DisplayStrRet(str) {
    return "Hello " + str
}

console.log(DisplayStrRet("World"));

function DisplayObjectRet(str) {
    return { "message": str }
}

console.log(DisplayObjectRet("Hello World"));

function ReverseStr(str) {
    if (typeof str != "string") {
        return "";
    }

    rev = "";
    for (var s of str) {
        rev = s + rev;
    }
    return rev;
}

console.log(ReverseStr("hello"));
console.log(ReverseStr(1234));

console.log(Add(10, 12.5));

function Add(a, b) {
    if (typeof a != "number" && typeof b != "number") {
        return 0;
    }
    return a + b;
}

function MyObject(employee) {
    if (employee == null) {
        employee = {};
    }
    employee.name = "Jiten";
    employee.number = 101;
    employee.email = "JitenP@Outlook.Com";
    employee.isMarried = true;
    employee.address = { "area": "WhiteField", "pincode": 560033, "city": "Bangalore", "state": "Karnataka", "countryt": "India" }
    return employee;
}

employee = {};
console.log(MyObject(employee));

var names = ['Bob', 'Jon', 'Linda'];
var ages= [21, 18, 20];

for(var i=0;i<names.length;i++){
    console.log("Name is ",names[i],"and age is",ages[i]);
}

names.push("Jiten");

ages.push(37);


for(var i=0;i<names.length;i++){
    console.log("Name is ",names[i],"and age is",ages[i]);
}

names.shift();
ages.pop();

ages[2]=38;
for(var i=0;i<names.length;i++){
    console.log("Name is ",names[i],"and age is",ages[i]);
}

// To create an object

var employee = new Object();
console.log(MyObject(employee));

var e1 = employee

e1.name="Pala"

console.log(e1)
console.log(employee);

e2=MyObject(null)
console.log(e2);



