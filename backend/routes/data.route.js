const express = require("express");
const { datamodel } = require("../model/data.model");
const dataRouter = express.Router();

dataRouter.post("/add", async (req, res) => {
    const {text,duration} = req.body
  try {
    const newData = new datamodel({text,duration});
    const savedData = await newData.save();
    res.json(savedData);
  } catch (error) {
    res.json({ error: error.message });
  }
});

dataRouter.get("/get", async (req, res) => {
  try {
    const dataEntries = await datamodel.find();
    res.json(dataEntries);
  } catch (error) {
    res.json({ error: "Server error" });
  }
});

module.exports = {
    dataRouter
}