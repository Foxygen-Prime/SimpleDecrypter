const alphabet = "abcdefghijklmnopqrstuvwxyz"

//in this function, str is/are the character input and shift is the value of the string index that is being modified as a positive or negative number
function encipher(str, shift) {

let everything = '';
    //then take the the index of the string and shift (add or subtract) from that index and return the character at the new index
for (let i = 0; i < str.length; i++) {
let index = alphabet.indexOf(str[i]);

if (index + shift > alphabet.length -1){
  let leftover = alphabet.length -1 - index;
  everything += 
}

  // str[].indexOf([i + shift], 0) = answer

}
}
return everything;
function decipher(str, shift) {
}




module.exports = {
  encipher,
  decipher
}
