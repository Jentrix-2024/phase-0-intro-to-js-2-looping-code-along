// Code your solutions in this file
function writeCards(names, eventName) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const message = `Thank you, ${name}, for the wonderful ${eventName} gift!`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;
}

const names = ['Guadalupe', 'Ollie', 'Aki'];
const eventName = 'birthday';
const messages = writeCards(names, eventName);

console.log(messages)
function countDown() {
  let count = 10;
  while (count >= 0) {
    console.log(count--);
  }
}

countDown(); // Call the function to start the countdown