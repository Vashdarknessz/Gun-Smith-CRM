import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import Nav from './components/Nav'

export default function Home() {
  return (
    <main>
      
      <div>
        Gun Smith CRM
      </div>
      
      <ProductCard></ProductCard>
    </main>
  )
}
