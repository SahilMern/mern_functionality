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

//? GET PRODUCT DATA
export const productsdata = async (req, res) => {
  try {
    const { search, limit = 1, page = 1 } = req.query;
    console.log(search, "search");
    console.log(limit, "limit");

    let query = {};
    if (search) {
      query.productId = {
        $regex: search,
        $options: "i",  // Case-insensitive search
      };
    }

    let limitNumber = parseInt(limit, 10);
    let pageNumber = parseInt(page, 10);
    console.log(limitNumber, pageNumber, "datalimit");

    // Count total products
    const totalProductCount = await ProductModel.countDocuments(query);  // Corrected method name

    // const totalProductCount1 = await ProductModel.countDocuments(query);  // Corrected method name
    console.log(totalProductCount, "Total products count");

    // Calculate total number of pages
    const totalPages = Math.ceil(totalProductCount / limitNumber);
    console.log(totalPages, "total pages");

    // Skip calculation based on page number and limit
    const skipNumber = (pageNumber - 1) * limitNumber;

    // Get products with pagination
    const data = await ProductModel.find(query)
      .limit(limitNumber)
      .skip(skipNumber);

    return res.status(200).json({
      message: "All products data",
      data,
      totalProductCount,
      totalPages,
      currentPage: pageNumber,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};



