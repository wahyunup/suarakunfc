import { SelectProps } from "@/components/@types/ui";
const SelectOption = ({ children, value }: SelectProps) => {
    return <option value={value}>{children}</option>;
  };
  

export default SelectOption;