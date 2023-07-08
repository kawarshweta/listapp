import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    setProductDetails(product);
  };

  const addToCart = () => {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: 5,
        date: "2020-02-03",
        products: [{ productId: id, quantity: 1 }],
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setIsAddedToCart(true);
      });
  };

  const handleCart = (productDetails, redirect) => {
    console.log(productDetails);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === productDetails.id);
    if(isProductExist) {
      const udpatedCart = cart.map(item => {
        if(item.id === productDetails.id) {
          return{
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })
      localStorage.setItem('cart', JSON.stringify(udpatedCart));
    }else{
      localStorage.setItem('cart', JSON.stringify([...cart, {...productDetails, quantity: 1}]))
    }
    alert('Product Added to CArt')
    if(redirect){
      Navigate("/cart")
    }
  };

  return (
    <div className="">
      <ul className="flex max-sm:inline-block">
        <div className="bg-[#444343] w-3/5 m-auto max-sm:w-full">
          <h1 className="bg-[#002A3A] justify-center flex items-center uppercase text-white font-black h-11">
            {productDetails.category}
          </h1>
          <img
            className="h-[640] mix-blend-multiply p-20 m-auto"
            src={productDetails.image}
            alt={productDetails.title}
          />
        </div>
        <div className="w-2/5 bg-[#EFEFEF] p-14 max-sm:w-full">
          <li className="font-medium capitalize text-xl">
            {productDetails.title}
          </li>
          <li className="tex-[#002A3A] mt-5 font-bold">
            From: ${productDetails.price}
          </li>
          <p className="text-[#002A3A] pt-5 text-base">
            {productDetails.description}
          </p>
          <div className="flex h-16 bg-[#EE3D6E] mt-28">
            <h4 className="p-5 bg-white font-bold">${productDetails.price}</h4>
            <button
              className="text-white font-bold m-auto"
              onClick={() => handleCart(productDetails)}
            >
              Add To Cart
            </button>
          </div>
          {isAddedToCart && (
            <p className="text-green-500 mt-3">Added to the cart!</p>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Detail;
