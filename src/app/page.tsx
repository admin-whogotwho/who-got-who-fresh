"use client";

import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";

import { ProductRow } from "../components/ProductRow";
import { SearchBar } from "../components/SearchBar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Multilingual taglines you can customize
  const taglines = [
    "India's Digital Marketplace - Have You Checked Your Net Worth 2.0 on Who Got Who?",
    "भारत का डिजिटल मार्केटप्लेस - क्या आपने Who Got Who पर अपनी नेट वर्थ 2.0 चेक की?",
    "भारत का डिजिटल मार्केटप्लेस - क्या आपने Who Got Who पर अपनी नेट वर्थ 2.0 चेक की?",
    "भारत का डिजिटल बाजार - क्या आपने Who Got Who पर अपनी संपत्ति की जांच की?",
    "印度数字市场 - 你在Who Got Who上检查过你的净资产2.0吗？",
    "Marché numérique de l'Inde - Avez-vous vérifié votre valeur nette 2.0 sur Who Got Who ?",
    "Mercado digital de la India: ¿Has comprobado tu valor neto 2.0 en Who Got Who?",
  ];

  return (
    <>
      <Head>
        <title>
          Buy & Sell Digital Products | Who Got Who - India&apos;s Digital
          Marketplace
        </title>
        <meta
          name="description"
          content="Explore, evaluate, and acquire online assets like Amazon storefronts, SaaS startups, Instagram accounts, and more on Who Got Who. Your trusted marketplace for digital business acquisitions in India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Social Tags */}
        <meta property="og:title" content="Buy & Sell Digital Products | Who Got Who" />
        <meta
          property="og:description"
          content="Explore, evaluate, and acquire online assets like Amazon storefronts, SaaS startups, Instagram accounts, and more on Who Got Who. Your trusted marketplace for digital business acquisitions in India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.whogotwho.com/" />
        {/* Uncomment below when you have a share image */}
        {/* <meta property="og:image" content="https://www.whogotwho.com/images/whogotwho-social-share.jpg" /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy & Sell Digital Products | Who Got Who" />
        <meta
          name="twitter:description"
          content="Explore, evaluate, and acquire online assets like Amazon storefronts, SaaS startups, Instagram accounts, and more on Who Got Who. Your trusted marketplace for digital business acquisitions in India."
        />
        {/* <meta name="twitter:image" content="https://www.whogotwho.com/images/whogotwho-twitter-share.jpg" /> */}

        <link rel="canonical" href="https://www.whogotwho.com/" />
        <meta
          name="keywords"
          content="buy digital products, sell digital products, digital marketplace India, Amazon storefronts for sale, SaaS for sale, Instagram accounts for sale, YouTube channels for sale, mobile apps for sale, domains for sale, online business acquisition, Who Got Who, India digital market"
        />
      </Head>

      <section className="w-full relative min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#e2e8f0]">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="text-lg sm:text-xl font-medium text-gray-700">
              {taglines.map((tagline, idx) => (
                <p
                  key={idx}
                  className={`transition-opacity duration-1000 ${
                    idx === 0 ? "opacity-100" : "opacity-50"
                  }`}
                >
                  {tagline}
                </p>
              ))}
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              Buy & Sell Digital Products <br />
              <span className="text-primary-600">with Professional Assistance</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              From Amazon storefronts to SaaS startups, Who Got Who is your trusted
              platform to safely explore, evaluate, and acquire online assets.
            </p>
          </motion.div>

          {/* Search Bar with animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-full max-w-xl mt-12"
          >
            <SearchBar query={searchQuery} setQuery={setSearchQuery} />
          </motion.div>
        </div>

        {/* Product Rows */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24 space-y-28">
          <ProductRow category="newest" />
          <ProductRow category="amazon" />
          <ProductRow category="instagram" />
          <ProductRow category="saas" />
          <ProductRow category="youtube" />
          <ProductRow category="mobileapps" />
          <ProductRow category="domains" />
          <ProductRow category="others" />
        </div>
      </section>
    </>
  );
}
