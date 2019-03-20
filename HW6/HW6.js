///1

console.log(document.head);
console.log(document.body);
console.log(document.body.children);
console.log(document.body.firstElementChild);

///2

function isParent(parent, child) {
return parent.contains(child);
}
console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

let notUlLinks = [];
for (i=0, j=0; i < document.links.length; i++) {
    if (document.links[i].closest(`li`) == null) {
        notUlLinks[j] = document.links[i];
        j++;
    }
}
console.log(notUlLinks);

console.log(document.querySelector('ul').previousElementSibling);
console.log(document.querySelector('ul').nextElementSibling);
console.log(`В списке ` + document.querySelectorAll('li').length + ` элемента li`);

///todo

const edit_todo_item = (id, title, text) => {
    if (!id) return console.log("Передайте id редактируемой задачи.");
    if (!title) return console.log("Введите новый заголовок задачи.");
    if (!text) return console.log("Введите новый текст задачи.");
    storage.current_todos = storage.current_todos.filter(todo => todo.id !== id);
    const edit_todo = { title, text, id };
    storage.current_todos.push(edit_todo);

    return storage.current_todos;
}
