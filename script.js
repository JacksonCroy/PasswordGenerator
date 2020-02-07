var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var params = {
        uppercase: confirm("Would you like to have uppercase characters?"),
        lowercase: confirm("would you like to have lowercase characters?"),
        specialChars: confirm("would you like to have special characters?"),
        numericalChars: confirm("would you like to have numerical characters?"),
    };
    while (
        params.length < 8 ||
        params.length > 120 ||
        params.length === undefined
    ) {
        params.length = parseInt(
            prompt("How long would you like your password to be? It must be greater than 8 and less than 120")
        );

    }




    var password = generatePassword(params);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    var generateBtn = document.getElementById("password").values


}

var specialValues = "!@#$%^&*()_+"
var numbValues = "1234567890"
var lowerValues = "abcdefghijklmnopqrstuvwxyz"
var upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


function generatePassword(options) {
    var password = '';

    for (let i = 0; i < options.length; i++) {
        if (options.uppercase) {
            password += getRandomValue(upperValues)
        }
        if (options.lowercase) {
            password += getRandomValue(lowerValues)
        }
        if (options.specialChars) {
            password += getRandomValue(specialValues)
        }
        if (options.numericalChars) {
            password += getRandomValue(numbValues)
        }
    }

    return password.slice(0, options.length);
}

function getRandomValue(str) {
    return str[Math.floor(Math.random() * str.length)]
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);