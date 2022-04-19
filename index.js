document.querySelector("#push").addEventListener("click", () =>{
    if(document.querySelector('#newTask input').value.length == 0){
        alert ("Введите новую задачу!")
    }else{
        document.querySelector('#tasks').innerHTML +=
        `
        <div class="task">
        <span id="taskName">
        ${document.querySelector('#newTask input').value}
        </span>
        <button class="delete">x</button>
        </div>
        `
        const currentTasks = document.querySelectorAll('.delete')
        for (let i = 0; i<currentTasks.length; i++){
            currentTasks[i].addEventListener("click", function (){
                this.parentNode.remove()
            })
        }
        const tasks = document.querySelectorAll('#taskName')
        for (let i = 0; i<tasks.length; i++){
            tasks[i].addEventListener("click", function (){
                this.classList.toggle('completed')
            })
    }
    }
   document.querySelector('#newTask input').value = "" 
})