
//-----------------------------------------
//id counter for all items in the library
let b = 0;
//container
let container = document.getElementById('books-display-id');
//constructor function for writing a new object
function Book(title, author, numPages, read, id) {
  //instance variables
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.id = id
}
//function that determines if book has been read
Book.prototype.hasRead = function () {
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
Book.prototype.info = function () {
  //declare varibale with all information of book
  let info = `${this.title} by ${this.author}, ${this.numPages} pages, ${this.hasRead(this.read)}, ID: ${this.id} `;
  return info; //return variable
}

//library array with 3 default values
let myLibrary = [];
// const book1 = new Book("Cat and the hat", "Dr.Suess", 50, true, b++);
// const book2 = new Book("Dark Souls", "FromSoft", 300, false, b++);
// const book3 = new Book("Portal 2", "Valve", 1000, true, b++);
// myLibrary.push(book1);
// myLibrary.push(book2);
// myLibrary.push(book3);
// console.log(myLibrary);

//document selectors
let info = document.forms[0]; //select the form
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

//function to clear the form after submitting the data
function clearForm() {
  //selects the reset button and clicks it after submission
  document.getElementById('clearData').click();
}

//function to add book to libray
function addBookToLibrary(book, library) {
  //increment the book id by one 
  book.id = b++;
  //add the book to the library
  library.push(book);
  //store the result inside varibale and return
  let result = `${book.info()} was added to library`
  return result
}

//function to clear all HTML elements in order to display previous books
//and new book that was added
function clearBeforeAdding(parent) {
  while (parent.firstChild) { //while the parent has child elements
    parent.removeChild(parent.firstChild); //remove them
  }
}

//function for submiting the form
function submitForm() {
  //if the libray is empty when submitting make the array empty
  if(myLibrary.length === 0) {
    myLibrary = [];
    b = 0;
  }
  //store book information inside var bookInformation
  let bookInformation = grabInfoFromForm(info);
  //create a new Book object utilizng data collected in previous var
  const book = new Book(bookInformation.title, bookInformation.author, 
  bookInformation.numPages, bookInformation.read);
  //add book and log it to the console
  console.log(addBookToLibrary(book, myLibrary));
  // console.log('myLibrary', myLibrary)
  //remove children before adding new children
  let container = document.getElementById('books-display-id');
  clearBeforeAdding(container);
  //display the library after adding new book
  displayArray(myLibrary);
  //function to clear form
  clearForm();
  // console.log('myLibrary.length', myLibrary.length)
  return 1;
}



//function that takes a libray array and adds them to the screen
function displayArray(library) {
  // console.log('container', container)

  library.map((book) => {
    //create book element div to store information inside
    const bookElement = document.createElement('div');
    bookElement.classList.add('bookItem');
    //create a book element text div to store text inside
    const bookElementText = document.createElement('div');
    bookElementText.classList.add('bookItem-text')
    //append book text element to book element
    bookElement.appendChild(bookElementText);
    //create delete button
    const deleteButton = document.createElement('p');
    deleteButton.innerText = "X";
    deleteButton.setAttribute("id", "button-delete");
    deleteButton.addEventListener('click', () => {
      deleteBook(book.id, library);
    })
    bookElement.appendChild(deleteButton);
    //create the title of element 
    let title = document.createElement('h3');
    let titleText = document.createTextNode("T: " + book.title);
    title.appendChild(titleText);
    bookElementText.appendChild(title)
    //create the author element
    let author = document.createElement('h4');
    let authorText = document.createTextNode("A: " + book.author);
    author.appendChild(authorText);
    bookElementText.appendChild(author);
    //create the number of pages
    let numP = document.createElement('p');
    let numPText = document.createTextNode("NumP: " + book.numPages);
    numP.appendChild(numPText);
    bookElementText.appendChild(numP);
    //whether this book has been read or not
    const changeValue = document.createElement('div');
    changeValue.classList.add("changeValBtn");
    let bookRead = document.createElement('p');
    bookRead.innerHTML = '<span class="changeVal">O</span> '
    //add an event listener and add it to the class
    let bookReadRText = document.createTextNode(book.hasRead());
    bookRead.appendChild(bookReadRText);
    changeValue.appendChild(bookRead);
    bookElementText.appendChild(changeValue);
    //change the value inside the element that is chosen
    // console.log('changeValue', )
    //add eventlistener to the span tag
      (changeValue.children)[0].children[0].addEventListener('click', (event)=> {
        // console.log('first', first)
        console.log('book.id', book.id)
        readValue(book.id, library );
      })
    container.appendChild(bookElement);
  })
}


displayArray(myLibrary);
//delete the book and return new array
let deleteBook = (bookId, library) => {
  const newLibrary = library.filter((book) => bookId !== book.id);
  const found = library.filter((book) => bookId === book.id);
  console.log('deleting book: ', found[0]);
  console.log('newLibrary', newLibrary)
  clearBeforeAdding(container);
  library = newLibrary;
  myLibrary = newLibrary;
  displayArray(library);
}

//change the value of the book from read
let readValue = (bookId, library) => {
  const book = library.find(book => bookId === book.id);
  console.log(`Changing the value of read for book: ${book.title} with id: ${book.id}`);
  console.log('library is currently:', library);
  const readValue = book.read ? false : true;
  const newBook = new Book(book.title, book.author, book.numPages, readValue, book.id)
  const index = library.findIndex(book => book.id === bookId);
  library[index] = newBook;
  console.log('library', library)
  clearBeforeAdding(container);
  displayArray(library);
}



