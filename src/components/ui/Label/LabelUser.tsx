import { LabelUserProps } from "@/components/@types/ui";
import Image from "next/image";

const LabelUser = ({ heading, subHeading, iconEdit, onClick }: LabelUserProps) => {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <h1 className="text-[13px] font-normal">{heading}</h1>
          <div>
            <Image
              onClick={onClick}
              className={iconEdit ? "cursor-pointer" : "hidden"}
              src={"/icon/editIcon.png"}
              width={14}
              height={14}
              alt="editIcon"
            />
          </div>
        </div>
        <p className="text-[13px] font-bold">{subHeading}</p>
      </div>
    </>
  );
};

export default LabelUser;
