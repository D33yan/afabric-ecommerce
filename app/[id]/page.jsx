//  'use client'
// import { useState } from 'react'
// import { ShoppingCart, Heart, Share2, ChevronDown, Menu } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// const product = {
//   name: "Modern Leather Backpack",
//   price: 129.99,
//   description: "Elevate your everyday carry with our Modern Leather Backpack. Crafted from premium leather, this backpack combines style and functionality for the urban explorer.",
//   colors: ["Black", "Brown", "Tan"],
//   sizes: ["Small", "Medium", "Large"],
//   images: [
//     "https://images.public.blob.vercel-storage.com/leather-backpack-black-YDQR0GFVP1/leather-backpack-black-YDQR0GFVP1.jpg",
//     "https://images.public.blob.vercel-storage.com/leather-backpack-brown-YDQR0GFVP1/leather-backpack-brown-YDQR0GFVP1.jpg",
//     "https://images.public.blob.vercel-storage.com/leather-backpack-tan-YDQR0GFVP1/leather-backpack-tan-YDQR0GFVP1.jpg",
//   ]
// }

// export default function Component() {
//   const [selectedColor, setSelectedColor] = useState(product.colors[0])
//   const [selectedSize, setSelectedSize] = useState(product.sizes[1])
//   const [quantity, setQuantity] = useState(1)

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="sticky top-0 z-50 w-full border-b bg-white">
//         <div className="container flex h-16 items-center">
//           <Button variant="ghost" size="icon" className="mr-2 md:hidden">
//             <Menu className="h-6 w-6" />
//             <span className="sr-only">Toggle Menu</span>
//           </Button>
//           <div className="mr-4 hidden md:flex">
//             <a className="mr-6 flex items-center space-x-2" href="/">
//               <ShoppingCart className="h-6 w-6" />
//               <span className="font-bold">ACME Store</span>
//             </a>
//             <nav className="flex items-center space-x-6 text-sm font-medium">
//               <a className="text-foreground/60 transition-colors hover:text-foreground" href="/products">Products</a>
//               <a className="text-foreground/60 transition-colors hover:text-foreground" href="/collections">Collections</a>
//               <a className="text-foreground/60 transition-colors hover:text-foreground" href="/about">About</a>
//             </nav>
//           </div>
//           <div className="flex flex-1 items-center justify-end space-x-4">
//             <Button variant="ghost" size="icon">
//               <ShoppingCart className="h-5 w-5" />
//               <span className="sr-only">Cart</span>
//             </Button>
//           </div>
//         </div>
//       </header>
//       <main className="container mx-auto px-4 py-8 md:px-6 md:py-12">
//         <div className="grid gap-8 md:grid-cols-2">
//           <div className="space-y-4">
//             <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
//               <img
//                 src={product.images[0]}
//                 alt={product.name}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="grid grid-cols-3 gap-4">
//               {product.images.map((image, index) => (
//                 <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
//                   <img
//                     src={image}
//                     alt={`${product.name} - View ${index + 1}`}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="space-y-6">
//             <div>
//               <h1 className="text-3xl font-bold">{product.name}</h1>
//               <p className="text-2xl font-semibold mt-2">${product.price.toFixed(2)}</p>
//             </div>
//             <p className="text-gray-500">{product.description}</p>
//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="color" className="text-sm font-medium">
//                   Color
//                 </label>
//                 <Select value={selectedColor} onValueChange={setSelectedColor}>
//                   <SelectTrigger id="color" className="w-full">
//                     <SelectValue placeholder="Select a color" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {product.colors.map((color) => (
//                       <SelectItem key={color} value={color}>
//                         {color}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div>
//                 <label htmlFor="size" className="text-sm font-medium">
//                   Size
//                 </label>
//                 <Select value={selectedSize} onValueChange={setSelectedSize}>
//                   <SelectTrigger id="size" className="w-full">
//                     <SelectValue placeholder="Select a size" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {product.sizes.map((size) => (
//                       <SelectItem key={size} value={size}>
//                         {size}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div>
//                 <label htmlFor="quantity" className="text-sm font-medium">
//                   Quantity
//                 </label>
//                 <div className="flex items-center mt-1">
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   >
//                     -
//                   </Button>
//                   <Input
//                     type="number"
//                     id="quantity"
//                     value={quantity}
//                     onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
//                     className="w-20 text-center mx-2"
//                   />
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     onClick={() => setQuantity(quantity + 1)}
//                   >
//                     +
//                   </Button>
//                 </div>
//               </div>
//             </div>
//             <div className="flex space-x-4">
//               <Button className="flex-1">Add to Cart</Button>
//               <Button variant="outline" size="icon">
//                 <Heart className="h-5 w-5" />
//                 <span className="sr-only">Add to wishlist</span>
//               </Button>
//               <Button variant="outline" size="icon">
//                 <Share2 className="h-5 w-5" />
//                 <span className="sr-only">Share</span>
//               </Button>
//             </div>
//             <Tabs defaultValue="details" className="w-full">
//               <TabsList className="grid w-full grid-cols-3">
//                 <TabsTrigger value="details">Details</TabsTrigger>
//                 <TabsTrigger value="shipping">Shipping</TabsTrigger>
//                 <TabsTrigger value="returns">Returns</TabsTrigger>
//               </TabsList>
//               <TabsContent value="details" className="mt-4">
//                 <p className="text-sm text-gray-500">
//                   Our Modern Leather Backpack is made from full-grain leather and features adjustable straps,
//                   multiple compartments, and a padded laptop sleeve. Perfect for work, travel, or everyday use.
//                 </p>
//               </TabsContent>
//               <TabsContent value="shipping" className="mt-4">
//                 <p className="text-sm text-gray-500">
//                   Free standard shipping on orders over $100. Expedited and international shipping options available at checkout.
//                 </p>
//               </TabsContent>
//               <TabsContent value="returns" className="mt-4">
//                 <p className="text-sm text-gray-500">
//                   We offer a 30-day return policy for unused items in original packaging. See our returns page for more details.
//                 </p>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </div>
//       </main>
//       <footer className="border-t bg-white">
//         <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
//           <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
//             <div>
//               <h3 className="text-lg font-semibold">Shop</h3>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">All Products</a></li>
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">New Arrivals</a></li>
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Best Sellers</a></li>
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Sale</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">About</h3>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Our Story</a></li>
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Careers</a></li>
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Press</a></li>
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Sustainability</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Support</h3>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">FAQ</a></li>
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Shipping & Returns</a></li>
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contact Us</a></li>
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Size Guide</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Connect</h3>
//               <ul className="mt-4 space-y-2">
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Instagram</a></li>
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Twitter</a></li>
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Facebook</a></li>
//                 <li><a href="#" className="text-sm text-gray-500 hover:text-gray-700">Pinterest</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-8 border-t pt-8">
//             <p className="text-center text-xs text-gray-500">© 2023 ACME Store. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }