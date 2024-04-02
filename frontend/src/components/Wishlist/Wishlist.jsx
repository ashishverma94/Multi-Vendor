import { useState } from "react";
import styles from "../../styles/style";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { removeFromWishlist } from "../../redux/actions/wishlist";
import { backend_url } from "../../server";
import { addToCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler =(data)=>{
    const newData = {...data,qty:1}
    dispatch(addToCart(newData)) ;
    toast.success("Item added to cart")
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000005b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-between items-center px-3">
            <div className={`${styles.normalFlex} p-4`}>
              <AiOutlineHeart size={25} color="red" />
              <h5 className="pl-2 text-[20px] font-[500]">
                {wishlist?.length} items
              </h5>
            </div>
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishlist(false)}
            />
          </div>
          {wishlist && wishlist.length === 0 ? (
            <div className="flex justify-center items-center text-[17px] font-[600] pt-8">
              Empty Wishlist
            </div>
          ) : (
            <div className="w-full border-t">
              {wishlist &&
                wishlist.map((i, index) => (
                  <WishlistSingle
                    key={index}
                    data={i}
                    addToCartHandler={addToCartHandler}
                    removeFromWishlistHandler={removeFromWishlistHandler}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const WishlistSingle = ({ data,addToCartHandler, removeFromWishlistHandler }) => {

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div className="w-[10%]">
          <RxCross1
            size={15}
            className=" cursor-pointer"
            onClick={() => removeFromWishlistHandler(data)}
          />
        </div>
        <div className="w-[30%] flex justify-center items-center">
          <img
            src={`${backend_url}${data?.images && data?.images[0]}`}
            alt="img"
            className=" h-[80px] ml-2"
          />
        </div>
        <div className="w-[50%] pl-2">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US ${data.originalPrice}
          </h4>
        </div>
        <div className="w-[10%]">
          <BsCartPlus
            size={20}
            onClick={()=>addToCartHandler(data)}
            className=" cursor-pointer"
            title="Add to cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
