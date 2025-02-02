export interface PopupProps {
  type?: "success" | "error" | "warning";
  title?: string;
  message?: string;
  onClose?: () => void;
  onAction?: () => void;
}

export interface PopupContextProps {
  showPopup: (data: PopupData) => void;
  hidePopup: () => void;
}

export interface SidebarContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
