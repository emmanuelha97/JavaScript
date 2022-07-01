//create text and store in variable of type string/let 
let inputString = "aabaa"

//create a function that takes the variable created and uses it as a paramter
function solution(inputString) {
//get the length of the variable and store it in a integer variable
let len = inputString.length - 1;
//integer variable starting at the index of first letter
let i = 0;
//create a boolena with value of True
let bool = true;
//loop starting at the first letter and ending when both indexes are equal
for(i; i < len; i++){
    console.log("This is i " + i);
     console.log("inputString[i] " + inputString[i]);
    console.log("This is len " + len);
    console.log("This is inputString[len] " + inputString[len]);
    if(i == len){
        break;
    }
    //compare the letters for equality
    //if no the same then false
    if(inputString[i] !== inputString[len]){
        bool = false;
    } 
    // //increment starting index variable
    // i++;
    //decrement ending index variable
    len--;
}
//return the value of boolean after iterating through inputString and comparing each letter
return bool;

}


