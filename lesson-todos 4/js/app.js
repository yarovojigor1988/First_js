// Task manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. офистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива 
// 3. редактировать задачу 
//      а. взять данные из массива
//      б. поместить в форму 
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. офистить форму

// task = {
//     id: {
//         type: 'String',
//         required: true
//     },
//     title: {
//         type: 'String',
//         required: true
//     },
//     text: {
//         type: 'String',
//         required: true
//     }
// }

// ;(function () {
    
    let storage = {
        todos: []
    };

    // UI Elements
    let btnDelete;
    let editedTask;
    let addBtn = document.querySelector('.btn-primary');
    let editBtn = document.querySelector('.btn-info');
    const table = document.querySelector('.table tbody');
    const form = document.forms['addTodoForm'];
    const title = form.elements['title'];
    const text = form.elements['text'];

    // click, keyUp, keyDown, submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!title.value || !text.value) return alertAddTodoToView();
        
        addNewTodoToStorage(title.value, text.value);
        form.reset();
        funcDel ();
        successAddTodoToView();

        
    });

    function alertMessage(isError, message) {

        setTimeout(function () {
            console.log('remove');
        }, 2000);
    }

   

    /**
     * 
     */
    function generateId() {
        const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        let id = '';

        for (let char of words) {
            let index = Math.floor(Math.random() * words.length);
            id += words[index];
        }

        return id;
    }

    /**
     * 
     * @param {*} title 
     * @param {*} text 
     */
    function addNewTodoToStorage(title, text) {
        if (!title) return alertAddTodoToView();
        if (!text) return alertAddTodoToView();
        
        const newTask = {
            title,
            text, 
            id: generateId()
        };

        storage.todos.push(newTask);

        // Добавим в разметку
        addNewTodoToView(newTask);

        
        funcDel ();
        return storage.todos;
    }

    addNewTodoToStorage('My title 1', 'My text 1');

    /**
     * 
     * @param {*} id 
     */
    function deleteTodoFromStorage(id) {
        const checkIdRes = checkId(id);
        if (checkIdRes.error) return console.log(checkIdRes.msg);

        let removedTask;

        for (let i = 0; i < storage.todos.length; i++) {
            if (storage.todos[i].id === id) {
                removedTask = storage.todos.splice(i, 1);
                break;
            }
        }

        deleteTodoFromView(id);
        
        return removedTask;
    }

    function checkId(id) {
        if (!id) return { error: true, msg: 'Передайте id задачи' };

        const checkId = storage.todos.some(function(task, i) { 
            return task.id === id 
        });
        if (!checkId) return { error: true, msg: 'id несуществуе' };

        return { error: false, msg: '' };
    }

    /**
     * 
     * @param {*} id 
     * @param {*} title 
     * @param {*} text 
     */

    function editTodoFromStorage(id) {
        for (let i = 0; i < storage.todos.length; i++) {
            if (storage.todos[i].id === id) {
                editedTask = storage.todos[i];
                break;
            }
        }
        document.getElementById('title').value = editedTask.title;
        document.getElementById('text').value = editedTask.text;
        addBtn.classList.add('d-none');
        editBtn.classList.remove('d-none');


    }

    editBtn.addEventListener('click', function editTask(e) {
        e.preventDefault();       

        editTaskStorage(title.value, text.value, editedTask.id)
    });


    
    function editTaskStorage(title, text, id) {
        if (!title) return alertAddTodoToView();
        if (!text) return alertAddTodoToView();
        storage.todos = storage.todos.filter(todo => todo.id !== id);
        const edit_todo = { title, text, id };
        storage.todos.push(edit_todo);
        deleteTodoFromView(id);
        addEditedTodoToView(edit_todo);
        form.reset();
        addBtn.classList.remove('d-none');
        editBtn.classList.add('d-none');
        funcDel ();
        return storage.todos;
        
    }



    function deleteTodoFromView(id) {
        const target = document.querySelector(`[data-id="${id}"]`);
        target.parentElement.removeChild(target);
    }

    /**
     * 
     * @param {*} task 
     */        


    function addNewTodoToView(task) {
        const template = todoTemplate(task);
        table.insertAdjacentHTML('afterbegin', template);



        btnDelete = document.querySelector(`.fa-trash`);
        btnDelete.dataset.id = task.id;
        btnEdit = document.querySelector(`.fa-edit`);
        btnEdit.dataset.id = task.id;
    }

    function addEditedTodoToView(task) {
        const template1 = todoTemplate(task);
        table.insertAdjacentHTML('afterbegin', template1);
        
        btnDelete = document.querySelector(`.fa-trash`);
        btnDelete.dataset.id = task.id;
        btnEdit = document.querySelector(`.fa-edit`);
        btnEdit.dataset.id = task.id;
    }
    function successAddTodoToView() {
        const successNew = successAdd();
        let alertMassege = document.querySelector('.col-6');
        alertMassege.insertAdjacentHTML('afterbegin', successNew);
        setTimeout(funcDel, 2000);
    }

    function alertAddTodoToView() {
        funcDel ();
        const alertNew = alertAdd();
        let alertMassege = document.querySelector('.col-6');
        alertMassege.insertAdjacentHTML('afterbegin', alertNew);
    }

    function funcDel () {
        if (document.querySelector(".alert") != null) {
            const alertMassege = document.querySelector(".alert");
            alertMassege.parentElement.removeChild(alertMassege);
        }
    }

    /**
     * 
     * @param {*} task 
     */
    function todoTemplate(task) {
        return `
            <tr data-id="${task.id}"> 
                <td>${task.title}</td>
                <td>${task.text}</td>
                <td>
                    <i class="fas fa-trash"></i>
                    <i class="fas fa-edit"></i>
                </td>
            </tr>
        `;
    }

document.querySelector("table").addEventListener('click', function (e) {

    if (e.target.className == 'fas fa-trash') {
        deleteTodoFromStorage(e.target.dataset.id);
    }
    if (e.target.className == 'fas fa-edit') {
        editTodoFromStorage(e.target.dataset.id);
    }

});

function successAdd() {
    return `
        <div class="alert alert-success">
        Заметка добавлена успешно!
        </div>
        `;
    }

    function alertAdd() {
        return `
            <div class="alert alert-danger">
            Введите title и text!
            </div>
            `;
        }