exports.main=(req,res,next)=>{
    console.log("Request URL : "+ req.url);
    console.log("ROOT MIDDLEWARE 1 : REQ GENERATED at : " + Date());
    next()
}

exports.m1=(req,res,next)=>{
    console.log("Request URL : "+ req.url);
    console.log("EMP ROOT MIDDLEWARE : REQ GENERATED at : " + Date());
    next()
}

exports.m2=(req,res,next)=>{
    console.log("Request URL : "+ req.url);
    console.log(`MIDDLEWARE1 : PRINTING all assignments of employee ${parseInt(req.params.empid)}  => ` + Date());
    console.log("API : localhost:1000/emps/:empid/child/assignments ");
    next()
}

exports.m3=(req,res,next)=>{
    console.log("Request URL : "+ req.url);
    console.log("MIDDLEWARE2 : PRINTING assignment of employee : " + Date());
    next()
}

exports.errcheck=(err,req,res,next)=>{
    if(err){
    console.log("MIDDLEWARE3 : ERROR IN SYSTEM : " + Date());
    next()
    }
}
