//! ___________________________________UI Elements_____________________________//
const table = document.querySelector("table");
const firstBookButton = document.querySelector(".first-book-btn");
const addBookButton = document.querySelector(".add-book-btn");
const tableBody = document.querySelector("tbody");

//! ___________________________________State_____________________________//
const myBooks = [];

//! ___________________________________Functions_____________________________//

function switchLibraryUi() {
  if (myBooks.length <= 0) {
    table.classList.add("hidden");
    firstBookButton.classList.remove("hidden");
  } else {
    table.classList.remove("hidden");
    firstBookButton.classList.add("hidden");
  }
}

//constructor function
function Book(title, author, status) {
  if (!new.target) {
    throw Error("Must use new keyword to create a new book");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.status = status;
}

function clearFormUi() {
  document.querySelector("form").reset();
}

function captureFormInput() {
  const bookTItle = document
    .querySelector("#book-title")
    .value.trim()
    .toLowerCase();
  const bookAuthor = document
    .querySelector("#book-author")
    .value.trim()
    .toLowerCase();
  const bookStatus = document
    .querySelector("#book-status")
    .value.trim()
    .toLowerCase();
  if (bookTItle === "" || bookAuthor === "") {
    document.querySelector("#book-title").classList.add("invalid");
    document.querySelector("#book-author").classList.add("invalid");
    return;
  } else {
    document.querySelector("#book-title").classList.remove("invalid");
    document.querySelector("#book-author").classList.remove("invalid");
    const newBook = new Book(bookTItle, bookAuthor, bookStatus);
    myBooks.push(newBook);
    switchLibraryUi();
    clearFormUi();
    displayBooks(newBook.title, newBook.author, newBook.status, newBook.id);
  }
}

function displayBooks() {
  tableBody.innerHTML = "";
  myBooks.forEach((book) => {
    const bookRow = document.createElement("tr");
    bookRow.innerHTML = `<td>${book.title}</td>
                  <td>${book.author}</td>
                  <td><span class="book-status-cell">${book.status.toUpperCase()}</span></td>
                  <td><button type="button" value="deleteBtn" data-id=${
                    book.id
                  } class="delete-btn">Delete</button></td>`;
    tableBody.appendChild(bookRow);
  });
}

function deleteBook(id) {
  const bookToDelete = myBooks.findIndex((book) => book.id === id);
  myBooks.splice(bookToDelete, 1);
}

//! ___________________________________Event Listeners_____________________________//
window.onload = switchLibraryUi;

addBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  captureFormInput();
});

firstBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  captureFormInput();
});

tableBody.addEventListener("click", (e) => {
  if (e.target.value === "deleteBtn") {
    deleteBook(e.target.dataset.id);
    displayBooks();
    switchLibraryUi();
  }
});
