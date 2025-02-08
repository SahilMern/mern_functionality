import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: [
    {
      amount: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
    },
  ],
  colors: [
    {
      colorName: {
        type: String,
        required: true,
      },
      hexCode: {
        type: String,
        required: true,
      },
    },
  ],
  size: [
    {
      sizeName: {
        type: String,
        required: true,
      },
      sizeDescription: {
        type: String,
        required: true,
      },
    },
  ],
  stockQuantity: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  images: [
    {
      imageUrl: {
        type: String,
        required: true,
      },
      imageDescription: {
        type: String,
        required: false,
      },
    },
  ],
});

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
