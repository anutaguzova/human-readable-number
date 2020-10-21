module.exports = function toReadable (number) {
    let numberSimple = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let numberTy = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    if(number < 100) {
        if (number <= 19) {
            return numberSimple[number];
        } else if (number % 10 === 0) {
            return numberTy[number/10 - 2]
        } else {
            return numberTy[Math.floor(number/10) - 2] + ' ' + numberSimple[number%10]
        }
    }

    if (number >= 100) {
        if (number % 100 === 0) {
            
            return numberSimple[Math.floor(number/100)] + ' hundred'
        } else if (number % 100 <= 19 && number % 100 !== 0) {
        return numberSimple[Math.floor(number/100)] + ' hundred ' + numberSimple[number % 100];
    } else if(number % 100 % 10 === 0) {
        return numberSimple[Math.floor(number/100)] + ' hundred ' +  numberTy[number % 100/10 - 2]
    } else {
        return numberSimple[Math.floor(number/100)] + ' hundred ' + numberTy[Math.floor(number % 100/10) - 2] + ' ' + numberSimple[number % 100 % 10]
    }
}

    }








