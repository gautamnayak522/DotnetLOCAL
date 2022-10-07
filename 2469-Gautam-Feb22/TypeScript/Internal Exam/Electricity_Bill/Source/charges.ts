    export
    function Charges(u:number):number{
    let amount:number=0
    if(u<=40)
        amount= u*100;
    else if(u<=100)
        amount= (40*100)+(u-40)*150;
    else if(u<=200)
        amount= (40*100)+(60*150)+(u-100)*170;
    else if(u>200)
        amount= (40*100)+(60*150)+(100*170)+(u-200)*200;
    return amount;
}
    
