import {
  Address,
  AllOrders,
  UserProfile,
  ChangePassword,
} from "../Profile/ProfileComponents/index";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const ProfileContent = ({ active }) => {
  const { error, successMessage } = useSelector((state) => state?.user);
  console.log(active);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "ClearErrors" });
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch({ type: "ClearMessages" });
    }
  }, [error, successMessage]);

  return (
    <div className="w-full ">
      {/* PROFILE PAGE  */}
      {active === 1 && <UserProfile />}

      {/* order */}
      {active === 2 && <AllOrders />}

      {/* CHANGE PASSWORD  */}
      {active === 6 && <ChangePassword />}

      {/* ADDRESS PAGE  */}
      {active === 7 && <Address />}
    </div>
  );
};

export default ProfileContent;
