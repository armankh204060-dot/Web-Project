const body = document.querySelector('body');

body.addEventListener('click', (e)=>{
     console.log(e.clientX , e.clientY);


     const circleElement = document.createElement('div');
     circleElement.classList.add('circle');

     const text = ['AK','AS','AP'];
     circleElement.textContent = text[Math.floor(Math.random()*3)];

     const color = ['red','blue','green','yellow','coral','pink','white','grey','purple'];
     circleElement.style.backgroundColor = color[Math.floor(Math.random()*9)];

     circleElement.style.top = `${e.clientY-25}px`;
     circleElement.style.left = `${e.clientX-25}px`;

     body.append(circleElement);

     setTimeout(()=>{
          circleElement.remove();
     }, 5000);
})
