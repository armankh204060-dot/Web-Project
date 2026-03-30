const zodiacSigns = [
 "Aries","Taurus","Gemini","Cancer","Leo","Virgo",
 "Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
];

const compliments = [
 "You have a powerful personality.",
 "Your smile can brighten someone's day.",
 "You attract positive energy.",
 "You have a very creative mind.",
 "People trust your advice.",
 "You are stronger than you think.",
 "Your confidence inspires others.",
 "You bring happiness to people around you.",
 "You have a natural leadership quality.",
 "Your ideas are unique and valuable.",
 "You make difficult things look easy.",
 "You are full of potential.",
 "Your kindness makes a difference.",
 "You are learning and growing every day.",
 "Your presence makes people comfortable.",
 "You have a great sense of humor.",
 "Your determination will lead you to success.",
 "You spread positive vibes.",
 "You handle challenges very well.",
 "You are more talented than you realize.",
 "You make the world a better place.",
 "Your energy motivates others.",
 "You have amazing problem-solving skills.",
 "You are capable of achieving big goals.",
 "Your creativity is impressive.",
 "You are an inspiration.",
 "You bring calmness in difficult situations.",
 "Your thinking is very smart.",
 "You are doing better than you think.",
 "You have a bright future ahead.",
 "Today is your lucky day."
];

const victimCardComplement = [
 "You have faced many struggles, but your strength is inspiring.",
 "Even when life is unfair, your patience is admirable.",
 "You carry pain quietly, yet you keep moving forward.",
 "Your resilience after hardships shows your true character.",
 "People may not see your struggles, but your courage is real.",
 "You deserve more appreciation for what you go through.",
 "Despite difficulties, you still care about others.",
 "Your ability to endure challenges makes you stronger.",
 "You have handled situations that many could not.",
 "Your silent sacrifices are meaningful.",
 "Even when things go wrong, you keep trying.",
 "Your emotional strength is powerful.",
 "You deserve kindness for everything you have faced.",
 "Your journey shows true perseverance.",
 "You continue standing even after difficult moments.",
 "Your experiences make you wiser.",
 "You understand pain, and that gives you deep empathy.",
 "Your struggles have built a strong personality.",
 "You are stronger than the situations you face.",
 "Your ability to survive tough times is remarkable."
];

const recommendations = [
 "Focus on your goals and stay consistent.",
 "Trust your intuition when making decisions.",
 "Take time to relax and recharge your energy.",
 "Be open to new opportunities today.",
 "Communicate clearly with people around you.",
 "Avoid unnecessary conflicts and stay calm.",
 "Believe in your abilities and keep moving forward.",
 "Spend time learning something new.",
 "Take care of your health and maintain balance.",
 "Stay positive even in challenging situations.",
 "Your hard work will soon bring results.",
 "Listen carefully before making judgments.",
 "Try to help someone in need today.",
 "Patience will bring better outcomes.",
 "Use your creativity to solve problems.",
 "Take small steps toward your big goals.",
 "Surround yourself with positive people.",
 "Manage your time wisely today.",
 "Do not fear failure, it is part of growth.",
 "Stay confident in your decisions."
];

const predictions = [
 "Today is a great day to start something new.",
 "You may receive unexpected good news soon.",
 "A small challenge today will make you stronger.",
 "Someone important may contact you today.",
 "Your hard work will soon bring positive results.",
 "Trust your instincts when making decisions.",
 "A new opportunity may appear in your career.",
 "Your kindness will bring happiness back to you.",
 "Today is a good day to focus on personal growth.",
 "You may discover a hidden talent today.",
 "Stay patient, good things are on the way.",
 "Your confidence will help you solve a problem.",
 "A pleasant surprise may brighten your day.",
 "Today is perfect for learning something new.",
 "You may meet someone who inspires you.",
 "Your positive attitude will attract success.",
 "A challenge today will lead to future success.",
 "Take time to relax and recharge your energy.",
 "Your creativity will bring great ideas today.",
 "Something you wished for may come true soon."
];

const studentMotivation = [
 "Success comes from consistent effort, keep studying.",
 "Every small step in learning brings you closer to your goal.",
 "Do not fear mistakes, they are part of learning.",
 "Hard work today creates a successful tomorrow.",
 "Believe in yourself and your abilities.",
 "Your dedication to study will shape your future.",
 "Focus on progress, not perfection.",
 "Discipline today leads to success tomorrow.",
 "The more you practice, the more confident you become.",
 "Dream big and work hard to achieve it.",
 "Education is the key to unlocking opportunities.",
 "Stay curious and keep learning every day.",
 "Your efforts today will reward you in the future.",
 "Challenges in study make you stronger and smarter.",
 "Keep pushing forward even when it feels difficult.",
 "Knowledge gained today builds a better tomorrow.",
 "Your future self will thank you for studying today.",
 "Success is built on patience and perseverance.",
 "Stay focused on your goals and never give up.",
 "Every page you study brings you closer to success."
];

const form = document.getElementById('astroForm');

form.addEventListener('submit',(e)=>{

e.preventDefault();

const name = document.getElementById('name').value;
const surname = document.getElementById('surname').value;
const day = parseInt(document.getElementById('day').value);
const month = parseInt(document.getElementById('month').value);
const year = parseInt(document.getElementById('year').value);

const text = `Hi ${name} ${surname}, Your Zodiac Sign is ${zodiacSigns[month-1]}. ${compliments[day-1]} ${victimCardComplement[year%20]} ${recommendations[(day*month)%20]} ${predictions[(name.length*surname.length)%20]} ${studentMotivation[year%20]}`;

document.getElementById('result').textContent = text;

});
