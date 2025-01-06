"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import SplashTemplate from "./template/SplashTemplate";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <SplashTemplate>
      <Image
        src="/images/suaraku_logo_pattern.png"
        alt="Logo"
        width={193}
        height={54}
      />

      <div className="flex items-center justify-center gap-2 w-[80%] absolute bottom-20">
        <Button
          size="medium"
          background="accent"
          onClick={() => {}}
          className="w-1/2"
          shadow
        >
          NFC
        </Button>

        <Button
          size="medium"
          background="transparent"
          onClick={() => router.push("/auth/login")}
          className="w-1/2"
        >
          Masuk
        </Button>
      </div>
    </SplashTemplate>
  );
};

export default HomePage;
