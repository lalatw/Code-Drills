
function fizzBuzz(n) {
// ===================== YOUR WORK HERE =====================

    if ((n%3)===0) {
        console.log("fizz");
    }
    
    else if ((n%5)===0) {
        console.log("buzz")
    }

    else if ((n%15)===0) {
        console.log("fizzbuzz")
    }

// ==========================================================
  
}

fizzBuzz(parseFloat(process.argv[2]));

/*Pass an argument from the command line*/
