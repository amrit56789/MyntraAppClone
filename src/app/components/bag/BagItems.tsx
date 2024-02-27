"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { removeFromBag, removePrice } from "@/redux/features/manageBag";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Image from "next/image";

interface BagItem {
  id: string;
  name: { en: string };
  price: number;
  image: string;
}

function BagItems() {
  const items = useAppSelector((state) => state.reducers.bag);
  const dispatch = useDispatch();

  const removePriceAndBag = (item: BagItem) => {
    if (Object.keys(item).length === 0) {
      return;
    }
    dispatch(removeFromBag(item.id));
    dispatch(removePrice(item.price));
  };

  return (
    <div className="bg-white border rounded-lg shadow-md overflow-scroll h-72 p-4 mb-4">
      {Object.entries(items).map(([id, item]) => (
        <div className="" key={id}>
          {item && (
            <div className="flex items-center justify-between flex-none rounded-md">
              <Image
                src={item.image}
                alt="item image"
                width={10}
                height={10}
                layout="responsive"
                className="rounded-md w-11"
              />
              <div className="flex flex-col justify-center mx-4"> {/* Center content vertically */}
                <p className="font-bold text-lg">{item?.name?.en}</p>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <div className="flex items-center justify-center"> {/* Center delete button */}
                <AiFillDelete className="text-4xl cursor-pointer text-red-500" onClick={() => removePriceAndBag(item)} />
              </div>
            </div>
          )}
        </div>

      ))}
    </div>
  );
}


export default BagItems;
