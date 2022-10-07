let data = new Map<string, number>(
    [
      ["Gautam",11]
    ]);
   
  data.set("Lokesh", 37);
  data.set("Raj", 35);
  data.set("John", 40);
  
  console.log(data.get("Gautam"));
  
  console.log(data.has("Gautam"));
  console.log(data.has("ABC"));
  console.log(data.has("Raj"));
  
  console.log(data.size);
  data.delete("John");
  console.log(data.size);
  
  for(let i of data.keys())
    console.log(i);
  
  for(let i of data.values())
    console.log(i);  