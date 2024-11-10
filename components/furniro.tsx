import Image from "next/image";
import '@/css-styles/furniro.css'

export default function Furniro() {
  return (
    <main className="furniro-main">
      <div className="header-section">
        <p>Share your setup with</p>
        <h3>#FurniroFurniture</h3>
      </div>

      <div className="image-grid">


        {/* First Section - 4 Images */}
        <div className="image-section-first">
          <Image src="/furniro-img1.png" height={350} width={200} alt="Image 1" className="box" />
          <Image src="/furniro-img2.png" height={280} width={430} alt="Image 2" className="box" />
          <Image src="/furniro-img3.png" height={280} width={290} alt="Image 3" className="box" />
          <Image src="/furniro-img4.png" height={200} width={340} alt="Image 4" className="box align-top" />
        </div>

        {/* Third Section - 4 Images */}
        <div className="image-section-last">
          <Image src="/furniro-img5.png" height={230} width={380} alt="Image 5" className="box" />
          <Image src="/furniro-img6.png" height={300} width={250} alt="Image 6" className="box" />
          <Image src="/furniro-img7.png" height={350} width={250} alt="Image 7" className="box" />
          <Image src="/furniro-img.png" height={270} width={380} alt="Image 8" className="box align-top" />
        </div>
      </div>
    </main>
  );
}
