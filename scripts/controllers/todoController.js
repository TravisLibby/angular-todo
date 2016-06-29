function TodoController(TodoService) {
  var self = this;

  self.todos = [];
  self.numTodos = 0;
  self.formData = {
    task: '',
    complete: false
  };

  TodoService.query(function(data) {
    self.todos = data;
    self.numTodos = self.todos.length;
  }, function(error) {
    // error
  });

  self.addTodo = function() {
    TodoService.save(self.formData, function(data) {
      // success
    }, function(error) {
      // error
    });
  };

  self.deleteTodo = function(todoId) {
    TodoService.remove({todo: todoId}, function(data) {
      // success
    }, function(error) {
      // error
    });
  };

  self.editTodo = function(todo) {
    self.isEditing = true;
    self.todoBeingEdited = todo;
  };

  self.stopEditing = function() {
    self.todoBeingEdited = null;
    console.log('Blur');
  };

  self.updateTodo = function(todo) {
    console.log('yo');
    TodoService.update({todo: todo.id}, todo);
  };

  self.filterButton = 'all';
  self.activeFilter = '';

  self.setTab = function(filterName) {
    self.filterButton = filterName;
    switch (filterName) {
      case "all":
        self.activeFilter = '';
        break;
      case "active":
        self.activeFilter = {complete: false};
        break;
      case "completed":
        self.activeFilter = {complete: true};
        break;
      default:
        self.activeFilter = '';
    }
  };
}

angular
  .module('todoApp')
  .controller('TodoController', TodoController);
