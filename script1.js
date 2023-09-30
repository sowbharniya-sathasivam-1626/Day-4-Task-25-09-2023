//2. Do the below programs in arrow functions using java script
//a. Print odd numbers in an array.
//Answer:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var printOddNumbers = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
printOddNumbers(numbers);

//b. Convert all the strings to title caps in a string array.
//Answer:
var StudentDetails = ["sowbharniya sathasivam", "palakkad", "full stack developer"];
var student = (ele) => {
  return ele
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
var titleCase = StudentDetails.map(student);
console.log(titleCase);

//c. Sum of all numbers in an array.
//Answer:
var numbers =[11,12,14,15,16,17,18,19,10];
var result =numbers.reduce((acc,ele)=>acc+ele);
console.log(result);

//d. Return all the prime numbers in an array
//Answer:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var Prime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;
  if (num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};
var primeNumbers = numbers.filter((num) => Prime(num));
console.log(primeNumbers);

//e. Return all the palindromes in an array
//Answer:
var ReturnPalindromes = ["level", "guvi", "geology", "madam", "world", "racecar", "reviver", "stitch", "rope", "pop"];
var palindromes = ((ReturnPalindromes) => {
  return ReturnPalindromes.filter((value) => {
    var result = value.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return result === result.split('').reverse().join('');
  });
})(ReturnPalindromes);
console.log(palindromes);




