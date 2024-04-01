import axios from "axios";
import styles from "../../styles/style";
import { useSelector } from "react-redux";
import { backend_url, server } from "../../server";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShopInfo = ({ isOwner }) => {
  const [data, setData] = useState({});

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${server}/shop/get-shop-info/${id}`)
      .then((res) => {
        setData(res.data.shop);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { seller } = useSelector((state) => state.seller);
  const logoutHandler = () => {
    axios.get(`${server}/shop/logout`, { withCredentials: true });
    window.location.reload();
  };
  return (
    <div className="">
      <div className="w-full  py-5">
        <div className="w-full flex items-center justify-center">
          <img
            src={`${backend_url}${seller?.avatar}`}
            alt=""
            className=" border-gray-950 border-[1px] w-[120px] h-[120px] object-cover rounded-full"
          />
        </div>
        <h3 className="text-center py-2 text-[20px]">{seller.name}</h3>
        <p className="text-[16px] text-[#000000a6] p-[10px] flex  items-center ">
          {seller.description}
        </p>
      </div>
      <div className="p-2 ">
        <h5 className="font-[600]">Address</h5>
        <h4 className="text-[#000000a6]">{seller.address}</h4>
      </div>
      <div className="p-2 ">
        <h5 className="font-[600]">Phone Number</h5>
        <h4 className="text-[#000000a6]">{seller.phoneNumber}</h4>
      </div>
      <div className="p-2 ">
        <h5 className="font-[600]">Total Products</h5>
        <h4 className="text-[#000000a6]">10</h4>
      </div>
      <div className="p-2 ">
        <h5 className="font-[600]">Shop Ratings</h5>
        <h4 className="text-[#000000a6]">4/5</h4>
      </div>
      <div className="p-2 ">
        <h5 className="font-[600]">Joined On</h5>
        <h4 className="text-[#000000a6]">{seller.createdAt.slice(0, 10)}</h4>
      </div>
      {isOwner && (
        <div className="py-3 px-4">
          <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
            <span className="text-white">Edit Shop</span>
          </div>
          <div
            onClick={logoutHandler}
            className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
          >
            <span className="text-white">Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopInfo;
