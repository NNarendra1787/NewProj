const Products = require("../Schema/Product_schema");
const { AllinOne } = require("./Category");

// const addProduct = async (req, res) => {
//   try {
//     const data = req.body;
//     const result = await Products.create(data);
//     res.send({ msg: "Product Stored successfully", Result: result });
//   } catch (err) {
//     console.log("Error while inserting", err);
//   }
// };
const addProduct = async (req, res) => {
  try {
    const data = req.body;
    console.log("data", data);
    const result = await Products.create(data);
    console.log("result", result);
    res.send({ msg: "Product Stored successfully", Result: result });
  } catch (err) {
    console.error("Error while inserting:", err);
    res.status(500).send({ msg: "Error while inserting" });
  }
};

const addSingProduct = async (req, res) => {
  try {
    const data = req.body;
    const result = await Products.create(data);
    res.send({ msg: "Product Stored successfully", Result: result });
  } catch (err) {
    console.log("Error while inserting", err);
  }
};
const fetchProducts = async (req, res) => {
  const result = await Products.find();
  return res.send({ msg: "Products Fetched", Result: result });
};

const fetchCategory = async (req, res) => {
  const { cat } = req.params;

  console.log(cat);

  const result = await Products.find({ cat: cat });
  return res.send({ Result: result });
};

const fetchByBrand = async (req, res) => {
  const { comp } = req.params;

  console.log(comp);
  const result = await Products.find({ comp: comp });
  return res.send({ Result: result });
};

const search = async (req, res) => {
  try {
    const data = req.query;

    const result = new ApiFeachers(Products.find(), data).search();
    const products = await result.query; //Assuming it's an array of Mongoose documents

    return res.send({
      msg: "rendered",
      Products,
    });
  } catch (err) {
    console.error("Error during search:", err);
    res.status(500).send({ msg: "Error during search" });
  }
};

module.exports = {
  addSingProduct,
  addProduct,
  fetchProducts,
  fetchCategory,
  fetchByBrand,
  search,
};
