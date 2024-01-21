function isPalindrome(word) {
  // Write your algorithm here
  const lengthOfWord  = word.length;
  let word1 = [];
  let word2 = [];

  for (let i = 0; i < lengthOfWord; i++) {
    word1.push(word[i]);
  }

  for (let j = lengthOfWord; j >= 0; j--) {
    word2.push(word[j]);
  }

  if (word1.join('') === word2.join(''))
    return (true);
  else
    return (false);
}

/* 
  Add your pseudocode here
*/

// function isPalindrome(word) {
//   create two variables that hold arrays to store the two versions

//   iterate through the word
  
//   first iteration should be to put the word the user in the input

//   second iteration should be iteration in reverse while storing input

//   then join the arrays of each variable storing the words

//   then compare the 2 words to see if it is a palindrome
// }


/*
  Add written explanation of your solution here
*/

// So what I am trying to do is to store each word in a variable in array form
// during the forrward and revers iteration then join thee array to form words
// then compare teh 2 words  to see if they match 


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
