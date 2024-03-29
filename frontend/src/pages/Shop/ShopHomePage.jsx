import styles from '../../styles/style'
import ShopInfo from "../../components/Shop/ShopInfo.jsx" ;
import ShopProfileData from "../../components/Shop/ShopProfileData.jsx" ;


const ShopHomePage = () => {
  return (
    <div className={`${styles.section} bg-[#f5f5f5] `}>
      <div className="w-full flex py-10 justify-between">
        <div className='w-[25%] bg-[white] h-[90vh] rounded-[4px] shadow-sm overscroll-y-scroll sticky top-10 left-0 z-10'>
          <ShopInfo isOwner = {true}/>
        </div>
        <div className="w-[72%] rouunded-[4px]">
          <ShopProfileData isOwner = {true} />
        </div>
      </div>

    </div>
  )
}

export default ShopHomePage