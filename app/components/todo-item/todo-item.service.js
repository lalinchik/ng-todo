angular.module('todoItem').service('TodoItemService', function ($http) {
    this.getAll = function () {
        return $http.get('https://fiery-heat-8917.firebaseio.com/todos.json')
            .then(response => normalizeToArray(response.data));
    };

    this.add = function (newItem) {
        return $http.post('https://fiery-heat-8917.firebaseio.com/todos.json', newItem)
            .then(response => {
                newItem.id = response.data.name;
                return newItem;
            });
    };

    this.remove = function (item) {
        return $http.delete('https://fiery-heat-8917.firebaseio.com/todos/' + item.id + '.json')
            .then(response => response.data);
    };

    this.update = function (item) {
        return $http.put('https://fiery-heat-8917.firebaseio.com/todos/' + item.id + '.json', item)
            .then(response => response.data);
    };

    function normalizeToArray(object) {
        if (!object) return [];
        return Object.keys(object).map(key => {
            let normalizedObject = object[key];
            normalizedObject.id = key;
            return normalizedObject;
        });
    }
});