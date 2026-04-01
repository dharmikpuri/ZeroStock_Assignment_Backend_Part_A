const { inventoryItems } = require("../data/inventory.data");

const getAllInventory = (req, res) => {
  try {
    const { q, category, minPrice, maxPrice } = req.query;

    let results = [...inventoryItems];

    //Product
    if (q) {
      const searchText = q.trim().toLowerCase();
      results = results.filter((item) =>
        item.productName.toLowerCase().includes(searchText)
      );
    }

    //Category
    if (category) {
      results = results.filter(
        (item) =>
          item.category.toLowerCase() === category.toLowerCase()
      );
    }

    //Price
    if (minPrice) {
      results = results.filter(
        (item) => item.price >= Number(minPrice)
      );
    }

    if (maxPrice) {
      results = results.filter(
        (item) => item.price <= Number(maxPrice)
      );
    }

    //Invalid price range
    if (
      minPrice &&
      maxPrice &&
      Number(minPrice) > Number(maxPrice)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid price range",
      });
    }

    //No results found
    if (results.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No results found",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      count: results.length,
      data: results,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { getAllInventory };