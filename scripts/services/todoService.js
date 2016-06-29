function TodoService($resource) {
  return $resource('http://localhost:3000/todos/:todo', {todo: '@todo'},
    {
      'update': { method:'PUT' }
  });
}

angular
  .module('todoApp')
  .factory('TodoService', TodoService);
