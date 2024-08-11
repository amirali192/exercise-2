// first we make a function with 1 parameter and then we make a string to compare with out parameter and then if the type of our parameter was a string we will display the last character of that string and if not we will diplay an error that says the users input was indeed not a string
function LC(str) {
    let output = 0
    let string = "string"
    if (typeof str == string) {
        output = str.slice(-1)
    }
    else {
        output = "ERORR ! YOUR INPUT WAS NOT A STRING !"
    }
    return output
}
console.log(LC("davasa"))
console.log(LC(12))