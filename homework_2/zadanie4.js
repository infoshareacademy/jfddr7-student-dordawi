// Stworzyć funkcję, która przyjmuje jako argument tablicę obiektów i zwróci ją posortowaną po wartości libraryId.

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

function sortByID(a, b) {
  return a.libraryID - b.libraryID;
} //Funkcja przypina się do klucza libraryID.

library.sort(sortByID); //Metoda sort() ustawia rosnąco (funkcja pomocnicza) obiekty w tablicy library sortując je po ID.
console.log(library);
