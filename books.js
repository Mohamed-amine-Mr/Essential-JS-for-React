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
    pages: 295,
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
const books = getBooks();

function getBook(id) {
  return books.find((book) => book.id === id);
}
const book = getBook(1);

// Initially, I was using the filter method, which returns an array, but I needed a single book object.
// Therefore, I switched to the find method, which returns the first matching element as an object.

const { title, author, genres } = book;

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
console.log(updateBook);
// The spread operator is used to create a new object with all properties of the book object
// Then, it adds a new property 'moviePublicationDate' and overwrites the existing 'pages' property
