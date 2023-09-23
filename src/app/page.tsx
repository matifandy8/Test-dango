"use client";

import CardProduct from "@/components/CardProduct";
import { useState } from "react";
const ProductData: Product[] = [
  {
    id: 1,
    title: "Tourmaline & Tea tree",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiadeserunt et cumque totam.",
    price: 19.99,
    quantity: 0,
  },
  {
    id: 2,
    title: "Tourmaline & Tea tree",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiadeserunt et cumque totam.",
    price: 29.99,
    quantity: 0,
  },
  {
    id: 3,
    title: "Tourmaline & Tea tree",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiadeserunt et cumque totam.",
    price: 39.99,
    quantity: 0,
  },
  {
    id: 4,
    title: "Tourmaline & Tea tree",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiadeserunt et cumque totam.",
    price: 49.99,
    quantity: 0,
  },
  {
    id: 5,
    title: "Tourmaline & Tea tree",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiadeserunt et cumque totam.",
    price: 59.99,
    quantity: 0,
  },
  {
    id: 6,
    title: "Tourmaline & Tea tree",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiadeserunt et cumque totam.",
    price: 69.99,
    quantity: 0,
  },
  {
    id: 7,
    title: "Tourmaline & Tea tree",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiadeserunt et cumque totam.",
    price: 79.99,
    quantity: 0,
  },
  {
    id: 8,
    title: "Tourmaline & Tea tree",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiadeserunt et cumque totam.",
    price: 89.99,
    quantity: 0,
  },
];

export default function Home() {
  const [fontSize, setFontSize] = useState(12);
  const [productQuantities, setProductQuantities] = useState(
    ProductData.map((product) => product.quantity)
  );

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedQuantities = [...productQuantities];
    updatedQuantities[index] = newQuantity;
    setProductQuantities(updatedQuantities);
  };

  const totalQuantity = productQuantities.reduce(
    (total, quantity) => total + quantity,
    0
  );

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(Number(event.target.value));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full justify-between">
        <div className="mb-6">
          <label
            htmlFor="fontSizeRange"
            className="block text-gray-700 font-bold mb-2"
          >
            <span className="text-lg  font-semibold">Font Size:</span>{" "}
            <span className="text-xl  font-semibold">{fontSize}px</span>
          </label>
          <input
            type="range"
            id="fontSizeRange"
            name="fontSizeRange"
            min="1"
            max="30"
            step="0.1"
            defaultValue={fontSize}
            onChange={handleFontSizeChange}
            className="w-full"
          />
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-700 font-bold">
            <span>Total Quantity:</span>{" "}
            <span className="text-xl font-semibold">{totalQuantity}</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {ProductData.length > 0 ? (
          ProductData.map((product) => (
            <CardProduct
              key={product.id}
              price={product.price}
              title={product.title}
              description={product.description}
              quantity={product.quantity}
              fontSize={fontSize}
              onQuantityChange={handleQuantityChange}
              id={product.id}
            />
          ))
        ) : (
          <div className="text-red-500">
            Error rendering products: No products found
          </div>
        )}
      </div>
    </main>
  );
}
