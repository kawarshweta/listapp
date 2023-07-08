import React from "react";

const SearchBar = ({
  searchText,
  setSearchText,
  handleSearch,
  selectedCategory,
  handleCategoryChange,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="pt-4 h-20 bg-white justify-center items-center flex">
      <input
        type="text"
        className="border-solid border-2 border-black-500 w-80 rounded-[30] h-10 p-3"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown} // Add this line
      />
      {/* <button
        className="border-solid border-2 rounded-md bg-blue-950 text-white h-10"
        onClick={handleSearch}
      >
        Search
      </button> */}
      <select
        className="border-solid border-2 rounded-[30] bg-white ml-4 h-10"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
};

export default SearchBar;
