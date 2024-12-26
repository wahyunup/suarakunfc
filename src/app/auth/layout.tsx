import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: `SuarakuNFC | Auth`,
  description: "Generated by create next app",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <Image
        src="/images/suaraku_logo.png"
        alt="Logo"
        width={193}
        height={54}
        className="w-full max-w-[193px]"
      />

      {children}
    </div>
  );
};

export default AuthLayout;
