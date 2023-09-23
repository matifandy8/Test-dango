"use client";

import React, { useState } from "react";
import Image from "next/image";

const CardProduct: React.FC<CardProductProps> = ({
  price,
  title,
  description,
  quantity,
  fontSize,
  onQuantityChange,
  id,
}) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };
  const handleTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
  };
  return (
    <div className="max-w-xs bg-white border-black border-2 rounded-md">
      <Image
        className="m-auto rounded-t-lg"
        src="https://tourmaly.com/cdn/shop/products/teatree.jpg"
        alt=""
        width={200}
        height={200}
      />
      <div className="p-5">
        {isEditingTitle ? (
          <input
            type="text"
            defaultValue={editedTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            className="mb-2 px-2 py-1 border rounded-md"
            autoFocus
          />
        ) : (
          <h3
            style={{ fontSize: `${fontSize}px` }}
            className={`text-center mb-2 font-bold tracking-tight text-gray-900 dark:text-white`}
            onClick={handleTitleClick}
          >
            {editedTitle}
          </h3>
        )}
        <p className="inline-block mb-2 text-2l font-bold tracking-tight text-gray-900 dark:text-white">
          ${price}
        </p>
        <input
          className="text-center inline-block mx-4 px-1 bg-white border-black border-2 rounded-md"
          type="number"
          id="quantity"
          name="quantity"
          defaultValue={quantity}
          min="0"
          max="100"
          onChange={(event) => onQuantityChange(id, Number(event.target.value))}
        />
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="text-center">
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-pink-200 border-black border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>

        <a
          href="#"
          className="py-2 text-center block text-blue-700 hover:underline dark:text-blue-500"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CardProduct;
