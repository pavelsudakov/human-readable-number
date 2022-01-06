module.exports = function toReadable (number) {
    const digits=['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens=['','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numberDigits = Array.from(number.toString());
    if (number == 0) {
        return 'zero';
    }
    else if (number <= 19) {
        return digits[number];
    }
    else if (number <= 99) {
        let result = `${tens[numberDigits[0] - 1]} ${digits[numberDigits[1]]}`; 
        return result.trim();; 
    }
    else {
        let decimals = `${numberDigits[1]}${numberDigits[2]}`;
        if (decimals <= 9) {
            let result = `${digits[numberDigits[0]]} hundred ${digits[decimals[1]]}`;
          return  result.trim();
        }
        else if (decimals <= 19) {
            return `${digits[numberDigits[0]]} hundred ${digits[decimals]}`;
        }
        else {
            let result = `${digits[numberDigits[0]]} hundred ${tens[numberDigits[1] - 1]} ${digits[numberDigits[2]]}`;
            return result.trim();
        }
  
    }
  
    
  
  };
