window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-text-input");
    const list_el = document.querySelector("#tasks");
    const header = document.querySelector("header");
    const task_empty_alert = document.createElement("h4");
    task_empty_alert.innerText = "";
    const storageKey = 'todoList';
    const todoList = JSON.parse(localStorage.getItem(storageKey)) || [];
    console.log("length  : " + todoList.length);

    if (todoList.length > 0 && todoList != null) {
        //get from local storage
        for (var i = 0; i < todoList.length; i++) {
            const task_el = document.createElement("div");
            task_el.classList.add("task");
            task_el.id = i;

            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");

            task_el.appendChild(task_content_el);
            const task_input_el = document.createElement("input");


            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = todoList[i];
            task_input_el.setAttribute("readonly", "readonly");

            task_content_el.appendChild(task_input_el);


            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");


            const task_edit_el = document.createElement("button");
            task_edit_el.classList.add("edit");
            task_edit_el.innerHTML = "Edit";

            const task_delete_el = document.createElement("button");
            task_delete_el.classList.add("delete");
            task_delete_el.innerHTML = "Delete";

            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);



            task_el.appendChild(task_actions_el);

            list_el.appendChild(task_el);

            input.value = "";
            task_edit_el.addEventListener('click', (i) => {
                if (task_edit_el.innerText.toLowerCase() == "edit") {
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                    task_edit_el.innerText = "Save";
                } else {
                    task_input_el.setAttribute("readonly", "readonly");
                    task_edit_el.innerText = "Edit";
                }
            });

            task_delete_el.addEventListener('click', () => {
                list_el.removeChild(task_el);
                const arr = [];
                console.log("id clicked: " + task_el.id);
                for (var a = 0; a < todoList.length; a++) {
                    arr.push(todoList[a]);
                }
                if (arr[task_el.id] == todoList[task_el.id]) {
                    arr.splice(task_el.id, 1);
                    console.log("after delete: " + arr);
                    localStorage.removeItem(storageKey);
                    localStorage.setItem(storageKey, JSON.stringify(arr))
                }
            });

            task_empty_alert.innerText = "";

        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (task != null && task != '') {
            todoList.push(task);
            localStorage.setItem(storageKey, JSON.stringify(todoList));
        }

        if (!task) {
            task_empty_alert.innerHTML = "Please fill out the task!!!";
            header.appendChild(task_empty_alert);
            return;

        } else {
            const task_el = document.createElement("div");
            task_el.classList.add("task");

            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");

            task_el.appendChild(task_content_el);
            const task_input_el = document.createElement("input");



            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.setAttribute("readonly", "readonly");


            task_content_el.appendChild(task_input_el);


            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");


            const task_edit_el = document.createElement("button");
            task_edit_el.classList.add("edit");
            task_edit_el.innerHTML = "Edit";

            const task_delete_el = document.createElement("button");
            task_delete_el.classList.add("delete");
            task_delete_el.innerHTML = "Delete";

            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);



            task_el.appendChild(task_actions_el);

            list_el.appendChild(task_el);

            input.value = "";

            task_edit_el.addEventListener('click', () => {
                if (task_edit_el.innerText.toLowerCase() == "edit") {
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                    task_edit_el.innerText = "Save";
                } else {
                    task_input_el.setAttribute("readonly", "readonly");
                    task_edit_el.innerText = "Edit";
                }
            });

            task_delete_el.addEventListener('click', () => {
                list_el.removeChild(task_el);
                const arr = [];
                console.log("id clicked: " + task_el.id);
                for (var a = 0; a < todoList.length; a++) {
                    arr.push(todoList[a]);
                }
                if (arr[task_el.id] == todoList[task_el.id]) {
                    arr.splice(task_el.id, 1);
                    console.log("after delete: " + arr);
                    localStorage.removeItem(storageKey);
                    localStorage.setItem(storageKey, JSON.stringify(arr))
                }
            });

            task_empty_alert.innerText = "";

        }
    })

})