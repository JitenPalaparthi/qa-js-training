showPerson = function (person) {
    console.log("Name:",person.name,"Email:",person.email);
}

var p={"name":"Jiten","email":"JitenP@Outlook.Com"}

p.age= 37;
p.last_name="Palaparthi"

p.FullName = function(){
    return this.name+" "+this.last_name;
}

showPerson(p);
console.log(p.FullName())