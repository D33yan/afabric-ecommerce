
import Navbar from '@/components/lib/ui/Nav'
import HeroSection from "@/components/lib/ui/HeroSection"
import { ProductCarousel } from '@/components/lib/ui/ProductSection'

export default function Hero() {
  return (
    <div className='max-w-7xl mx-auto space-y-1 overflow-hidden'>
    <Navbar/>
    <HeroSection />
    <ProductCarousel/>
    
</div>


  )
}