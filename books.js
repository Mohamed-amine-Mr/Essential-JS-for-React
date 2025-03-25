// ======================
// 1. DESTRUCTURING OBJECTS
// ======================

function getBooks() {
  return data;
}
function getBook(id) {
  return books.find((book) => book.id === id);
}
const books = getBooks();
const book = getBook(3);

// Object destructuring
const { title, author, genres, pages, publicationDate, hasMovieAdaptation } = book;

// ======================
// 2. DESTRUCTURING ARRAYS
// ======================

// Array destructuring (position-based)
const [firstGenre, secondGenre, ...otherGenres] = genres;
console.log(firstGenre, secondGenre, otherGenres);

// ======================
// 3. REST/SPREAD OPERATORS
// ======================

// REST operator (gather remaining elements)
const [first, second, ...rest] = genres;

// SPREAD operator for arrays
const newGenres = [...genres, "epic fantasy"];

// SPREAD operator for objects
const updatedBook = {
  ...book,
  moviePublicationDate: "2003-10-25",
  pages: 12
};

// ======================
// 4. TEMPLATE LITERALS
// ======================

const getYear = (str) => str.split("-")[0];
const summary = `${title}, a ${pages}-page long book, was written by ${author} in ${getYear(publicationDate)}`;

// ======================
// 5. TERNARY OPERATOR
// ======================

const pagesRange = updatedBook.pages > 1000 ? "over a 1000" : "less than 1000";

// ======================
// 6. SHORT-CIRCUITING OPERATORS
// ======================

// AND (&&) operator
console.log(hasMovieAdaptation && "This book has a movie");

// OR (||) operator
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";

// Nullish coalescing (??) operator
const reviewsCount = book.reviews.librarything?.reviewsCount ?? 0;

// ======================
// 7. OPTIONAL CHAINING
// ======================

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

// ======================
// 8. ARRAY MAP METHOD
// ======================

const titles = books.map((book) => book.title);
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCountTotal: getTotalReviewCount(book),
}));

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

// ======================
// WORKING WITH IMMUTABLE ARRAYS
// ======================

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


