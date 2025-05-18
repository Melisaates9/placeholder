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
<p>    <span class="title"> UserId </span> : <span class="expo">${comment.userId} </span></p>
    <p> <span class="title">id</span>: <span class="expo"> ${comment.id} </span></p>
    <p><span class="title">title</span>:  <span class="expo">${comment.title} </span></p>
    <p><span class="title">body</span>:  <span class="expo">${comment.body}</span></p>
    </div>
    
    `;
}
getComment();
