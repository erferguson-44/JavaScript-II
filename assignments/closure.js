// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function evertonLegend(){
  let name = "Dixie Dean";
  console.log(name);

  function goalsScored(){
    let goals = 383;
    console.log (`${name} scored ${goals} goals`);

    function cardsReceived(){
      let redCards = 0;
      console.log (`${name} scored ${goals} goals and received ${redCards} red cards.`);
    }
    cardsReceived();
  }
  goalsScored();
}
evertonLegend();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
