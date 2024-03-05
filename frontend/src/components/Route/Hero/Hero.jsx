import { Link } from "react-router-dom";
import styles from "../../../styles/style";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collection for <br /> Home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nemo
          ducimus nisi ratione tenetur<br></br> voluptates at ab, aut, deleniti
          incidunt itaque odio quaerat, commodi nesciunt odit <br /> veniam
          exercitationem tempore. Eveniet!
        </p>
        <Link to="/products">
          <div className={`${styles.button} mt-5`}>
            <span className="text-white font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
