import Swiper_img from "./swiper";
import '@/css-styles/slider.css';
import '@/css-styles/swiper-custom.css'

export default function Slider() {
    return (
        <main className="slider-main">
            <div className="slider-containor">
                <div id="first">
                    <h3 className="h3">
                        <span>50+ Beautiful</span> Rooms Inspiration
                    </h3>
                    <p>Our designer already made a lot of beautiful prototypes of rooms to inspire you.</p>
                    <button className="buy-button">EXPLORE MORE</button>
                </div>

                <div id="second">
                    <Swiper_img />
                </div>
            </div>
        </main>
    );
}
