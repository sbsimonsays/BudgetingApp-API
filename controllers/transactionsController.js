const express = require("express");
const transactions = express.Router();
const transactionsData = require("../models/transactions");
const { validateValues } = require("../models/validations");

transactions.get("/", (req, res) => {
  res.json(transactionsData);
});

transactions.get("/:index", (req, res) => {
  const { index } = req.params;
  if (transactionsData[index]) {
    res.json(transactionsData[index]);
  } else {
    res.status(404).send("SKRRT! You made a wrong turn, somewhere...");
  }
});

transactions.post("/", validateValues, (req, res) => {
  transactionsData.push(req.body);
  res.json(transactionsData[transactionsData.length - 1]);
});

transactions.delete("/:index", (req, res) => {
  const { index } = req.params;
  const deletedTransaction = transactionsData.splice(index, 1);
  res.status(200).json(deletedTransaction);
});

transactions.put("/:index", validateValues, (req, res) => {
  const { index } = req.params;
  transactionsData[index] = req.body;
  res.status(200).json(transactionsData[index]);
});

module.exports = transactions;
