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

  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    const message = encodeURIComponent(
      `Hi! Saya nak order:

${cart
        .map((item) => `- ${item.name} (RM${item.price.toFixed(2)})`)
        .join("\n")}

Jumlah: RM${total.toFixed(2)}`
    );
    window.location.href = `https://wa.me/60122410741?text=${message}`;
  };

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
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {cart.map((item, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span>{item.name} - RM{item.price.toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(index)}
                  style={{ backgroundColor: '#f87171', color: 'white', border: 'none', borderRadius: '0.3rem', padding: '0.2rem 0.5rem' }}
                >
                  Buang
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <>
            <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
              Jumlah: <span style={{ color: '#dc2626' }}>RM{total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              style={{ marginTop: '0.5rem', backgroundColor: '#16a34a', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '0.5rem', marginRight: '1rem' }}
            >
              Checkout WhatsApp
            </button>
            <button
              onClick={clearCart}
              style={{ marginTop: '0.5rem', backgroundColor: '#9ca3af', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '0.5rem' }}
            >
              Kosongkan Troli
            </button>
          </>
        )}
      </div>
    </div>
  );
}