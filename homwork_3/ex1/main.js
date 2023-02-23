// Stworzyć formularz z 3 polami (imie, nazwisko, adres) i przyciskiem Dodaj poniżej. Na naciśnięcie przycisku dane z formularza mają być zebrane i
// wyświetlone w tablicy pod formularzem (każde pole czyli osobno imie, nazwisko i adres będzie w osobnej kolumnie; czyli 3 kolumny muszą być w tablicy).

const getName = document.getElementById("name");
const getSurname = document.getElementById("surname");
const getAdress = document.getElementById("adress");
const button = document.getElementById("submitButton");
const nameOutput = document.getElementById("nameOutput");
const surnameOutput = document.getElementById("surnameOutput");
const adressOutput = document.getElementById("adressOutput");

function createComment() {
  const commentName = getName.value;
  const newNameElement = document.createElement("p");
  newNameElement.innerText = commentName;
  nameOutput.prepend(newNameElement);

  const commentSurname = getSurname.value;
  const newSurnameElement = document.createElement("p");
  newSurnameElement.innerText = commentSurname;
  surnameOutput.prepend(newSurnameElement);

  const commentAdress = getAdress.value;
  const newAdressElement = document.createElement("p");
  newAdressElement.innerText = commentAdress;
  adressOutput.prepend(newAdressElement);
}

button.addEventListener("click", createComment);
