// Stworzyć funkcję, która przyjmuje jako argumenty 2 tablice, połączy je w jedną tablicę,
// wyrzuci z niej duplikaty i posortuje od najmniejszej do największej. Np przy takich
// tablicach [1,3,2] [2,3,12] wynikiem ma być [1,2,3,12]

let a = [1, 3, 2];
let b = [2, 3, 12];

function outcome(a, b) {
  let c = a.concat(b); //Łączenie dwóch tablic.
  let set = new Set(c); //Tworzy obiekt Set.
  let arrayJoined = [...set]; //Tworzy złączoną tablicę.
  let sort = arrayJoined.sort(function (a, b) {
    return a - b;
  }); //Funkcja sort która sortuje numery od największej do najmniejszej wartości.
  console.log(sort);
}

console.log(outcome(a, b));
