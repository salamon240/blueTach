let sami="salamon"
function simulateAsyncOperation(callback) {
    setTimeout(() => {
      callback('Async operation completed 1');
    }, 2000);
  }
  
  // Function to simulate a synchronous operation with a loop
  function simulateSyncOperation() {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
      sum += i;
    }
    return sum;
  }
  
  // Function to display messages in the UI
  function displayMessage(message) {
    const outputDiv = document.getElementById('output');
    const pTag = document.createElement('p');
    pTag.textContent = message;
    outputDiv.appendChild(pTag);
  }
  
  // Example 1: Asynchronous operation
  displayMessage(`Example 1: Asynchronous ${sami} Operation 2`);
  displayMessage('Before calling async operation 3');
  
  simulateAsyncOperation((result) => {
    displayMessage('After async operation 4');
    console.log( "result",result)
    displayMessage(result);
    displayMessage('After async operation 4');
    console.log( "result",result)
  });