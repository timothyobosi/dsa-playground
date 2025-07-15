function reverseArr(arr){
    let index0 = 0;
    let index2 = arr.length -1;

    while (index0 < index2) {
        [arr[index0], arr[index2]] = [arr[index2], arr[index0]];
        index0++;
        index2--;
    }
    return arr;
}

const arr = [1,4,3,2,6,5];
const result = reverseArr(arr);
console.log(result);