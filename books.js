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

// Exercise 1: Find a book by its ID and destructure its title, author, and genres properties.

function getBooks() {
  return data;
}
function getBook(id) {
  return books.find((book) => book.id === id);
}
const books = getBooks();
const book = getBook(3);
// Initially, I was using the filter method, which returns an array, but I needed a single book object.
// Therefore, I switched to the find method, which returns the first matching element as an object.

const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  book;

// End of Exercise 1

// Exercise 2: Destructuring with Arrays - rely on the order instead of the property name

// Destructuring with Arrays: We rely on the order of elements, not on the property names

// Hard way of accessing array elements
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// Using array destructuring to access elements by their order
// const [first, second] = genres;
// console.log(second);

// Exercise 3: REST and SPREAD Operators - use them on arrays and objects

// REST Operator: Always should be at the end
// It creates an array containing the values that were not previously destructured
const [first, second, ...otherGenres] = genres;
console.log(first, second, otherGenres);
// 'first' will be the first element of the genres array
// 'second' will be the second element of the genres array
// 'otherGenres' will be an array containing all the remaining elements of the genres array

// SPREAD Operator: Create a new array with all genres and a new one at the end

// Incorrect way: newGenres will have 'epic fantasy' outside the array
const newGenres = [genres, "epic fantasy"];
newGenres; // Array(6) ['fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature'], 'epic fantasy'
// This creates an array with the genres array as the first element and 'epic fantasy' as the second element

// Correct way: Use SPREAD to include 'epic fantasy' inside the array
const newGenre = [...genres, "epic fantasy"];
newGenre; // Array(7) ['fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature', 'epic fantasy']
// This creates a new array with all elements of the genres array and adds 'epic fantasy' as the last element

const updateBook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2003-10-25",
  // Overwriting an existing property
  pages: 12,
};
// console.log(updateBook);
// The spread operator is used to create a new object with all properties of the book object
// Then, it adds a new property 'moviePublicationDate' and overwrites the existing 'pages' property

// Template literals: We can write any JavaScript expression inside ${}, not statements
// Template literals allow for easier string interpolation and multi-line strings

const getYear = (str) => str.split("-")[0];
const summary = `${title}, a ${pages}-page long book, was written by ${author} in ${getYear(
  publicationDate
)} `;
summary;
// 'summary' will be a string that includes the book's title, number of pages, author, and publication year
// The publication year is extracted by splitting the publicationDate string and taking the first part (year)

// Ternary Operator: A shorthand for if/else statements that returns a value based on a condition
// we can use if statment in this case m thats why ternaries in useful , because if else  return statment but ternaire .. , return expresion
// Ternaries Instead of if/else Statements
// It is useful for simple conditional expressions
const pagesRange = updateBook.pages > 1000 ? "over a 1000" : "less than 1000";
pagesRange; // 'less than 1000'
// If the 'pages' property of 'updateBook' is greater than 1000, 'pagesRange' will be "over a 1000"
// Otherwise, 'pagesRange' will be "less than 1000"

// Short-Circuiting And Logical Operators: &&, ||, ??

// The && operator returns the second operand if the first operand is truthy, otherwise it returns the first operand
console.log(true && "some string"); // "some string"
console.log(false && "some string"); // false
console.log(hasMovieAdaptation && "This book has a movie "); // "This book has a movie" if hasMovieAdaptation is true, otherwise false

// The || operator returns the first operand if it is truthy, otherwise it returns the second operand
console.log(true || "some string"); // true
console.log(undefined || "some string"); // "some string"

// Using || to provide a default value if the first operand is falsy
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED ";
spanishTranslation; // "El señor de los anillos" if it exists, otherwise "NOT TRANSLATED"

// The problem with || is that it treats 0 as falsy, which can lead to incorrect results
// console.log(book.reviews.librarything.reviewsCount); // 0
// const conteWrong = book.reviews.librarything.reviewsCount || "NO DATA";
// conteWrong; // "NO DATA" because 0 is treated as falsy

// The solution is using ?? (nullish coalescing operator)
// It only returns the second operand if the first is null or undefined
// const countRight = book.reviews.librarything.reviewsCount ?? "NO DATA";
// countRight; // 0 if reviewsCount is 0, otherwise "NO DATA" if reviewsCount is null or undefined

// Optional Chaining: Allows safe access to deeply nested properties
// It short-circuits and returns undefined if any part of the chain is null or undefined
console.log(book.reviews);

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads.reviewsCount;
  // We use optional chaining (?.) to safely access the 'reviewsCount' property of 'librarything'.
  // If 'librarything' or 'reviewsCount' does not exist, it returns undefined instead of throwing an error.
  // We then use the nullish coalescing operator (??) to provide a default value of 0 if 'reviewsCount' is undefined.
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // we want to give it 0 value if it doesn't exist
  //
  return goodreads + librarything; // Sum the review counts from goodreads and librarything
}

// map

// const books = getBooks();
// We use the map method to create a new array containing only the titles of the books.
// The callback function is applied to each book object in the 'books' array, extracting the 'title' property.
const titles = books.map((book) => book.title);
console.log(titles.length); // Log the number of titles

// We use the map method again to create a new array of objects containing essential data for each book.
// For each book object, we create a new object with 'title', 'author', and 'reviewsCountTotal' properties.
// 'reviewsCountTotal' is calculated using the 'getTotalReviewCount' function.
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCountTotal: getTotalReviewCount(book),
}));
essentialData; // The 'essentialData' array now contains simplified book objects with essential information

// Filter and includes methods

// We use the filter method to create a new array containing only the books with more than 800 pages.
// The filter method returns a new array with all elements that pass the test implemented by the provided function.
// In this case, the test is whether the 'pages' property of each book is greater than 800.
const longBooks = books
  // We can chain another array method because books.filter((book) => book.pages > 800) returns a new array.
  // We then use the map method on this new array to extract the 'title' property of each book.
  .filter((book) => book.pages > 800)
  .map((book) => book.title);
longBooks; // The 'longBooks' array now contains the titles of books with more than 800 pages

// We use the filter method again to create a new array containing only the books that belong to the 'adventure' genre.
// The includes method is used to check if the 'genres' array of each book includes the string "adventure".
// The includes method returns true or false, which we use as the condition inside the filter method.
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks; // The 'adventureBooks' array now contains the titles of books that include the 'adventure' genre

// reduce method: Used to reduce the array to a single value
// We use the reduce method to calculate the total number of pages of all books.
// The callback function takes an accumulator (sum) and the current element (book), and returns the updated sum.
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks; // The total number of pages of all books

// sort method: Used to sort the elements of an array in place and returns the sorted array
// Note: The sort method mutates the original array. To avoid this, we can use the slice method to create a copy of the array before sorting.

// Example array to demonstrate sorting
const arr = [66, -1, 9, 99];

// Using slice() to create a copy of the array before sorting
// This way, the original array remains unchanged
const sorted = arr.slice().sort((a, b) => a - b); // Sort in ascending order
sorted; // [ -1, 9, 66, 99 ]
arr; // [ 66, -1, 9, 99 ] - original array remains unchanged

// Sorting books by the number of pages in ascending order
// We use slice() to create a copy of the books array before sorting
const sortByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortByPages; // Array of books sorted by pages in ascending order
