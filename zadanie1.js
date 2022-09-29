// Stworzyć funkcję, która przyjmuje jako argumenty 2 tablice, połączy je w jedną tablicę,
// wyrzuci z niej duplikaty i posortuje od najmniejszej do największej. Np przy takich
// tablicach [1,3,2] [2,3,12] wynikiem ma być [1,2,3,12]

let a = [1, 3, 2];
let b = [2, 3, 12];

function outcome(a, b) {
  let c = a.concat(b); //łączenie dwóch tablic
  let set = new Set(c); //tworzy obiekt Set
  let arrayJoined = [...set]; //tworzy złączoną tablicę
  let sort = arrayJoined.sort(function (a, b) {
    return a - b;
  }); //funkcja sort która sortuje numery od największej do najmniejszej wartości
  console.log(sort);
}

console.log(outcome(a, b));
