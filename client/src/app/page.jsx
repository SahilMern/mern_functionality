"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Page = () => {
  // Set the state to an empty array (no need for type annotation)
  const [productData, setProductData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        // Fetching data from the API
        const response = await axios.get(
          "http://localhost:9080/api/v1/products"
        );
        console.log(response.data, "data");
        setProductData(response.data.data); // Set the product data in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getAllProducts();
  }, []);

  const handleSearch = (e) => {
    // console.log(e.target.value);
    setSearchQuery(e.target.value);
  };
  return (
    <div className="container mx-auto px-20 mt-16">
      <h1 className="text-2xl font-bold mb-4 text-center">Product List</h1>

      <div className="flex justify-center my-4">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search products..."
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full max-w-xs"
          onChange={handleSearch}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="p-3 text-left">Sr No</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((element, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{element.name}</td>
                <td className="p-3">{element.description}</td>
                {/* <td className="p-3">{element.price}</td> */}
                <td className="p-3">{element.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {productData && (
        <div className=" border flex justify-center items-center">
          <button>prev</button>

          <button>Next</button>
        </div>
      )}
    </div>
  );
};

export default Page;
