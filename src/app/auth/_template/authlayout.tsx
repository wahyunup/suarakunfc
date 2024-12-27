import { LayoutProps } from "@/components/@types/ui";
import Image from "next/image";
const Layout = ({ children, heading, subHeading }: LayoutProps) => {
  return (
    <>
      <section className="flex flex-col items-center gap-[52px]">
        <Image
            src="/logoSuarakuNfc.png"
            alt="Logo"
            width={193}
            height={54}
        />
        <div className="flex flex-col gap-[10px]">
          <h1 className="font-bold text-[20px]">{heading}</h1>
          {children}
        </div>
          <p>{!subHeading ? 'Belum memiliki akun?' : 'Sudah memiliki akun?' }<a href="" className="text-primary"> {!subHeading ? 'Daftar' : 'Masuk'}</a></p>
      </section>
    </>
  );
};

export default Layout;
