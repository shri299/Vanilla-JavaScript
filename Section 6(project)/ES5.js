//book constructor

    function Book(title,author,isbn){
        this.title   = title;
        this.author = author;
        this.isbn = isbn;
    }

//UI constructor

    function UI(){}

    UI.prototype.addBookToList = function(book){
        const list = document.getElementById('book-list');
        //create tr element
        const row = document.createElement('tr');
        //insert cols
        row.innerHTML = `<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href="#" class="delete">X</a></td>`;
        list.appendChild(row);

    
    }
    UI.prototype.showAlert = function(message, className){
        //create a div
            const div = document.createElement('div');
            //add class to it
            div.className = `alert ${className}`;
            //add text
            div.appendChild(document.createTextNode(message));
            //get the parent
            const container = document.querySelector('.container');
            const form = document.getElementById('book-form');
            //append div into the parent
            container.insertBefore(div,form);
            //dissapear after 3 sec
            setTimeout(function(){
                document.querySelector('.alert').remove();
            },2000);
    }
    //delete book prototype
    UI.prototype.deleteBook = function(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    UI.prototype.clearField = function(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    };

//event listeners

document.getElementById('book-form').addEventListener('submit',function(e){
    //get form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;



        //instantiating a book
            const book = new Book(title,author,isbn);
            //console.log(book);
        //instantiate ui
            const ui = new UI();

        ///show success alert
            //validate inputs
            if(title ==='' || author === '' || isbn === '')
            {
                //alert('invalid inputs');
                ui.showAlert('please fill in all fields','error');

            }else{
                    //add book to list
                        ui.addBookToList(book);

                    //show success alert
                        ui.showAlert('book added successfully','success');

                    //clear fields after adding the book
                        ui.clearField();
                    

            }
        
    e.preventDefault();
});

//event listener for delete(by using event delegation)

document.getElementById('book-list').addEventListener('click',function(e){
    //instantiate ui
    const ui = new UI();

    ui.deleteBook(e.target);

    //show alert
    ui.showAlert('row deleted successfully','success');
    
    e.preventDefault();
})