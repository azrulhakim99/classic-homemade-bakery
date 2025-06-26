import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Kek Coklat Moist",
    price: 35.0,
    image: "https://imgur.com/NlwaPpy"
  },
  {
    id: 2,
    name: "Roti Sourdough",
    price: 20.0,
    image: "https://drive.google.com/uc?export=view&id=183Q0ODQWx42xsGzLNEapSCgfW3dOnwQt"
  },
  {
    id: 3,
    name: "Tart Nenas Homemade",
    price: 25.0,
    image: "https://drive.google.com/uc?export=view&id=1xvSXqZFptevBofeureWxtS91ZLrW4HLN"
  }
];

export default function ClassicHomemadeBakery() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    const message = encodeURIComponent(
      `Hi! Saya nak order:\n\n${cart
        .map((item) => `- ${item.name} (RM${item.price.toFixed(2)})`)
        .join("\n")}\n\nJumlah: RM${total.toFixed(2)}`
    );
    window.location.href = `https://wa.me/60122410741?text=${message}`;
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1100px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#c2410c', marginBottom: '2rem' }}>
        🍰 Classic Homemade Bakery 🍞
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: 200, objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{product.name}</h2>
              <p style={{ fontWeight: 'bold', color: '#dc2626' }}>RM{product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  marginTop: '0.5rem',
                  backgroundColor: '#ea580c',
                  color: 'white',
                  padding: '0.5rem',
                  border: 'none',
                  width: '100%',
                  borderRadius: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                Tambah ke Troli
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', borderTop: '2px solid #f3f4f6', paddingTop: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#c2410c', marginBottom: '1rem' }}>🛒 Troli Anda</h2>
        {cart.length === 0 ? (
          <p style={{ color: '#6b7280' }}>Troli kosong. Tambah produk untuk buat tempahan.</p>
        ) : (
          <>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              {cart.map((item, index) => (
                <li key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>{item.name} - RM{item.price.toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.3rem',
                      padding: '0.3rem 0.6rem',
                      cursor: 'pointer'
                    }}
                  >
                    Buang
                  </button>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem', marginTop: '1rem' }}>
              Jumlah: <span style={{ color: '#16a34a' }}>RM{total.toFixed(2)}</span>
            </p>
            <div style={{ marginTop: '1rem' }}>
              <button
                onClick={handleCheckout}
                style={{
                  backgroundColor: '#16a34a',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontWeight: 'bold',
                  marginRight: '1rem',
                  cursor: 'pointer'
                }}
              >
                📲 Checkout WhatsApp
              </button>
              <button
                onClick={clearCart}
                style={{
                  backgroundColor: '#9ca3af',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer'
                }}
              >
                🧹 Kosongkan Troli
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
