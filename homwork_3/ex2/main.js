// Pobrać listę komentarzy z endpointa https://dummyjson.com/posts requestem GET i wyświetlić w formie listy.
// Każdy pojedynczy komentarz ma wyglądać następująco: pola `id` i `title` mają wyświetlać się na górze elementu
//  i pole `body` pod nimi

const commentsList = document.getElementById("comments");

function fetchComments() {
  fetch("https://dummyjson.com/posts", {
    method: "GET",
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const comments = json?.posts || [];
      comments.forEach((post) => {
        const commentElement = document.createElement("p");
        commentElement.innerHTML = `<div class="postHeaderStyle"> ${post.id} - ${post.title}</div> <div class="bodyStyle"> ${post.body}</div>`;
        commentsList.append(commentElement);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchComments();

// -------------------------ex4------------------
// (Zadanie dodatkowe) Stworzyć input do wpisania id (wg id komentarzy wyświetlanych z zadania 2.) oraz przycisk Znajdź,
// który na kliknięcie pobierze z endpointa https://dummyjson.com/posts/${id} requestem GET odpowiedni element o podanym id
// (taki jak na liście z zadania 2.) i wyświetli go pod inputem w formacie jak w zadaniu 2

const showComment = document.getElementById("showComment");
const button = document.querySelector("button");
const input = document.querySelector("input");

function ShowComment() {
  const idInInput = input.value; //pobiera wartość z inputa
  fetch(`https://dummyjson.com/posts/${idInInput}`, {
    method: "GET", //pobieram metodą get komentarz o ID wpisanym do inputa, co osiągnęląm określając w endpoint wartość ID wpisaną do inputa poprze podanie nazwy zmiennej która przechowuje watość wpisaną do inputa
  })
    .then(function (response) {
      return response.json(); //zmieniam odpowiedx serwera na obiekt json
    })
    .then(function (response) {
      console.log(response);
      // const comment = document.createElement("p"); //tworzę w zmiennej comment nowy paragraf
      return (showComment.innerHTML = `<div class="postHeaderStyle"> ${response.id} - ${response.title}</div> <div class="bodyStyle"> ${response.body}</div>`); //wstrzykuje do parakrafy fragment kody html który odwołuje sie do is, title i body jako elementów odpowiedzi serwera w formacie obiektu json
      //zwracam do zmiennej showComment wstrzyknięcie kodu html który odnosi się do elmentów obiektu json tj. id, title, body i zachowuje style zgodne z klasami w css
    })
    .catch((error) => {
      console.log(error);
    });
}

button.addEventListener("click", ShowComment);
