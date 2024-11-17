const myInp = document.querySelector('input');
const add_Button = document.getElementById('addTaskButton');
const tasks_UL = document.getElementById('tasks');

add_Button.addEventListener('click', function(){
    
    if (myInp.value === '') {
        alert('please, input your task first!')
    } else {
        const li = document.createElement('li');
        li.innerText = myInp.value;
        li.className = 'task';
        
        // create button for remove task..
        const removeTaskButton = document.createElement('span');
        li.append(removeTaskButton)
        
        removeTaskButton.innerHTML = 'X'
        removeTaskButton.setAttribute('class', 'del')
        
        tasks_UL.append(li)
        keepTaskData();
    }
    
    // we will update input after pressing add 
    myInp.value = '';
    
})

tasks_UL.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        keepTaskData();
    }else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        keepTaskData();
    }
})

//add to localStorage to keep data
function keepTaskData() {
    localStorage.setItem('tasks', tasks_UL.innerHTML);
}


//get data from localStorage to render on screen
function renderTaskDataOnScreen() {
    tasks_UL.innerHTML = localStorage.getItem('tasks');
} 

renderTaskDataOnScreen();