const addButton = document.querySelector('.input-row button')
const taskList = document.getElementById('task-list')
const inputElement = document.querySelector('.input-row input')


function addTask(){
    if(inputElement.value.length > 0){
        const newTask = document.createElement('li')
        newTask.innerHTML = `<i class="fa-regular fa-circle"></i>${inputElement.value}<i class="fa-solid fa-xmark"></i>`
        taskList.appendChild(newTask)
        inputElement.value = ""
        saveToStorage()
    }
    else{
        alert('Please enter a task before click add button')
    }
}


addButton.addEventListener('click', addTask)

taskList.addEventListener('click', e => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('done');
        const icon = e.target.querySelector('.fa-circle')
        if(icon.classList.contains('fa-regular')){
           icon.classList.remove('fa-regular')
            icon.classList.add('fa-solid')
        }
        else if(icon.classList.contains('fa-solid')){
            icon.classList.add('fa-regular')
            icon.classList.remove('fa-solid')
        }
        saveToStorage()
    }
    if (e.target.classList.contains('fa-xmark')) {
        const taskItem = e.target.closest('li')
        taskItem.remove()
        saveToStorage()
    }
})

function saveToStorage() {
    localStorage.setItem('Task List', taskList.innerHTML);
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('Task List');
    if (saved) {
        taskList.innerHTML = saved;
    }
});
