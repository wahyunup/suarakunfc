import clsx from "clsx";
import Image from "next/image";
import { PopupProps } from "@/components/@types/ui";

const IconPopUp = ({ type }: PopupProps) => {
  let iconSrc;
    if (type === "success") {
        iconSrc = "/icon/success.png";
    } else if (type === "error") {
        iconSrc = "/icon/error.png";
    } else if (type === "warning"){
        iconSrc = "/icon/warning.png";
    }

  return (
    <>
      { iconSrc && <Image alt="Popup icon" src={iconSrc} width={104} height={104}/>}
    </>
  );
};

export default IconPopUp;
