async function getUsers() {
  let data;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await response.json();
  } catch (error) {
    console.log("Bir hata oluştu: " + error);
  }

  // kartların olduğu yer
  data.forEach((user) => {
    createCards(user);
  });
}
const row = document.querySelector(".row");
function createCards(user) {
  row.innerHTML += ` <div class="cards col-4" >
  <a href="posts.html?userId=${user.id}"><i class="fa-solid fa-comment"></i></a>
  <div class="wrapper">
  <div class="users"> 
  <i class="fa-solid fa-user"></i>
  <p>${user.id} </p>
  <p>${user.name}</p>
  <p>${user.username}</p>
  </div>
  <div class="address">
  <i class="fa-duotone fa-solid fa-address-book"></i>
  <p>${user.address.street} </p>
  <p>${user.address.city}</p>
  <p>${user.address.suite}</p>

  </div>
  <div class="company">
  <i class="fa-regular fa-building"></i>
  <p>${user.company.name}</p>
  <p>${user.company.catchPhrase}</p>
  <p>${user.company.bs}</p>
  </div>
  <div class="contact">
  <i class="fa-solid fa-phone"></i>
  <p>${user.email}</p>
  <p>${user.phone}</p>
  <p>${user.website}</p>
  </div>
  </div>
</div>
   
  
   `;
}

getUsers();
