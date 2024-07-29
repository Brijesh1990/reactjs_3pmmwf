/* 
what is an object ?
  An object is an instance of class i.e called object

  Note : any object is created buy new keyword
       syntax :

      class classname 
      {
        member function()
        {
           
        statements;
        
        }
      }

      //create an object of class 

      var obj=new classname;




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

var obj=new A();  //new A is an object of class A 
