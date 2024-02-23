import Link from "next/link";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import Profile from "./Profile";
import React, { useState } from "react";
import SearchList from "../searchFun/SeachList";
import product from "../data/data";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const filteredProducts = product.filter((prod: any) => {
    // prod.name.toUpperCase().includes(query.toUpperCase())
  });
  const filteredProductsBrand = product.filter((prod: any) => {
    // prod.brand.toUpperCase().includes(query.toUpperCase())
  });
  // Combine and remove duplicates
  const sortedProduct = Array.from(new Set([...filteredProducts, ...filteredProductsBrand]));

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSearchKeyPress = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      togglePopup();
    }
  };

  return (
    <div className="flex items-center max-sm:hidden space-x-8">
      <div className="flex">
        <button className="bg-slate-100 p-2 text-lg text-stone-600">
          <AiOutlineSearch />
        </button>
        <input
          className="px-4 py-2 bg-slate-100 focus:outline-none w-80 text-sm focus:border-gray-400"
          type="text"
          placeholder="Search for products, brands and more"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleSearchKeyPress}
        />
        {showPopup && (
          <div className="absolute mt-20 w-80 top-5 h-80 overflow-hidden bg-white shadow-lg rounded px-4 py-2">
            <SearchList data={sortedProduct} />
          </div>
        )}
      </div>
      <div className="text-center text-stone-600 pl-2 text-xl">
        <Profile />
      </div>
      <Link href="/wishlist" className="text-stone-600 pl-2 items-center">
        <AiOutlineHeart />
        <span>WishList</span>
      </Link>
      <Link href="/bag" className="text-stone-600 pl-2">
        <BsBag />
        <span>Bag</span>
      </Link>
    </div>
  );
}

export default SearchBar;
