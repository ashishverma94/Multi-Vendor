import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { toast } from "react-toastify";
import styles from "../../styles/style";
import { backend_url } from "../../server";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";

const ProductDetails = ({ data }) => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { products } = useSelector((state) => state.products);

  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState(1);
  const [click, setClick] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsShop(data?.shop?._id));
    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data, wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited");
      } else {
        const cartData = { ...data, qty: count };
        dispatch(addToCart(cartData));
        toast.success("Item add to cart");
      }
    }
  };

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
    <div className="bg-[white]">
      {data ? (
        <div className={`  ${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full  py-5">
            <div className="block w-full  800px:flex">
              <div className="w-full flex flex-col p-3  items-center 800px:w-[50%]">
                <div className="flex justify-center items-center h-[340px] w-full">
                  <img
                    src={`${backend_url}${data.images && data.images[0]}`}
                    alt=""
                    className=" h-[320px] cursor-pointer"
                  />
                </div>
                <div className="w-full bg-[] h-[170px] flex justify-around mt-3">
                  <div
                    className={`flex items-center${
                      select === 0 ? "border" : "null"
                    } cursor-pointer `}
                  >
                    <img
                      className="h-[170px]"
                      onClick={() => setSelect(0)}
                      src={`${backend_url}${data.images && data.images[0]}`}
                      alt=""
                    />
                  </div>
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer `}
                  >
                    <img
                      className="h-[170px]"
                      onClick={() => setSelect(0)}
                      src={`${backend_url}${data.images && data.images[1]}`}
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
                    {data.discountPrice}$
                  </h4>
                  <h3>
                    {data.originalPrice ? data.originalPrice + "$" : null}
                  </h3>
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
                        onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className=" cursor-pointer "
                        onClick={() => addToWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  onClick={() => addToCartHandler(data?._id)}
                  className={`${styles.button} !mt-6  !rounded !h-11 flex items-center`}
                >
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                <div className="flex items-center pt-8">
                  <Link to={`/shop/preview/${data?.shop._id}`}>
                    <img
                      src={`${backend_url}${data?.shop?.avatar}`}
                      alt="shop-avatar"
                      className=" w-[50px] h-[50px] rounded-full mr-2"
                    />
                  </Link>
                  <div className="pr-8">
                    <Link to={`/shop/preview/${data?.shop._id}`}>
                      <h3 className={`${styles.shop_name}`}>
                        {data.shop.name}
                      </h3>
                    </Link>
                    <h5 className="pb-3 text-[15px]">({"4/5"}) Ratings</h5>
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
          <ProductDetailsInfo data={data} products={products} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({ data, products }) => {
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
              {data.description}
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
                  src={`${backend_url}${data?.shop?.avatar}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}> {data.shop_name}</h3>
                  <h5 className="pb-2 text-[15px]">({"4/5"}) Ratings</h5>
                </div>
              </div>
              <p className="pt-2">{data.shop.description}</p>
            </div>

            <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
              <div className=" text-left">
                <h5 className="font-[600]">
                  Joined on:{" "}
                  <span className="font-[500]">
                    {data.shop?.createdAt.slice(0, 10)}
                  </span>
                </h5>
                <h5 className="font-[600] pt-3">
                  Total Products:{" "}
                  <span className="font-[500]">{products?.length}</span>
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
