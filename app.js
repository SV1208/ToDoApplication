const add_button = document.getElementById('add_button')
const retrieveEntries = () =>{
    let entries = localStorage.getItem("user-tasks");
    if (entries){
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
}

let userEntries = retrieveEntries();

const dispalyEntries = () => {

    const tableEntries = retrieveEntries().map((entry)=>"<li>"+entry+"</li>").join("\n");
    let details = document.getElementById('user-tasks');
    details.innerHTML =tableEntries;
}

const saveUserForm = (event) => {
    event.preventDefault();
    const task = document.getElementById("task").value;
    if (task!==''){
        userEntries.push(task)
        localStorage.setItem("user-tasks", JSON.stringify(userEntries));
        dispalyEntries();
    }
};    

add_button.addEventListener("click", saveUserForm);
dispalyEntries();
