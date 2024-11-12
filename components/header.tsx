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
    const [isOpen, setIsOpen] = useState(false);

    const toggleButton = () => {
        setIsOpen(!isOpen); // Toggle isOpen state
    };

    return (
        <header>
            <main>
                {/* Logo Section */}
                <div className="logo">
                    <h3><Image src="/logo.png" height={40} width={56} alt="logo" /></h3>
                    <h1>Furniro</h1>
                </div>

                {/* Toggle Button */}
                <button className="toggle-button" onClick={toggleButton}>
                    {isOpen ? <FaTimes size={24} /> : <FiAlignRight size={24} />}
                </button>

                {/* Navigation Links */}
                <nav className={`nav-open ${isOpen ? 'active' : ''}`}>
                    <ul className="links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/our-product">Shop</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>

                    {/* Icons Section */}
                    <ul className="icons">
                        <li><Link href="/contact"><CgProfile size={30} /></Link></li>
                        <li><Link href="/blog"><FiSearch size={30} /></Link></li>
                        <li><Link href="/"><FaRegHeart size={30} /></Link></li>
                        <li><Link href="/our-product"><MdOutlineShoppingCart size={30} /></Link></li>
                    </ul>
                </nav>
            </main>
        </header>
    );
}
