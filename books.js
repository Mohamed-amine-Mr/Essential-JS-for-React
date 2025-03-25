/* ============================================
                 BOOK DATA SET
   Comprehensive collection of book objects with:
   - Basic info (title, author, pages)
   - Publication details
   - Genre classifications
   - Translation availability
   - Review scores from multiple sources
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
            EXERCISE 1: DESTRUCTURING
   Learn to extract specific properties from objects
============================================ */

// Helper functions to access book data

function getBooks() {
  return data;
}

// PRO TIP: find() vs filter()
// - find() returns first match (single object)
// - filter() returns all matches (array)
function getBook(id) {
  return books.find((book) => book.id === id);
}
const books = getBooks();
const book = getBook(3);

// Object destructuring pattern:
// Extract multiple properties in one line
const { title, author, genres, pages, publicationDate, hasMovieAdaptation } = book;

/* PRACTICE: Try destructuring these:
1. Extract just 'translations' and 'reviews'
2. Rename 'title' to 'bookTitle' during destructuring
*/

/* ============================================
            EXERCISE 2: ARRAY DESTRUCTURING
   Access array elements by position, not name
============================================ */

// Array destructuring (position-based)
const [firstGenre, secondGenre, ...otherGenres] = genres;
console.log(firstGenre, secondGenre, otherGenres);

/* PRACTICE:
1. Extract the first genre and collect the rest
2. Skip the first genre and get the next two
*/

/* ============================================
            EXERCISE 3: REST/SPREAD
   Modern ways to work with arrays and objects
============================================ */


// REST operator collects remaining elements
const [first, second, ...rest] = genres;

// SPREAD operator examples:
const newGenres = [...genres, "epic fantasy"];
const badGenres = [genres, "epic fantasy"]; // Incorrect nesting

// Object spreading for updates
const updateBook = {
  ...book,
  moviePublicationDate: "2003-10-25",
  pages: 12,
};
/* PRACTICE:
1. Create a new book object with updated author
2. Add two new genres while keeping existing ones
*/

/* ============================================
            EXERCISE 4: TEMPLATE LITERALS
   Modern string formatting with embedded expressions
============================================ */


const getYear = (str) => str.split("-")[0];
const summary = `${title}, a ${pages}-page long book, was written by ${author} in ${getYear(publicationDate)}`;

/* PRACTICE:
1. Create a string showing all genres separated by commas
2. Make a summary that changes based on hasMovieAdaptation
*/

/* ============================================
            EXERCISE 5: TERNARY OPERATOR
   Compact conditional expressions
============================================ */


const pagesRange = updatedBook.pages > 1000 ? "over a 1000" : "less than 1000";

/* PRACTICE:
1. Create a ternary that checks hasMovieAdaptation
2. Nest two ternaries to check pages and reviews
*/

/* ============================================
            EXERCISE 6: LOGICAL OPERATORS
   Advanced truthy/falsy patterns
============================================ */


// AND (&&) - returns first falsy or last truthy
console.log(hasMovieAdaptation && "This book has a movie");

// OR (||) - returns first truthy or last operand
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";

// Nullish coalescing (??) - only for null/undefined
const reviewsCount = book.reviews.librarything?.reviewsCount ?? 0;

/* PRACTICE:
1. Use || to provide a default rating
2. Use ?? to handle possible missing reviews
*/

// ======================
// 6. SHORT-CIRCUITING OPERATORS
// ======================

// AND (&&) operator
console.log(hasMovieAdaptation && "This book has a movie");

// OR (||) operator
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";

// Nullish coalescing (??) operator
const reviewsCount = book.reviews.librarything?.reviewsCount ?? 0;

/* PRACTICE:
1. Use || to provide a default rating
2. Use ?? to handle possible missing reviews
*/

/* ============================================
            EXERCISE 7: OPTIONAL CHAINING
   Safe navigation through nested objects
============================================ */

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

/* PRACTICE:
1. Safely access a nested translation that might not exist
2. Provide defaults for missing review data
*/

/* ============================================
            EXERCISE 8: ARRAY METHODS
   Essential data transformations
============================================ */

