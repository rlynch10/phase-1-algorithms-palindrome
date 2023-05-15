function isPalindrome(string) {
  // Write your algorithm here
  let cleanPal = string.replace(/[^A-Z-9]/ig, "").toLowerCase()
  let reversePal = cleanPal.split('').reverse().join('')

  return (cleanPal === reversePal)
}

/* 
  Add your pseudocode here
  //function takes a string as argument.
  //initialize cleanPal to take a string and replace all characters as lowercase.
  //reversePal splits string into array of strings.
  //return result true if entered string are a Palindrome and false if not. 
*/

/*
  Add written explanation of your solution here
  //function isPalindrome takes a string as an argument.
  //1st cleanPal takes the string and turns all characters into lowercase /[^A-Z-9] and /ig makes sure the regex case is insensitive and global.
  //2nd reversePal takes cleanPal and reverses it, while splitting it into an array of strings. It then "joins" the elements back into a string.
  //3rd return the strings and compare them to check if they are a Palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
