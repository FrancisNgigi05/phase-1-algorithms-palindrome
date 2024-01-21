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

/*
  Add written explanation of your solution here
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
