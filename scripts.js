//have user to be able to add a todo and add it

document.querySelector(".btn.btn-outline-secondary").addEventListener("click", function (e) {
    //get value from input
    var todoText = document.querySelector(".form-control").value
    //turn string item into list item
    var listItem = document.createElement("li")
    listItem.textContent = todoText
    console.log(listItem)
    listItem.classList.add("list-group-item")
    document.querySelector(".list-group").append(listItem)
    }
    );




