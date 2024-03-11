import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { AiOutlineFolder, AiOutlineGift } from "react-icons/ai";

const DashboardSideBar = ({ active }) => {
  return (
    <div className="w-full h-[89vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10 ">
      {/* single item  */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            title="Dashboard"
            className={`${active === 1 ? "text-[crimson]" : "text-[#555]"}`}
          />
          <h5
            className={` hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            title="Orders"
            className={`${active === 2 ? "text-[crimson]" : "text-[#555]"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <FiPackage
            size={30}
            title="Products"
            className={`${active === 3 ? "text-[crimson]" : "text-[#555]"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-create-product"
          className="w-full flex items-center"
        >
          <AiOutlineFolder
            size={30}
            title="Create Product"
            className={`${active === 4 ? "text-[crimson]" : "text-[#555]"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Create Product
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            title="Events"
            className={`${active === 5 ? "text-[crimson]" : "text-[#555]"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <VscNewFile
            size={30}
            title="Create Event"
            className={`${active === 6 ? "text-[crimson]" : "text-[#555]"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Create Event
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-withdraw-money"
          className="w-full flex items-center"
        >
          <CiMoneyBill
            size={30}
            title="Withdraw Money"
            className={`${active === 7 ? "text-[crimson]" : "text-[#555]"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Withdraw Money
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <BiMessageSquareDetail
            size={30}
            title="Messages"
            className={`${active === 8 ? "text-[crimson]" : "text-[#555]"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Shop Inbox
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard/coupouns" className="w-full flex items-center">
          <AiOutlineGift
            size={30}
            title="Coupouns"
            className={`${active === 9 ? "text-[crimson]" : "text-[#555]"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 9 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Discount Codes
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <HiOutlineReceiptRefund
            size={30}
            title="Refunds"
            className={`${active === 10 ? "text-[crimson]" : "text-[#555]"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 10 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Refunds
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-settings" className="w-full flex items-center">
          <IoSettingsOutline
            size={30}
            title="Settings"
            className={`${active === 11 ? "text-[crimson]" : "text-[#555]"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 11 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            settings
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
