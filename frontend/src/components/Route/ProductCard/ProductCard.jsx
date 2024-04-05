import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist.js";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import styles from "../../../styles/style";
import { useState, useEffect } from "react";
import { backend_url } from "../../../server.js";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions/cart.js";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const ProductCard = ({ data, i }) => {
  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

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
      console.log(data.stock, 1);
      if (data.stock < 1) {
        toast.error("Product stock limited");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addToCart(cartData));
        toast.success("Item add to cart");
      }
    }
  };

  return (
    <>
      <div className="w-full  h-[370px] bg-[white] rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/products/${data._id}`}>
          {
            <img
              src={`${backend_url}${data?.images[0]}`}
              alt=""
              className="w-full h-[170px] object-contain"
            />
          }
        </Link>

        <h5 className={`${styles.shop_name}`}>
          <Link to={`/shop/preview/${data?.shop._id}`}> {data.shop.name}</Link>
        </h5>

        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
          <div className="flex">
            <AiFillStar
              size={20}
              color="#F6BA00"
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              size={20}
              color="#F6BA00"
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              size={20}
              color="#F6BA00"
              className="mr-2 cursor-pointer"
            />
            <AiFillStar
              size={20}
              color="#F6BA00"
              className="mr-2 cursor-pointer"
            />
            <AiOutlineStar
              size={20}
              color="#F6BA00"
              className="mr-2 cursor-pointer"
            />
          </div>
          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                {data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}
                $
              </h5>
              <h4 className={`${styles.price}`}>
                {data.originalPrice ? data.originalPrice + " $" : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {data.sold_out} sold
            </span>
          </div>
        </Link>
        {/* side options */}
        <div>
          {click ? (
            <AiFillHeart
              size={24}
              className=" cursor-pointer absolute right-2 top-5"
              onClick={() => removeFromWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={24}
              className=" cursor-pointer absolute right-2 top-5"
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={24}
            className=" cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="black"
            title="Quick View"
          />
          <AiOutlineShoppingCart
            size={25}
            className=" cursor-pointer absolute right-2 top-24"
            onClick={() => addToCartHandler(data._id)}
            color="444"
            title="Add to cart"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
