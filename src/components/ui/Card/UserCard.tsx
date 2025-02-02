import Image from "next/image";
import { UserCardProps } from "@/components/@types/ui";
import Button from "../Button/Button";

const UserCard = ({ userImage, mu_nik, noTelp, username}: UserCardProps) => {
  return (
    <div className="bg-white px-[27px] flex h-[81px] justify-between items-center rounded-[10px] w-full">
      <div className="flex gap-[20px] items-center">
        <div className="w-[41px] h-[41px] bg-slate-500 rounded-full overflow-hidden">
          <Image src={userImage} className="w-full" alt="" width={41} height={41} />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-[14px]">{username}</p>
          <p className="font-medium text-[12px] flex items-center gap-[10px]">
            <Image
              className="w-[8px] h-[8px]"
              src={"/icon/PhoneIcon.png"}
              alt=""
              width={10}
              height={10}
            />
            {noTelp}
          </p>
          <p className="font-medium text-[12px] flex items-center gap-[10px]">
            <Image
              className="w-[8px] h-[8px]"
              src={"/icon/NIKIcon.png"}
              alt=""
              width={10}
              height={10}
            />
            {mu_nik}
          </p>
        </div>
      </div>
      <Button
        background="primary"
        className="w-[46px] h-[46px] flex justify-center items-center rounded-[9px]"
        shadow
      >
        {" "}
        <Image width={26} height={26} src={"/icon/bardcodeUser.png"} alt="" />
      </Button>
    </div>
  );
};

export default UserCard;
