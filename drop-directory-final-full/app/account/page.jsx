'use client';

import Image from 'next/image';
import { useAuth } from '../../components/AuthProvider';

export default function AccountPage() {
  const { user, logout, ready } = useAuth();

  if (!ready) {
    return <div className="p-6">Loading…</div>;
  }

  if (!user) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-2">Account</h1>
        <p className="text-gray-600">You are logged out. Use Login from the menu.</p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Account</h1>
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={user.avatar}
          alt={user.name}
          width={64}
          height={64}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <button
        className="rounded-lg bg-gray-800 text-white px-4 py-2 hover:bg-gray-700"
        onClick={() => logout()}
      >
        Logout
      </button>
    </main>
  );
}
