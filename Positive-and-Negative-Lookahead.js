let sampleWord = "astronaut";
let pwRegex = /(?=\w{2,})(?=\D\d{2}){5,}/g; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result);
