import Image from "next/image"
import '@/css-styles/browser.css'


export default function Browser_Range() {
    return (
        <main className="product">

            {/* Section Browse The Range */}
            <div className="content">
                <h2 className="h2">Browse The Range</h2>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>


                <div className="main-containor">
                    <ul className="">
                        <Image
                            src={"/dining.png"}
                            height={350}
                            width={250}
                            alt="Dining Room"
                            className="img-containor"

                        />
                        <p className="">Dining</p>
                    </ul>

                    <ul className="">
                        <Image
                            src={"/living room.png"}
                            height={350}
                            width={250}
                            alt="Living Room"
                            className="img-containor"

                        />
                        <p className="">Living</p>
                    </ul>

                    <ul>
                        <Image
                            src={"/badroom.png"}
                            height={350}
                            width={250}
                            alt="Bed Room"
                            className="img-containor"

                        />
                        <p className="">Bedroom</p>
                    </ul>
                </div>
            </div>
        </main>
    )
}