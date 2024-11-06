
import { Button } from "@/components/ui/button"
import Navbar from '@/lib/ui/Nav'

export default function HeroSection() {
  return (
    <div>
    <Navbar/>
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
            backgroundImage: "url('/bg1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height:'80%',
        }}
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          A Fabric
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl mx-auto">
          Let's Show you why we are different
        </p>
        <Button size="lg" className="bg-white rounded-3xl font-sans text-black hover:bg-gray-200 transition-colors">
          Shop Now
        </Button>
      </div>
    </div>
    
</div>


  )
}