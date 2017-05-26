import delay from './delay';

const books = [
  {
    id: "the-hobbit",
    title: "The Hobbit",
    image: "https://images.gr-assets.com/books/1372847500l/5907.jpg",
    authorId: "jrr-tolkein",
    rating: 5,
    category: "Adventure"
  },
  {
    id: "the-lord-of-the-rings",
    title: "The Lord of the Rings",
    image: "https://images.gr-assets.com/books/1411114164l/33.jpg",
    authorId: "jrr-tolkein",
    rating: 5,
    category: "Adventure"
  },
  {
    id: "inferno",
    title: "Inferno",
    image: "https://images.gr-assets.com/books/1397093185l/17212231.jpg",
    authorId: "dan-brown",
    rating: 4,
    category: "Mystery"
  },
  {
    id: "the-lost-symbol",
    title: "The Lost Symbol",
    image: "https://images.gr-assets.com/books/1358274396l/6411961.jpg",
    authorId: "dan-brown",
    rating: 4,
    category: "Mystery"
  },
  {
    id: "harry-potter-and-the-deathly-hallows",
    title: "Harry Potter and the Deathly Hallows",
    image: "https://images.gr-assets.com/books/1474171184l/136251.jpg",
    authorId: "jk-rowling",
    rating: 5,
    category: "Fantasy"
  },
  {
    id: "the-secret",
    title: "The Secret",
    image: "https://images.gr-assets.com/books/1482865039l/52529.jpg",
    authorId: "rhonda-byrne",
    rating: 4,
    category: "Motivational"
  },
  {
    id: "artemis-fowl",
    title: "Artemis Fowl",
    image: "https://images.gr-assets.com/books/1327945104l/249747.jpg",
    authorId: "eoin-colfer",
    rating: 4,
    category: "Fantasy"
  },
  {
    id: "the-alchemist",
    title: "The Alchemist",
    image: "https://images.gr-assets.com/books/1483412266l/865.jpg",
    authorId: "paulo-coelho",
    rating: 4,
    category: "Classics"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = book => (
  replaceAll(book.title, ' ', '-')
);

class BookApi {
  static getAllBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

  static saveBook(book) {
    book = Object.assign({}, book); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minBookTitleLength = 1;
        if (book.title.length < minBookTitleLength) {
          reject(`Title must be at least ${minBookTitleLength} characters.`);
        }

        if (book.id) {
          const existingBookIndex = books.findIndex(a => a.id === book.id);
          books.splice(existingBookIndex, 1, book);
        } else {
          book.id = generateId(book);
          books.push(book);
        }

        resolve(book);
      }, delay);
    });
  }

  static deleteBook(bookId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfBookToDelete = books.findIndex(book => (
          book.id === bookId
        ));
        books.splice(indexOfBookToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BookApi;
