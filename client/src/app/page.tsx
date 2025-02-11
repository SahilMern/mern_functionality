"use client";
import axios from "axios";
import { useEffect, useState } from "react";

// Define the Product type
interface Product {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

// Define the response type (assuming the data is inside `data.data`)
interface ApiResponse {
  data: {
    data: Product[]; // The API returns an array of products
  };
}

const Page = () => {
  // Set the state type to Product[] (array of Product objects)
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        // Type the response from axios call
        const response = await axios.get<ApiResponse>(
          "http://localhost:9080/api/v1/products/productsdata"
        );
        console.log(response.data, "data");
        setProductData(response.data.data); // Set the product data in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getAllProducts();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {productData && productData.map((element, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Sr No */}
              <td>{element.name}</td> {/* Product Name */}
              <td>{element.description}</td> {/* Product Description */}
              <td>{element.price}</td> {/* Product Price */}
              <td>{element.quantity}</td> {/* Product Quantity */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Page;
