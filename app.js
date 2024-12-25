const add_button = document.getElementById("add_button");

const retrieveEntries = () => {
  let entries = localStorage.getItem("user-tasks");
  if (entries) {
    entries = JSON.parse(entries);
  } else {
    entries = [];
  }
  return entries;
};

let userEntries = retrieveEntries();

const dispalyEntries = () => {
  const tableEntries = retrieveEntries();
  const entries = tableEntries.map((entry, index) => {
    return `<li>${entry} <button class="delete-btn" onclick="removeEntry(${index})">Delete</button></li>`;
  });

  let details = document.getElementById("user-tasks");
  details.innerHTML = entries.join("");
};

const removeEntry = (index) => {
  const tableEntries = retrieveEntries();
  tableEntries.splice(index, 1); // Remove the entry at the given index
  localStorage.setItem("user-tasks", JSON.stringify(tableEntries));
  userEntries = retrieveEntries();
  dispalyEntries();
};

const saveUserForm = (event) => {
  event.preventDefault();
  const task = document.getElementById("task").value.trim();
  if (task !== "") {
    userEntries.push(task);
    localStorage.setItem("user-tasks", JSON.stringify(userEntries));
    dispalyEntries();
  }
};

add_button.addEventListener("click", saveUserForm);
dispalyEntries();
