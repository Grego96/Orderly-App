const { Table } = require("../models");

async function index(req, res) {
  try {
    const table = await Table.findAll({ where: { userId: req.auth.id } });
    if (table.length >= 1) {
      res.status(200).json({ table });
    } else {
      res.status(404).json({ message: "No table found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function show(req, res) {
  const table = await Table.findByPk(req.params.id);
  if (table) {
    res.status(200).json({ table });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
}

async function store(req, res) {
  console.log(req.body);
  try {
    const newTable = await Table.create({
      title: req.body.title,
      table: {
        headers: req.body.headers,
        row: req.body.row,
      },
      userId: req.auth.id,
    });
    if (newTable) {
      res.status(201).json({ message: "Table created" });
    } else {
      res
        .status(400)
        .json({ message: "A Table with that Title already exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
}

async function edit(req, res) {
  const table = await Table.findByPk(req.query.id || req.params.id);
  if (table && table.id) {
    try {
      await table.update({ ...req.body });
      res.status(200).json({ message: "Table updated." });
    } catch (error) {
      res.send(error);
    }
  } else {
    res.status(402).json({ message: "Table not found" });
  }
}

async function destroy(req, res) {
  const table = await Table.findByPk(req.query.id || req.params.id);
  if (table) {
    await table.destroy();
    res.status(200).json({ message: "Table deleted." });
  } else {
    res.status(400).json({ message: "Table not found." });
  }
}

module.exports = {
  index,
  show,
  store,
  edit,
  destroy,
};
