const validateValues = (req, res, next) => {
  const { item_name, amount, date, from, category } = req.body;
  if (
    typeof item_name !== "string" ||
    typeof amount !== "number" ||
    typeof date !== "string" ||
    typeof from !== "string" ||
    typeof category !== "string"
  ) {
    res.status(404).json(item_name);
  } else {
    next();
  }
};

module.exports = { validateValues };
