var inputText = document.getElementById("input__text");
var btnAdd = document.getElementById("button__add");
var checklist = document.getElementById("section__checklist");

inputText.focus();

var addChecklistItem = () => {
  if (inputText.value) {
    // NOTE Create elements
    var checklistItem = document.createElement("div");
    checklistItem.classList = "checklistItem grid grid-item py-1";

    var item = document.createElement("div");
    var textItem = document.createTextNode(inputText.value.trim());
    item.classList = "px-2";

    var edit = document.createElement("div");
    edit.classList = "flex justify-center hover:text-green-600";
    var iconEdit = document.createElement("i");
    iconEdit.classList = "far fa-edit";

    var remove = document.createElement("div");
    remove.classList = "flex justify-center hover:text-red-600";
    var iconRemove = document.createElement("i");
    iconRemove.classList = "far fa-trash-alt";

    // NOTE Add event listeners
    item.addEventListener("click", () => linethroughItem(item));
    edit.addEventListener("click", () => editItem(edit));
    remove.addEventListener("click", () => removeItem(remove));

    // NOTE Append elements
    item.appendChild(textItem);
    edit.appendChild(iconEdit);
    remove.appendChild(iconRemove);

    checklistItem.appendChild(item);
    checklistItem.appendChild(edit);
    checklistItem.appendChild(remove);

    checklist.appendChild(checklistItem);
    document.documentElement.style.setProperty("--animate-duration", "0.25s");
    checklistItem.classList.add("animate__animated");
    checklistItem.classList.add("animate__zoomIn");
    setTimeout(() => {
      checklistItem.classList.remove("animate__animated");
      checklistItem.classList.remove("animate__zoomIn");
    }, 250);
  }

  inputText.value = "";
  inputText.focus();
};

// NOTE Event functions
var linethroughItem = (item) => {
  item.classList.toggle("line-through");
  item.parentElement.classList.toggle("done");
};

var editItem = (edit) => {
  var oldText = edit.parentElement.childNodes[0].innerText;
  var text = prompt("Edit your checklist item.", edit.parentElement.childNodes[0].innerText);
  if (text && text != oldText) {
    edit.parentElement.childNodes[0].innerText = text;
    document.documentElement.style.setProperty("--animate-duration", "0.15s");
    edit.parentElement.classList.add("animate__animated");
    edit.parentElement.classList.add("animate__pulse");
    setTimeout(() => {
      edit.parentElement.classList.remove("animate__animated");
      edit.parentElement.classList.remove("animate__pulse");
    }, 150);
  }
};

var removeItem = (remove) => {
  var confirmRemove = window.confirm("Delete checklist item?");

  if (confirmRemove) {
    document.documentElement.style.setProperty("--animate-duration", "0.25s");
    remove.parentElement.classList.add("animate__animated");
    remove.parentElement.classList.add("animate__fadeOutUp");
    setTimeout(() => remove.parentElement.remove(), 250);
  }
};

// NOTE Add event listeners
btnAdd.addEventListener("click", () => addChecklistItem());

inputText.addEventListener("keypress", (event) => {
  if (event.key === "Enter") addChecklistItem();
});
