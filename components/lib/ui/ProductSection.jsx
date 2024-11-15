'use client'

import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'

const products = [
  {
    id: 1,
    name: "Denim Jacket",
    price: 89.99,
    category: "Men",
    images: {
      Blue: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
      Black: "https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg",
      Gray: "https://images.pexels.com/photos/2911677/pexels-photo-2911677.jpeg",
    },
    photographer: "The Lazy Artist Gallery",
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: 2,
    name: "Leather Handbag",
    price: 129.99,
    category: "Women",
    images: {
      Brown: "https://images.pexels.com/photos/5462562/pexels-photo-5462562.jpeg",
      Black: "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg",
      Beige: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg",
    },
    photographer: "Cats Coming",
    colors: ["Brown", "Black", "Beige"]
  },
  {
    id: 3,
    name: "Summer Dress",
    price: 59.99,
    category: "Women",
    images: {
      Floral: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
      White: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg",
      Peach: "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg",
    },
    photographer: "Godisable Jacob",
    colors: ["Floral", "White", "Peach"]
  },
  {
    id: 4,
    name: "Sneakers",
    price: 79.99,
    category: "Unisex",
    images: {
      White: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      Black: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      Blue: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg",
    },
    photographer: "Melvin Buezo",
    colors: ["White", "Black", "Blue"]
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 49.99,
    category: "Accessories",
    images: {
      Black: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg",
      Tortoise: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
      Clear: "https://images.pexels.com/photos/701549/pexels-photo-701549.jpeg",
    },
    photographer: "Oleg Magni",
    colors: ["Black", "Tortoise", "Clear"]
  },
  {
    id: 6,
    name: "Watch",
    price: 199.99,
    category: "Accessories",
    images: {
      Silver: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
      Gold: "https://images.pexels.com/photos/9979710/pexels-photo-9979710.jpeg",
      Black: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg",
    },
    photographer: "Fernando Arcos",
    colors: ["Silver", "Gold", "Black"]
  },
]
const SkeletonCard = () => {
  return (
    <div className="flex overflow-hidden">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]">
          <Card className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg group bg-peach-100 animate-pulse-slow">
            <CardContent className="relative flex aspect-[3/4] items-center justify-center p-0">
              <div className="w-full h-full bg-peach-300 rounded-t-xl"></div>
              <div className="absolute top-2 right-2 w-8 h-8 bg-peach-300 rounded-full"></div>
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-peach-300"></div>
            </CardContent>
            <CardFooter className="flex flex-col items-start p-2 bg-peach-50">
              <div className="flex justify-between items-start w-full mb-1">
                <div>
                  <div className="h-4 bg-peach-300 rounded w-3/4 mb-1"></div>
                  <div className="h-3 bg-peach-300 rounded w-1/2"></div>
                </div>
                <div className="h-4 bg-peach-300 rounded w-1/4"></div>
              </div>
              <div className="flex justify-between items-center w-full mt-2">
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-4 h-4 bg-peach-300 rounded-full"></div>
                  ))}
                </div>
                <div className="h-8 w-24 bg-peach-300 rounded"></div>
              </div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

const ProductCard = ({ product, isFavorite, onToggleFavorite, selectedColor, onColorSelect }) => {
  const imageUrl = product.images[selectedColor]

  return (
    <Card className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg group bg-peach-100">
      <CardContent className="relative flex aspect-[3/4] items-center justify-center p-0">
        <Image
          src={imageUrl}
          alt={`${product.name} in ${selectedColor}`}
          layout="fill"
          objectFit="cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white/90"
          onClick={() => onToggleFavorite(product.id)}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
          <span className="sr-only">{isFavorite ? "Remove from favorites" : "Add to favorites"}</span>
        </Button>
        <div className="absolute bottom-0 left-0 right-0 p-1 bg-black/40 text-white text-xs">
          Photo by {product.photographer} on Pexels
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2 bg-peach-50">
        <div className="flex justify-between items-start w-full mb-1">
          <div>
            <CardTitle className="text-sm font-semibold mb-1 text-peach-900">
              {product.name}
            </CardTitle>
            <span className="text-xs text-peach-700">
              {product.category}
            </span>
          </div>
          <span className="text-sm font-bold text-peach-900">${product.price}</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-1">
            {product.colors.map((color) => (
              <motion.button
                key={color}
                className={`w-4 h-4 rounded-full border border-peach-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-peach-500 ${
                  selectedColor === color ? 'ring-2 ring-peach-500' : ''
                }`}
                style={{
                  backgroundColor: color.toLowerCase(),
                  backgroundImage: color === "Floral" ? "linear-gradient(45deg, #FF69B4, #87CEEB)" : undefined,
                }}
                onClick={() => onColorSelect(product.id, color)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Select ${color} color`}
              />
            ))}
          </div>
          <Button
            size="sm"
            className="transition-all duration-300 bg-peach-500 hover:bg-peach-600 text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Add to Cart</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default function ProductCarousel() {
  const [favorites, setFavorites] = useState([])
  const [selectedColors, setSelectedColors] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    skipSnaps: false,
    dragFree: true
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
      clearTimeout(timer)
    }
  }, [emblaApi, onSelect])

  const toggleFavorite = useCallback((productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    )
  }, [])

  const handleColorSelect = useCallback((productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color
    }))
  }, [])

  return (
    <div className="bg-peach-50 py-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden" ref={emblaRef}>
          {isLoading ? (
            <SkeletonCard />
          ) : (
            <div className="flex">
              {products.map((product) => (
                <div key={product.id} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%]">
                  <ProductCard
                    product={product}
                    isFavorite={favorites.includes(product.id)}
                    onToggleFavorite={toggleFavorite}
                    selectedColor={selectedColors[product.id] || product.colors[0]}
                    onColorSelect={handleColorSelect}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          <Button 
            onClick={scrollPrev} 
            className="bg-peach-500 hover:bg-peach-600 text-white transition-opacity duration-300"
            disabled={!prevBtnEnabled || isLoading}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button 
            onClick={scrollNext} 
            className="bg-peach-500 hover:bg-peach-600 text-white transition-opacity duration-300"
            disabled={!nextBtnEnabled || isLoading}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </div>
  )
}