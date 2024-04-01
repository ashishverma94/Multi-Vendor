import styles from "../../styles/style";
import CountDown from "./CountDown.jsx";
import { backend_url } from "../../server.js";

const EventCard = ({ active, data }) => {
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2`}
    >
      <div className="w-full lg:w-[50%] m-auto">
        <img src={`${backend_url}${data?.images[0]}`} alt="event-poster" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>{data?.name} </h2>
        <p>{data?.description}</p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] pr-3 line-through text-[18px] text-[#d55b45]">
              {data?.originalPrice} $
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              {data?.discountPrice} $
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            1200 sold
          </span>
        </div>
        <CountDown finishedDate={data?.endDate}/>
      </div>
    </div>
  );
};

export default EventCard;
