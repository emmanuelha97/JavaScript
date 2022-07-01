//global variable
let pemdas = ["x", "/", "+", "-"];
//add event listener
let buttons = document.querySelector(".buttons").children;
let active = false;
let newEquation;

for(button of buttons) {
    console.log(button)
    button.setAttribute('id', button.innerText);
}

for (button of buttons) {
    button.addEventListener("click", (event) => {
        let value = event.composedPath()[0].innerText;
        console.log("clicked button", value);
        if (value === "=") {
            enterPressed();
        } else if (value === "Clear") {
            clearPressed();
        } else if (value === "Delete") {
            deletePressed();
        } else {
            addValueToDisplay(checkSymbol(value));
            active = true;
        }
    });
}
//function to check which symbol to add
let checkSymbol = (symbolName) => {
    if (symbolName === "Add") {
        return pemdas[2];
    } else if (symbolName === "Subtract") {
        return pemdas[3];
    } else if (symbolName === "Multiply") {
        return pemdas[0];
    } else if (symbolName === "Divide") {
        return pemdas[1];
    }
};

let numbers = document.querySelector(".numbers").children;

for (number of numbers) {
    number.addEventListener("click", (event) => {
        let value = event.composedPath()[0].innerText;
        // console.log("clicked button", value);
        addValueToDisplay(value);
    });
}

let display = document.getElementById("display-id");
let addValueToDisplay = (value) => {
    // console.log('display.innerText.length', display.innerText.length)
    if (display.innerText.length < 16){
        display.innerText += value;
        equation = display.innerText;
    }
    
};

//functions for buttons
let enterPressed = () => {
    // console.log("equation:", equation);
    // console.log('active', active)
    if(active === true ){
        doEquation(equation);
        if(newEquation === "Infinity"){
            display.innerText = ";) Sneaky Dog!"
        } else {
            display.innerText = newEquation;
        }
        
    }
    active = false;
};

let clearPressed = () => {
    display.innerText = "";
    equation = "";
};

let deletePressed = () => {
    console.log(display.innerText.length);
    let last = display.innerText.length - 1;
    let deleted = display.innerText.slice(0, last);
    display.innerText = deleted;
};

// let equation = "51+46-16-256-69x5";
// console.log("equation is:", equation);

let doEquation = (equation) => {
    let subEquation;
    let solvedSubEquation;
    
    let startEnd;
    let firstTime = true;
    // console.log('startEnd = findSubEquation(equation, pemdas[x])', startEnd = findSubEquation(equation, pemdas[x]))
    for (let x = 0; x < pemdas.length; x++) {
        startEnd = findSubEquation(equation, pemdas[x]);
        if (startEnd[1] === undefined) {
        } else {
            while (startEnd[1] !== undefined) {
                if (firstTime) {
                    startEnd = findSubEquation(equation, pemdas[x]);
                    // console.log('startEnd', startEnd)
                    subEquation = equation.slice(startEnd[0], startEnd[2] + 1)
                    solvedSubEquation = solveEquation(subEquation, startEnd);
                    // console.log('solvedSubEquation', solvedSubEquation)
                    newEquation = replaceAt(equation, startEnd, solvedSubEquation);
                    // console.log('newEquation', newEquation)
                    firstTime = false;
                } else {
                    startEnd = findSubEquation(newEquation, pemdas[x]);
                    if(startEnd[0] === 0 && startEnd[1] == 0) return;
                    subEquation = newEquation.slice(startEnd[0], startEnd[2] + 1)
                    solvedSubEquation = solveEquation(subEquation, startEnd);
                    newEquation = replaceAt(newEquation, startEnd, solvedSubEquation);
                    // console.log('newEquation is: ', newEquation);
                    
                }
                startEnd = findSubEquation(newEquation, pemdas[x]);
            }
        }
    }
    // console.log('returning newEquation', newEquation)
    return newEquation;
};

