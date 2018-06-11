window.addEventListener('load', ()=>{
    let taskId = 0,
        allTasks = [],
        taskArea = document.querySelector('.myTasks'),
        addTask = document.querySelector('#addTask'),
        taskTemplate = document.querySelector('.task'),
        btnAdd = document.querySelector('.add'),
        btnCancel = document.querySelector('.cancelTemplate');
        templateShow = false;

    addTask.addEventListener('click', templateIsShow);
    btnCancel.addEventListener('click', templateIsShow);

    function templateIsShow() {
        if (templateShow) {
            addTask.style.display = 'block';
            taskTemplate.style.display = 'none';
            templateShow = false;
        } else {
            addTask.style.display = 'none';
            taskTemplate.style.display = 'block';
            templateShow = true;
        }
    }

    class Task{
        constructor(title, deadline, deadLineTime, fileName, comment) {
            this.title = title;
            this.deadline = deadline;
            this.deadLineTime = deadLineTime;
            this.fileName = fileName;
            this.comment = comment;
            this.status = 'ongoing';
            this.star = false;
            this.edit = false;
        }

        star() {
            this.star = this.star ? false : true;
        }
        edit() {
            this.edit = this.star ? false : true;
        }
    }  
    
    function creatTask(index) {
        let title = document.querySelector('.topicArea .titleInput').value,
            deadline = document.querySelector('.deadline .content .date').value,
            deadLineTime = document.querySelector('.deadline .content .time').value,
            fileName = document.querySelector('.file .content input').value,
            comment = document.querySelector('.comment .content textarea').value;

        allTasks[index] = new Task(title, deadline, deadLineTime, fileName, comment);
        taskId++;
        document.querySelector('.topicArea .titleInput').value = '';
        
        renderTasks();
    }
    function renderTasks(){
        taskArea.innerHTML = '';
        for (let i = 0; i < allTasks.length; i++) {

            let task = `<div class="newTask">
                            <div class="topicArea">
                                <input type="checkbox" name="" id="" class="isCompleted">
                                <span class="title">${allTasks[i].title}</span>
                                <input class="titleInput" type="hidden" name="title" placeholder="Type Something Here..." value="${allTasks[i].title}">
                                <div class="statusArea">
                                    <span class="star">
                                        <i class="far fa-star"></i>
                                    </span>
                                    <span class="edit">
                                        <i class="far fa-edit"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="taskBody">
                                <div class="taskContent deadline">
                                    <i class="far fa-calendar-alt"></i>
                                    <div class="topic">
                                        <span>Deadline</span>
                                    </div>
                                    <div class="content">
                                        <span>${allTasks[i].deadline}</span>
                                        <span>${allTasks[i].deadLineTime}</span>
                                    </div>
                                </div>
                                <div class="taskContent file">
                                    <i class="far fa-file"></i>
                                    <div class="topic">
                                        <span>File</span>
                                    </div>
                                    <div class="content">
                                        <span>${allTasks[i].fileName}</span>
                                        <label>＋</label>
                                    </div>
                                </div>
                                <div class="taskContent comment">
                                    <i class="far fa-comment-dots"></i>
                                    <div class="topic">
                                        <span>Comment</span>
                                    </div>
                                    <div class="content">
                                        <span>${allTasks[i].comment}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="btnArea">
                                <div class="cancel">✕ Cancel</div>
                                <div class="save">＋ Save</div>
                            </div>
                        </div>`;

            taskArea.innerHTML += task;
            
            let edit = document.querySelectorAll('.edit'),
                title = document.querySelectorAll('.title'),
                titleInput = document.querySelectorAll('.titleInput');
                edit[i+1].innerHTML += i;
                console.log(edit[i]);
                
            
            // edit[i+1].addEventListener('click', ()=>{

            //     title[i].style.display = 'none';
            //     titleInput[i+1].type = 'text';
            //     console.log(i);
                
                
            // })
            



            
        }
    }
    
    
    document.getElementsByClassName('add')[0].addEventListener('click', ()=>{
        creatTask(taskId);
        templateIsShow()
    })
})

