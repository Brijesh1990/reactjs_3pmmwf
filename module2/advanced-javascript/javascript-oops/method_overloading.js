/* 
method_overloading  ?
    method overloading is used same function pass with different arguments i.e called method overloading
        
*/ 

class A 
{
    constructor(a,b,c)
    {
      this.a=a;
      this.b=b;
      this.c=c;
      this.res=a+b+c;
      
    }
}

class B extends A 
{
    constructor(a,b,c,d)
    {
        super(a,b,c);
        this.d=d;
        this.res1=a*b*c*d;
        
    }
}

var obj=new B(10,10,10,10);
console.log(obj);