const UserSchema = require("../models/users")


const getItem = async (req, res) => {
  const id = req.params.id;
  const response = await UserSchema.findById(id);
  res.send(response)
}

const getItems = async (req, res) => {
  const response = await UserSchema.find({});
  res.send(response)
}

const updateItem = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const response = await UserSchema.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  res.send(response);
}

const createItem = async (req, res) => {
  const user = req.body;
  const response = await UserSchema.create(user)
  res.send(response)
}

const deleteItem = async (req, res) => {
  const id = req.params.id;
  const response = await UserSchema.deleteOne({ _id: id });
  res.send(response)
}



module.exports = { getItem, getItems, updateItem, createItem, deleteItem }