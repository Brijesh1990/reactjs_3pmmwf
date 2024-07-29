/* inheritance : inheritance is a process where we access one class properties via its another class that is called inheritance.
             
                A => B 


    Note : inheritance is used by extends keyword 

    types of inheritance :
      a) single inheritance
      d) multilevel inheritance
      c) multiple inheritance
    
    syntax :   

    class A 
    {
      constructor()
      {
         statements;
      }
    }

    class B extends A
    {
    
       constructor()
       {
       
         super();
         statements;
       
       }
    }


    var obj=new B();
    console.log()
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