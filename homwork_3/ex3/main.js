// Stworzyć input do wpisania imienia oraz przycisk Dodaj, który na naciśnięcie każde podane imię wrzuci do
//  local storage i następnie wyświetli obok inputa licznik imion, które już się znajdują w local storage.
//   W przypadku gdy nie ma nic w local storage to wyświetli 0.

const nameInInput = document.querySelector("input");
const button = document.querySelector("button");
const counter = document.querySelector("#counter");
let arrayNames = [];

function addingNames() {
  //funkcja która zlicza liczbę wpisanych imion i wstrzykuje ją do licznika imion
  let getName = { name: nameInInput.value }; //zmienna która ma w sobie obiekt o kluczu name i wartości klucza odpowiadającej wartości z inputa
  arrayNames.push(getName); //dodaje na koniec tablicy arrayNames (pusta tablica określona nad funkcją) obiekt getName
  document.querySelector("form").reset(); //resetuje wartość w polu input po każdym kliknieciu buttona dodaj

  localStorage.setItem("nameList", JSON.stringify(arrayNames)); //wysyła w postaci stringa tablicę arrayNames do localStorage

  let getArray = JSON.parse(localStorage.getItem("nameList")); // parsuje czyli jakby "odstringowuje" dane z local storage przechowywane pod nazwą "nameList", co w tym przypadku jest nasza tablicą arrayNames
  let getNames = getArray.filter((user) => user.name !== ""); //filtruje po zparsowanych danych z localStorage i bierze pod uwage tylko te obiekty w tablicy których wartośc klucza name nie jest równa pustemu stringowi
  let getNumberOfNames = getNames.length; //podaje długośc tablicy, czyli liczbę obiektów gdzie wartośc klucza name nie jest pusta
  counter.innerHTML = getNumberOfNames; //wstrzykuje liczbę wpisanych imion do licznika (jeśli nic nie wpiszę do inputa to wyświetla się 0)
}

button.addEventListener("click", addingNames);
