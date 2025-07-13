function reverseArray(arr){

    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

if(require.main === module){
    const testArr = [1,2,3,4,5];
    console.log('Original array:', testArr);
    console.log('Reversed array:', reverseArray(testArr));
}

module.exports = {reverseArray};
