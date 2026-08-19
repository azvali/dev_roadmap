/* var / let / const 

    var -> function scoped. initialized on run and undefined until a value is set

    let / const -> block scoped the block has its own binding of the variable and each iteraction 
    gets its own binding.


    the event loop is how browsers runs the callstack and any callback functions are entered 
    into a queue for the single thread to reach syncronously 

    all variables are hoisted on run of the callstack although block scoped variables
    are not initalized until the "let" line runs

*/

// const arr = [];

// for (let i = 0; i < 3; i++) {
//   arr.push(() => i);
// }

// console.log(arr[0](), arr[1](), arr[2]());

// console.log(typeof undefined);
// console.log(typeof null);

// {
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization
//   let x = 5;
// }

// {
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization
//   var x = 5;
// }

// if a variable is declared within a block then matching variables outside the block
// are not reachable although they can be re-assigned or referenced if theyre not being re-init
let x = "outter";
{
  console.log(x);
  let x = "inner";
}
