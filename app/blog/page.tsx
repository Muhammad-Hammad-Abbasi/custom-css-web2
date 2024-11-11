import Image from "next/image"
import '@/css-styles/our-product.css'
import { SlArrowRight } from "react-icons/sl"
import Link from "next/link"
import '@/css-styles/blog.css'
import { MdFreeCancellation, MdPerson } from "react-icons/md"
import { ImPriceTag } from "react-icons/im"

export default function Blog() {
  return (
    <div className="merriweather-light">
      {/* Background Image Section */}
      <div className="adjust-image ">
        <div className="custom-div">
          <Image src={"/logo.png"} height={40} width={60} alt="logo" />
          <h2>Blog</h2>

          <h4><Link href="/" className="no-underline">Home <SlArrowRight size={12} /></Link> Blog</h4>

        </div>
      </div>

       
       {/* blog 01 */}
      <main className="main-page">
        <div className="content-wrapper">
          <div className="blog-img-1"></div>
          <div className="content-details">
            <div className="text-align">
              <div className="icon-text">
                <MdPerson size={28} />
                <p>Admin</p>
              </div>
              <div className="icon-text">
                <MdFreeCancellation size={28} />
                <p>24 Oct 2022</p>
              </div>
              <div className="icon-text">
                <ImPriceTag size={23} />
                <p>wood</p>
              </div>
            </div>
            <div className="content-heading">
              <h2>Going all-in with millennial design</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <h3>
                <a href="/blog" className="read-more-link">Read more.</a>
              </h3>
            </div>
          </div>
        </div>
      </main>


       {/* blog 02 */}
       <main className="main-page">
        <div className="content-wrapper">
          <div className="blog-img-2"></div>
          <div className="content-details">
            <div className="text-align">
              <div className="icon-text">
                <MdPerson size={28} />
                <p>Admin</p>
              </div>
              <div className="icon-text">
                <MdFreeCancellation size={28} />
                <p>24 Oct 2022</p>
              </div>
              <div className="icon-text">
                <ImPriceTag size={23} />
                <p>Handmade</p>
              </div>
            </div>
            <div className="content-heading">
              <h2>Exploring new ways of decorating</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <h3>
                <a href="/blog" className="read-more-link">Read more.</a>
              </h3>
            </div>
          </div>
        </div>
      </main>


       {/* blog 03 */}
       <main className="main-page">
        <div className="content-wrapper">
          <div className="blog-img-3"></div>
          <div className="content-details">
            <div className="text-align">
              <div className="icon-text">
                <MdPerson size={28} />
                <p>Admin</p>
              </div>
              <div className="icon-text">
                <MdFreeCancellation size={28} />
                <p>24 Oct 2022</p>
              </div>
              <div className="icon-text">
                <ImPriceTag size={23} />
                <p>Wood</p>
              </div>
            </div>
            <div className="content-heading">
              <h2>Handmade pieces that took time to make</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <h3>
                <a href="/blog" className="read-more-link">Read more.</a>
              </h3>
            </div>
          </div>
        </div>
      </main>


    </div >
  )
}
