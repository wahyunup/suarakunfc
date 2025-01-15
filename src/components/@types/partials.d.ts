export interface NavButtonProps {
    route : string
    children : React.ReactNode;
    classname? : string
    handleIsActive? : () => void
}

export interface EditNumberProps {
    onClick : () => void;
}