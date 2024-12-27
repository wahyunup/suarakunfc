import SelectOption from "@/components/ui/Select/SelectOptions";
import { SelectProps } from "@/components/@types/ui"
const Select = ({children, value, name, id}:SelectProps) => {
    return (
        <>
            <select name={name} id={id}>
               <SelectOption value={value}>{children}</SelectOption>
            </select>
        </>
    )
}

export default Select;