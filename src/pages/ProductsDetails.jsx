import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import Header from "../components/Header";
import { backendAPI } from "../axios";

function ProductsDetails() {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(1);
  const id = useParams().id;

  useEffect(() => {
    backendAPI
      .get(`/products/${id}`)
      .then((response) => {
        if (response.status == 200 && response?.data?.data) {
          setProducts(response.data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <Header />
      <section>
        <div className="max-w-6xl mx-auto px-8 py-20">
          {products?.attributes && (
            <div className="w-full mt-6 flex justify-between">
              <div className="max-w-lg w-full">
                <img
                  src={products.attributes.image}
                  alt="Image"
                  className="h-96 object-cover rounded-lg w-full"
                />
              </div>

              <div className="max-w-lg w-full">
                <h2 className="capitalize text-col3 text-3xl font-bold">
                  {products.attributes.title}
                </h2>
                <h4 className="text-xl font-bold text-col1 mt-2">
                  ${products.attributes.company}
                </h4>
                <p className="mt-3 text-xl font-normal text-col3">
                  ${products.attributes.price}
                </p>
                <p className="mt-6 text-base line-height-abouttextlh text-col3">
                  {products.attributes.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-md text-col3 font-medium">Colors</h4>
                  <div className="flex mt-2">
                    <button className="mr-2 w-6 h-6 bg-col6 rounded-full cursor-default hover:outline hover:outline-pink-400"></button>
                    <button className="w-6 h-6 bg-col7 rounded-full cursor-default hover:outline hover:outline-pink-400"></button>
                  </div>
                </div>

                <div className="w-full mt-2 mb-10">
                  <h4 className="text-md font-medium text-col3 mb-2">Amount</h4>
                  <select
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    className="w-80 h-12 pl-4 border border-col3 rounded-lg"
                  >
                    {Array.from({ length: 20 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <button className="bg-col8 hover:bg-col8hov text-col7 rounded-md px-4 h-12">
                  Add to Bag
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ProductsDetails;
