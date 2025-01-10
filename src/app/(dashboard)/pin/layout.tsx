import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui";

const layoutPin = ({ children, forgetpin }: LayoutProps) => {
  return (
    <>
      <section className="flex flex-col items-center gap-[52px] pt-[66px]">
        <Image
          src="/images/suaraku_logo.png"
          alt="Logo"
          width={193}
          height={54}
        />
        <div className="flex flex-col gap-[10px] w-full">
          <p className="font-bold text-[15px] text-center">Masukan pin</p>
          <div className="flex gap-[10px] px-8">
            <Input name="Input1" className="h-[48px]"/>
            <Input name="Input2" className="h-[48px]"/>
            <Input name="Input3" className="h-[48px]"/>
            <Input name="Input4" className="h-[48px]"/>
          </div>
        <p className="font-medium flex justify-center gap-1 text-[12px]">
          Lupa PIN?
          <Link href={!forgetpin ? "/auth/register" : ""} className="text-primary">
            Reset Disini
            {forgetpin}
          </Link>
        </p>
        </div>
        {children}
      </section>
    </>
  );
};

export default layoutPin;
