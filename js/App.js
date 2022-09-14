const addNewList = (timer = "") => {
  const [inputLength, warningUser, addTask] = [
    document.getElementById("inputList"),
    document.getElementById("warning"),
    document.getElementById("listar")
  ];
  clearTimeout(timer);

  if (inputLength.value.length === 0) {
    warningUser.style.display = "block";
    timer = setTimeout(() => {
      warningUser.style.display = "none";
    }, 2000);
  } else {
    addTask.innerHTML += `
    <div class="item">
    <span id="valueList">${inputLength.value}</span>
    <button class="delete"><img width="25" height="30" src="./img/trash.png" alt="trash" /></button>
    </div> `;
    inputLength.value = "";
  }

  let selectAllDelete = document.querySelectorAll(".delete"),
    itemList = document.querySelectorAll(".item");
  for (let index = 0; index < selectAllDelete.length; index++) {
    selectAllDelete[index].onclick = function() {
      this.parentElement.remove();
    };

    itemList[index].onclick = function() {
      this.getAttribute("class") == "item active"
        ? this.setAttribute("class", "item")
        : this.setAttribute("class", "item active");
    };
  }
};
