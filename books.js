/* ============================================
                 BOOK DATA SET
   A rich collection of book objects demonstrating:
   - Complex nested data structures
   - Real-world data modeling
   - Multiple data types (strings, numbers, booleans, arrays, objects)
============================================ */
export const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 12,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

/* ============================================
            EXERCISE 1: OBJECT DESTRUCTURING
   Key Concepts:
   - Extracting multiple properties from objects
   - Clean syntax for property access
   - Practical data extraction patterns
============================================ */

// Data access helper functions
function getBooks() {
  return data;
}

// Critical Note: 
// find() returns the first matching object (or undefined)
// filter() returns an array of matches (empty if none)
function getBook(id) {
  return books.find((book) => book.id === id);
}

const books = getBooks();
const book = getBook(3); // Gets "Dune" book object

// Destructuring in action:
// Extract specific properties into variables
const { title, author, genres, pages, publicationDate, hasMovieAdaptation } = book;

/* ============================================
            EXERCISE 2: ARRAY DESTRUCTURING
   Key Concepts:
   - Position-based extraction
   - Rest pattern for remaining elements
   - Skipping elements
============================================ */

// Basic array destructuring
const [firstGenre, secondGenre, ...otherGenres] = genres;

/* ============================================
            EXERCISE 3: REST/SPREAD OPERATORS
   Key Concepts:
   - Gathering remaining elements (rest)
   - Creating new arrays/objects (spread)
   - Immutable data patterns
============================================ */

// Rest operator collects remaining genres
const [first, second, ...rest] = genres;

// Spread operator examples:
const newGenres = [...genres, "epic fantasy"]; // Correct way
const badGenres = [genres, "epic fantasy"]; // Incorrect nesting

// Object spread for updates
const updateBook = {
  ...book,
  moviePublicationDate: "2003-10-25",
  pages: 12,
};

/* ============================================
            EXERCISE 4: TEMPLATE LITERALS
   Key Concepts:
   - Embedded expressions
   - Multi-line strings
   - Clean string composition
============================================ */

// Date parsing helper
const getYear = (str) => str.split("-")[0];

// Template literal with embedded expressions
const summary = `${title}, a ${pages}-page long book, was written by ${author} in ${getYear(publicationDate)}`;

/* ============================================
            EXERCISE 5: TERNARY OPERATOR
   Key Concepts:
   - Compact conditional expressions
   - Returns values (unlike if/else)
   - Simple true/false logic
============================================ */

const pagesRange = updateBook.pages > 1000 ? "over a 1000" : "less than 1000";

/* ============================================
            EXERCISE 6: LOGICAL OPERATORS
   Key Concepts:
   - Short-circuit evaluation
   - Default values with || and ??
   - Conditional execution
============================================ */

// AND (&&) - returns first falsy or last truthy
console.log(hasMovieAdaptation && "This book has a movie");

// OR (||) - returns first truthy or last operand
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";

// Nullish coalescing (??) - only for null/undefined
const reviewsCount = book.reviews.librarything?.reviewsCount ?? 0;

/* ============================================
            EXERCISE 7: OPTIONAL CHAINING
   Key Concepts:
   - Safe property access
   - Avoiding TypeError on undefined
   - Clean nested object access
============================================ */

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

/* ============================================
            EXERCISE 8: ARRAY METHODS
   Key Concepts:
   - Transforming data (map)
   - Filtering collections (filter)
   - Aggregating values (reduce)
   - Sorting with immutability (slice + sort)
============================================ */

// Map - transform array elements
const titles = books.map((book) => book.title);

// Filter + Map chaining
const longBooks = books
  .filter((book) => book.pages > 800)
  .map((book) => book.title);

// Reduce - calculate total pages
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);

// Sort - immutable approach
const sortByPages = books.slice().sort((a, b) => a.pages - b.pages);

/* ============================================
            EXERCISE 9: IMMUTABLE ARRAYS
   Key Concepts:
   - Adding elements (spread)
   - Removing elements (filter)
   - Updating elements (map)
   - Preserving original array
============================================ */

// Adding - spread operator
const newBook = {
  id: 6,
  title: "Harry Potter",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...data, newBook];

// Deleting - filter
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 6);

// Updating - map
const booksAfterUpdate = booksAfterDelete.map(
  (book) => (book.id === 1 ? { ...book, title: "hi" } : book)
);

/* ============================================
            EXERCISE 10: PROMISES & FETCH
   Key Concepts:
   - Asynchronous operations
   - Promise chaining
   - Response handling
============================================ */

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("HEllo world"); // Executes immediately

/* ============================================
            EXERCISE 11: ASYNC/AWAIT
   Key Concepts:
   - Sequential async code
   - Error handling
   - Promise resolution
============================================ */

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

const todos = getTodos();
console.log(todos); // Promise object
