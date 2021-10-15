var inputDescription = document.querySelector('#filter');
var inputForm = document.querySelector('form');
var newDiv = document.querySelector('#items');
var todo_List = /** @class */ (function () {
    function todo_List(description) {
        this.description = description;
    }
    todo_List.prototype.hello = function () {
        return "" + this.description;
    };
    return todo_List;
}());
inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var entry = new todo_List(inputDescription.value);
    newDiv.innerText = entry.hello();
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    newDiv.appendChild(check);
    console.log(newDiv);
    inputForm.reset();
});
