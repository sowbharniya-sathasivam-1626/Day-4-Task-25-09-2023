// 1.Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
// Answer:
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (var i =0; i<arr.length; i++){
    if (arr[i]%2 !==0){
        console.log(arr[i]);
    }
};

// b. Convert all the strings to title caps in a string array
// Answer:
var StudentDetails = ["sowbharniya sathasivam", "palakkad", "full stack developer"];
(function(StringstoTitleCaps) {
  for (var i = 0; i < StringstoTitleCaps.length; i++) {
    var Student = StringstoTitleCaps[i].split(" ");
    var result = [];
    for (var k = 0; k < Student.length; k++) {
      var Arr = Student[k];
      var word = Arr.charAt(0).toUpperCase() + Arr.slice(1).toLowerCase();
      result.push(word);
    }
    var final = result.join(" ");
    StringstoTitleCaps[i] = final;
  }
  console.log(StringstoTitleCaps);
})(StudentDetails);
 
//c.Sum of all numbers in an array
//Answer:
var numbers = [20,30,40,50,60,70,80,90];

(function(Addition) {
  var sum = 0;
  for (var i = 0; i < Addition.length; i++) {
    sum += Addition[i];
  }
  console.log(sum);
})(numbers);

//d. Return all the prime numbers in an array
//Answer:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function(ReturnPrimeNumbers) {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0) return false
    if (num % 3 === 0) return false;
    for (var i = 5; i * i <= num; i += 6) {
      if (num % i === 0) return false 
      if (num % (i + 2) === 0) return false;
    }
    return true;
  }
  var primeNumbers = [];
  for (var i = 0; i < ReturnPrimeNumbers.length; i++) {
    if (isPrime(ReturnPrimeNumbers[i])) {
      primeNumbers.push(ReturnPrimeNumbers[i]);
    }
  }
  console.log(primeNumbers);
})(numbers);

//e. Return all the palindromes in an array
//Answer:
var ReturnPalindromes = ["level", "guvi", "geology", "madam", "world", "racecar", "reviver", "stitch", "rope", "pop"];
var palindromes = (function(ReturnPalindromes) {
  return ReturnPalindromes.filter(function(value) {
    var arr = value.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return arr === arr.split('').reverse().join('');
  });
})(ReturnPalindromes);
console.log(palindromes);

//f. Return median of two sorted arrays of the same size.
//Answer:
var arr1 = [1, 3, 8, 9];
var arr2 = [2, 4, 7, 10];
var median = (function(arr1, arr2) {
  var something = arr1.concat(arr2);
  var value = something.sort(function(a, b) {
    return a - b;
  });
  var middle = Math.floor(value.length / 2);
  if (value.length % 2 === 0) {
    return (value[middle - 1] + value[middle]) / 2;
  } else {
    return value[middle];
  }
})(arr1, arr2);
console.log(median);

//g. Remove duplicates from an array
//Answer:
var arr = [1, 2, 2, 3, 4, 4, 5];
var newarr = (function(arr) {
  return arr.filter(function(item, index, self) {
    return self.indexOf(item) === index;
  });
})(arr);
console.log(newarr);

//h. Rotate an array by k times
//Answer:
var arr = [1, 2, 3, 4, 5];
var k = 2;
var rotatedArray = (function(arr, k) {
  var length = arr.length;
  k = k % length;
  var rotated = arr.slice(k).concat(arr.slice(0, k));
  return rotated;
})(arr, k);
console.log(rotatedArray);