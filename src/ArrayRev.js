function revArr(arr){

    let left = 0;
    let right = arr.length-1;

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
        
    }
    return arr;
}

const arr = [4,5,2];
console.log('Original array:', arr);
const result = revArr(arr);
console.log(result);