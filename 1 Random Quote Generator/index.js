const quotes = [
"Believe in yourself and all that you are.",
"Small steps every day lead to big results.",
"Dream big and dare to fail.",
"Your only limit is your mind.",
"Push yourself because no one else will do it for you.",
"Success starts with self-discipline.",
"Do something today that your future self will thank you for.",
"Great things never come from comfort zones.",
"Stay positive, work hard, make it happen.",
"Don’t stop until you’re proud.",
"Every day is a second chance.",
"Hard work beats talent when talent doesn’t work hard.",
"Success is the sum of small efforts repeated daily.",
"The best time to start was yesterday. The next best time is now.",
"Turn your dreams into plans.",
"Believe you can and you’re halfway there.",
"Focus on progress, not perfection.",
"Your future is created by what you do today.",
"Don’t watch the clock; do what it does. Keep going.",
"Mistakes are proof that you are trying.",
"The harder you work, the luckier you get.",
"Start where you are. Use what you have. Do what you can.",
"Difficult roads often lead to beautiful destinations.",
"Stay hungry, stay foolish.",
"Success doesn’t come to you, you go to it.",
"Act as if what you do makes a difference. It does.",
"Be stronger than your excuses.",
"Work hard in silence, let success make the noise.",
"The only way to do great work is to love what you do.",
"Believe in the power of yet.",
"Progress, not perfection.",
"Don’t be afraid to start over.",
"Keep going. Everything you need will come to you.",
"Success is built on consistency.",
"Dream it. Wish it. Do it.",
"Make today count.",
"Never give up on something you can’t stop thinking about.",
"Stay focused and never quit.",
"Discipline is the bridge between goals and accomplishment.",
"Your attitude determines your direction.",
"Don’t limit your challenges, challenge your limits.",
"Success is not for the lazy.",
"Fall seven times, stand up eight.",
"Keep your face always toward the sunshine.",
"Every accomplishment starts with the decision to try.",
"Be fearless in the pursuit of what sets your soul on fire.",
"Little things make big days.",
"The best view comes after the hardest climb.",
"Rise and rise again until lambs become lions.",
"You are capable of amazing things."
];


const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click',()=>{
     const index = Math.floor(Math.random()*50);
     quote.textContent = quotes[index];
})