const form = document.querySelector('form');
const answer= {
     q1: "Sachin Tendulkar",
     q2: "West Indies",
     q3: "Sachin Tendulkar",
     q4: "Virat Kohli",
     q5: "M.S Dhoni"
}

form.addEventListener('submit', (e)=>{
     e.preventDefault();

     const data = new FormData(form);
     let finalScore = 0;


     for(let [name,value] of data.entries()){
          if(answer[name]==value)
               finalScore++;
     }

     document.getElementById("out").textContent = ` Congratulation!! Your score is ${finalScore} out of 5.`;

     form.reset();
})
