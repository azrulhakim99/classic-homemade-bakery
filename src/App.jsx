import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Kek Coklat Moist",
    price: 35.0,
    image: "https://via.placeholder.com/200x150?text=Kek+Coklat"
  },
  {
    id: 2,
    name: "Roti Sourdough",
    price: 20.0,
    image: "https://via.placeholder.com/200x150?text=Sourdough"
  },
  {
    id: 3,
    name: "Tart Nenas Homemade",
    price: 25.0,
    image: "https://via.placeholder.com/200x150?text=Tart+Nenas"
  }
];

export default function ClassicHomemadeBakery() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', color: '#b91c1c', textAlign: 'center' }}>
        Classic Homemade Bakery
      </h1>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '1rem', padding: '1rem', width: 250 }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: '0.5rem' }}
            />
            <h2 style={{ fontSize: '1.2rem' }}>{product.name}</h2>
            <p style={{ color: '#dc2626', fontWeight: 'bold' }}>RM{product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              style={{ marginTop: '0.5rem', backgroundColor: '#ec4899', color: 'white', padding: '0.5rem', border: 'none', width: '100%', borderRadius: '0.5rem' }}
            >
              Tambah ke Troli
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#b91c1c' }}>Troli Anda</h2>
        {cart.length === 0 ? (
          <p>Troli kosong.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{item.name}</span>
                <span>RM{item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          Jumlah: <span style={{ color: '#dc2626' }}>RM{total.toFixed(2)}</span>
        </div>
        <button
          style={{ marginTop: '0.5rem', backgroundColor: '#16a34a', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '0.5rem' }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}