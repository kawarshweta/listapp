import { useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();

    console.log(json, "these are products");
    setProducts(json);
    setFilteredProducts(json);
  };

  const filterData = (searchText, category, listOfProducts) => {
    const filteredData = listOfProducts.filter((product) => {
      const titleMatch = product.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const categoryMatch =
        category === "All" ||
        product.category.toLowerCase() === category.toLowerCase();
      return titleMatch && categoryMatch;
    });
    return filteredData;
  };

  const handleSearch = () => {
    const filteredData = filterData(searchText, selectedCategory, products);
    setFilteredProducts(filteredData);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    const filteredData = filterData(searchText, e.target.value, products);
    setFilteredProducts(filteredData);
  };

  return (
    <div>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <div className="card flex flex-wrap justify-center">
        {filteredProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card filteredProducts={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
