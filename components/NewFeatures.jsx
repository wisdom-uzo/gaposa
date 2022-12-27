/* eslint-disable @next/next/no-img-element */
import styles from "../styles";

const NewFeatures = ({imgUrl, title, subtitle}) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
        <img  
          src={imgUrl}
          alt="" 
          className=" object-contain w-1/2 h-1/2" />
    </div>

    <h1 className="mt-[26px] font-bold text-white text-[24px]  leading-[30px]">Title {title}</h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] leading0-[32px] text-[#b0b0b0]">{subtitle}</p>

  </div>
);

export default NewFeatures;
