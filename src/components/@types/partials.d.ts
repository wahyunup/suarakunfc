export interface NavButtonProps {
    route : string
    children : React.ReactNode;
    classname? : string
    handleIsOpen? : () => void
}

export interface EditNumberProps {
    onClick : () => void;
}