function solution(n) {
    //get the n number
    //base case
    //if 1 then the area is 1
    if(n === 1){
        return 1;
    }
    //if n number is greater than 1
    //do a loop that starts at multiple 1 and increases
    let counter = 1
    let total = 1
    while(counter < n){
        // console.log(`This is counter: ${counter}`);

        // console.log(`This is variable: ${variable}`);
        //collect the multiple total and add to previous sum
        total += (counter * 4 )
        // console.log(`This is total: ${total}`);
        //add to the previous answer a multiple of 4
        //multiple of 4 is the amount of n
        //increment counter
        counter++;
    }
    return total
}

    //if 2 then add 4 to the previous: 4 + 1 = 5
    //if 3 then add 8 to the previous: 5 + 8 = 13
    //loop starting at 1 and then add the multiple of four to the answer
    //incrementing each iteration 
    //create a counter to start at 1 and then increase until n
 
    
