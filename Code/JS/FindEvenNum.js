const num = [1, 2, 3, 4, 5, 6];
// using map
const even = num.map((e) => (e % 2 == 0 ? e : ""));
console.log("Even by Map : ", even);
// using flatmap
const evenByFlatMap = num.flatMap((e) => (e % 2 == 0 ? e : ""));
console.log("Even by FlatMap : ", evenByFlatMap);
