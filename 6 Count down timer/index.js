
setInterval(()=>{
     const result = document.getElementById('result');
const currentTime = Date.now();  // milisecond
const eventTime = new Date(2026,12,18).getTime();  //milisecond
let timer = eventTime-currentTime;

const day = Math.floor((timer)/(1000*60*60*24));
timer%=1000*60*60*24;
const hour = Math.floor((timer)/(1000*60*60));
timer%=1000*60*60;
const minute = Math.floor((timer)/(1000*60));
timer%=1000*60;
const second = Math.floor((timer)/(1000));
timer%=1000;

result.textContent = `${day}: Days ${hour}: Hours ${minute}: Minutes ${second}: Second`;

}, 1000)
