import { useState } from "react";
import styles from "../../styles/style";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { backend_url } from "../../server";
import { IoBagHandleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { addToCart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";

const Cart = ({ setOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <div className="fixed flex justify-end   top-0 left-0 w-full bg-[#0000005b] z-10">
      <div className="  top-0  right-0 w-[25%] h-screen flex flex-col shadow-sm">
        <div className="flex h-[10%] bg-white w-full p-3  items-center justify-between pt-5 pr-5">
          <div className={`${styles.normalFlex} `}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">{cart.length} items</h5>
          </div>
          <RxCross1
            size={25}
            color="red"
            className="cursor-pointer"
            onClick={() => setOpenCart(false)}
          />
        </div>
        {cart.length === 0 ? (
          <div className="h-[80%] flex items-center justify-center text-[20px] font-[600] bg-[white] border-t-2">
            Cart is Empty
          </div>
        ) : (
          <div className="bg-[white] h-full overflow-y-scroll">
            {/* cart single item  */}
            <div className="w-full border-t">
              {cart &&
                cart.map((i, index) => (
                  <CartSingle
                    key={index}
                    data={i}
                    removeFromCartHandler={removeFromCartHandler}
                    quantityChangeHandler={quantityChangeHandler}
                  />
                ))}
            </div>
          </div>
        )}
        {/* checkout button  */}
        <div className="px-5 h-[10%] py-5  bg-white">
          <Link to="/checkout">
            <div className="h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]">
              <h1 className="text-[#fff] text-[18px] font-[600]">
                Checkout Now (USD $ {totalPrice})
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data?.qty);
  const totalPrice = data?.discountPrice * value;

  const increment = (data) => {
    if (data.stock < value + 1) {
      toast.error("Product stock limited");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div className="w-[10%] flex flex-col items-center justify-center">
          <div
            onClick={() => increment(data)}
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.normalFlex} justify-center cursor-pointer`}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span> {value}</span>
          <div
            onClick={() => decrement(data)}
            className={`bg-[#a7abb14f]  rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer`}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <div className="w-[30%] flex justify-center items-center">
          <img
            src={`${backend_url}${data?.images && data?.images[0]}`}
            alt="img"
            className=" h-[80px] ml-2"
          />
        </div>
        <div className="w-[50%]">
          <h1>{data?.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            {data?.originalPrice}*{value}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US ${totalPrice}
          </h4>
        </div>
        <div className="flex w-[10%] justify-end">
          <RxCross1
            size={10}
            className="cursor-pointer"
            onClick={() => removeFromCartHandler(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
