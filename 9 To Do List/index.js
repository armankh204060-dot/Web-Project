
const form = document.querySelector('form');
const allTask = document.querySelector('#allTask');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const text = input.value.trim(); 

    if (text === "") return; 

    const parent = document.createElement('div');
    parent.classList.add('parent'); 
    
    const span = document.createElement('span');
    span.textContent = text;
    span.classList.add('task'); 

    
    const doneButton = document.createElement('button');
    doneButton.textContent = "done";
    doneButton.classList.add('doneButton');

    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "delete";
    deleteButton.classList.add('deleteButton');

    parent.append(span, doneButton, deleteButton);


    allTask.append(parent);

    deleteButton.addEventListener('click', () => {
        parent.remove(); 
    });

    doneButton.addEventListener('click', () => {
        span.style.textDecoration = 'line-through'; 
        span.style.color = 'grey';
    });

    form.reset();
});
