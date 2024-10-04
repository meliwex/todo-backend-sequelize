const { Todo } = require("../db/models")


exports.createTodo = async (req, res) => {
  try {
    const obj = {
      title: req.body.title,
      description: req.body.description
    };

    const result = await Todo.create(obj);

    res.status(201).json({
      success: true,
      result: result
    });

  } catch (err) {
    res.json({
      success: false,
      errors: err
    });
  }
}


exports.getTodos = async (req, res) => {
  try {
    const { limit, offset } = req.query;

    const result = await Todo.findAll({
      attributes: ['title', 'description'],
      offset: offset,
      limit: limit
    });

    res.status(200).json({
      success: true,
      result: result
    });

  } catch (err) {
    res.json({
      success: false,
      errors: err
    });
  }
}


exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Todo.findByPk(id, {
      attributes: ["title", "description"],
    });


    if (result === null) {
      throw "Not found"
    }

    res.status(200).json({
      success: true,
      result: result
    });

  } catch (err) {
    res.json({
      success: false,
      errors: err
    });
  }
}


exports.updateTodo = async (req, res) => {
  try {
    const obj = {
      title: req.body.title,
      description: req.body.description
    };


    for (const item of Object.keys(obj)) {
      if (obj[item] === undefined) {
        delete obj[item]
      };
    }

    const id = req.params.id;

    const todo = await Todo.findByPk(id);

    if (todo === null) {
      throw "Not found"
    }


    await todo.update(obj);


    res.status(200).json({
      success: true,
      result: todo
    });

  } catch (err) {
    res.json({
      success: false,
      errors: err
    });
  }
}


exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;

    const todo = await Todo.findByPk(id);

    if (todo === null) {
      throw "Not found"
    }

    await todo.destroy();


    res.status(200).json({
      success: true,
      result: todo 
    });

  } catch (err) {
    res.json({
      success: false,
      errors: err
    });
  }
}