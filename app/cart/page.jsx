'use client';
import { useCart } from '../../components/CartProvider';

export default function CartPage(){
  const { cart, remove, total, ready } = useCart();
  if(!ready) return <div className="p-6">Loading…</div>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-3">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between rounded-xl border bg-white p-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-md" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>
              <button className="text-red-600 hover:underline" onClick={() => remove(item.id)}>Remove</button>
            </div>
          ))}
          <div className="flex items-center justify-between border-t pt-3 font-semibold text-lg">
            <span>Grand Total</span>
            <span>₹{total}</span>
          </div>
          <button className="rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">Checkout (stub)</button>
        </div>
      )}
    </main>
  );
}
