import React, { useEffect, useState } from "react";
import { backendAPI } from "../axios.jsx";
import Card from "../components/Card.jsx";
import Header from "../components/Header.jsx";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [sortBy, setSortBy] = useState("a-z");
  const [price, setPrice] = useState(100000);
  const [freeShipping, setFreeShipping] = useState(false);

  useEffect(() => {
    setLoading(true);
    backendAPI
      .get("/products")
      .then((response) => {
        if (response?.data?.data) {
          setProducts(response.data.data);
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    backendAPI
      .get("/products", {
        params: {
          search: searchQuery,
          category: category,
          company: company,
          sortBy: sortBy,
          price: price,
          freeShipping: freeShipping,
        },
      })
      .then((response) => {
        if (response?.data?.data) {
          setProducts(response.data.data);
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />
      <section>
        <div className="max-w-6xl mx-auto px-8 py-20">
          <form
            className="bg-col2 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 grid-cols-4 items-center"
            onSubmit={handleSearch}
          >
            <div className="w-btn2w">
              <label
                htmlFor="search"
                className="w-full h-9 text-sm font-normal text-col3 px-1 py-2 inline-block"
              >
                Search Product
              </label>
              <input
                id="search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-8 px-3 rounded-lg border text-col3 text-base font-normal"
              />
            </div>
            <div className="w-btn2w">
              <label
                htmlFor="category"
                className="w-full h-9 text-sm font-normal text-col3 px-1 py-2 inline-block"
              >
                Select Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-8 px-3 rounded-lg border text-col3 text-sm font-semibold pl-2"
              >
                <option value="">all</option>
                <option value="tables">Tables</option>
                <option value="chairs">Chairs</option>
                <option value="kids">Kids</option>
                <option value="sofas">Sofas</option>
                <option value="beds">Beds</option>
              </select>
            </div>
            <div className="w-btn2w">
              <label
                htmlFor="company"
                className="w-full h-9 text-sm font-normal text-col3 px-1 py-2 inline-block"
              >
                Select Company
              </label>
              <select
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full h-8 px-3 rounded-lg border text-col3 text-sm font-semibold pl-2"
              >
                <option value="">all</option>
                <option value="modenza">Modenza</option>
                <option value="luxora">Luxora</option>
                <option value="artifex">Artifex</option>
                <option value="comfora">Comfora</option>
                <option value="homestead">Homestead</option>
              </select>
            </div>
            <div className="w-btn2w">
              <label
                htmlFor="sortBy"
                className="w-full h-9 text-sm font-normal text-col3 px-1 py-2 inline-block"
              >
                Sort By
              </label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full h-8 px-3 rounded-lg border text-col3 text-sm font-semibold pl-2"
              >
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
                <option value="high">high</option>
                <option value="low">low</option>
              </select>
            </div>
            <div className="w-btn2w">
              <label
                htmlFor="price"
                className="w-full h-9 text-sm font-normal text-col3 px-1 py-2 flex justify-between items-center"
              >
                <span>Select Price</span>
                <span>{`$${price.toLocaleString()}`}</span>{" "}
              </label>
              <input
                className="cursor-pointer focus:outline-none h-5 w-full"
                type="range"
                name="price"
                min={0}
                max={100000}
                step={1000}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="w-btn2w flex flex-col items-center">
              <label
                htmlFor="checkbox"
                className="w-full h-9 text-sm font-normal text-col3 px-1 py-2 flex flex-col items-center"
              >
                Free Shipping
              </label>
              <input
                type="checkbox"
                checked={freeShipping}
                onChange={(e) => setFreeShipping(e.target.checked)}
                className={`w-5 h-5 rounded-lg appearance-none border border-col6 cursor-pointer ${
                  freeShipping ? "bg-col3" : ""
                }`}
              />
            </div>
            <div className="w-btn2w">
              <button
                type="submit"
                className="bg-col3 text-col2 rounded-lg px-3 w-full h-8"
              >
                SEARCH
              </button>
            </div>

            <div className="w-btn2w">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setCategory("");
                  setCompany("");
                  setSortBy("a-z");
                  setPrice(100000);
                  setFreeShipping(false);
                }}
                className="bg-col5 text-col4 rounded-lg px-3 w-full h-8"
              >
                RESET
              </button>
            </div>
          </form>

          <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
            <h4 className="font-medium text-base text-col3">
              {products.length} products
            </h4>
            <div className="flex items-center gap-x-2">
              <button
                className="bg-col3 hover:bg-col3hov text-col2 w-8 h-8 rounded-full flex justify-center items-center"
                type="button"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                </svg>
              </button>
              <button
                className="w-8 h-8 rounded-full flex justify-center items-center hover:bg-col4 hover:bg-opacity-20"
                type="button"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center mt-8">Loading...</div>
          ) : (
            <>
              {products.length > 0 ? (
                <div className="flex flex-wrap mx-auto gap-4 mt-12 justify-between">
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      id={product.id}
                      image={product.attributes.image}
                      title={product.attributes.title}
                      price={product.attributes.price}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center mt-8">No products found.</div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Products;
