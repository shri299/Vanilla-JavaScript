// EVENT BUBBLING: from children to parent

    // document.querySelector('.card-title').addEventListener('click', function(){
    //   console.log('card title');
    // });

    // document.querySelector('.card-content').addEventListener('click', function(){
    //   console.log('card content');
    // });

    // document.querySelector('.card').addEventListener('click', function(){
    //   console.log('card');
    // });

    // document.querySelector('.col').addEventListener('click', function(){
    //   console.log('col');
    // });
    //even when we will only click on card-title all the rest three(which are parents of card-title) will be called

// EVENT DELGATION: from parent to children


    //out delegation
    
        // const delItem = document.querySelector('.delete-item');

        // delItem.addEventListener('click', deleteItem);

    document.body.addEventListener('click', deleteItem);

    function deleteItem(e){
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //   console.log('delete item');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
    }