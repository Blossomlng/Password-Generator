
class Password {
    constructor(length, characters) {
        this.length = length;
        this.characters = characters;
    }
}

var newPass = new Password();
var allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
var lettersAndNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// The field where the Password will be displayed
let passContainer1 = document.getElementById("password1");
let passContainer2 = document.getElementById("password2");
 
// Buttons that generate password with all characters included
let eightAllCharBtn = document.getElementById("allchar-8");
let twelveAllCharBtn = document.getElementById("allchar-12");
let sixteenAllCharBtn = document.getElementById("allchar-16");

// Buttons that generate password with only letters and numbers
let eightCharBtn = document.getElementById("password-8");
let twelveCharBtn = document.getElementById("password-12");
let sixteenCharBtn = document.getElementById("password-16");

// Generate password that includes letters, numbers and special characters
eightAllCharBtn.addEventListener("click", function () {
    newPass.length = 8;
    newPass.characters = allCharacters
    passContainer1.textContent = ""
    passContainer2.textContent = ""
    generatePass()
})

twelveAllCharBtn.addEventListener("click", function () {
    newPass.length = 12;
    newPass.characters = allCharacters
    passContainer1.textContent = ""
    passContainer2.textContent = ""
    generatePass()
})

sixteenAllCharBtn.addEventListener("click", function () {
    newPass.length = 16;
    newPass.characters = allCharacters
    passContainer1.textContent = ""
    passContainer2.textContent = ""
    generatePass()
})

// Generate password that includes only letters and numbers

eightCharBtn.addEventListener("click", function () {
    newPass.length = 8;
    newPass.characters = lettersAndNumbers
    passContainer1.textContent = ""
    passContainer2.textContent = ""
    generatePass()
})

twelveCharBtn.addEventListener("click", function () {
    newPass.length = 12;
    newPass.characters = lettersAndNumbers
    passContainer1.textContent = ""
    passContainer2.textContent = ""
    generatePass()
})

sixteenCharBtn.addEventListener("click", function () {
    newPass.length = 16;
    newPass.characters = lettersAndNumbers
    passContainer1.textContent = ""
    passContainer2.textContent = ""
    generatePass()
})


// Function to generate password
function generatePass() {
    for (let i = 0; i < newPass.length; i++) {
        randomIndex1 = Math.floor(Math.random()*newPass.characters.length)
        randomChar1 = newPass.characters[randomIndex1]
        randomIndex2 = Math.floor(Math.random()*newPass.characters.length)
        randomChar2 = newPass.characters[randomIndex2]
        passContainer1.textContent += randomChar1
        passContainer2.textContent += randomChar2
    }
}

// Function that copies password to clipboard

let passwords = document.querySelectorAll(".password-text");

for (const password of passwords) {
  password.onclick = function() {
    document.execCommand("copy");
  }

  password.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", password.textContent);
      alert("Password copied successfully!");
    }
  });
}