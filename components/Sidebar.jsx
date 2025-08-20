'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, ShoppingCart, Home, User, MessageSquare, PlusSquare } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { useState } from 'react';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/sell', label: 'Sell Something', icon: PlusSquare },
  { href: '/shop', label: 'Shop A Drop', icon: ShoppingCart },
  { href: '/cart', label: 'Cart', icon: ShoppingCart },
  { href: '/chats', label: 'Chats', icon: MessageSquare },
  { href: '/account', label: 'Account', icon: User },
];

export default function Sidebar(){
  const pathname = usePathname();
  const { user, login, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const Nav = () => (
    <nav className="mt-6 space-y-1">
      {links.map(({ href, label, icon: Icon }) => (
        <Link key={href} href={href} onClick={()=>setOpen(false)}>
          <div className={clsx(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800/60",
            pathname === href ? "bg-gray-800 text-white" : "text-gray-200"
          )}>
            <Icon size={18} />
            <span>{label}</span>
          </div>
        </Link>
      ))}
      <div className="pt-4 border-t border-gray-800 mt-4">
        {!user ? (
          <button className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 px-3 py-2 text-sm font-medium text-white"
            onClick={()=>{ login(); router.push('/'); setOpen(false); }}>Login</button>
        ) : (
          <button className="w-full rounded-lg bg-gray-700 hover:bg-gray-600 px-3 py-2 text-sm font-medium text-white"
            onClick={()=>{ logout(); router.push('/login'); setOpen(false); }}>Logout</button>
        )}
      </div>
    </nav>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gray-900 text-white flex items-center justify-between px-4 h-12">
        <button onClick={()=>setOpen(true)} aria-label="Open Menu"><Menu /></button>
        <span className="font-semibold">Drop Directory</span>
        <span className="w-6" />
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-4 z-30">
        <div className="w-full">
          <div className="text-lg font-bold">Drop Directory</div>
          <Nav />
        </div>
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={()=>setOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-72 bg-gray-900 text-white p-4 shadow-xl">
            <div className="text-lg font-bold">Menu</div>
            <Nav />
          </div>
        </div>
      )}
    </>
  );
}
