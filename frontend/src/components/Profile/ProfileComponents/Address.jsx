import {
  deleteUserAddress,
  updateUserAddress,
} from "../../../redux/actions/user";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../../styles/style";
import { AiOutlineDelete } from "react-icons/ai";
import { Country, State } from "country-state-city";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";

const Address = () => {
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [zipCode, setZipCode] = useState();
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [addressType, setAddressType] = useState("");

  const addressTypeData = [
    {
      name: "Default",
    },
    {
      name: "Home",
    },
    {
      name: "Office",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (addressType === "" || country === "" || state === "") {
      toast.error("Please fill all fields!");
    } else {
      dispatch(
        updateUserAddress(country, state, address1, address2, addressType)
      );
      setOpen(false);
      setState("");
      setCountry("");
      setZipCode("");
      setAddress1("");
      setAddress2("");
      setAddressType("");
    }
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteUserAddress(id));
  };

  return (
    <div className="w-full px-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          {open && (
            <div className="fixed w-full h-screen bg-[#00000048] top-0 left-0 flex items-center justify-center">
              <div className="lg:w-[35%] h-[70vh] rounded shadow relative bg-white ">
                <div className="w-full flex justify-between p-3">
                  <h1 className="text-center w-[95%] items-center text-[25px] font-Poppins">
                    Add New Address
                  </h1>
                  <RxCross1
                    size={30}
                    className=" cursor-pointer"
                    onClick={() => setOpen(false)}
                  />
                </div>

                <div className="w-full">
                  <form aria-required className="w-full">
                    <div className="w-full block p-4">
                      <div className="">
                        <div className="flex">
                          <div className="w-full pb-2">
                            <label className="block pb-2">Country</label>
                            <select
                              name=""
                              id=""
                              className="w-[95%] border border-black h-[40px] rounded-[5px]"
                              value={country}
                              onChange={(e) => setCountry(e.target.value)}
                            >
                              <option value="" className="block border  pb-2">
                                Choose your country
                              </option>
                              {Country &&
                                Country?.getAllCountries().map((item) => {
                                  return (
                                    <option
                                      className="block pb-2"
                                      key={item?.isoCode}
                                      value={item?.isoCode}
                                    >
                                      {item?.name}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>

                          <div className="w-full pb-2">
                            <label className="block pb-2">State</label>
                            <select
                              name=""
                              id=""
                              className="w-[95%] border border-black h-[40px] rounded-[5px]"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                            >
                              <option value="" className="block border  pb-2">
                                Choose your state
                              </option>
                              {State &&
                                State?.getStatesOfCountry(country).map(
                                  (item) => {
                                    return (
                                      <option
                                        className="block pb-2"
                                        key={item.isoCode}
                                        value={item.isoCode}
                                      >
                                        {item.name}
                                      </option>
                                    );
                                  }
                                )}
                            </select>
                          </div>
                        </div>

                        <div className="w-full pb-2">
                          <label className="block pb-2">Address 1</label>
                          <input
                            type="address"
                            className={`${styles?.input} py-2 border-black`}
                            required
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                          />
                        </div>

                        <div className="w-full pb-2">
                          <label className="block pb-2">Address 2</label>
                          <input
                            type="address"
                            className={`${styles.input} py-2 border-black`}
                            required
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                          />
                        </div>

                        <div className="flex gap-2">
                          <div className="w-full  pb-4">
                            <label className="block pb-2">Zip Code</label>
                            <input
                              type="address"
                              className={`${styles.input} py-2 border-black`}
                              required
                              value={zipCode}
                              onChange={(e) => setZipCode(e.target.value)}
                            />
                          </div>

                          <div className="w-full pb-2">
                            <label className="block pb-2">Address Type</label>
                            <select
                              name=""
                              id=""
                              className="w-[95%] border border-black h-[40px] rounded-[5px]"
                              value={addressType}
                              onChange={(e) => setAddressType(e.target.value)}
                            >
                              <option value="" className="block border  pb-2">
                                Choose Address Type
                              </option>
                              {addressTypeData &&
                                addressTypeData.map((item) => {
                                  return (
                                    <option
                                      className="block pb-2"
                                      key={item.isoCode}
                                      value={item.isoCode}
                                    >
                                      {item.name}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="w-full flex items-center justify-center text-white pb-2">
                        <button
                          onClick={(e) => handleSubmit(e)}
                          type="submit"
                          className={`${styles.button} text-white mt-5 cursor-pointer`}
                          required
                          readOnly
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          <div className="flex w-full items-center justify-between">
            <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
              My Addresses
            </h1>
            <div
              onClick={() => setOpen(true)}
              className={`${styles.button} !rounded-md`}
            >
              <span className="text-[white] ">Add New</span>
            </div>
          </div>
          <br />
          {/* single address  */}
          {user &&
            user?.addresses.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full bg-white h-min 800px:h-[70px] rounded-[4px] flex items-center px-3 mb-3 shadow justify-between pr-10"
                >
                  <div className="flex items-center">
                    <h5 className="pl-5 font-[600]">{item?.addressType}</h5>
                  </div>
                  <div className="pl-8 flex items-center">
                    <h6 className="text-[12px] 800px:text-[unset]">
                      {item?.address1} {`, `}
                      {item?.address2}
                    </h6>
                  </div>
                  <div className="pl-6 flex items-center">
                    <h6 className="text-[12px] 800px:text-[unset]">
                      {item?.zipCode}
                    </h6>
                  </div>
                  <div className="min-w-[10%] flex items-center justify-between pl-8">
                    <AiOutlineDelete
                      size={25}
                      className=" cursor-pointer"
                      onClick={(e) => handleDelete(e, item?._id)}
                    />
                  </div>
                </div>
              );
            })}
          {user && user?.addresses?.length === 0 && (
            <h5 className="text-center pt-5 text-[18px]">
              You not have any saved address
            </h5>
          )}
        </>
      )}
    </div>
  );
};

export default Address;
