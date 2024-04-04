import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Address, UserProfile,ChangePassword } from "../Profile/ProfileComponents/index";

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

      {/* CHANGE PASSWORD  */}
      {active === 6 && <ChangePassword />}

      {/* ADDRESS PAGE  */}
      {active === 7 && <Address />}
    </div>
  );
};

export default ProfileContent;
