async function fetchData() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  console.log(data);
}

fetchData();

// Async Function
// The async function allows us to write promise-based code as if it were synchronous. This ensures that the execution thread is not blocked. Async functions always return a promise. If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.

// Await Keyword
// The await keyword is used to wait for a promise to resolve. It can only be used within an async block. Await makes the code wait until the promise returns a result, allowing for cleaner and more manageable asynchronous code.