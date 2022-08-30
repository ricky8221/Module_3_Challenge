// Assignment code here
var specialCharaters = [

 ' ' , '!' , '"' , '#' , '$' , '%' , "'" , '(' , ')' , '*' , '+' , ',' , '-' , 
 '.' , '/' , ':' , ';' , '<' , '=' , '>' , '?' , '@' , '[' , ']' , '^' , '_' , 
 '`' , '{' , '}' , '|' , '~'

];

var numericCharaters = [

  '0' , '1' , '2' , '3' , '4' , '5' , '6' , '7', '8' , '9'

];

var lowerCaseCharacters = [

  'a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 
  'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' ,
  'y' , 'z'

];

var upperCaseCharacters = [

  'A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 
  'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 
  'Y' , 'Z'

];

function getPasswordOption(){

  var length = parseInt(prompt("How many character would you like for your password?"), 10);

  if (Number.isNaN(length)) {

    alert("Password must be provided as a number")
    return null;

  }

  if (length<8){

    alert("Password length must be more than 8 charater")

  }

  if(length>128){

    alert("Password length must be less than 128 charater")
    return null;

  }

  var hasSpecialCharacter = confirm(

    "Click OK to confirm including speical characters"

  )

  var hasNumericCharacter = confirm(

    "Click OK to confirm including numerci characters"

  )

  var hasLowerCaseCharacter = confirm(

    "Click OK to confirm including lower Case characters"

  )

  var hasUpperCaseCharacter = confirm(

    "Click OK to confirm including upper case characters"

  )

    if(hasSpecialCharacter === false &&
      hasNumericCharacter === false &&
      hasLowerCaseCharacter === false &&
      hasUpperCaseCharacter === false
      ){
       alert("Must select at least one character type");
       return null;
      }

      var passwordOption = {

        length: length,
        hasSpecialCharacter: hasSpecialCharacter,
        hasNumericCharacter: hasNumericCharacter,
        hasLowerCaseCharacter: hasLowerCaseCharacter,
        hasUpperCaseCharacter: hasUpperCaseCharacter

      }

      return passwordOption;


}

function getRandom(arr){

  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  var option = getPasswordOption();
  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if(!option) return null;

  if(option.hasSpecialCharacter){

    possibleCharacters = possibleCharacters.concat (specialCharaters);
    guaranteedCharacters.push(getRandom(specialCharaters));

  }


  if(option.hasNumericCharacter){

    possibleCharacters = possibleCharacters.concat (numericCharaters);
    guaranteedCharacters.push(getRandom(numericCharaters));

  }

  if(option.hasLowerCaseCharacter){

    possibleCharacters = possibleCharacters.concat (lowerCaseCharacters);
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));

  }

  if(option.hasUpperCaseCharacter){

    possibleCharacters = possibleCharacters.concat (upperCaseCharacters);
    guaranteedCharacters.push(getRandom(upperCaseCharacters));

  }


  for (var index = 0; index < option.length; index++){

    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);

  }

  for (var index = 0; index < guaranteedCharacters.length; index++){

    result[index] = guaranteedCharacters[index];

  }

  return result.join("")


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
