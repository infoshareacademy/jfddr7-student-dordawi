// Stworzyć funkcję, która przyjmuje jako argumenty 2 tablice i zwróci tablicę
// wartości, które są unikatowe dla jednej z podanych tablic. Np dla tablic
//  [1,2,3] i [100,2,1,10] wynikiem będzie [3,10,100]

let a = [1, 2, 3];
let b = [100, 2, 1, 10];

function ex2(a, b) {
  let c = a.filter(function (obj) {
    return b.indexOf(obj) == -1;
  }); //Funkcja zwraca do zmiennej c te wartości z tablicy a których nie ma w tablicy b.
  let d = b.filter(function (obj) {
    return a.indexOf(obj) == -1;
  }); //Funkcja zwraca do zmiennej d te wartości z tablicy b których nie ma w tablicy a.

  let joinedArray = c.concat(d); //Łączy tablice c i d.
  let sort = joinedArray.sort(function (c, d) {
    return c - d;
  }); //Sortuje rosnąco tablicę joinedArray.
  console.log(sort);
}
