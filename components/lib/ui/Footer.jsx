"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <footer className="bg-[#e8c3a3] text-[#8B4513]">
      <motion.div
        className="container mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div className="mb-8 md:mb-0" variants={itemVariants}>
            <Link href="/" className="flex items-center">
              <span className="sr-only">A Fabrics</span>
              <svg
                className="h-8 w-auto"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                <path d="M12 3v6" />
              </svg>
            </Link>
            <p className="mt-4 text-sm">
              Making the world a better place through constructing elegant hierarchies.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
            <ul className="text-sm">
              <motion.li className="mb-4" variants={itemVariants}>
                <Link href="#" className="hover:underline hover:text-[#D2691E] transition-colors">
                  About
                </Link>
              </motion.li>
              <motion.li className="mb-4" variants={itemVariants}>
                <Link href="#" className="hover:underline hover:text-[#D2691E] transition-colors">
                  Careers
                </Link>
              </motion.li>
              <motion.li className="mb-4" variants={itemVariants}>
                <Link href="#" className="hover:underline hover:text-[#D2691E] transition-colors">
                  Brand Center
                </Link>
              </motion.li>
              <motion.li className="mb-4" variants={itemVariants}>
                <Link href="#" className="hover:underline hover:text-[#D2691E] transition-colors">
                  Blog
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="mb-6 text-sm font-semibold uppercase">Help center</h2>
            <ul className="text-sm">
              <motion.li className="mb-4" variants={itemVariants}>
                <Link href="#" className="hover:underline hover:text-[#D2691E] transition-colors">
                  Discord Server
                </Link>
              </motion.li>
              <motion.li className="mb-4" variants={itemVariants}>
                <Link href="#" className="hover:underline hover:text-[#D2691E] transition-colors">
                  Twitter
                </Link>
              </motion.li>
              <motion.li className="mb-4" variants={itemVariants}>
                <Link href="#" className="hover:underline hover:text-[#D2691E] transition-colors">
                  Facebook
                </Link>
              </motion.li>
              <motion.li className="mb-4" variants={itemVariants}>
                <Link href="#" className="hover:underline hover:text-[#D2691E] transition-colors">
                  Contact Us
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
            <ul className="text-sm">
              <motion.li className="mb-4" variants={itemVariants}>
                <Link href="#" className="hover:underline hover:text-[#D2691E] transition-colors">
                  Privacy Policy
                </Link>
              </motion.li>
              <motion.li className="mb-4" variants={itemVariants}>
                <Link href="#" className="hover:underline hover:text-[#D2691E] transition-colors">
                  Licensing
                </Link>
              </motion.li>
              <motion.li className="mb-4" variants={itemVariants}>
                <Link href="#" className="hover:underline hover:text-[#D2691E] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        <motion.hr
          className="my-6 border-[#D2691E] sm:mx-auto lg:my-8"
          variants={itemVariants}
        />
        <motion.div
          className="sm:flex sm:items-center sm:justify-between"
          variants={itemVariants}
        >
          <motion.span className="text-sm sm:text-center" variants={itemVariants}>
            © 2023{" "}
            <Link href="/" className="hover:underline hover:text-[#D2691E] transition-colors">
              Your Company™
            </Link>
            . All Rights Reserved.
          </motion.span>
          <motion.div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0" variants={itemVariants}>
            <Link href="#" className="hover:text-[#D2691E] transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link href="#" className="hover:text-[#D2691E] transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link href="#" className="hover:text-[#D2691E] transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link href="#" className="hover:text-[#D2691E] transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn account</span>
            </Link>
            <Link href="#" className="hover:text-[#D2691E] transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub account</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  )
}