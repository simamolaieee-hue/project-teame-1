import React, { useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'LCD Monitor',
      price: 650,
      quantity: 1,
      image: 'g27cq4-500x500 1.png',
    },
    {
      id: 2,
      name: 'H1 Gamepad',
      price: 550,
      quantity: 2,
      image: 'g92-2-500x500 1.png',
    },
  ]);

  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id, delta) => {
    setCartItems(items =>
      items.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'DISCOUNT10') {
      setDiscount(0.1);
      alert('کد تخفیف با موفقیت اعمال شد!');
    } else {
      alert('کد تخفیف نامعتبر است.');
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalTotal = subtotal - subtotal * discount;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans text-gray-800">
  
      <div className="text-sm text-gray-400 mb-10">
        Home <span className="mx-2">/</span> <span className="text-gray-800 font-medium">Cart</span>
      </div>

 
      <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-8">
        <div className="grid grid-cols-4 p-4 border-b text-gray-500 font-medium text-sm">
          <div>Product</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Subtotal</div>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-8 text-center text-gray-500">سبد خرید شما خالی است.</div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-4 items-center p-4 border-b last:border-none">
         
              <div className="flex items-center gap-4 relative">
                <button 
                  onClick={() => removeItem(item.id)}
                  className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 transition"
                >
                  ✕
                </button>
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <span className="font-medium">{item.name}</span>
              </div>

           
              <div className="text-center">${item.price}</div>

           
              <div className="flex justify-center items-center">
                <div className="flex items-center border rounded px-3 py-1 gap-3">
                  <span>{String(item.quantity).padStart(2, '0')}</span>
                  <div className="flex flex-col text-[10px]">
                    <button onClick={() => handleQuantityChange(item.id, 1)} className="text-gray-500 hover:text-black">
                      ▲
                    </button>
                    <button onClick={() => handleQuantityChange(item.id, -1)} className="text-gray-500 hover:text-black">
                      ▼
                    </button>
                  </div>
                </div>
              </div>

         
              <div className="text-right font-medium">${item.price * item.quantity}</div>
            </div>
          ))
        )}
      </div>
    
      <div className="flex justify-between items-center mb-12">
        <button className="border border-gray-400 px-6 py-3 rounded text-sm font-medium hover:bg-gray-50 transition">
          Return To Shop
        </button>
        <button 
          onClick={() => alert('سبد خرید به‌روز شد!')}
          className="border border-gray-400 px-6 py-3 rounded text-sm font-medium hover:bg-gray-50 transition"
        >
          Update Cart
        </button>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
        <div className="flex gap-4 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Coupon Code" 
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="border border-gray-400 px-4 py-3 rounded text-sm outline-none focus:border-black w-64"
          />
          <button 
            onClick={applyCoupon}
            className="bg-red-500 text-white px-6 py-3 rounded text-sm font-medium hover:bg-red-600 transition"
          >
            Apply Coupon
          </button>
        </div>

        <div className="border border-gray-400 rounded p-6 w-full md:w-96">
          <h3 className="font-bold text-lg mb-4">Cart Total</h3>
          
          <div className="flex justify-between py-3 border-b text-sm">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between py-3 border-b text-sm text-green-600">
              <span>Discount:</span>
              <span>-{discount * 100}%</span>
            </div>
          )}

          <div className="flex justify-between py-3 border-b text-sm">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between py-4 font-bold text-base">
            <span>Total:</span>
            <span>${finalTotal}</span>
          </div>

          <button 
            onClick={() => alert('در حال انتقال به صفحه پرداخت...')}
            className="w-full bg-red-500 text-white py-3 rounded text-sm font-medium mt-4 hover:bg-red-600 transition text-center"
          >
            Procees to checkout
          </button>
        </div>
      </div>
    </div>
  );
}