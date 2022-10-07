export
function GenerateBillId(n:string,p:number,id:number,m:number,y:number):string{
    var last2=n.slice(-2);
    return `${m}/${y}/${id}${last2}/${p}`
}