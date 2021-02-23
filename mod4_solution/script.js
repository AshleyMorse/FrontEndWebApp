// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10:
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using either the helloSpeaker's or byeSpeaker's 'speak' method.
  // See Lecture 50, part 1
  for (var i = 0; i < names.length; i++) {

    // STEP 11:
    // Retrieve the first letter of the current name in the loop.
    // Use the string object's 'charAt' function. Since we are looking for
    // names that start with either upper case or lower case 'J'/'j', call
    // string object's 'toLowerCase' method on the result so we can compare
    // to lower case character 'j' afterwards.
    // Look up these methods on Mozilla Developer Network web site if needed.
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12:
    // Compare the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
    // name in the loop.
    if (firstLetter == "j") {
      byeSpeaker.speak(names[i]);

    } else {
      helloSpeaker.speak(names[i]);
    }
  }

  // function that returns values for map
  function set_greeting(name) {
    var firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter == "j") {
      return byeSpeaker.speakSimple(name);

    } else {
      return helloSpeaker.speakSimple(name);
    }
  }

  // map function
  var name_map = names.map(n => set_greeting(n));
  // display values
  for (var i = 0; i < name_map.length; i++) {
    console.log(name_map[i]);
  }

  // reduce function
  // site https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#replace_.filter.map_with_.reduce 
  // helped me with this
  const name_reduce = names.reduce((accumulator, currentValue) => {
    var firstLetter = currentValue.charAt(0).toLowerCase();
    if (firstLetter == "j") {
      accumulator.bye.push(byeSpeaker.speakSimple(currentValue));

    } else {
      accumulator.hello.push(helloSpeaker.speakSimple(currentValue));
    }
    return accumulator;
  }, {hello: [], bye: []});

  for (var i = 0; i < name_reduce.hello.length; i++) {
    console.log(name_reduce.hello[i]);
  }

  for (var i = 0; i < name_reduce.bye.length; i++) {
    console.log(name_reduce.bye[i]);
  }
})();