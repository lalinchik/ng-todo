function TodoItemController(TodoItemService) {
    this.update = (todo) => {
        TodoItemService.update(todo);
    }
}