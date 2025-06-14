// In JavaScript, the Call Stack is an essential concept that helps the JavaScript engine keep track of function execution.

// How Does the Call Stack Work?
// JavaScript operates in a single-threaded environment, meaning that it can only execute one operation at a time. The Call Stack is the part of JavaScript that keeps track of the execution process.

// Function Call: When a function is called, the JavaScript engine pushes the function onto the Call Stack. The function remains in the stack until it completes its execution.
// Executing the Function: The JavaScript engine processes the function in the stack. It runs the code inside the function until it reaches the end or encounters another function call.
// Nested Function Calls: If a function calls another function, the new function is pushed onto the Call Stack. The engine continues to execute the newly pushed function while the previous one waits for completion.
// Returning from a Function: Once a function finishes executing, it is removed (popped) from the stack. The JavaScript engine then continues executing the function that is now at the top of the stack.
// Completion of Program: The process continues until all functions in the stack are executed and removed. Once the stack is empty, the JavaScript engine has completed the execution of the program.