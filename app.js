let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render()
}

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for(let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `
      <div class="card-header"> 
        <h3 class="title">${book.title}</h3>
        <h5 class="author">by ${book.author}</h5>
      </div>
      <div class="card-body">
        <p>${book.pages}</p>
        <p class="isRead">${book.read ? "Read" : "Not Read"}</p>
        <button class="remove-btn" onclick="remove(${i})">Remove</button>
        <button class="toggle-read" onclick="toggleRead(${i})">Read</button>
      </div>
    `
    libraryEl.appendChild(bookEl);
  }
}

function remove(index) {
  myLibrary.splice(index, 1);
  render()
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new book(title, author, pages, read);
  myLibrary.push(newBook)
  render()
}

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
  
});

document.querySelector("#submit").addEventListener("click", function(event) {
  event.preventDefault();
  addBookToLibrary();
})