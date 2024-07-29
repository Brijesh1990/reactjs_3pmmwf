/* single inheritance : multilevel inheritance is used to access more than once child class properties  by its class.
             
                 A => B => C => D => E


*/


class hr 
{
    constructor(hrname)
    {
        this.hrname=hrname;
    }

}
class developer extends hr  
{
    constructor(hrname,developername,department)
    {
        super(hrname)
        this.developername=developername;
        this.department=department;
    }

}

class manager extends developer
{
  constructor(hrname,developername,department,managername)
  {
    super(hrname,developername,department);
    this.managername=managername;

  }
}


class company extends manager
{
    constructor(hrname,developername,department,managername,company)
    {
      super(hrname,developername,department,managername);
      this.company=company;
  
    }
}


var obj=new company("Mrs. Neeta ambani","Brijesh pandey","IT","Mrs Vinny Ma'am","Tops technology");
console.log(obj);
