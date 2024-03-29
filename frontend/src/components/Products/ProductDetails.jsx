import { useState } from "react";
import styles from "../../styles/style";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductDetails = ({ data }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState(1);
  const [click, setClick] = useState(false);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=04dafqhfalkfdha2314afsdfd");
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`  ${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className=" cursor-pointer"
                />
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer `}
                  >
                    <img
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                      src={data?.image_Url[0].url}
                      alt=""
                    />
                  </div>
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer `}
                  >
                    <img
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                      src={data?.image_Url[0].url}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}$
                  </h4>
                  <h3>{data.price ? data.price + "$" : null}</h3>
                </div>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div className="flex">
                    <button
                      onClick={decrementCount}
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    >
                      -
                    </button>
                    <div className="bg-gray-200 text-gray-800 font-medium px-4 py-[10px] w-[45px] flex justify-center">
                      {count}
                    </div>
                    <button
                      onClick={incrementCount}
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className=" cursor-pointer "
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className=" cursor-pointer "
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                >
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                <div className="flex items-center pt-8">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className=" w-[50px] h-[50px] rounded-full mr-2"
                  />
                  <div className="pr-8">
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-3 text-[15px]">
                      ({data.shop.ratings}) Ratings
                    </h5>
                  </div>
                  <div
                    onClick={handleMessageSubmit}
                    className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo data={data} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 !rounded ">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            onClick={() => setActive(1)}
            className={`text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]`}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            onClick={() => setActive(2)}
            className={`text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]`}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            onClick={() => setActive(3)}
            className={`text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]`}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      <div>
        {active === 1 ? (
          <>
            <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              facilis similique animi facere iure nobis fugit modi officiis sit
              adipisci pariatur consectetur corrupti error temporibus dolore,
              quasi cum architecto commodi. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Consectetur dolore doloribus omnis
              eaque, repellat similique perspiciatis necessitatibus dolorem?
              Unde ipsa quaerat neque sapiente cum soluta iusto nulla architecto
              officia hic! Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
            <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              vitae consequatur odio, dolore tenetur perferendis fugit at vel
              natus sequi esse quam obcaecati ad beatae sint quas aliquam
              quibusdam impedit.
            </p>
          </>
        ) : null}
        {active === 2 ? (
          <>
            <div className="w-full justify-center min-h-[40vh] flex items-center">
              <p>No reviews yet</p>
            </div>
          </>
        ) : null}
        {active === 3 && (
          <div className="w-full 800px:p-5 flex">
            <div className="w-full 800px:w-[50%]">
              <div className="flex items-center">
                <img
                  src={data.shop.shop_avatar.url}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}> {data.shop_name}</h3>
                  <h5 className="pb-2 text-[15px]">
                    ({data.shop.ratings}) Ratings
                  </h5>
                </div>
              </div>
              <p className="pt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                porro consectetur doloribus repudiandae, ducimus non minima?
                Error temporibus voluptates tempora iure rem modi tenetur
                dolores? Aperiam voluptate officia culpa ex!
              </p>
            </div>

            <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
              <div className=" text-left">
                <h5 className="font-[600]">
                  Joined on: <span className="font-[500]">14 March, 2023</span>
                </h5>
                <h5 className="font-[600] pt-3">
                  Total Products: <span className="font-[500]">143</span>
                </h5>
                <h5 className="font-[600]">
                  Total Reviews: <span className="font-[500]">2,561</span>
                </h5>
                <Link to="/">
                  <div
                    className={`${styles.button} rounded-[4px] h-[39px] mt-3`}
                  >
                    <h4 className="text-white">Visit Shop</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
