function emp(id,name,age) // object as constructor
{
    this.id=id;
    this.name=name;
    this.age=age;
}
var obj=new emp(1001,"brijesh",35);
console.log(obj);