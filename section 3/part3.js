//they all are single element selector


// document.getElementById()

    // console.log(document.getElementById('task-title'));

    // // Get things from the element
    // console.log(document.getElementById('task-title').id); //you get the id name as output
    // console.log(document.getElementById('task-title').className); //to get the classname although it does not has one in this example

    // const taskTitle = document.getElementById('task-title');

// // Change styling
    // document.getElementById('taskTitle').style.background = '#333';
    // document.getElementById('taskTitle').style.color = '#fff';
    // document.getElementById('taskTitle').style.padding = '5px';
    // // document.getElementById('taskTitle').style.display = 'none';// to disappear something completely

// // Change content
    // document.getElementById('taskTitle').textContent = 'Task List';
    // taskTitle.innerText = 'My Tasks';
    // taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

    console.log(document.querySelector('#task-title'));
    console.log(document.querySelector('.card-title'));
    console.log(document.querySelector('h5'));

    document.querySelector('li').style.color = 'red';
    document.querySelector('ul li').style.color = 'blue';

    document.querySelector('li:last-child').style.color = 'red';
    document.querySelector('li:nth-child(3)').style.color = 'yellow';
    document.querySelector('li:nth-child(4)').textContent = 'Hello World';
    document.querySelector('li:nth-child(odd)').style.background = '#ccc';
    document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';




