// const button = document.getElementById("submit");
// function listadd(Event) {
//   Event.preventDefault();
//   list.push(text.value);
//   console.log(list);
//   text.value = "";
// }
// //버튼이 눌리면 검색창 지우기

// button.addEventListener("click", listadd);
// //클릭 감지
// const text = document.getElementById("text");
// //inputText 가져오기
// const list = [];
// //리스트
// const list2 = document.getElementById("liSt");
// //ul 불러오기
// function flist() {
//   const ul = document.getElementById("liSt");
//   const list1 = document.createElement("li");
//   const p = document.createElement("p");
//   const del = document.createElement("button");
//   list1.appendChild(p);
//   list1.appendChild(del);
//   ul.appendChild(list1);
//   list1.innerText = p;
// }

// flist();

// list.js 파일 내용
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", addList);
});

function addList() {
  const textInput = document.getElementById("text");
  const inputValue = textInput.value;

  if (inputValue.trim() === "") {
    // 입력값이 공백이면 아무 작업도 수행하지 않음
    return;
  }

  const listItem = document.createElement("li");
  const listItemText = document.createElement("p");
  listItem.id = "listStyle";
  listItemText.textContent = inputValue;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "-";

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.appendChild(listItemText);
  listItem.appendChild(deleteButton);

  const list = document.getElementById("liSt");
  list.appendChild(listItem);

  textInput.value = "";
}

listItemText.addEventListener("click", function () {
  listItemText.target.classList.toggle("completed");
});
