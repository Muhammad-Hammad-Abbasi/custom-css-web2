import { BsPatchCheck } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import '@/css-styles/nav.css';
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";

export default function Nav() {
  return (
    <div>
      <main className="nav-main">

        {/* first */}
        <div className="nav-item">
          <GrAchievement className="icon" />
          <div>
            <h2>High Quality</h2>
            <p>crafted from top materials</p>
          </div>
        </div>
         
           {/* second */}
        <div className="nav-item">
          <BsPatchCheck className="icon" />
          <div>
            <h2>Warranty protection</h2>
            <p>Over 2 years</p>
          </div>
        </div>

        {/* third */}
        <div className="nav-item">
          <BiSolidShoppingBags  className="icon" />
          <div>
            <h2>Free Shopping</h2>
            <p>Order over 150 $</p>
          </div>
        </div>

        {/* four */}
        <div className="nav-item">
          <FaUserAstronaut  className="icon" />
          <div>
            <h2>24 / 7 Support</h2>
            <p>Dedicated support</p>
          </div>
        </div>

      </main>
    </div>
  );
}
