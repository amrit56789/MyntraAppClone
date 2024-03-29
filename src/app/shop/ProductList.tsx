"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsBag, BsFillBagCheckFill } from "react-icons/bs";
import { addPrice, addToBag, removeFromBag } from "../../redux/features/manageBag";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { ReduxProvider } from "@/redux/provider";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = (product: any) => {
  
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const [item, setItem] = useState({});

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  // redux update
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (e: any) => {
    setAdded(true);
    const payload = product.product
    dispatch(addPrice(product.product.price));
    dispatch(addToBag(payload));
  };
  return (
    <>
      <div className="max-w-lg bg-white rounded-xl overflow-hidden m-2 item-container">
        <div
          className="relative rounded-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            width={320}
            height={100}
            src={
              product?.product?.image || <Skeleton count={1} baseColor="#074a66" />
            }
            alt="i"
            className="my-4 rounded-xl object-cover  object-custom-pos"
          />
          {hovered && (
            <div className="absolute rounded-xl inset-0 flex items-center justify-center bg-black bg-opacity-50">
              {!added ? (
                <button
                  onClick={handleClick}
                  className={`bg-white text-black text-xl px-4 py-2 rounded ${added ? "transform scale-105" : ""
                    }`}
                >
                  <BsBag />
                </button>
              ) : (
                <button className="bg-white text-2xl text-black px-4 py-2 rounded">
                  <BsFillBagCheckFill />
                </button>
              )}
            </div>
          )}
        </div>
        <div className="px-4">
          <div className="text-gray-900 font-bold text-lg w-60">
            {product.product.name.en}
          </div>
          <div className="text-gray-400 text-xs w-72 my-2">
            {product.product?.summary?.description}
          </div>
          <div className="flex items-center mt-2">
            <svg
              className="w-4 h-4 fill-current text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.48 2 2 
              6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v7h-2zm0 9h2v2h-2z"
              />
            </svg>
            <span className="text-yellow-500 ml-1">
              {/* {product.p.rating} */}
            </span>
          </div>
          <div className="text-gray-900 font-semibold mt-2">
            {product?.product?.price}
          </div>
        </div>
      </div>
    </>
  );
};
export default function ProductList(productItems: any) {
  return (
    <div className="flex-none px-8 mb-8">
      <ReduxProvider>
        <div className="grid grid-cols-4 border-y-2 w-100 gap-4 border-slate-100">
          {productItems.data.map((product: any, index: any) => (
            <Product product={product} key={index} />
          ))}
        </div>
      </ReduxProvider>
    </div>
  );
}
