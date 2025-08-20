import './globals.css';import Sidebar from '@/components/Sidebar';import { AuthProvider } from '@/components/AuthProvider';import { CartProvider } from '@/components/CartProvider';export const metadata = { title: 'Drop Directory', description: 'Prototype', };export default function RootLayout({ children }) { return ( <html lang='en'><body><AuthProvider><CartProvider><Sidebar /><div className='md:pl-64'><div className='md:pt-0 pt-12'>{children}</div></div></CartProvider></AuthProvider></body></html>); }
- import Sidebar from '@/components/Sidebar'
- import { AuthProvider } from '@/components/AuthProvider'
- import { CartProvider } from '@/components/CartProvider'
+ import Sidebar from '../components/Sidebar'
+ import { AuthProvider } from '../components/AuthProvider'
+ import { CartProvider } from '../components/CartProvider'
