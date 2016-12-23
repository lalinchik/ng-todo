function TodoListController(TodoItemService) {
    TodoItemService.getAll().then((todos) => {
        this.todos = todos;
    });

    this.newTodo = '';

    this.addTodo = () => {
        const newTodo = {
            title: this.newTodo.trim()
        };

        if(newTodo.title) {
            TodoItemService.add(newTodo).then((newTodo) => {
                this.todos.push(newTodo);
                this.newTodo = '';
            });
        }
    };

    this.removeTodo = (todo) => {
        TodoItemService.remove(todo).then(() => {
            this.todos.splice(this.todos.indexOf(todo), 1);
        });
    };
}