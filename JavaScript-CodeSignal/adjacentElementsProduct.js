function solution(inputArray) {
    //integer to store the largest
    let large = -200000000;
    //get the length of the array
    let len = inputArray.length;
    //get the second index 
    let next = 1;
    //get first index
    let i = 0;
    //for loop to iterate each two pairs until
    //the second index is equal to the length of 
    //the array.
    for(i; i < len; i++){
        console.log("This is i " + i);
        console.log("This is next " + next);
        console.log("This is inputArray[i] " + inputArray[i]);
        console.log("This is inputArray[next] " + inputArray[next]);
        //multiply the numebrs
        let sum = inputArray[i] * inputArray[next];
        //check if the sum is larger than the largest product
        if(sum > large){
            //if largest then store inside
            large = sum;
        }
        next++;
        if(next == len){
            break;
        }
    }
    //return the large array
    return large;
}
