/* for a given array with marks of students [85,97,44,37,76,60] 
Find the average marks of the entire class */

marks = [85,97,44,37,76,60];
sum =0;
average=0;
for(let mark of marks){
    sum+= mark;
}
average = sum/(marks.length)

console.log(average,"is the average of the marks of students");

/* for a given array with price of 5 items -> [250,645,300,900,50]
All items have and offer of 10% OFF on them. Change the array to store final prive after applying the offer  */

price = [250,645,300,900,50]
let i = 0
for(let val of price){
    let offer = 0.1*val
    price[i]-= offer 
    i++
}
console.log(price)