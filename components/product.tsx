import Image from "next/image"
import '@/css-styles/our-product.css'
import Link from "next/link"


export default function Our_Product() {
  return (
    <main className="product-main">
      {/* Section Our Products  */}
      <div className="page-center">
        <h2 className="h1">Our Product</h2>

        <div >
          <div className="img-content">

            {/* 01 */}
            <div id="one">
              <Image
                src={"/syltherine-img.png"}
                height={250}
                width={250}
                alt="Syltherine"


              />

              <div>
                <h2>Syltherine</h2>
                <p>Stylish cafe chair</p>
                <div>
                  <h3>Rp 2.500.000</h3>
                  <p className="underline">Rp 3.500.000</p>
                </div>
              </div>
            </div>


            {/* 02 */}
            <div id="two">

              <Image
                src={"/leviosa-img.png"}
                height={250}
                width={250}
                alt="leviosa"


              />

              <div>
                <h2>leviosa</h2>
                <p>Stylish cafe chair</p>
                <h3>Rp 2.500.000</h3>

              </div>
            </div>


            {/* 03 */}
            <div id="three">

              <Image
                src={"/luxury-sofa-img.png"}
                height={250}
                width={250}
                alt="luxury-sofa"


              />

              <div>
                <h2>Lolito</h2>
                <p>Luxury big sofa</p>
                <div>
                  <h3>Rp 7.000.000</h3>
                  <p className="underline">Rp 14.000.000</p>
                </div>
              </div>
            </div>


            {/* 04 */}
            <div id="four">

              <Image
                src={"/outdoor-tables-img.png"}
                height={250}
                width={250}
                alt="outdoor-table"


              />

              <div>
                <h2>Respira</h2>
                <p>Outdoor bar table and stool</p>
                <h3>Rp 500.000</h3>
              </div>
            </div>

            {/* 05 */}
            <div id="five">

              <Image
                src={"/night-lamp-img.png"}
                height={250}
                width={250}
                alt="night-lamp"


              />

              <div>
                <h2>Grifo</h2>
                <p>Night lamp</p>
                <h3>Rp 1.500.000</h3>
              </div>
            </div>


            {/* 06 */}
            <div id="six">

              <Image
                src={"/muggo-img.png"}
                height={250}
                width={250}
                alt="muggo"


              />

              <div>
                <h2>Muggo</h2>
                <p>Small mug</p>
                <h3>Rp 150.000</h3>
              </div>
            </div>


            {/* 07 */}
            <div id="seven">

              <Image
                src={"/cute-bedset-img.png"}
                height={250}
                width={250}
                alt="cute-bedset"


              />

              <div>
                <h2>Pingky</h2>
                <p>Cute bed set</p>
                <div>
                  <h3>Rp 7.000.000</h3>
                  <p className="underline">Rp 14.000.000</p>
                </div>
              </div>
            </div>


            {/* 08 */}
            <div id="eight">

              <Image
                src={"/minimalist-img.png"}
                height={250}
                width={250}
                alt="minimalist"


              />

              <div >
                <h2 >Potty</h2>
                <p>Minimalist flower pot</p>
                <h3 >Rp 500.000</h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Link href="/our-product" style={{ textDecoration: 'none' }}>
            <button className="our-button">SHOW MORE</button>
          </Link>
        </div>

      </div>
    </main>
  )
}