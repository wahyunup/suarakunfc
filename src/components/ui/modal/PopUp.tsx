import { PopupProps } from "@/components/@types/ui";
import IconPopUp from "./IconPopUp";

const PopUp = ({ title, type, message, onClose, onAction }: PopupProps) => {
  const handleClick = () => {
    if (type === "success" && onAction) {
      onAction();
    }

    onClose?.();
  };

  return (
    <div className="flex justify-center items-center bg-black/15 inset-0 fixed">
      <div className="w-[276px] h-[398px] pt-[64px] rounded-[11px] flex flex-col overflow-hidden shadow-sm justify-between bg-white motion-preset-pop">
        <div className=" flex gap-[27px] flex-col items-center">
          <IconPopUp type={type} />
          <h1 className="text-[21px] font-bold text-[#5F5F5F]">{title}</h1>
          <p className="text-[13px] font-normal text-[#C8C8C8] w-[218px] text-center">{message}</p>
        </div>
        <button onClick={handleClick} className="w-full h-[59px] border-t border-[#F2F2F2] font-bold hover:bg-[#F2F2F2]">OKE</button>
      </div>
    </div>
  );
};

export default PopUp;
