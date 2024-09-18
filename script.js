async function getUsers() {
  let data;
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await response.json();
  } catch (error) {
    console.log("Bir hata oluştu: " + error);
  }
  console.log(data);
  // kartların olduğu yer
  data.forEach((user) => {
    createCards(user);
  });
}
const row = document.querySelector(".row");
function createCards(user) {
  row.innerHTML += ` <div class="cards" >
 <button onclick="getUser(${user})"><i class="fa-solid fa-user"></i></button>

  <button onclick="getAddress()"><i class="fa-duotone fa-solid fa-address-book"></i></button>
  
  <button onclick="getCompany()"><i class="fa-regular fa-building"></i></button>
  <button onclick="getContact()"><i class="fa-solid fa-phone"></i></button> 
  <div class="wrapper">
  <div class="users"> 
  <p>${user.id} </p>
  <p>${user.name}</p>
  <p>${user.username}</p>
  </div>
  <div class="address">
  <p>${user.address.street} </p>
  <p>${user.address.city}</p>
  <p>${user.address.suite}</p>

  </div>
  <div class="company">
  <p>${user.company.name}</p>
  <p>${user.company.catchPhrase}</p>
  <p>${user.company.bs}</p>
  </div>
  <div class="contact">
  <p>${user.email}</p>
  <p>${user.phone}</p>
  <p>${user.website}</p>
  </div>
  </div>
</div>
   
  
   `;
}

getUsers();
function getUser(user) {
  console.log(user);
}