// MAP - transform each element
const titles = books.map((book) => book.title);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCountTotal: getTotalReviewCount(book),
}));
/* PRACTICE:
1. Map books to just title and author
2. Filter books with movie adaptations
3. Calculate average page count
*/

// ======================
// 9. ARRAY FILTER METHOD
// ======================

const longBooks = books
  .filter((book) => book.pages > 800)
  .map((book) => book.title);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

// ======================
// 10. ARRAY REDUCE METHOD
// ======================

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);

// ======================
// 11. ARRAY SORT METHOD
// ======================

// Sorting numbers
const arr = [66, -1, 9, 99];
const sorted = arr.slice().sort((a, b) => a - b);

// Sorting books by pages
const sortByPages = books.slice().sort((a, b) => a.pages - b.pages);

/* ============================================
            EXERCISE 9: IMMUTABLE ARRAYS
   Update arrays without mutation
============================================ */


// 1. ADDING A NEW BOOK TO THE ARRAY (IMMUTABLY)
// ---------------------------------------------
// To add to an array immutably, we use the spread operator to create a new array
// containing all existing books plus our new book at the end
const newBook = {
  id: 6,
  title: "Harry Potter",
  author: "J. K. Rowling", // Fixed typo in author name
};
const booksAfterAdd = [...data, newBook]; // Creates new array with added book
booksAfterAdd; // Original array remains unchanged

// 2. DELETING A BOOK FROM THE ARRAY (IMMUTABLY)
// ---------------------------------------------
// To delete immutably, we filter out the book we want to remove
// filter() returns a new array with all elements that pass the test (where id is not 6)
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 6);
booksAfterDelete; // Returns array without the book we just added

// 3. UPDATING A BOOK IN THE ARRAY (IMMUTABLY)
// -------------------------------------------
// To update immutably, we map over the array and return:
// - A new object with updates for the matching book (id === 1)
// - The original book for all others
// This maintains the same array length while updating specific elements
const booksAfterUpdate = booksAfterDelete.map(
  (book) => (book.id === 1 ? { ...book, title: "hi" } : book) // Only updates book with id 1
);

booksAfterUpdate; // Returns array with updated book title

// KEY IMMUTABILITY PRINCIPLES DEMONSTRATED:
// 1. Never modify original array directly - always return new arrays
// 2. Use spread operator (...) for adding elements
// 3. Use filter() for removing elements
// 4. Use map() for updating elements
// 5. When updating objects in array, use spread to copy existing properties


// ======================
// PROMISES & FETCH API
// ======================

// The fetch() function makes an HTTP request to the URL
// This operation takes time because:
// 1. The request needs to reach the server
// 2. The server needs to process it
// 3. The response data needs to download
fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
  res
    // First .then() receives the response when the HTTP request completes
    // The response body contains JSON data that needs to be converted
    .json()

    // json() also returns a Promise because:
    // - Parsing JSON takes time (asynchronous)
    // - The data might be large and take time to process
    // So we need another .then() to get the final JavaScript data

    // This second .then() receives the parsed JavaScript object
    .then((data) => console.log(data))
);

// This console.log executes immediately because:
// - fetch() works asynchronously in the background
// - JavaScript doesn't wait for fetch to finish
// - The rest of your code continues running
console.log("HEllo world");


// ======================
//Asynchronous JavaScript: Async/Await
// ======================

/* 
Using async/await is cleaner than .then() chains
Important: Async functions always return a Promise, not the direct value
*/
async function getTodos() {
  // await pauses execution here until the fetch completes
  // Unlike regular synchronous code that would move to next line immediately
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  
  // await again pauses until the JSON parsing completes
  const data = await res.json();
  
  return data; // Returns the data INSIDE the Promise
}

const todos = getTodos(); 
// This logs a Promise because:
// 1. Async functions always wrap returns in Promises
// 2. We didn't await the function call here
console.log(todos); // Shows Promise {...}

/*
In React, we typically don't need to extract the value like this:
- We'd usually update state directly inside the async function
- We rarely return data from async functions in components
- State updates trigger re-renders automatically
*/




