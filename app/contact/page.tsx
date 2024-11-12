import Image from "next/image";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import "@/css-styles/our-product.css";
import "@/css-styles/blog.css";
import "@/css-styles/contact.css";
import ContactPage from "./contact";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

export default function Contact_Component() {
  return (
    <div className="merriweather-light">

      {/* Background Image Section */}
      <div className="adjust-image">
        <div className="custom-div">
          <Image src={"/logo.png"} height={40} width={60} alt="logo" />
          <h2>Contact</h2>
          <h4>
            <Link href="/" className="no-underline">
              Home <SlArrowRight size={12} />
            </Link> 
            Contact
          </h4>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch With Us</h2>
          <p>
            For more information about our product and services, please feel free to
            drop us an email.<br /> Our staff is always here to help you out. Dont hesitate!
          </p>
        </div>

        <div className="contact-content">
          {/* Left Side: Contact Information */}
          <div className="contact-info">
            <div className="contact-info-item">
              <IoLocation className="icon" />
              <div>
                <h3>Address</h3>
                <p>236 5th SE Avenue,<br /> New York NY10000,<br /> United States</p>
              </div>
            </div>
            <div className="contact-info-item">
              <FaPhoneAlt className="icon" />
              <div>
                <h3>Phone</h3>
                <p>Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="contact-info-item">
              <MdOutlineAccessTimeFilled className="icon" />
              <div>
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form">
            <ContactPage />
          </div>
        </div>
      </div>
    </div>
  );
}
