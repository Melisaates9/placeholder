const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("userId");
//yorum ikonuna bastığında userıdleri gösteriyor

async function getComment() {
  let data;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    data = await response.json();
  } catch (error) {
    console.log("Bir hata oluştu: " + error);
  }
  console.log(data);
  data.forEach((comment) => {
    createCards(comment);
  });
}
const row = document.querySelector(".row");
function createCards(comment) {
  row.innerHTML += ` 
  <div class="comments">
    <p>userId: ${comment.userId}</p>
    <p>id: ${comment.id}</p>
    <p>title: ${comment.title}</p>
    <p>body: ${comment.body}</p>
    </div>
    
    `;
}
getComment();
