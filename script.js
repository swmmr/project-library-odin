const myLibrary = [
    {
      author: "J.K. Rowling",
      title: "Harry Potter and the Sorcerer's Stone",
      pages: 309,
      read: true,
      genre: "Fantasy",
    },
    {
      author: "George Orwell",
      title: "1984",
      pages: 328,
      read: true,
      genre: "Dystopian",
    },
    {
      author: "J.R.R. Tolkien",
      title: "The Hobbit",
      pages: 310,
      read: false,
      genre: "Fantasy",
    },
  
    {
      author: "Harper Lee",
      title: "To Kill a Mockingbird",
      pages: 281,
      read: true,
      genre: "Classic",
    },
    {
      author: "F. Scott Fitzgerald",
      title: "The Great Gatsby",
  
      pages: 180,
      read: true,
      genre: "Classic",
    },
    {
      author: "Jane Austen",
      title: "Pride and Prejudice",
      pages: 279,
      read: false,
      genre: "Romance",
    },
    {
      author: "Ray Bradbury",
      title: "Fahrenheit 451",
      pages: 158,
      read: true,
  
      genre: "Dystopian",
    },
    {
      author: "Mary Shelley",
      title: "Frankenstein",
      pages: 280,
      read: false,
      genre: "Horror",
    }
  ];

function Book(author, title, pages, read, genre) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.genre = genre;
}

function addBookToLibrary(event) {
  event.preventDefault();

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("#read");
  const genre = document.querySelector("#genre");

  const book = new Book(
    author.value,
    title.value,
    pages.value,
    read.value,
    genre.value,
  );

  myLibrary.push(book);
  document.getElementById('form-input').reset();
  displayBooks();   
}

function displayBooks() {
  const libraryContainer = document.getElementById('libraryContainer');
  libraryContainer.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    
    bookCard.innerHTML =
      `<h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? "Yes" : "No"}</p>
      <p>Genre: ${book.genre}</p>`;

    if (book.read != false) {
      bookCard.classList.add("read");
      bookCard.classList.remove("unread");
    }
    else {
      bookCard.classList.add("unread");
      bookCard.classList.remove("read");
    }

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeBook(index);
    bookCard.appendChild(removeButton);

    const readButton = document.createElement('button');
    readButton.textContent = "Read?";
    readButton.onclick = () => readBook(index);
    bookCard.appendChild(readButton);
    
    libraryContainer.appendChild(bookCard);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1); 
  displayBooks();
}

function readBook(index) {
  if (myLibrary[index].read == false) {
    myLibrary[index].read = true;
  }
  else {
    myLibrary[index].read = false;
  }
  displayBooks();
}

document.getElementById('form-input').addEventListener('submit', addBookToLibrary);

displayBooks();