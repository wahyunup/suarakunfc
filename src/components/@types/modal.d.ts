export interface PopupProps {
    type? : "Success" | "Error" | "Warning";
    title? : string;
    message? : string; 
    onClose? : () => void;
    onAction? : () => void;
}