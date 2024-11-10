'use client'

import Image from "next/image";
import Link from "next/link";
import "@/css-styles/header.css";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import { FiAlignRight, FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

  const toggle_Button = () => {

    setIsOpen(!isOpen)
  }
    return (
        <header>
            <main>

                {/* Logo Section */}
                <div className="logo">
                    <h3><Image src="/logo.png" height={40} width={56} alt="logo" /></h3>
                    <h1>Furniro</h1>
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className="links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/our-product">Shop</Link></li>
                        <li><Link href="/">Blog</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>

                    {/* Icons Section */}
                    <ul className="icons">
                        <li><Link href="/"><CgProfile size={30} /></Link></li>
                        <li><Link href="/"><FiSearch size={30} /></Link></li>
                        <li><Link href="/"><FaRegHeart size={30} /></Link></li>
                        <li><Link href="/"><MdOutlineShoppingCart size={30} /></Link></li>
                    </ul>
                </nav>
            </main>
        </header>
    );
}
