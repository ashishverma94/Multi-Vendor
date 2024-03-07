import { useState } from "react";
import styles from "../styles/style";
import Header from "../components/Layout/Header";
import ProfileSidebar from "../components/Profile/ProfileSidebar.jsx";
import ProfileContent from "../components/Profile/ProfileContent.jsx";

const ProfilePage = () => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className=" 800px:w-[335px] w-[50px] sticky 800px:mt-0 mt-[18%]">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
      </div>
    </div>
  );
};

export default ProfilePage;
