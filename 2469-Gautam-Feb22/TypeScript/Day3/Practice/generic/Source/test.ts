function myDetails<S, T>(a: S, b: T): [S, T] {
    console.log(`Details :  ${a}, ${b}`);
    return [a,b];
}

console.log(myDetails<string, number>('Gautam', 7623075610));
console.log(myDetails<number, string>(9099814891, 'Siddharth'));