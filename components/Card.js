import React from "react";

const Card = ({ filteredProducts }) => {
  if (filteredProducts) {
    return (
      <ul className="card flex flex-wrap justify-center p-4">
        <div className=" p-8 rounded-md w-96  h-[450] justify-between bg-gray-200 mr-7 mb-10 cursor-pointer transition-all hover:scale-110">
          <img
            className="w-40 h-40 mix-blend-multiply m-auto"
            src={filteredProducts.image}
            alt={filteredProducts.title}
          />
          <h3 className="font-medium">{filteredProducts.title}</h3>
          <p className="font-thin pt-3 decoration-slate-400">
            {filteredProducts.description}
          </p>
        </div>
      </ul>
    );
  } else {
    return <p className="bg-slate-700">No product found.</p>;
  }
};

export default Card;
