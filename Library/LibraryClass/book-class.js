//create a book class
class Book {

    //constructor
    constructor(title, author, numPages, read, id){
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
        this.id = id
    }

    //function that determines if book has been read
    hasRead = () => {
        //declare default varibale not read
        let val = "not read yet"
        //if book has been read return read
        if (this.read === true) {
            val = "has been read";
            return val;
        }
        //else return not read
        return val;
    }

    //function to print out all data from the book
    info = () => {
        //declare varibale with all information of book
        let info = `${this.title} by ${this.author}, ${this.numPages} pages, ${this.hasRead(this.read)}, ID: ${this.id} `;
        return info; //return variable
    }
}
//create a libray class
class Library {

    constructor(bookShelf, bookCount){
        this.bookShelf = bookShelf;
        this.bookCount = bookCount;
    }

    addBook = (book) => {
        this.bookShelf.push(book);
        book.id = this.bookCount++;
    }

    removeBook = (bookId) => {
        const newBookShelf = this.bookShelf.filter((book) => bookId !== book.id);
        this.bookShelf = newBookShelf;
    }

    changeReadStatus = (bookId) => {
        const book = this.bookShelf.find(book => bookId === book.id);
        console.log('book', book)
        const readValue = book.read ? false : true;
        const newBook = new Book(book.title, book.author, book.numPages, readValue, book.id);
        console.log('book after change', newBook)
        //new Book(...book, readValue);
        const index = this.bookShelf.findIndex(book => book.id === bookId);
        this.bookShelf[index] = newBook;
        console.log('bookShelf after changed value', this.bookShelf)
    } 

    displayLibrary = () => {
        let container = document.getElementById('books-display-id');
        
        let displayBookShelf = this.bookShelf.map((book) => {
            return `<div class="bookItem"><div class="bookItem-text"><h3>Title: ${book.title}</h3><h3>Author: ${book.author}</h3><h3>Number of Pages: ${book.numPages}</h3><div class="changeValBtn"><h3><span class="changeVal" onclick="changeClicked(${book.id})">O</span> ${book.hasRead()}</h3></div></div><p id="button-delete" onclick="deleteClicked(${book.id})">X</p></div>`
        })
        displayBookShelf = displayBookShelf.join('')
        container.innerHTML = displayBookShelf;
    }
}

//function to clear the form after submitting the data
function clearForm() {
    //selects the reset button and clicks it after submission
    document.getElementById('clearData').click();
}

function deleteClicked(bookId){
    // console.log('bookId', bookId)
    emmanuelLibrary.removeBook(bookId);
    emmanuelLibrary.displayLibrary();
}

function changeClicked(bookId) {
    // console.log('bookId', bookId)
    emmanuelLibrary.changeReadStatus(bookId);
    emmanuelLibrary.displayLibrary();
}

//function to grab all info form form
function grabInfoFromForm(form) {
    //utilize querySelectors to grab values from each field in formr
    let data = {
        title: form.querySelector('[name="book_title"]').value,
        author: form.querySelector('[name="book_author"]').value,
        numPages: form.querySelector('[name="book_numPages"]').value,
        read: form.querySelector('[name="bookRead"]').checked
    }
    return data;
}

const addListener = (() => {
    const button = document.querySelector('#bookFormButton');
    button.addEventListener('click', ()=> {
        console.log('emmanuelLibrary', emmanuelLibrary)
        submitForm(emmanuelLibrary);
    })
})()

//function for submitting the form
function submitForm(library) {
    console.log('library inside', library.bookShelf.length)
    //select the form
    let info = document.forms[0];
    // //check if library is empty
    if(library.bookShelf.length === 0){
        library.bookShelf = []
        library.bookCount = 0;
    }
    let book = grabInfoFromForm(info);

    //create new book object
    //id is zero as addBook will update value
    const newBook = new Book(book.title, book.author, book.numPages, book.read, 0);
    library.addBook(newBook);
    library.displayLibrary();
    clearForm();
}

const book1 = new Book("Cat and the hat", "Dr.Suess", 50, true, 0);
const book2 = new Book("Dark Souls", "FromSoft", 300, false, 0);
const book3 = new Book("Portal 2", "Valve", 1000, true, 0);

let emmanuelLibrary = new Library([], 0);

emmanuelLibrary.addBook(book1);
emmanuelLibrary.addBook(book2);
emmanuelLibrary.addBook(book3);
emmanuelLibrary.displayLibrary();



