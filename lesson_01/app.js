// const page = {

// }

// console.dir(document.get);

// const titleEl = document.getElementById("title");
// console.dir(titleEl);

// const h2Title = document.createElement("h2");
// h2Title.innerText = "Day la H2";
// console.log(h2Title);

// h2Title.className = "new-h2";
// h2Title.style.color = "blue";
// document.getElementById("root").appendChild(h2Title);
// // <h2>Day la H2</h2>

// const button = document.querySelector("#btn-change");
// console.log(button);

// button.addEventListener("click", changeColor);

// function changeColor() {
//   console.log("Change color");
//   titleEl.className = "new-class";
//   titleEl.style.color = "red";
//   titleEl.style.background = "blue";
//   window.location.href = "http://127.0.0.1:8080/lesson_01/login.html";
// }

// const urlSearch = new URLSearchParams(window.location.search);

// console.log(urlSearch.get("name"));

//callback promise, async await

// class Animal {
//   constructor(age, name) {
//     this.age = age;
//     this.name = name;
//   }

//   bay() {
//     console.log("bay nef");
//   }

//   getInfo() {
//     console.log(`name: ${this.name} - age: ${this.age}`);
//   }
// }

// const dog = new Animal(2, "Dog");

// console.log(dog);

// dog.getInfo();

// const meo = new Animal(2, "TOm");
// meo.getInfo();

// callback promise, async await
// callback

// function calc(a, b, callback) {
//   let res = a + b;
//   //   print(res);
//   //   add2(res);
//   callback(res);
// }

// function print(number) {
//   console.log(number);
// }

// function add2(number) {
//   let res = number + 2;
//   console.log(res);
// }

// calc(1, 2, print);
// calc(1, 2, add2);

// promise

// // main thread
// let myPromise = new Promise(function (resolve, reject) {
//   // do something
//   let hetCho = false;
//   if (hetCho == true) {
//     reject(false);
//   } else {
//     resolve(true);
//   }
// });

// myPromise
//   .then(function (kq) {
//     console.log(kq);
//     if (kq === true) {
//       return "Ve nha an com roi di choi";
//     }
//     // render product
//   })
//   .then(function (kq2) {
//     console.log(kq2);
//   })
//   .then(function (kq3) {
//     console.log(kq3);
//   })
//   .catch(function (err) {
//     console.log("err", err);
//     // di toi cay xang khac de do
//   });
// console.log(myPromise);
// console.log("Tat nuoc, vi nuoc day roi");

// console.log("Hoc bai");
// setTimeout(() => {
//   console.log("Danh rang");
// }, 3000);
// console.log("Di ngu");

// setTimeout(() => {
//   let a = prompt("Enter your number");
//   console.log(a);
// }, 3000);
// console.log("render footer");

// nau com : 15p
// giat do: 30p
// quet nha: 15p
// an com: 30p

const API_URL = "https://reqres.in/api/users?page=2";

const request = fetch(API_URL, {
  method: "GET",
});

request
  .then(function (response) {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then(function (data) {
    renderUsers(data.data);
  });

function renderUsers(users) {
  console.log("users", users);
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const userHtml = generatorUserHtml(user);
    console.log(userHtml);
    document.getElementById("user-container").innerHTML += userHtml;
  }
}

function generatorUserHtml(userObject) {
  return `
        <div class="user">
        <img src="${userObject.avatar}" alt="" />
        <h2>${userObject.first_name} ${userObject.last_name}</h2>
        <h5>${userObject.email}</h5>
    </div>
    `;
}
// console.log(request);
