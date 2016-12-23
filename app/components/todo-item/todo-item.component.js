angular.module('todoItem').component('todoItem', {
    templateUrl: 'components/todo-item/todo-item.tmpl.html',
    controller: TodoItemController,
    bindings: {
        todo: '<item',
        remove: '&'
    }
});