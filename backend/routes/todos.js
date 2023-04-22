const router = require('express').Router();
let Todo = require('../models/todo.model');

// get all todos
router.route('/').get((req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err));
});

// add new todo
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const link = req.body.link;
  const checked = req.body.checked || false;
  const position = req.body.position || 0;

  const newTodo = new Todo({
    title,
    link,
    checked,
    position
  });

  newTodo.save()
    .then(() => res.json('Todo added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// get todo by ID
router.route('/:id').get((req, res) => {
  Todo.findById(req.params.id)
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json('Error: ' + err));
});

// update todo by ID
router.route('/:id').put((req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      todo.title = req.body.title || todo.title;
      todo.link = req.body.link || todo.link;
      todo.checked = req.body.checked || todo.checked;
      todo.position = req.body.position || todo.position;

      todo.save()
        .then(() => res.json('Todo updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete todo by ID
router.route('/:id').delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Todo deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
