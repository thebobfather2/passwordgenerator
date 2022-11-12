// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  var passwordLength = 0;
  var passwordType = {
    lowercase: false,
    uppercase: false,
    numeric: false,
    specialCharacters: false
  };
  var passwordCharacters = "";
  var passwordResults = "";

  // Criteria Prompts Function
  var generatePassword = function () {

    // Set length of password
    passwordLength = window.prompt("How long would you like your password to be? (Must be between 8 to 128 characters.)");
    passwordLength = parseInt(passwordLength);

    // Check if input is a number between 8-128
    if (!passwordLength) {
      window.alert("Oops! The response you've entered is invalid. Please Try Again.");
      return
    }
    else if (passwordLength > 128 || passwordLength < 8) {
      window.alert("Please enter a number between 8-128.")
      return
    }
    // confirm lowercase
    var wantsLowercase = window.confirm ("Would you like your password to contain lowercase?");
    //confirm uppercase
    var wantsUppercase = window.confirm ("Would you like your password to contain uppercase?");
    //confirm numeric
    var wantsNumeric = window.confirm ("Would you like your password to contain numeric?");
    //confirm special characters
    var wantsSpecial = window.confirm ("Would you like your password to contain special characters?");
    console.log (wantsLowercase, wantsUppercase, wantsNumeric, wantsSpecial);
    return makePassword(wantsLowercase, wantsUppercase, wantsNumeric, wantsSpecial);
  };

    // Randomly generate password
    function makePassword (wantsLowercase, wantsUppercase, wantsNumeric, wantsSpecial) {

    // Add possible Character Types
    if (wantsLowercase) {
      passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
    };
    if (wantsUppercase) {
      passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };
    if (wantsNumeric) {
      passwordCharacters += "0123456789";
    };
    if (wantsSpecial) {
      passwordCharacters += "!@#$%^&*?~";
    };

    console.log(passwordCharacters)

      for (var i = 0; i < passwordLength; i++) {
        passwordResults += passwordCharacters[Math.floor(Math.random() * (passwordCharacters.length))];
      };
      console.log(passwordResults)
      return passwordResults;
    }
    // Alert Message
    //window.alert("Generating Your Password...")
    //return makePassword();


  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
