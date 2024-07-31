/*  
encapsulation is a process where we can see only external data internal data will be hidden 
or
encapsulation is a process where we wrapping up data in a single objects that is called encapsulations 


*/

class A 
{
    constructor()
    {
        var name;
        var marks;
    }
    getName()
    {
        return this.name;
    }
    setName(name)
    {
        this.name=name;
    }
    getMarks()
    {
        return this.marks;
    }
    setMarks(marks)
    {
        this.marks=marks;
    }
}

var obj=new A();
obj.setName("brijesh");
obj.setMarks(99.99);
console.log(obj.getName()+"\n"+obj.getMarks());