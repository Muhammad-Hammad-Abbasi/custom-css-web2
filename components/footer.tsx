import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "@/css-styles/footer.css"; // Link the CSS file

export default function Footer() {
    return (
        <footer className="footer-main">
            {/* Title Section */}
            <div>
                <h2 className="footer-title">Furniro.</h2>
            </div>

            {/* Navbar Links */}
            <div className="nav-wrapper">
                <nav className="nav-links">
                    <div className="col-direction">
                        <p>Links</p>
                        <Link href="/">Home</Link>
                        <Link href="/our-product">Shop</Link>
                        <Link href="/">Cart</Link>
                        <Link href="/blog">Blog</Link>
                    </div>
                    <div className="col-direction">
                        <p>Help</p>
                        <Link href="/">Payment Options</Link>
                        <Link href="/">Return</Link>
                        <Link href="/">Privacy Policies</Link>
                    </div>
                    <div className="col-direction">
                        <p>Subscribe</p>
                        <div className="subscribe-form">
                            <input type="email" placeholder="Enter your email" className="subscribe-input" />
                            <button className="subscribe-button">Subscribe</button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Social Media Section */}
            <div className="social-section">
                <h2>Follow Me:</h2>
                <div className="social-icons">
                    <Link href="https://www.linkedin.com/in/hammad-abbasi-95388628b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100068906216007" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </Link>
                    <Link href="https://www.instagram.com/mr_hammad.abbasi/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </Link>
                </div>
            </div>

            {/* Divider and Copyright */}
            <div className="bottom-bar"></div>
            <div className="copy-right">
                <p>&copy; 2024 Hammad Abbasi. All rights reserved.</p>
            </div>
        </footer>
    );
}
