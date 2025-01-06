import clsx from "clsx";
import SuccessIcon from "../../../public/icon/success.png";
import ErrorIcon from "../../../public/icon/error.png";
import WarningIcon from "../../../public/icon/warning.png";
import Image from "next/image";
import { PopupProps } from "../@types/modal";

const IconPopUp = ({ type }: PopupProps) => {
  let iconSrc;
    if (type === "Success") {
        iconSrc = SuccessIcon;
    } else if (type === "Error") {
        iconSrc = ErrorIcon;
    } else if (type === "Warning"){
        iconSrc = WarningIcon;
    }

  return (
    <>
      { iconSrc && <Image alt="Popup icon" src={iconSrc} width={104} height={104}/>}
    </>
  );
};

export default IconPopUp;
