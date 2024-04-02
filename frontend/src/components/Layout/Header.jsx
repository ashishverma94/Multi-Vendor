import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Cart from "../Cart/Cart";
import Navbar from "../Layout/Navbar";
import React, { useState } from "react";
import styles from "../../styles/style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import Wishlist from "../Wishlist/Wishlist";
import { backend_url } from "../../server.js";
import Dropdown from "../Layout/Dropdown.jsx";
import { BiMenuAltLeft } from "react-icons/bi";
import { categoriesData } from "../../static/data.jsx";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Header = ({ activeHeading }) => {
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [openWishlist, setOpenWishlist] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );

    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="main-img"
              />
            </Link>
          </div>

          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-[#faf7f7] w-full shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link key={index} to={`/products/${i._id}`}>
                        <div className="w-full flex items-start  py-3">
                          <img
                            src={`${backend_url}${i.images[0]}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1> {i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className={`${styles.button}`}>
            <Link to="/shop-create">
              <h1 className="text-[#fff] flex items-center">
                Become Seller <IoIosArrowForward className="ml-1 " />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          {/* category */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
              />
              {dropDown ? (
                <Dropdown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.normalFlex}`}>
            <Navbar activeHeading={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.normalFlex}`}>
              <div
                onClick={() => setOpenWishlist(true)}
                className="relative cursor-pointer mr-[15px]"
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 /83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc117] text-white font-mono leading-tight text-center text-[12px] w-4 h-4 p-0 m-0">
                  0
                </span>
              </div>
            </div>
            <div className={`${styles.normalFlex}`}>
              <div
                onClick={() => setOpenCart(true)}
                className="relative cursor-pointer mr-[15px]"
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 /83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc117] text-white font-mono leading-tight text-center text-[12px] w-4 h-4 p-0 m-0">
                  {cart && cart.length}
                </span>
              </div>
            </div>
            <div className={`${styles.normalFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${backend_url}${user.avatar}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt="avatar"
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 /83%)" />
                  </Link>
                )}
              </div>
            </div>
            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* MOBILE HEADER  */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } 800px:hidden w-full h-[60px] bg-white z-50 top-0 left-0 shadow-sm`}
      >
        <div className="w-full flex items-center justify-between mt-2">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
              className=" cursor-pointer"
            />
          </div>
          <div>
            <div className="relative mr-[20px]">
              <AiOutlineShoppingCart size={30} />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc117] text-white font-mono leading-tight text-center text-[11px] w-4 h-4 p-0 m-0">
                {cart && cart.length}
              </span>
            </div>
          </div>
        </div>
        {/* HEADER SIDEBAR  */}
        {open && (
          <div className={`  fixed w-full bg-[#0000005f] z-20 h-full left-0`}>
            <div className="fixed bg-white w-[60%] h-screen top-0 left-0 z-10">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div className="relative mr-[15px]">
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc117] text-white font-mono leading-tight text-center text-[12px] w-4 h-4 p-0 m-0">
                      0
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={20}
                  className="ml-4 mt-5 "
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="my-8 w-[92%] m-auto h-[40px] relative">
                <input
                  type="text"
                  placeholder="Search Product..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                />
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;
                    let Product_name = "";
                    for (let p = 0; p < d.length; p++) {
                      if (d[p] == " ") {
                        Product_name = Product_name + "-";
                      } else {
                        Product_name = Product_name + d[p];
                      }
                    }
                    return (
                      <Link key={index} to={`/products/${Product_name}`}>
                        <div className="w-full bg-[#e9e5e5] flex items-start py-3">
                          <img
                            src={`${backend_url}${i.images[0]}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1> {i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
              <Navbar activeHeading={activeHeading} />
              <div className={`${styles.button} m-auto !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1 " />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <div className="flex w-full justify-center">
                {!isAuthenticated ? (
                  <>
                    <Link
                      to="/sign-up"
                      className="text-[16px] rounded-[5px] px-5 py-2 bg-[#379bf2] mr-3 text-[#2a2727]"
                    >
                      Signup
                    </Link>
                    <Link
                      to="/login"
                      className="text-[16px] rounded-[5px] px-5 py-2 bg-[#379bf2] text-[#2a2727]"
                    >
                      Login
                    </Link>
                  </>
                ) : (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${backend_url}${user.avatar}`}
                        className="w-[70px] h-[70px] rounded-full  border-[#2eca48] border-[3px]"
                        alt="avatar"
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
