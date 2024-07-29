/* 
A class is an features of oops 
Def : A class is a group of member and its member function i.e called class
      or
      A class is a blue print of any object.
      or
      A class is nothing whenever we can not create its objects.
      
      
      syntax :

      class classname 
      {
        member function()
        {
           
        statements;
        
        }
      }

      //create an object of class 


      Note : any object is created with new keyword


*/ 


class A 
{
    constructor()
    // constructor is a same name of class whenever we create an object of class constructor is automatically called 
    {
        var nm="My name is Brijesh";
        console.log(nm);

    }
}

var obj=new A();