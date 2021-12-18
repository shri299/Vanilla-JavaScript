//Define UI variables

const form = document.querySelector(".btn");
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskinput = document.querySelector('#task');

 

// load all event listners
loadEventListners();


function loadEventListners(){
    //add task event
    form.addEventListener('click',addTask)

    //remove task by clicking on link
    tasklist.addEventListener('click',removetask);

    //clear task event
    clearbtn.addEventListener('click',clearalltask);

    //filter the tasks
    filter.addEventListener('keyup',filtertasks);

    //dom load event
    document.addEventListener('DOMContentLoaded',gettasks);
}


//get tasks from local storage

    function gettasks(){

        let tasks;
    if(localStorage.getItem('tasks')=== null){

        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){


        //create li element
    const li = document.createElement('li');
    //add class to li
    li.className = 'collection-item';
    //create text node and append inside li
    li.appendChild(document.createTextNode(task));
    //create link for li
    const link = document.createElement('a');
    //add class to link
    link.className = 'delete-item secondary-content';
    //add inner html for icons inside li
    link.innerHTML = '<i class= "fa fa-remove"></i>';
    //append link inside li
    li.appendChild(link);
    //append li inside ul
    tasklist.appendChild(li);


    });


    }

//the addTask function

function addTask(e){

    if(taskinput.value===''){
        alert('Add A Task');
    }

    //create li element
    const li = document.createElement('li');
    //add class to li
    li.className = 'collection-item';
    //create text node and append inside li
    li.appendChild(document.createTextNode(taskinput.value));
    //create link for li
    const link = document.createElement('a');
    //add class to link
    link.className = 'delete-item secondary-content';
    //add inner html for icons inside li
    link.innerHTML = '<i class= "fa fa-remove"></i>';
    //append link inside li
    li.appendChild(link);
    //append li inside ul
    tasklist.appendChild(li);


       //store in local storage
    storeTaskInLocalStorage(taskinput.value);

    //clear input
    taskinput.value='';

    e.preventDefault();
}


function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')=== null){

        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removetask(e){

    //using event delegation i.e. targeting the ul(parent) to acess the delete link(child)

    if(e.target.parentElement.classList.contains= 'delete-item'){
        if(confirm('Are You Sure')){
            e.target.parentElement.parentElement.remove();

            //remove from ls
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);

        }
        
    }




    e.preventDefault();
}

//remove from local storage

function removeTaskFromLocalStorage(taskItem){
    console.log(taskItem);
}


function clearalltask(e){

    //first option
    // tasklist.innerHTML= '';

    //second method
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
}

function filtertasks(e) {

    const text = e.target.value.toLowerCase() ;

    document.querySelectorAll('.collection-item').forEach(function(Task)
    
        {
        
        
            const item = Task.firstChild.textContent;

            if(item.toLowerCase().indexOf(text) != -1){

                Task.style.display = 'block';



            }else{

                Task.style.display = 'none';

            }


        }
    );

    }