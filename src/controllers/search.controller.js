const { inventoryItems } = require("../data/inventory.data");

const getAllInventory = (req, res) => {
  return res.status(200).json({
    success: true,
    count: inventoryItems.length,
    data: inventoryItems,
  });
};

module.exports = { getAllInventory };