let replaceAt = (string, indexArray, insertString) => {
    let left = string.substring(0, indexArray[0]);
    let right = string.substring(indexArray[2] + 1);
    let newString = left + insertString + right;
    return newString;
};

//function to solve the equation, takes the equation and array locations
let solveEquation = (subEquation, arrayLoc) => {
    let result, resultString;
    let leftSideLength, rightSideLength;
    console.log('arrayLoc', arrayLoc)
    console.log('subEquation', subEquation)
    leftSideLength = arrayLoc[1] - arrayLoc[0];
    // console.log('leftSideLength', leftSideLength);
    rightSideLength = arrayLoc[2] - arrayLoc[1];
    // console.log('rightSideLength', rightSideLength);
    let symbol = subEquation.charAt(leftSideLength);
    let leftSide = subEquation.slice(0, leftSideLength);
    let rightSide = subEquation.slice(leftSideLength + 1);
    console.log('leftSide', leftSide)
    console.log('rightSide', rightSide)

    //function to solve the equation
    let x = parseFloat(leftSide);
    let y = parseFloat(rightSide);

    if (symbol === "+") {
        result = add(x, y);
    } else if (symbol == "-") {
        result = subtract(x, y);
    } else if (symbol == "x") {
        result = multiply(x, y);
    } else if (symbol == "/") {
        result = divide(x, y);
    }
    resultString = result.toString();
    return resultString;
};

//function that takes an equation, a specifier
//and returns the location in an array format
let findSubEquation = (equation, specifier) => {
    let start, middle, end;
    let values = [];
    // console.log('equation.length', equation.length)
    //loop to look for each char value
    for (let i = 0; i < equation.length; i++) {
        let char = equation.charAt(i);
        let asciiVal = equation.charCodeAt(i);

        if ((asciiVal > 47 && asciiVal < 58) || asciiVal === 46) {
        } else {
            if (char === specifier) {
                // console.log("Multiple index is: ", i);
                middle = i;
                if (middle !== 0) {
                    break;
                }
            }
        }
    }

    //go back and find starting value
    for (let j = middle - 1; j > 0; j--) {
        let char = equation.charAt(j);
        let asciiVal = equation.charCodeAt(j);
        if ((asciiVal > 47 && asciiVal < 58) || asciiVal === 46) {
        } else {
            start = j + 1;
            break;
        }
    }

    //go forward and find the end value
    for (let n = middle + 1; n < equation.length; n++) {
        let char = equation.charAt(n);
        let asciiVal = equation.charCodeAt(n);
        if ((asciiVal > 47 && asciiVal < 58) || asciiVal === 46) {
        } else {
            end = n - 1;
            // console.log("index of end: ", end);
            break;
        }
    }

    values.push(start);
    values.push(middle);
    values.push(end);
    if (values[0] === undefined) {
        values[0] = 0;
    }
    if (values[2] === undefined) {
        values[2] = equation.length;
    }
    // console.log('values', values)
    return values;
};


//check if int
let checkInt = (val) => {
    if (val % 1 === 0) return parseInt(val);
    else return parseFloat(val).toFixed(2);
}

//functions for calculator
//addition
let add = (...args) => {
    let i;
    let sum = args[0];
    for (i = 1; i < args.length; i++) {
        sum += args[i];
    }
    return checkInt(sum);
};

//subtraction
let subtract = (...args) => {
    let i;
    let sum = args[0];
    for (i = 1; i < args.length; i++) {
        sum -= args[i];
    }
    return checkInt(sum);
};

//multiply
let multiply = (...args) => {
    let i;
    let sum = args[0];
    for (i = 1; i < args.length; i++) {
        sum *= args[i];
    }
    return checkInt(sum);
};

//Divide
let divide = (...args) => {
    let i;
    let sum = args[0];
    for (i = 1; i < args.length; i++) {
        sum /= args[i];
    }
    return checkInt(sum);
};
