//event bubbling

// document.querySelector('.card-title').addEventListener('click',function () {
//     console.log('card-title');
    
// });

// document.querySelector('.card-content').addEventListener('click',function () {
//     console.log('card-content');
    
// });

// document.querySelector('.card').addEventListener('click',function () {
//     console.log('card');
    
// });

// document.querySelector('.col').addEventListener('click',function () {
//     console.log('col');
    
// });

//event delegation

//out delegation

// const delitems = document.querySelector('.delete-item');

// delitems.addEventListener('click',deleteitem);

document.body.addEventListener('click',deleteitem);

function deleteitem(e) {
    
    // if (e.target.parentElement.className==='delete-item secondary-content') {
    //     console.log("deleted");
    // }

    if (e.target.classList.contains('delete-item')) {
        // console.log("deleted");
        e.target.parentElement.remove();
    }
}