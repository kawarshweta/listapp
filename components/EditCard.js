import React, { useState } from "react";

const EditCard = ({ product, updateProduct }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpdate = () => {
    const updatedProduct = {
      ...product,
      title: title,
      price: price,
      description: description
    };

    updateProduct(updatedProduct);
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleTitleChange} />
      <input type="number" value={price} onChange={handlePriceChange} />
      <textarea value={description} onChange={handleDescriptionChange} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditCard;
