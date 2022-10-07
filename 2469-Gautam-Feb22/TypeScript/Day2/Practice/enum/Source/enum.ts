enum res {
    Fail,
    Pass,
  }
  
  function result(name: string, r : res): void {
    if(r==1){
    console.log(`${name} is Pass`);
    }
    else{
    console.log(`${name} is Fail`);
    }
  }
  
  result("Gautam",res.Pass);
  result("Gautam",res.Fail);