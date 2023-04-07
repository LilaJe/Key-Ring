// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(length, includeCaps, includeNumbers, includeSpecial){
  let chars = "abcdefghijklmnopqrstuvwxyz";
  if (includeCaps){
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers){
    chars += "1234567890";
  }
  if (includeSpecial){
    chars += "!@#$%^&*()_+{}[]|\\;':\",./<>?";
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
    console.log(i)
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var length = prompt("How many characters in your password")
  if(length < 8 & length > 128){
    alert("password is not between 8 and 128 characters in length");
  }
  var includeCaps = confirm("Include Caps?")
  var includeNumbers = confirm("Include Numbers?")
  var includeSpecial = confirm("Include Special?")
  var password = generatePassword(length, includeCaps, includeNumbers, includeSpecial);
  var passwordText = document.querySelector("#password");
  console.log(password);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
