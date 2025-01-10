const data = [
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
    hasMovieAdaptation: true,
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

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring
const book = getBook(3);
// const title = book.title;
// const author = book.author;

//Use curly brackets for the object destructuring
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

//rest operator ... takes all the other array values that haven't been destructured (it is an array even after rest). You can put rest operator value at the end.
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(title, author, genres);
console.log(primaryGenre, secondaryGenre, otherGenres);

//spread operator - take all the values from the array and separates them as individual values aka spreads them.
const newGenres = [...genres, "epic fantasy"];

//spread on objects
const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 1201,
};

//arrow function
const getYear = (str) => str.split("-")[0];

//template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}`;

//ternary operators -- condition ? true : false
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;

//short circuiting & logical operators -- for &&, if first val is false, it returns and doesnt check the second value.
//falsy value - 0, '', null, undefined
console.log(true && "some string");
console.log(false && "some string");
console.log("first string" && "second string");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";

//Nullish coalescing operator (??) -- returns right-hand side operand when its left-hand side operand is null or undefined (NOT WHEN 0 or EMPTY STRING)
const count = book.reviews.librarything.reviewsCount ?? "no data";

function getTotalReviewCount(book) {
  const goodRead = book.reviews.goodreads.reviewsCount;
  //optional chaining - something.anything?.value -- it only checks for the value if something.anything exists (not null or undefined)
  //book?.pages?.contents - checks for book first, then pages,then contents, if book or pages isn't valid, then contents won't be checked too
  const libraryAnything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodRead + libraryAnything;
}

console.log(getTotalReviewCount(book));
