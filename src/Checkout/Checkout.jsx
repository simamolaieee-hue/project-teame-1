import { useState } from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [coupon, setCoupon] = useState('');
  const [message, setMessage] = useState('');
  const [discount, setDiscount] = useState(0);

  const products = [
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: 'g27cq4-500x500 1.png' },
    { id: 2, name: 'H1 Gamepad', price: 1100, quantity: 1, image: 'g92-2-500x500 1.png' },
  ];

  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const total = subtotal - discount;

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'SAVE10') {
      setDiscount(Math.round(subtotal * 0.1));
      setMessage('کد تخفیف اعمال شد!');
    } else {
      setMessage('کد اشتباه است.');
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      
  
      <nav className="mb-10 flex flex-wrap gap-2 text-sm text-gray-500">
        <Link to="/" className="hover:text-red-500">Account</Link>
        <span>/</span>
        <Link to="/my-account" className="hover:text-red-500">My Account</Link>
        <span>/</span>
        <Link to="/cart" className="hover:text-red-500">View Cart</Link>
        <span>/</span>
        <span className="text-black font-medium">Checkout</span>
      </nav>

      <h1 className="mb-8 text-3xl font-semibold">Billing Details</h1>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
  
        <section className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm text-gray-600">First Name*</span>
            <input type="text" required className="w-full rounded bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400" />
          </label>
          
          <label className="block">
            <span className="mb-2 block text-sm text-gray-600">Company Name</span>
            <input type="text" className="w-full rounded bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-gray-600">Street Address*</span>
            <input type="text" required className="w-full rounded bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-gray-600">Town/City*</span>
            <input type="text" required className="w-full rounded bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-gray-600">Phone Number*</span>
            <input type="tel" required className="w-full rounded bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-gray-600">Email Address*</span>
            <input type="email" required className="w-full rounded bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-red-400" />
          </label>
        </section>

    
        <section className="pt-14">
          <div className="space-y-5">
            {products.map((p) => (
              <div key={p.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
    
                  <img src={p.image} alt={p.name} className="w-12 h-12 object-contain" />
                  <span className="font-medium">{p.name}</span>
                  <span className="text-sm text-gray-500">× {p.quantity}</span>
                </div>
                <span className="font-semibold">${p.price * p.quantity}</span>
              </div>
            ))}
            <div className="border-b py-3 space-y-3">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span className="text-green-600">Free</span></div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600"><span>Discount</span><span>-${discount}</span></div>
              )}
              <div className="flex justify-between font-bold text-lg"><span>Total</span><span>${total}</span></div>
            </div>


            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="pay" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} />
                <span className="text-sm">Bank (VISA, Mastercard)</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="pay" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} />
                <span className="text-sm">Cash on delivery</span>
              </label>
            </div>

   
            <div className="mt-6 flex gap-2">
              <input 
                type="text" 
                placeholder="Coupon Code" 
                className="flex-1 rounded border px-4 py-2 outline-none focus:border-red-400"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button onClick={applyCoupon} className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition">Apply</button>
            </div>

            <button className="w-full rounded bg-red-500 py-3 font-bold text-white hover:bg-red-600 transition mt-4">
              Place Order
            </button>

            {message && <p className="text-center text-sm text-red-500 mt-2">{message}</p>}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Checkout;
               