import { EditNumberProps } from "@/components/@types/partials";
import { Button, Input } from "@/components/ui";

const EditNumber = ({onClick}:EditNumberProps) => {
    return (
        <div className="bg-black/20 absolute inset-0 flex justify-center items-center">
          <div className="bg-white w-80 p-5 rounded-lg flex flex-col gap-3 motion-preset-pop">
            <h1>Edit Nomer Handphone</h1>
            <Input name="mu_phoneNumber" placeholder="Nomer Telepon" type="sdasd" className="rounded-lg" />
            <Button background="primary" size="medium" type="submit" className="w-full rounded-lg" onClick={onClick}>Simpan</Button>
          </div>
        </div>
    )
}

export default EditNumber;