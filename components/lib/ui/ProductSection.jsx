'use client'

import React, { useState } from "react"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Denim Jacket",
    price: 89.99,
    category: "Men",
    images: {
      Blue: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
      Black: "https://images.pexels.com/photos/1234567/pexels-photo-black.jpeg",
      Gray: "https://images.pexels.com/photos/2345678/pexels-photo-gray.jpeg",
    },
    photographer: "The Lazy Artist Gallery",
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 89.99,
    category: "Men",
    images: {
      Blue: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
      Black: "https://images.pexels.com/photos/1234567/pexels-photo-black.jpeg",
      Gray: "https://images.pexels.com/photos/2345678/pexels-photo-gray.jpeg",
    },
    photographer: "The Lazy Artist Gallery",
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 89.99,
    category: "Men",
    images: {
      Blue: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
      Black: "https://images.pexels.com/photos/1234567/pexels-photo-black.jpeg",
      Gray: "https://images.pexels.com/photos/2345678/pexels-photo-gray.jpeg",
    },
    photographer: "The Lazy Artist Gallery",
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: 89.99,
    category: "Men",
    images: {
      Blue: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
      Black: "https://images.pexels.com/photos/1234567/pexels-photo-black.jpeg",
      Gray: "https://images.pexels.com/photos/2345678/pexels-photo-gray.jpeg",
    },
    photographer: "The Lazy Artist Gallery",
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 89.99,
    category: "Men",
    images: {
      Blue: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
      Black: "https://images.pexels.com/photos/1234567/pexels-photo-black.jpeg",
      Gray: "https://images.pexels.com/photos/2345678/pexels-photo-gray.jpeg",
    },
    photographer: "The Lazy Artist Gallery",
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: 6,
    name: "Denim Jacket",
    price: 89.99,
    category: "Men",
    images: {
      Blue: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
      Black: "https://images.pexels.com/photos/1234567/pexels-photo-black.jpeg",
      Gray: "https://images.pexels.com/photos/2345678/pexels-photo-gray.jpeg",
    },
    photographer: "The Lazy Artist Gallery",
    colors: ["Blue", "Black", "Gray"]
  },
  // Add other products with similar structure
]

export function ProductCarousel() {
  const [favorites, setFavorites] = useState([])
  const [selectedColors, setSelectedColors] = useState({})

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    )
  }

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color
    }))
  }

  return (
    <Carousel className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
      <CarouselContent className="-ml-1 sm:-ml-2">
        {products.map((product) => {
          const selectedColor = selectedColors[product.id] || product.colors[0]
          const imageUrl = product.images[selectedColor]

          return (
            <CarouselItem
              key={product.id}
              className="pl-1 sm:pl-2 basis-full xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/4"
            >
              <div className="p-1">
                <Card className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                  <CardContent className="relative flex aspect-[3/4] items-center justify-center p-0">
                    <img
                      src={imageUrl}
                      alt={`${product.name} in ${selectedColor}`}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-90"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white/90"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart
                        className={`h-5 w-5 transition-colors ${
                          favorites.includes(product.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }`}
                      />
                    </Button>
                    <div className="absolute bottom-0 left-0 right-0 p-1 bg-black/40 text-white text-xs">
                      Photo by {product.photographer} on Pexels
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start p-2">
                    <div className="flex justify-between items-start w-full mb-1">
                      <div>
                        <CardTitle className="text-sm font-semibold mb-1">
                          {product.name}
                        </CardTitle>
                        <span className="text-xs text-muted-foreground">
                          {product.category}
                        </span>
                      </div>
                      <span className="text-sm font-bold">${product.price}</span>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-1">
                        {product.colors.map((color) => (
                          <button
                            key={color}
                            className="w-3 h-3 rounded-full border border-gray-200 focus:outline-none"
                            style={{
                              backgroundColor:
                                color === "Floral"
                                  ? "linear-gradient(45deg, #FF69B4, #87CEEB)"
                                  : color
                            }}
                            onClick={() => handleColorSelect(product.id, color)}
                            title={color}
                          />
                        ))}
                      </div>
                      <Button
                        size="sm"
                        className="transition-all duration-300 hover:bg-primary-dark"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex -left-3 sm:-left-4 md:-left-5" />
      <CarouselNext className="hidden sm:flex -right-3 sm:-right-4 md:-right-5" />
    </Carousel>
  )
}
