const root = document.getElementById("root");
const item = document.querySelectorAll(".item");
const drawButton = document.getElementById("draw");
const total = document.getElementById("total");
const priceText = document.getElementById("price-text");
const admin = document.getElementById("admin");
const addFood = document.getElementById("add-food");
const addName = document.getElementById("add-name");
const addPrice = document.getElementById("add-price");
const add = document.getElementById("add");
const del = document.getElementById("del");
const delItem = document.getElementById("del-item")
let choiceBox = document.getElementById("choice-box");
let checked = [];
let sum = 0;
let temp = [];

function createItemFunc() {
  let createItem = document.createElement("li");
  let createLabel1 = document.createElement("label");
  let createLabel2 = document.createElement("label");
  let createLabel3 = document.createElement("label");
  let createLabel4 = document.createElement("label");
  let countItem = document.getElementById("choice-box").childElementCount;

  choiceBox.appendChild(createItem);
  createItem.className = "item";
  createItem.dataset.item = countItem + 1;

  createItem.appendChild(createLabel1);
  createLabel1.textContent = addFood.value;


  createItem.appendChild(createLabel2);
  createLabel2.textContent = addName.value;

  createItem.appendChild(createLabel3);
  createLabel3.textContent = addPrice.value;

  createItem.appendChild(createLabel4);
  createLabel4.textContent = createItem.dataset.item;  
}

function deleteItemFunc(num) {
  choiceBox.children[num].remove();
  for(let i = 0; i < countItem; i++) {
    choiceBox.children[i+1].children[3].textContent = "1";
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
  }
  );
});

drawButton.addEventListener("click", function (e) {
  if (sum <= priceText.value && priceText.value !== "") {
    for (let i = 0; i < item.length; i++) {
      if (checked[i] === 1) {
        temp += item[i].children[0].textContent;
      }
    }
    console.log(`${temp}을(를) 획득`);

    if (sum === priceText.value) {
      console.log("잔돈 : 없음");
      priceText.textContent = "";
      total.textContent = ""
    } else if (sum < priceText.value) {
      console.log(`거스름돈 : ${priceText.value - sum}원`);
    }
  } else {
    console.log(`금액 부족 : ${sum - priceText.value}원`);
  }
  temp = "";
});

admin.addEventListener("click", function (e) {
  let password = prompt("관리자 비밀번호");
  if (password === "asd") {

  }
});

add.addEventListener("click", function (e) {
  createItemFunc();
});

del.addEventListener("click", function (e) {
  deleteItemFunc(delItem.value);
})


