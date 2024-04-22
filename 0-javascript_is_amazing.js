function second_max() {
    const proc = process.argv;
    
    let arr = [];
    for (let i = 0; i < proc.length - 2; i++) {
    if (!isNaN(proc[i + 2])) {
        let num = parseInt(proc[i+2]);
        arr.push(num);
        } else {
            continue;
        }
    }
console.log(arr);
if (proc.length === 3) {
    console.log("No second largest");
}
largest  = second_largest = parseFloat(-Infinity);
for (let j = 0; j < arr.length; j++) {
    if (arr[j] > largest) {
        second_largest = largest;
        largest = arr[j];
    }
    else if (arr[j] > second_largest && arr[j] < largest) {
        second_largest = arr[j]
    }
}
return second_largest;
}

console.log(`The second largest number is ${second_max()}`)
