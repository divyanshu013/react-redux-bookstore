import delay from './delay';

const authors = [
  {
    id: 'jrr-tolkein',
    firstName: 'J.R.R.',
    lastName: 'Tolkein'
  },
  {
    id: 'dan-brown',
    firstName: 'Dan',
    lastName: 'Brown'
  },
  {
    id: 'jk-rowling',
    firstName: 'J.K.',
    lastName: 'Rowling'
  },
  {
    id: 'rhonda-byrne',
    firstName: 'Rhonda',
    lastName: 'Byrne'
  },
  {
    id: 'eoin-colfer',
    firstName: 'Eoin',
    lastName: 'Colfer'
  },
  {
    id: 'paulo-coelho',
    firstName: 'Paulo',
    lastName: 'Coelho'
  }
];

const generateId = (author) => {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

class AuthorApi {
  static getAllAuthors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], authors));
      }, delay);
    });
  }

  static saveAuthor(author) {
    author = Object.assign({}, author);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 3;
        if (author.firstName.length < minAuthorNameLength) {
          reject(`First Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (author.lastName.length < minAuthorNameLength) {
          reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (author.id) {
          const existingAuthorIndex = authors.findIndex(a => a.id === author.id);
          authors.splice(existingAuthorIndex, 1, author);
        } else {
          author.id = generateId(author);
          authors.push(author);
        }

        resolve(author);
      }, delay);
    });
  }

  static deleteAuthor(authorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAuthorToDelete = authors.findIndex(author => {
          author.id === authorId;
        });
        authors.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default AuthorApi;
