/* method_overriding  ?
    method overriding is used same function pass with same arguments i.e called method overriding


    
    */

    
class A 
{
    constructor(a,b)
    {
      this.a=a;
      this.b=b;
      this.res=a+b;
      
    }
}

class B extends A 
{
    constructor(a,b)
    {
        super(a,b);
        this.res1=a*b;
        
    }
}

var obj=new B(10,10);
console.log(obj);