var inputText = document.getElementById("input__text");
var btnAdd = document.getElementById("button__add");
var checklist = document.getElementById("section__checklist");

btnAdd.addEventListener("click", () => addChecklistItem());

inputText.addEventListener("keypress", (event) => {
  if (event.key === "Enter") addChecklistItem();
});

var addChecklistItem = () => {
  if (inputText.value) {
    var checklistItem = document.createElement("div");
    checklistItem.classList = "grid grid-item";

    var item = document.createElement("div");
    var textItem = document.createTextNode(inputText.value.trim());
    item.appendChild(textItem);

    var remove = document.createElement("div");
    var textRemove = document.createTextNode("X");
    remove.appendChild(textRemove);

    item.addEventListener("click", () => {
      item.classList.toggle("line-through");
      checklistItem.classList.toggle("done");
    });

    remove.addEventListener("click", () => {
      var confirmRemove = window.confirm("Delete checklist item?");
      if (confirmRemove) checklistItem.remove();
    });

    checklistItem.appendChild(item);
    checklistItem.appendChild(remove);

    checklist.appendChild(checklistItem);

    inputText.value = "";
    inputText.focus();
  }
};

var toggleLineThrough = () => {};
