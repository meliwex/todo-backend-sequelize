const db = require("../db/models")
const { todo } = db;


exports.createTodo = async (req, res) => {
  try {
    const obj = {
      title: req.body.title,
      description: req.body.description
    };

    const result = await todo.create(obj);

    res.status(201).json({
      success: true,
      result: result.dataValues
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

    const result = await todo.findAll({
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

    const result = await todo.findAll({
      attributes: ["id", 'title', 'description'],
      where: {
        id: id,
      }
    });

    if (result.length === 0) {
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

    const result = await todo.update(
      obj,
      {
        where: {
          id: id
        },
        returning: true
      }
    );


    res.status(200).json({
      success: true,
      result: result[1]
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

    const result = await todo.destroy({
      where: {
        id: id,
      },
      returning: true 
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