import { createContext, useContext, useState } from "react";
import { PopupProps, PopupContextProps } from "./@types/context";
import PopUp from "@/components/ui/Modal/PopUp";

const PopupContext = createContext<PopupContextProps | null>(null);

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [popupData, setPopupData] = useState<PopupProps | null>(null);

  const showPopup = (data: PopupProps) => {
    setPopupData(data);
  };

  const hidePopup = () => {
    setPopupData(null);
  };

  return (
    <PopupContext.Provider value={{ showPopup, hidePopup }}>
      {children}
      {popupData && (
        <PopUp
          type={popupData.type}
          title={popupData.title}
          message={popupData.message}
          onAction={popupData.onAction}
          onClose={hidePopup}
        />
      )}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within PopupProvider");
  }
  return context;
};