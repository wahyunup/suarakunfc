import { AuthTemplateProps } from "../_types/auth";
import Link from "next/link";
import Image from "next/image";

const AuthTemplate = ({ children, hasAcc, isTitle, isLinked }: AuthTemplateProps) => {
  return (
    <>
      <section className="flex flex-col items-center gap-[52px] w-full">
        <Image src="/images/suaraku_logo.png" alt="Logo" width={193} height={54} />
        <div className="flex flex-col gap-[10px] w-full">
          {isTitle && (
            <h1 className="font-bold text-[20px]">
              {!hasAcc ? "Masuk" : "Daftar"}
            </h1>
          )}
          {children}
        </div>

        {isLinked && (
          <p>
            {!hasAcc ? "Belum memiliki akun?" : "Sudah memiliki akun?"}
            <Link href={!hasAcc ? "/auth/register" : "/auth/login"} className="text-primary">
              {" "}
              {!hasAcc ? "Daftar" : "Masuk"}
            </Link>
          </p>
        )}
      </section>
    </>
  );
};

export default AuthTemplate;
