const root = document.getElementById("root");
const choiceBox = document.getElementById("choice-box");
const item = document.querySelectorAll(".item");
const drawButton = document.getElementById("draw");
const total = document.getElementById("total");
const priceText = document.getElementById("price-text");
const admin = document.getElementById("admin");
const adminBox = document.getElementById("admin-box")
const addFood = document.getElementById("add-food");
const addName = document.getElementById("add-name");
const addPrice = document.getElementById("add-price");
const add = document.getElementById("add");
const del = document.getElementById("del");
const delItem = document.getElementById("del-item")

let liArr = choiceBox.getElementsByTagName("li");
let checked = [];
let sum = 0;
let temp = [];


function createItemFunc(foodA, nameA, priceA) {
  let createItem = document.createElement("li");
  let createLabel1 = document.createElement("label");
  let createLabel2 = document.createElement("label");
  let createLabel3 = document.createElement("label");
  let createLabel4 = document.createElement("label");

  choiceBox.appendChild(createItem);
  createItem.className = "item";

  createItem.appendChild(createLabel1);
  createLabel1.textContent = foodA;


  createItem.appendChild(createLabel2);
  createLabel2.textContent = nameA;

  createItem.appendChild(createLabel3);
  createLabel3.textContent = priceA;

  createItem.appendChild(createLabel4);
  for (let i = 0; i < choiceBox.childElementCount; i++) {
    liArr[i].children[3].textContent = i + 1;
    console.log(liArr[i]);
  }
}

function deleteItemFunc(num) {
  choiceBox.children[num - 1].remove();
  for (let i = 0; i < choiceBox.childElementCount; i++) {
    liArr[i].children[3].textContent = i + 1;
    console.log(liArr[i]);
  }
}

item.forEach(function (box) {
  box.addEventListener("click", function (e) {
    
    if (checked[box.children[3].textContent - 1] !== 1) {
      checked[box.children[3].textContent - 1] = 1;
      box.style.backgroundColor = "pink";
      sum += parseInt(box.children[2].textContent);
      total.textContent = `계산할 금액 : ${sum}원`;
    } else {
      checked[box.children[3].textContent - 1] = 0;
      box.style.backgroundColor = "white";
      sum -= parseInt(box.children[2].textContent);
      total.textContent = `계산할 금액 : ${sum}원`;
    }
  });
});

drawButton.addEventListener("click", function (e) {
  let price = priceText.value;
  if (sum <= price && price !== "" && sum !== 0) {
    for (let i = 0; i < choiceBox.childElementCount; i++) {
      if (checked[i] === 1) {
        temp += liArr[i].children[0].textContent;
      }
    }
    console.log(`${temp} 획득`);
    if (sum === priceText.value) {
      console.log("잔돈 : 없음");
      priceText.textContent = "";
      total.textContent = ""
    } else if (sum < priceText.value) {
      console.log(`거스름돈 : ${priceText.value - sum}원`);
    }
  } else {
    if (sum !== 0) {
      console.log(`금액 부족 : ${sum - priceText.value}원`);
    } 
  }

  temp = "";
});

admin.addEventListener("click", function (e) {
  let password = prompt("관리자 비밀번호");
  if (password === "asd") {
    adminBox.style.cssText = `display: flex; `;
  }
});

add.addEventListener("click", function (e) {
  createItemFunc(addFood.value, addName.value, addPrice.value);
});

del.addEventListener("click", function (e) {
  deleteItemFunc(delItem.value);
})