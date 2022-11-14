var list = localStorage.getItem("listItem")

var data;

if (list) {
    data = list.split(",");
} else {
    data = ""
}

console.log(data)

for (let i = 0; i < data.length; i++) {
    var todoText = data[i]
    var listItem = document.createElement("li")
    listItem.textContent = todoText 
    listItem.classList.add("list-group-item")
    document.querySelector(".list-group").append(listItem)
  }

//have user to be able to add a todo and add i
document.querySelector(".btn.btn-outline-secondary").addEventListener("click", function (e) {
    //get value from input
    var todoText = document.querySelector(".form-control").value
    //turn string item into list item
    var listItem = document.createElement("li")
    listItem.textContent = todoText
    console.log(listItem)
    listItem.classList.add("list-group-item")
    document.querySelector(".list-group").append(listItem)
    //localStorage.getItem(listItem)
    var initData = localStorage.getItem("listItem") || ""
    var newData = initData + ',' + todoText
    console.log(newData)
    
    localStorage.setItem("listItem", newData)
    }
    );

document.querySelector(".btn-delete").addEventListener("click", function (e) {
        localStorage.clear()
        window.location.reload()
    } 
    );



