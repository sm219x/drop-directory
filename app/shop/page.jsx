'use client';
import Image from 'next/image';
import { PRODUCTS } from '../../lib/products';
import { useCart } from '../../components/CartProvider';

export default function ShopPage(){
  const { add } = useCart();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shop A Drop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PRODUCTS.map(p => (
          <div key={p.id} className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="h-36 bg-gray-200 rounded-md mb-3 flex items-center justify-center overflow-hidden">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.name}
                  width={150}
                  height={150}
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = "<span class='text-gray-500 text-sm'>No Image</span>";
                  }}
                />
              ) : (
                <span className="text-gray-500 text-sm">No Image</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-gray-600">₹{p.price}</p>
              </div>
              <button
                className="rounded-lg bg-gray-900 text-white px-3 py-1 text-sm hover:bg-gray-800"
                onClick={() => add(p)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
