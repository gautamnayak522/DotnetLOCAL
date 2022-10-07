const myUrl = new URL('http://localhost:3001/product?param1=5&param2=10');
let value1 = parseInt(myUrl.searchParams.get('param1')); 
let value2 = parseInt(myUrl.searchParams.get('param2')); 
console.log("Addition is : " + (value1+value2));
