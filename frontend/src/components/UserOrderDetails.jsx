import styles from "../styles/style";
import { backend_url } from "../server";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { getAllOrdersOfUser } from "../redux/actions/order";

const UserOrderDetails = () => {
  const { orders, isLoading } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { id } = useParams();

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [rating, setRating] = useState(1);

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  const reviewHandler = ()=>{

  }

  return (
    <div className={`py-4 min-h-screen ${styles.section}`}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center mt-5">
          <BsFillBagFill size={30} color="crimson" />
          <h1 className="pl-2 text-[25px]">Order Details</h1>
        </div>
      </div>
      <div className="w-full flex items-center justify-between pt-6">
        <h5 className="text-[#00000084]">
          Order ID:<span>{data?._id.slice(0, 8)}</span>
        </h5>
        <h5 className="text-[#00000084]">
          Placed on: <span>{data?.createdAt?.slice(0, 10)}</span>
        </h5>
      </div>
      {/* order items  */}
      <br />
      {data &&
        data?.cart.map((item, index) => (
          <div className="w-full flex items-start mb-5">
            <img
              src={`${backend_url}/${item.images[0]}`}
              alt="img"
              className="w-[80px] h-[80px]"
            />
            <div className="w-full">
              <h5 className="pl-3 text-[20px]">{item.name}</h5>
              <h5 className="pl-3 text-[20px] text-[#000000a5]">
                US$ {item.discountPrice}*{item.qty}
              </h5>
            </div>
            {data?.status === "Delivered" && (
              <div
                onClick={() => setOpen(true) || setSelectedItem(item)}
                className={`${styles.button} text-[white] `}
              >
                Write a review
              </div>
            )}
          </div>
        ))}

      {/* review popup  */}
      {open && (
        <div className="w-full fixed top-0 left-0 h-screen flex items-center justify-center  bg-[#3636374d]">
          <div className="md:w-[35%] w-[350px] h-min shadow rounded-md bg-[white] p-3">
            <div className="w-[full flex p-3">
              <h2 className="text-[30px] ml-8 w-[85%] font-[500] font-Poppins text-center">
                Give a Review
              </h2>
              <div className=" w-[15%] flex justify-end">
                <RxCross1
                  size={30}
                  onClick={() => setOpen(false)}
                  color="white"
                  className="bg-[#eb485b] hover:bg-[red] hover:scale-110 ease-in-out rounded-[50%] p-1 cursor-pointer"
                />
              </div>
            </div>

            <div className="w-full flex">
              <div className=" w-[150px] h-[150px] flex items-center justify-center">
                <img
                  src={`${backend_url}/${selectedItem?.images[0]}`}
                  alt="selected-image"
                  className="w-[120px]"
                />
              </div>
              <div className=" flex flex-col items-center justify-center h-[150px]">
                <div className="pl-3 text-[20px]">{selectedItem?.name}</div>
                <h4 className="pl-3 text-[18px]">
                  US$ {selectedItem?.discountPrice} x {selectedItem?.qty}
                </h4>
              </div>
            </div>
            {/* ratings  */}
            <h5 className="font-[500] w-full text-center pl-3 text-[20px]">
              Give a Rating <span className="text-red-500 ">*</span>
            </h5>
            <div className="flex w-full justify-center  ml-2 pt-1">
              {[1, 2, 3, 4, 5].map((i) =>
                rating >= i ? (
                  <AiFillStar
                    key={i}
                    className="m-3 cursor-pointer"
                    color="rgb(246,186,0)"
                    size={35}
                    onClick={() => setRating(i)}
                  />
                ) : (
                  <AiOutlineStar
                    key={i}
                    className="m-3 cursor-pointer"
                    color="rgb(246,186,0)"
                    size={35}
                    onClick={() => setRating(i)}
                  />
                )
              )}
            </div>
            <div className="w-full ml-3">
              <label className="block text-[19px] font-[500]">
                Write your feedback
                <span className="ml-1 font-[400] text-[15px] text-[#514f4f]">
                  ( Optional )
                </span>
              </label>
              <textarea
                className="mt-2 w-[95%] border-[2px] border-[#a19f9f] rounded-lg p-2 outline-none"
                name="comment"
                id=""
                cols="20"
                rows="5"
                placeholder="How was your product? Write your expression about it!"
              ></textarea>
            </div>
            <div className="flex items-center justify-center mt-2">
              <div
              onClick={reviewHandler}
              className="bg-[#e2b839] cursor-pointer font-[600] text-[20px] px-3 py-1 rounded-[5px]  hover:scale-105 hover:bg-[#dcb64c] ease-in-out duration-500  hover:rounded-[10px]">
                Submit
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="border-t text-right w-full">
        <h5 className="pt-3 text-[18px]">
          Total Price: <strong>US$ {data?.totalPrice}</strong>
        </h5>
      </div>
      <br />
      <div className="w-full 800px:flex items-center">
        <div className="w-full 800px:w-[60%]">
          <h4 className="pt-3 text-[20px] font[600]">Shipping Address:</h4>
          <h4 className="pt-3 text-[20px]">
            {data?.shippingAddress.address1 +
              " " +
              data?.shippingAddress.address2}
          </h4>
          <h4 className="text-[20px]">{data?.shippingAddress.country}</h4>
          <h4 className="text-[20px]">{data?.shippingAddress.state}</h4>
          <h4 className="text-[20px]">{data?.user?.phoneNumber}</h4>
        </div>

        <div className="w-fll 800px:w-[40%]">
          <h4 className="pt-3 text-[20px]">Payment Info:</h4>
          <h4>
            Status:
            {data?.paymentInfo?.status ? data?.paymentInfo?.status : "Not Paid"}
          </h4>
        </div>
      </div>
      <Link to="/">
        <span className={`${styles.button}  text-white`}>Send Message</span>
      </Link>
      <br />
    </div>
  );
};

export default UserOrderDetails;
