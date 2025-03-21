function processString(email, studentCode) {
    // Step 1: Extract the part of the email before the @ sign
    const emailPart = email.split('@')[0];
  
    // Step 2: Concatenate this with the student code
    let combinedString = emailPart + studentCode;
  
    // Step 3: Convert the entire string to lowercase
    combinedString = combinedString.toLowerCase();
  
    // Step 4: Eliminate all vowels from the string
    combinedString = combinedString.replace(/[aeiou]/g, '');
  
    // Step 5: Remove all prime numbers from the string
    const isPrime = (num) => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
  
    let stringWithoutPrimes = combinedString.replace(/\d/g, (digit) => {
      return isPrime(Number(digit)) ? '' : digit;
    });
  
    if (!stringWithoutPrimes.match(/\d/)) {
      stringWithoutPrimes += '1'; // Append '1' if no prime numbers exist
    }
  
    // Step 6: Take only the characters at even indexes (1-based indexing)
    let evenIndexedString = '';
    for (let i = 1; i <= stringWithoutPrimes.length; i++) {
      if (i % 2 === 0) {
        evenIndexedString += stringWithoutPrimes[i - 1];
      }
    }
  
    // Step 7: Convert the string into a number using the provided rules
    const charToNumber = (char) => {
      if (/[a-z]/.test(char)) {
        return char.charCodeAt(0) - 96; // a = 1, b = 2, ..., z = 26
      } else if (/[0-9]/.test(char)) {
        return 28; // All numbers are replaced with 28
      } else {
        return 27; // All special characters are replaced with 27
      }
    };
  
    const authenticationId = Array.from(evenIndexedString)
      .map(charToNumber)
      .join('');
  
    return parseInt(authenticationId); // Final output
  }
  
  // Example usage
  const email = "shivsahni2240@gmail.com";
  const studentCode = "ft37_469";
  const authId = processString(email, studentCode);
  
  console.log(`Authentication ID: ${authId}`);
  