import Image from "next/image";
import { UserCardProps } from "@/components/@types/ui";
import Button from "../Button/Button";
import userBarcode from "../../../../public/icon/bardcodeUser.png";
import NIKIcon from "../../../../public/icon/NIKIcon.png";
import PhoneIcon from "../../../../public/icon/PhoneIcon.png";

const UserCard = ({ userImage, mu_nik, noTelp, username }: UserCardProps) => {
  return (
    <>
      <div className="bg-white  border px-[27px] flex w-[334px] h-[81px] justify-between items-center rounded-[10px]">
        <div className="flex gap-[20px]">
          <div className="w-[41px] h-[41px] bg-slate-500 rounded-full overflow-hidden">
            <img src={userImage} className="w-full" alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-[14px]">{username}</p>
            <p className="font-medium text-[12px] flex items-center gap-[10px]">
                <Image className="w-[8px] h-[8px]" src={PhoneIcon} alt="" /> 
                {noTelp}</p>
            <p className="font-medium text-[12px] flex items-center gap-[10px]">
                <Image className="w-[8px] h-[8px]" src={NIKIcon} alt="" /> 
                {mu_nik}</p>
          </div>
        </div>
        <Button
          background="primary"
          className="w-[46px] h-[46px] flex justify-center items-center rounded-[9px]">
          {" "}
          <Image width={26} height={26} src={userBarcode} alt="" />
        </Button>
      </div>
    </>
  );
};

export default UserCard;
