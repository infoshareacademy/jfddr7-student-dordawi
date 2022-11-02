// Stworzyć funkcję, która przyjmuje jako argument obiekt, stworzy nowy obiekt w którym zamieni klucze z wartościami
//  i zwróci ten nowo utworzony obiekt. Np dla obiektu {red: '#FF0000', green: '#00FF00', white: '#FFFFFF'} wynikiem będzie
//   obiekt: {'#FF0000': 'red', '#00FF00': 'green', '#FFFFFF': 'white'}

const obj1 = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function ex3(obj1) {
  let a = Object.keys(obj1); //Zapisuje klucze z tablicy obj1 do zmiennej a.
  let b = Object.values(obj1); //Zapisuje wartości z tablicy obj1 do zmiennej b.

  for (let i = 0; i < a.length; i++) {
    const a2 = a[i]; //Funkcja iteruje po elementach tablicy w zmiennej a, po kluczach z tablicy obj1.
    const b2 = b[i]; //Funkcja iteruje po elementach tablicy w zmiennej b,  po wartościach z tablicy obj1.
    console.log(a2, b2);
  }
  const obj2 = b2.forEach(function (i) {
    return b2 + a2;
  }); // Funkcja przypisuje do każdego elementu ze zmiennej b2, odpowiadający indeksem element ze zmiennej a2.
  console.log(obj2);
}

console.log(ex3(obj1));

//Drugie rozwiązanie, lepsze bo zachowuje się odpowiednio nawet gdyby jedna z tablic została zmieniona.
let objA = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

const ex3solution2 = function (obj) {
  let objB = Object.fromEntries(
    ///Metoda Object.fromEntries() transformuje liste  par klucz i wartość w objekt.
    Object.entries(obj).map(([key, val]) => [val, key]) //Metoda Object.entries() zwraca tablicę własnych wyliczalnych par właściwości [klucz, wartość] danego obiektu, metoda Array.map() tworzy nową tablicę i na każdym jej elemencie wywołuje funkcje, która w tym przypadku zamienia miejscami keys and values.
  );
  return objB;
};
console.log(ex3solution2(objA));
