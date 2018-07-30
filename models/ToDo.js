class Todo {
    /**
    * Todo constructor
    * @param {String} content Text that describes the task to do
    */
    constructor(content) {
      this.id = ++Todo.counter;
      this.content = content;
      this.done = true;
    }
  }
  // counter of instances
  Todo.counter = 0;
  module.exports = Todo;
