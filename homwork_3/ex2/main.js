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
