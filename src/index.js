const MORSE_TABLE = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
};

function decode(expr) {
  const convertToMorse = (str) => {
    return str.toUpperCase().split("").map(el => {
       return MORSE_TABLE[el] ? MORSE_TABLE[el] : el;
    }).join("");
 };
  let morse=convertToMorse(expr);
    let newString = morse.replaceAll('-', '11').replaceAll('.', '10');
    let arr=newString.split(' ');
    function pad(arr) {
  for (i=0; i<arr.length; i++){
    if (arr[i].length < 10){
         while (arr[i].length < 10) arr[i] =arr[i] + "0" ;
    }
   if(arr[i].length > 10){
     arr[i]=arr[i].substring(0,9);
   }
       }
  return arr;
    

}

let arr1=pad(arr);



let result=arr1.join('');
return result;
}
module.exports = {
    decode
}
