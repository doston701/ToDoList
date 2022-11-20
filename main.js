window.addEventListener("load", () => {
  const form = document.querySelector("#new-form");
  const input = document.querySelector("#new-input");
  const block = document.querySelector("#task");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputTask = input.value;

    if (!inputTask) {
      alert("Please write your plane! ");
      return;
    }

    const getBlock = document.createElement("div");
    getBlock.classList.add("block");

    const getContent = document.createElement("div");
    getContent.classList.add("content");

    getBlock.appendChild(getContent);

    const getInput = document.createElement("input");
    getInput.classList.add("text");
    getInput.type = "text";
    getInput.value = inputTask;
    getInput.setAttribute("readonly", "readonly");

    getContent.appendChild(getInput);

    const getAction = document.createElement("div");
    getAction.classList.add("actions");

    const getEdit = document.createElement("button");
    getEdit.classList.add("edit");
    getEdit.innerHTML = "Edit";

    const getDelete = document.createElement("button");
    getDelete.classList.add("delete");
    getDelete.innerHTML = "Delete";

    getAction.appendChild(getEdit);
    getAction.appendChild(getDelete);

    getBlock.appendChild(getAction);

    block.appendChild(getBlock);

    input.value = "";

    getEdit.addEventListener("click", () => {
      if (getEdit.innerText.toLowerCase() == "edit") {
        getInput.removeAttribute("readonly");
        getInput.focus();
        getEdit.innerText = "Save";
      } else {
        getInput.setAttribute("readonly", "readonly");
        getEdit.innerText = "Edit";
      }
    });
    getDelete.addEventListener("click", () => {
      block.removeChild(getBlock);
    });
  });
});
