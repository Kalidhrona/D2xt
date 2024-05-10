// Function to send a message
function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value.trim();
  
  if (message !== '') {
    // Send message to the server
    sendMessageToServer(message);
    messageInput.value = '';
  }
}

// Function to receive message from the server
function receiveMessage(message) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message');
  const messageContent = document.createElement('p');
  messageContent.textContent = message;
  messageContainer.appendChild(messageContent);
  document.getElementById('messageArea').appendChild(messageContainer);
}

// Simulate sending message to the server
function sendMessageToServer(message) {
  // Here, you would make an AJAX request to your backend server
  // to send the message and store it in the database.
  // For example, using fetch or XMLHttpRequest.

  // For demonstration purposes, let's just simulate receiving the message back immediately
  receiveMessage(message);
}
