/*  
abstractions or abstract class : when we create any class as abstract class we can not create  object of that class. 
                               abstract is used for data hiding process  
                               abstract class will be access via its child class we can access abstract class using inheritance.

Note : we can not used abstract in javascript we can used inside of typescript

*/

abstract class A 
{
    constructor(name)
    {
        this.name=name;
    }
}

class B extends A 
{
    constructor(age)
    {
        super(name);
        this.age=age;
    }
}
var obj=new B("Brijesh",35);
console.log(obj);

