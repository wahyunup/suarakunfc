export interface ButtonProps {
   onClick? : () => void;
   children : React.ReactNode;
   className? : string;
   background? : 'primary' | 'secondary' | 'accent';
   img? : 'string';
}