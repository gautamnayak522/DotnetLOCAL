let absent = new Set<number>(
    [522,711,715]
);
absent.add(718)
absent.add(723)

absent.add(111).add(222).add(333)
console.log(`Size of Set is  ${absent.size}`)
absent.delete(333)
console.log(`Size of Set after delete 333 :  ${absent.size}`)

for(let i of absent)
    console.log(i);