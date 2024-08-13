const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
var morseCode = {}

Object.entries(MORSE_TABLE).forEach(([key, value]) => {
    morseCode[value.toUpperCase()] = key
})


function decode(expr) {
const convertToMorse = (str) => {
    return str.toUpperCase().split("").map(el => {
       return morseCode[el] ? morseCode[el] : el;
    }).join("");
 };
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
