/* 
super : is an keyword i.e used to access parent class properties inside of child class there we used super()

*/


class A 
{
    constructor(name,salary)
    {
        this.name=name;
        this.salary=salary;

    }
}

class B extends A 
{
    constructor(name,salary,department,address)
    {
        super(name,salary);
        this.department=department;
        this.address=address;
        
    }
}

var obj=new B("samir",89500,"CSE","150 feet ring road rajkot");
console.log(obj);


