import ProductModel from "../models/products.Model.js"; // Make sure this path is correct

export const productRegister = async (req, res) => {
  try {
    const {
      productId,
      name,
      description,
      category,
      price,
      colors,
      size,
      stockQuantity,
      brand,
      images,
    } = req.body;

    // Create a new product instance
    const productData = new ProductModel({
      productId,
      name,
      description,
      category,
      price,
      colors,
      size,
      stockQuantity,
      brand,
      images,
    });

    // Save the product to the database
    const data = await productData.save();
    return res.status(200).json({
      message: "Product registered successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

//? GET PRODUCT DATA
export const productsdata = async (req, res) => {
  try {
    console.log("I am Hitted");

    const data = await ProductModel.find({});
    return res.status(200).json({
      message: "All products data",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

//? GET SINGLE PRODUCTS BY ID
export const singleproductsdata = async (req, res) => {
  try {
    const productId = req.params.id;
    // console.log(productId, "productsId");

    const data = await ProductModel.find({ _id: productId });
    return res.status(200).json({
      message: "All products data",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};
