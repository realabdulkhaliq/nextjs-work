'use client';
import { Inter } from '@next/font/google'
import Pricing from '@/components/pricing';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Pricing />
    </>
  )
}
