
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 12
let generatedPasswordOne = document.getElementById("generated-password-one")
let generatedPasswordTwo  = document.getElementById("generated-password-two")


function generateRandomPassword(){
    generatedPasswordOne.textContent = " "
    generatedPasswordTwo.textContent = " "
    
    for (let i = 0; i < passwordLength; i++){
    let randomOne = Math.floor(Math.random() * characters.length)
    let passwordOne = characters[randomOne]
    generatedPasswordOne.textContent += passwordOne
}
    for (let i = 0; i < passwordLength; i++){
    let randomTwo = Math.floor(Math.random() * characters.length)
    let passwordTwo = characters[randomTwo]
    generatedPasswordTwo.textContent += passwordTwo                                                                                                                                                                                     
}
 }

console.log("Here is a random password", generatedPasswordOne, generatedPasswordTwo)