document.querySelector('#push').addEventListener("click",function(){

    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter the task")
    }
    else{
        document.querySelector('#tasks').innerHTML +=`
        <div class="task">
        <span id="taskname">
        ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
        <i class="far fa-trash-all">X</i>
        </button>
        </div>
        `;
        document.querySelector('#newtask input').value="";
        var current_task = document.querySelectorAll(".delete");
        for(let i = 0 ; i<current_task.length ;i++)
        {
            current_task[i].addEventListener('click', function(){
                // this.parentNode.remove();
                this.parentNode.style.backgroundColor = "#F08080";
                this.parentNode.style.cursor = "not-allowed";
                this.remove();
            })
        }
    }
}
)