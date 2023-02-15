const express = require('express');
const { getItem, getItems, createItem, updateItem, deleteItem } = require('../controllers/user');
const router = express.Router();


router.get("/users", getItems)
router.get("/users/:id", getItem)
router.post("/users", createItem)
router.put("/users/:id", updateItem)
router.delete("/users/:id", deleteItem)


module.exports = router;