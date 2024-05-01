"use client"
import { useState, useEffect } from "react";
import ProductPage from "../components/ProductPage";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setProducts(
      [
        {
          id: 1,
          name: "Product 1",
          description: "Description 1",
          price: "Price 1",
          category: "Category 1",
          image: "https://via.placeholder.com/300x300"
        },
        {
          id: 2,
          name: "Product 2",
          description: "Description 2",
          price: "Price 2",
          category: "Category 2",
          image: "https://via.placeholder.com/300x300"
        },
        {
          id: 3,
          name: "Product 3",
          description: "Description 3",
          price: "Price 3",
          category: "Category 3",
          image: "https://via.placeholder.com/300x300"
        },
        {
          id: 4,
          name: "Product 4",
          description: "Description 4",
          price: "Price 4",
          category: "Category 4",
          image: "https://via.placeholder.com/300x300"
        },
        {
          id: 5,
          name: "Product 5",
          description: "Description 5",
          price: "Price 5",
          category: "Category 5",
          image: "https://via.placeholder.com/300x300"
        },
        {
          id: 6,
          name: "Product 6",
          description: "Description 6",
          price: "Price 6",
          category: "Category 6",
          image: "https://via.placeholder.com/300x300"
        },
        {
          id: 7,
          name: "Product 7",
          description: "Description 7",
          price: "Price 7",
          category: "Category 7",
          image: "https://via.placeholder.com/300x300"
        },
        {
          id: 8,
          name: "Product 8",
          description: "Description 8",
          price: "Price 8",
          category: "Category 8",
          image: "https://via.placeholder.com/300x300"
        },
        {
          id: 9,
          name: "Product 9",
          description: "Description 9",
          price: "Price 9",
          category: "Category 9",
          image: "https://via.placeholder.com/300x300"
        },
        {
          id: 10,
          name: "Product 10",
          description: "Description 10",
          price: "Price 10",
          category: "Category 10",
          image: "https://via.placeholder.com/300x300"
        },
        {
          id: 11,
          name: "Product 11",
          description: "Description 11",
          price: "Price 11",
          category: "Category 11",
          image: "https://via.placeholder.com/300x300"
        },
        {
          id: 12,
          name: "Product 12",
          description: "Description 12",
          price: "Price 12",
          category: "Category 12",
          image: "https://via.placeholder.com/300x300"
        }
      ]
    )  
    setLoading(false)
  }, [])

  const openProductPage = (product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  return (
    <main className="flex min-h-screen flex-col items-center mx-auto w-11/12 sm:w-10/12">
      <h1 className="text-3xl font-bold">Alamara</h1>
      <p>Handpicked sarees</p>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {loading ? "Loading..." : 
        products.map(product => 
        <div key={product.id} className="flex flex-col p-10">
          <h2>{product.name}</h2>
          <button onClick={() => openProductPage(product)}>
            <img href={product.image} alt="product"></img>
            Click
          </button>
          {modalOpen && <ProductPage product={selectedProduct}/>}
        </div>)
        }
      </div>
    </main>
  );
}
