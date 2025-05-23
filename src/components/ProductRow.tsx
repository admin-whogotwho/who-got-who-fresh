"use client";

import React from "react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProductRowProps {
  category: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    title: "Amazon Storefront #123",
    description: "High revenue Amazon storefront for sale.",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "SaaS Startup X",
    description: "Scalable SaaS with recurring customers.",
    imageUrl:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Instagram Account @trendy",
    description: "Instagram account with 50k followers.",
    imageUrl:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=80",
  },
];

export function ProductRow({ category }: ProductRowProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 capitalize">{category}</h2>
      <motion.div
        className="flex space-x-6 overflow-x-auto scrollbar-hide"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {sampleProducts.map((product) => (
          <motion.div
            key={product.id}
            className="min-w-[280px] bg-white rounded-lg shadow-md p-4 flex-shrink-0 cursor-pointer hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-40 object-cover rounded-md mb-3"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
