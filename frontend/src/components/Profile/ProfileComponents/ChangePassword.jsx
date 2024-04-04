import { useState } from "react";
import styles from "../../../styles/style";
import axios from "axios";
import { server } from "../../../server";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordChangeHandler = async (e) => {
    if (newPassword !== confirmPassword) {
      toast.error("NewPassword and Confirm Password mismatched!");
      return;
    }
    await axios
      .put(
        `${server}/user/update-password`,
        { oldPassword, newPassword },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="w-full px-5">
      <h1 className="text-center text-[25px] font-[600] text-[#000000ba] pb-2">
        Change Password
      </h1>
      <div className="w-full">
        <form className="flex flex-col items-center">
          <div className=" w-full 800px:w-[70%] mt-5">
            <label className="block pb-2">Enter your old password</label>
            <input
              type="text"
              className={`${styles.input} !w-[95%] border-blue-400 mb-4 800px:mb-0`}
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className=" w-full 800px:w-[70%] mt-5">
            <label className="block pb-2">Enter your new password</label>
            <input
              type="text"
              className={`${styles.input} !w-[95%] border-blue-400 mb-4 800px:mb-0`}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className=" w-full 800px:w-[70%] mt-5">
            <label className="block pb-2">Enter your confirm password</label>
            <input
              type="text"
              className={`${styles.input} !w-[95%] mb-4 border-blue-400 800px:mb-0`}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-center">
            <div
              onClick={(e) => passwordChangeHandler(e)}
              className={`w-[250px] flex items-center justify-center h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
            >
              Update
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
