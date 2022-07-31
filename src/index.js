const firstArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const secondArray = ['ten','twenty','thirty','forty','fifty','sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {
    if (number === 0) return 'zero';
    if (number < 20) return firstArray[number-1];
    if (number < 100 && number/10 < 10 && number % 10 === 0) return secondArray[(Math.floor((number/10)-1))];
    if (number < 100 && number/10 < 10 && number % 10 !== 0) return secondArray[(Math.floor((number/10)-1))] + " " + firstArray[((number % 10) - 1)];
    const remainder = number%10;
    if (number < 100) return secondArray[(Math.floor((number/10))-1)] + " " + firstArray[(remainder-1)];
    if (number < 1000 && number % 100 !== 0 && number % 100 < 20) return firstArray[(Math.floor((number/100))-1)] + " hundred " + firstArray[((number % 100)-1)];
    if (number < 1000 && number % 100 !== 0 && number % 10 !== 0) return firstArray[(Math.floor((number/100))-1)] + " hundred " + secondArray[(Math.floor((number % 100)/10)-1)] + " " + firstArray[((number % 100) % 10)-1];
    if (number < 1000 && number % 100 !== 0 && number % 10 !== 0 && (Math.floor((number % 100)/10)-1) === 0) return firstArray[(Math.floor((number/100))-1)] + " hundred " + firstArray[((number % 100)-1)];
    if (number < 1000 && number % 100 === 0) return firstArray[(Math.floor((number/100))-1)] + " hundred"; 
    if (number < 1000 && number % 10 === 0) return firstArray[(Math.floor((number/100))-1)] + " hundred " + secondArray[(Math.floor((number % 100)/10)-1)]; 

}
